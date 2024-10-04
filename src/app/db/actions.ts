"use server";

import { prisma } from "@/lib/prisma";

interface EPGPLog {
  guild: string;
  region: string;
  min_ep: number;
  base_gp: number;
  roster: [string, number, number][];
  decay_p: number;
  loot: [number, string, string, number][];
  timestamp: number;
  extras_p: number;
  realm: string;
}
export async function parseEPGPLog(logContent: string) {
  const log: EPGPLog = JSON.parse(logContent);

  //get number of loot entries
  const lootEntries = log.loot.length;
  console.log("Number of loot entries: ", lootEntries);

  try {
    const server = await prisma.server.upsert({
      where: { name: log.realm, region: log.region },
      update: {},
      create: { name: log.realm, region: log.region },
    });
    // Create or update the guild
    const guild = await prisma.guild.upsert({
      where: { name: log.guild, serverId: server.id },
      update: {},
      create: { name: log.guild, serverId: server.id },
    });

    // Process roster (players and EPGP)
    for (const [playerName, ep, gp] of log.roster) {
      const [name, serverName] = playerName.split("-");

      const server = await prisma.server.upsert({
        where: { name: serverName },
        update: {},
        create: { name: serverName },
      });
      // Create or update the server

      // Create or update the player
      const player = await prisma.player.upsert({
        where: {
          name_serverId_guildId: {
            name,
            serverId: server.id,
            guildId: guild.id,
          },
        },
        update: {},
        create: { name, serverId: server.id, guildId: guild.id },
      });

      // Create EPGP entry
      // await prisma.epgp.create({
      //   data: {
      //     playerId: player.id,
      //     ep,
      //     gp,
      //     updatedAt: new Date(log.timestamp * 1000),
      //   },
      // });
      await prisma.epgp.upsert({
        where: {
          playerId: player.id,
        },
        update: {
          ep,
          gp,
          updatedAt: new Date(log.timestamp * 1000),
        },
        create: {
          playerId: player.id,
          ep,
          gp,
          updatedAt: new Date(log.timestamp * 1000),
        },
      });
      // await prisma.epgp.upsert({
      //   where: { playerId: player.id },
      //   update: { ep, gp, updatedAt: new Date(log.timestamp * 1000) },
      //   create: {
      //     playerId: player.id,
      //     ep,
      //     gp,
      //     updatedAt: new Date(log.timestamp * 1000),
      //   },
      // });
    }

    // Process loot
    for (const [timestamp, playerName, itemString, gpCost] of log.loot) {
      const [name, serverName] = playerName.split("-");

      const player = await prisma.player.findFirst({
        where: { name, server: { name: serverName } },
      });

      if (!player) {
        console.error(`Player not found: ${playerName}`);
        continue;
      }

      const itemId = parseInt(itemString.split(":")[1]); // Extract item ID from the item string

      // Create or update the item
      const item = await prisma.item.upsert({
        where: { itemId: itemId, itemString },
        update: {},
        create: { itemId: itemId, itemString },
      });

      // Create ItemsOwners entry
      await prisma.itemsOwners.create({
        data: {
          itemId: item.id,
          playerId: player.id,
          assignedAt: new Date(timestamp * 1000),
          gpCost,
        },
      });
    }

    console.log("EPGP log parsed and inserted into the database successfully");
  } catch (error) {
    console.error("Error parsing EPGP log:", error);
  } finally {
    await prisma.$disconnect();
  }
}

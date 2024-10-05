"use server";

import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { parseWowItemString } from "@/lib/utils/parseWowItemString";
import { BlizzAPI } from "blizzapi";
import { promises } from "dns";

const api = new BlizzAPI({
  region: "eu",
  clientId: process.env.WOW_CLIENT_ID,
  clientSecret: process.env.WOW_CLIENT_SECRET,
});

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
  // const lootEntries = log.loot.length;
  // console.log("Number of loot entries: ", lootEntries);

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

      interface WowItem {
        name: string;
        quality: { type: string };
      }

      interface WowIcon {
        assets: { value: string }[];
      }

      let item = await prisma.item.findFirst({
        where: { itemId: itemId, itemString },
      });

      if (!item) {
        const wowItem = (await api.query(
          "/data/wow/item/" + itemId + "?namespace=static-eu&locale=en_GB"
        )) as WowItem;

        const wowIcon = (await api.query(
          "/data/wow/media/item/" + itemId + "?namespace=static-eu&locale=en_GB"
        )) as WowIcon;

        item = await prisma.item.upsert({
          where: { itemId: itemId, itemString },
          update: {},
          create: {
            itemId: itemId,
            name: wowItem.name,
            itemString,
            quality: wowItem.quality.type,
            iconUrl: wowIcon.assets[0].value,
          },
        });
      }
      // const wowItem = (await api.query(
      //   "/data/wow/item/" + itemId + "?namespace=static-us&locale=en_GB"
      // )) as WowItem;
      // console.log(wowItem);

      // Create or update the item
      // if (wowItem.name !== undefined) {
      //   console.error(`Item not found: ${itemId}`);
      //   continue;
      // }
      // const itemStringParsed = parseWowItemString(itemString);
      // console.log(itemStringParsed);

      // Create ItemsOwners entry
      await prisma.itemsOwners.upsert({
        where: {
          playerId_itemId_assignedAt: {
            playerId: player.id,
            itemId: item.id,
            assignedAt: new Date(timestamp * 1000),
          },
        },
        update: {},
        create: {
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

export async function getEPGPGuild() {
  const data = await prisma.guild.findFirst({
    where: {
      name: "Alpha Orionis",
      server: { name: "Culte de la Rive noire" },
    },
    include: {
      server: true,
      players: {
        orderBy: [{ name: "asc" }],
        include: { server: true, epgp: true },
      },
    },
  });

  // console.log(data);

  return data;
}

export type GetEPGPGuild = Prisma.GuildGetPayload<{
  include: { server: true; players: { include: { epgp: true } } };
}>;

export async function getPlayer(playerId: number) {
  const data = await prisma.player.findFirst({
    where: { id: playerId },
    include: { epgp: true, loots: { include: { item: true } } },
  });

  return data;
}

export type GetPlayer = Prisma.PlayerGetPayload<{
  include: { epgp: true; loots: { include: { item: true } } };
}>;

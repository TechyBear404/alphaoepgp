"use server";

import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { parseWowItemString } from "@/lib/utils/parseWowItemString";
// import { BlizzAPI } from "blizzapi";
import { promises } from "dns";
import {
  getWowItem,
  getWowIcon,
  getWowRealm,
  getWowCharacterProfile,
  WowIcon,
  WowItem,
  WowRealm,
  WowCharacterProfile,
} from "@/lib/utils/wowApi";

// const api = new BlizzAPI({
//   region: "eu",
//   clientId: process.env.WOW_CLIENT_ID,
//   clientSecret: process.env.WOW_CLIENT_SECRET,
// });

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

export async function addRealm(serverName: string, region: string) {
    let response = await getWowRealm(serverName, region);

    const wowRealm = response.data as WowRealm;

    const realm = await prisma.realm.upsert({
      where: { id: wowRealm.id },
      update: {},
      create: { id: wowRealm.id, region, slug: wowRealm.slug },
    });

    for (const name in wowRealm.name) {
      await prisma.realmNameLocalisation.upsert({
        where: {
          realmId: realm.id,
          locale: Object.keys(name)[0],
        },
        update: {},
        create: {
          realmId: realm.id,
          locale: Object.keys(name)[0],
          name: Object.values(name)[0],
        },
      });
    }
    return realm;
}

async function addGuild(guildName: string, serverId: number) {
  const guild = await prisma.guild.upsert({
    where: { name: guildName, serverId },
    update: {},
    create: { name: guildName, serverId },
  });

  return guild;
}

async function addPlayer(name: string, serverId: number, slug: string, region: string ) {
  const wowCharacter = await getWowCharacterProfile(name, slug, region);
  const player = await prisma.player.upsert({
    where: { name_serverId_guildId: { name: playerName, serverId, guildId } },
    update: {},
    create: { name: playerName, serverId, guildId },
  });

  return player;
}

async function addEPGP(playerId: number, ep: number, gp: number, timestamp: number) {
  await prisma.epgp.upsert({
    where: { playerId },
    update: { ep, gp, updatedAt: new Date(timestamp * 1000) },
    create: { playerId, ep, gp, updatedAt: new Date(timestamp * 1000) },
  });
}

export async function parseEPGPLog(logContent: string) {
  const log: EPGPLog = JSON.parse(logContent);
  // let response = { success: false, message: "" };

  try {
    const server = await addRealm(log.realm, log.region);
    // Create or update the guild
    const guild = await addGuild(log.guild, server.id);
    // Process roster (players and EPGP)
    for (const [playerName, ep, gp] of log.roster) {
      const [name, serverName] = playerName.split("-");

      // Create or update the server
      const server = await addRealm(serverName, log.region);

      // Create or update the player
      const player = await addPlayer(name, server.id, server.slug, server.region);

      await addEPGP(player.id, ep, gp, log.timestamp);
    }

    // Process loot
    for (const [timestamp, playerName, itemString, gpCost] of log.loot) {
      const [name, serverName] = playerName.split("-");


      const itemId = parseInt(itemString.split(":")[1]); // Extract item ID from the item string

      let item = await prisma.item.findFirst({
        where: { id: itemId },
      });

      let variant = await prisma.itemVariant.findFirst({
        where: { itemId, itemString },
      });

      if (!item) {
        const wowItemResponse = await getWowItem(itemId);
        const wowIconResponse = await getWowIcon(itemId);

        if (wowItemResponse.success || wowIconResponse.success) {
          let wowItem = wowItemResponse.data as WowItem;
          let wowIcon = wowIconResponse.data as WowIcon;
          item = await prisma.item.upsert({
            where: { id: itemId },
            update: {},
            create: {
              id: itemId,
              quality: wowItem.quality.type,
              iconUrl: wowIcon.assets[0].value,
            },
          });
        }
      }

      if (item && !variant) {
        variant = await prisma.itemVariant.upsert({
          where: { itemId: item?.id, itemString } ,
          update: {},
          create: {
            itemId: item.id,
            itemString,
          },
        });
      }

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
      }
    }

    console.log("EPGP log parsed and inserted into the database successfully");
    response = {
      success: true,
      message: "EPGP log parsed and inserted into the database successfully",
    };
  } catch (error) {
    console.error("Error parsing EPGP log:", error);
    response = { success: false, message: "Error parsing EPGP log" };
  } finally {
    await prisma.$disconnect();
    return response;
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

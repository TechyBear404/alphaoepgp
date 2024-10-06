"use server";
import { BlizzAPI } from "blizzapi";

export interface WowItem {
  name: string;
  quality: {
    type: string;
    name: {
      en_GB: string;
      fr_FR: string;
    };
  };
}

export interface WowIcon {
  assets: { value: string }[];
}

interface Response {
  success: boolean;
  data: WowItem | WowIcon | WowRealm | undefined;
}

const api = new BlizzAPI({
  region: "eu",
  clientId: process.env.WOW_CLIENT_ID,
  clientSecret: process.env.WOW_CLIENT_SECRET,
});

export async function getWowItem(itemId: number) {
  let response: Response = { success: false, data: undefined };

  try {
    const wowItem = (await api.query(
      "/data/wow/item/" + itemId + "?namespace=static-eu"
    )) as WowItem;
    response = { success: true, data: wowItem };
  } catch (error) {
    console.error(error);
  }
  console.log(response);

  return response;
}

export async function getWowIcon(itemId: number) {
  let response: Response = { success: false, data: undefined };

  try {
    const wowIcon = (await api.query(
      "/data/wow/media/item/" + itemId + "?namespace=static-eu&locale=en_GB"
    )) as WowIcon;
    response = { success: true, data: wowIcon };
  } catch (error) {
    console.error(error);
  }
  console.log(response);
  return response;
}

export interface WowRealm {
  id: number;
  slug: string;
  key: {
    href: string;
  };
  name: {
    en_GB: string;
    fr_FR: string;
  };
}

interface Realms {
  realms: WowRealm[];
}

export async function cleanName(name: string) {
  const lowercase: string = name.toLowerCase();

  const cleanedSpaces: string = lowercase.replace(/\s/g, "");

  const cleanHyphens: string = cleanedSpaces.replace(/-/g, "");

  return cleanHyphens;
}

export async function getWowRealm(name: string, region: string = "eu") {
  //   console.log(cleaned);

  let response: Response = { success: false, data: undefined };
  try {
    let realms = (await api.query(
      //   "/data/wow/realm/index?namespace=dynamic-eu"
      `/data/wow/realm/index?namespace=dynamic-${region.toLowerCase()}`
    )) as Realms;

    for (const realm of realms.realms) {
      if ((await cleanName(realm.slug)) === (await cleanName(name))) {
        console.log(realm);
        response = { success: true, data: realm };
      }
    }
  } catch (error) {
    response = { success: false, data: undefined };
  } finally {
    return response;
  }
}

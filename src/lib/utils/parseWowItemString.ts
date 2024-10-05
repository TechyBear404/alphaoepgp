// utils/wowItemParser.ts

interface WowItemParams {
  type?: string;
  itemId?: number;
  enchant?: number;
  gems?: number[];
  suffixId?: number;
  uniqueId?: number;
  level?: number;
  specializationId?: number;
  upgradeId?: number;
  instanceDifficulty?: number;
  numBonusIds?: number;
  bonusIds?: number[];
  upgradeValue?: number;
}

export interface WowItem {
  href: string;
  dataWowhead: string;
}

export function parseWowItemString(itemString: string): WowItem {
  try {
    const params: WowItemParams = {};

    let parts = itemString.split(":");

    params.type = parts[0];
    params.itemId = Number(parts[1]);
    params.enchant = Number(parts[2]);
    params.gems = [
      Number(parts[3]),
      Number(parts[4]),
      Number(parts[5]),
      Number(parts[6]),
    ];
    params.suffixId = Number(parts[7]);
    params.uniqueId = Number(parts[8]);
    params.level = Number(parts[9]);
    params.specializationId = Number(parts[10]);
    params.upgradeId = Number(parts[11]);
    params.instanceDifficulty = Number(parts[12]);
    params.numBonusIds = Number(parts[13]);
    params.bonusIds = [];

    for (let i = 14; i < 14 + params.numBonusIds; i++) {
      params.bonusIds.push(Number(parts[i]));
    }

    params.upgradeValue = Number(parts[14 + params.numBonusIds]);

    // console.log(params);

    let item = { href: "", dataWowhead: "" };
    item.href = `https://www.wowhead.com/item=${params.itemId}`;
    item.dataWowhead = `lvl=${params.level}&bonus=${params.bonusIds
      .map((id) => id.toString())
      .join(":")}`;

    // console.log(item);

    return item;
  } catch (error) {
    console.error(error);
    return { href: "", dataWowhead: "" };
  }
}

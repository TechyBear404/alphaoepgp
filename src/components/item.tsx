// "use client";
import {
  parseWowItemString,
  type WowItem,
} from "@/lib/utils/parseWowItemString";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Item(props: {
  item: { name: string; quality: string; itemString: string; iconUrl: string };
}) {
  // const [item, setItem] = useState<WowItem | null>(null);

  const item = parseWowItemString(props.item.itemString);
  const itemClass = (quality: string) => {
    switch (quality) {
      case "HEIRLOOM":
        return "q7";
      case "ARTIFACT":
        return "q6";
      case "LEGENDARY":
        return "q5";
      case "EPIC":
        return "q4";
      case "RARE":
        return "q3";
      case "UNCOMMON":
        return "q2";
      case "COMMON":
        return "q1";
      case "POOR":
        return "q0";
      default:
        return "q1";
    }
  };
  // useEffect(() => {
  //   setItem(parsedItem);
  // }, [props.item]);

  return (
    <>
      {item?.href && (
        <a
          href={item.href}
          className={itemClass(props.item.quality)}
          data-wowhead={item.dataWowhead}
        >
          {
            <div className="flex gap-2 items-start">
              <Image
                src={props.item.iconUrl}
                alt=""
                width={50}
                height={50}
                className="h-8 w-8"
              />
              <div>
                <div>{props.item.name || "Unknow item"}</div>
              </div>
            </div>
          }
        </a>
      )}
    </>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { getWowIcon, getWowItem, getWowRealm } from "@/lib/utils/wowApi";

export default function Test() {
  return (
    <main className="flex justify-center pt-24 pb-10 grow">
      <div className="flex gap-4">
        <Button onClick={() => getWowItem(221023)}>Get Wow Item</Button>
        <Button onClick={() => getWowIcon(221023)}>Get Wow Icon</Button>
        <Button onClick={() => getWowRealm("Culte de la Rive noire")}>
          Get Wow Realm
        </Button>
        <Button onClick={() => getWowRealm("Culte-de-la-Rive-noire")}>
          Get Wow Realm
        </Button>
      </div>
    </main>
  );
}

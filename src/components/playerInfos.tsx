// "use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { getPlayer, GetPlayer } from "@/lib/utils/db/actions";
import Item from "@/components/item";

export async function PlayerInfos(props: { playerId: number }) {
  const player = await getPlayer(props.playerId);

  return (
    <Dialog>
      <DialogTrigger>{player?.name}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl">{player?.name}</DialogTitle>
          <DialogDescription>
            <div className="flex gap-6 text-lg">
              <div>
                <span>EP:</span>
                <span>{player?.epgp?.ep}</span>
              </div>
              <div>
                <span>GP:</span>
                <span>{player?.epgp?.gp}</span>
              </div>
              <div>
                <span>Ratio:</span>
                <span>
                  {(
                    Math.round((player?.epgp?.ep! / player?.epgp?.gp!) * 100) /
                    100
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </DialogDescription>
          <Card>
            {/* <CardHeader>
              <CardTitle>player name</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader> */}
            <CardContent className="flex flex-col gap-2 p-6">
              {player?.loots &&
                player?.loots.map((loot, index) => (
                  <div className="flex gap-4" key={index}>
                    <Item item={loot.item} />
                    <span>{loot.gpCost} GP</span>
                  </div>
                ))}
            </CardContent>
          </Card>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

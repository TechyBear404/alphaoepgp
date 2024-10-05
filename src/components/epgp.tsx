// "use client";

import { getEPGPGuild } from "@/lib/utils/db/actions";

import type { GetEPGPGuild } from "@/lib/utils/db/actions";

import { PlayerInfos } from "@/components/playerInfos";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { useEffect, useState } from "react";

export default async function Epgp() {
  // const [epgpList, setEpgpList] = useState<GetEPGPGuild | null>(null);

  // const epgp = getEPGPGuild();
  // console.log(epgpList);
  const updatedEpgp = await getEPGPGuild();
  // useEffect(() => {
  //   const updateEpgp = async () => {
  //     setEpgpList(updatedEpgp);
  //   };

  //   updateEpgp();
  // }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Epgp</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nom</TableHead>
              <TableHead className="text-right">EP</TableHead>
              <TableHead className="text-right">GP</TableHead>
              <TableHead className="text-right">Ratio</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {updatedEpgp &&
              updatedEpgp.players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell className="font-medium">
                    <PlayerInfos playerId={player.id} />
                  </TableCell>
                  <TableCell className="text-right">
                    {player.epgp?.ep}
                  </TableCell>
                  <TableCell className="text-right">
                    {player.epgp?.gp}
                  </TableCell>

                  <TableCell className="text-right">
                    {player.epgp?.ep &&
                      player.epgp?.gp &&
                      (
                        Math.round((player.epgp?.ep / player.epgp?.gp) * 100) /
                        100
                      ).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}

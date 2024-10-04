"use client";

import { getEPGPGuild } from "@/app/db/actions";

import type { GetEPGPGuild } from "@/app/db/actions";

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
import { useEffect, useState } from "react";

export default function Epgp() {
  const [epgpList, setEpgpList] = useState<GetEPGPGuild | null>(null);

  // const epgp = getEPGPGuild();
  // console.log(epgpList);
  useEffect(() => {
    const updateEpgp = async () => {
      const updatedEpgp = await getEPGPGuild();
      setEpgpList(updatedEpgp);
    };

    updateEpgp();
  }, []);

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
              <TableHead>EP</TableHead>
              <TableHead>GP</TableHead>
              <TableHead className="text-right">PR</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {epgpList &&
              epgpList.players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell>{player.epgp?.ep}</TableCell>
                  <TableCell>{player.epgp?.gp}</TableCell>

                  <TableCell className="text-right">
                    {player.epgp?.ep &&
                      player.epgp?.gp &&
                      Math.round((player.epgp?.ep / player.epgp?.gp) * 100) /
                        100}
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

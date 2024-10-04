"use client";

import Image from "next/image";
import ImportParse from "@/components/importParse";
import Epgp from "@/components/epgp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <Tabs defaultValue="epgp" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="epgp">Epgp</TabsTrigger>
        <TabsTrigger value="importParse">Import</TabsTrigger>
      </TabsList>
      <TabsContent value="epgp">
        <Epgp />
      </TabsContent>
      <TabsContent value="importParse">
        <ImportParse />
      </TabsContent>
    </Tabs>

    // <div className="">
    //   <main className="">
    //     <ImportParse />
    //     <PlayersList />
    //   </main>
    // </div>
  );
}

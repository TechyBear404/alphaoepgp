// "use client";

import Image from "next/image";
import ImportParse from "@/components/importParse";
import Epgp from "@/components/epgp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Item from "@/components/item";

export default function Home() {
  return (
    <main className="flex justify-center pt-24 pb-10 pl-[calc(100vw - 100%)] grow">
      <Tabs defaultValue="epgp" className="max-w-xl w-full">
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
      {/* <Item item="" /> */}
    </main>
  );
}

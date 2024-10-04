import { useState } from "react";
import { parseEPGPLog } from "@/app/db/actions";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ImportParse() {
  const [newParse, setNewParse] = useState("");
  const date = new Date();
  return (
    <div className="">
      <main className="">
        <Card>
          <CardHeader>
            <CardTitle>Import Parse</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              className=""
              value={newParse}
              onChange={(e) => setNewParse(e.target.value)}
            ></Textarea>
          </CardContent>
          <CardFooter>
            <Button onClick={() => parseEPGPLog(newParse)}>Import</Button>
          </CardFooter>
        </Card>

        {/* <h1 className=""></h1>
        <Textarea
          className=""
          value={newParse}
          onChange={(e) => setNewParse(e.target.value)}
        ></Textarea> */}
      </main>
    </div>
  );
}

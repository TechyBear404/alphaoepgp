"use client";

import { MouseEvent, useState } from "react";
import { parseEPGPLog } from "@/lib/utils/db/actions";

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
import { toast } from "sonner";
import { dbSuccessMessages, dbErrorsMessages } from "@/lib/static/messages";

export default function ImportParse() {
  const [newParse, setNewParse] = useState("");
  const [loading, setLoading] = useState(false);
  const date = new Date();

  const onMouseClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newParse === "") return;
    setLoading(true);
    parseEPGPLog(newParse).then((rep) => {
      setLoading(false);
      if (rep.success === false) {
        const randomMessage =
          dbErrorsMessages[Math.floor(Math.random() * dbErrorsMessages.length)];
        toast.error(randomMessage);
      } else {
        const randomMessage =
          dbSuccessMessages[
            Math.floor(Math.random() * dbSuccessMessages.length)
          ];
        toast.success(randomMessage);
      }
    });
  };
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
            <Button onClick={(e) => onMouseClick(e)} disabled={loading}>
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  />
                  <span>Importing...</span>
                </div>
              ) : (
                "Import"
              )}
            </Button>
            {/* <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Importing...
              </span> */}
            {/* </div> */}
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

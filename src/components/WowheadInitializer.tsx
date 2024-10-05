// src/components/WowheadInitializer.tsx
"use client";
import Script from "next/script";
import { useEffect } from "react";

export function WowheadInitializer() {
  useEffect(() => {
    const initWowhead = () => {
      if (typeof (window as any).whTooltips === "undefined") {
        (window as any).whTooltips = {
          colorLinks: true,
          iconizeLinks: true,
          renameLinks: true,
        };
      }
    };

    initWowhead();
  }, []);

  return (
    <>
      <Script
        src="https://wow.zamimg.com/js/tooltips.js"
        strategy="afterInteractive"
      />
    </>
  );
}

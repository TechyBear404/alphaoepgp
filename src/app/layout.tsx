import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { WowheadInitializer } from "@/components/WowheadInitializer";

import Nav from "@/components/nav";
import Image from "next/image";
import Script from "next/script";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col">
        <WowheadInitializer />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Image
            src="/images/ao_bg.jpg"
            alt=""
            width="1024"
            height="1024"
            className="w-full h-full fixed bottom-0 left-0 z-[-1] object-cover brightness-50"
          />
          <header>
            <Nav />
          </header>
          {children}
          <footer className="bg-slate-950 bg-opacity-50 backdrop-blur-xl z-10 flex justify-center p-2">
            created by <b className="pl-1">Draha</b>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

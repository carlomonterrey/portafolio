"use client"
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";

import { usePathname } from "next/navigation";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"],
  weight:["100","200","300","400","400","500","600","700","800"],
  variable:'--font-jetbrainsMono'
 });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname();
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header>
          <PageTransition children={children}>
            <div key={pathname}></div>

          </PageTransition>
        </Header>
        {children}</body>
    </html>
  );
}

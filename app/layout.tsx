"use client";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { usePathname } from "next/navigation";
import { PageTransition } from "@/components/ui/PageTransition";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <body >
       <main className="flex flex-col">
       <Header>
         
         </Header>
{/*          <PageTransition>
 */}             <div key={pathname}>{children}</div> {/* Renderiza 'children' aquí dentro de PageTransition */}
{/*            </PageTransition>
 */}       </main>
      </body>
    </html>
  );
}
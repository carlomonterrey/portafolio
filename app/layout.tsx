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
       <Header/>
         <PageTransition>
         {children}
         </PageTransition>
    
      </body>
    </html>
  );
}
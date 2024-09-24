"use client";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { usePathname } from "next/navigation";
import { PageTransition } from "@/components/ui/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
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
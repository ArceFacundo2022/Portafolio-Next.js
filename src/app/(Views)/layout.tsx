import type { Metadata } from "next";
import "./globals.css";
import { advent_Pro, chakra, poppins, vollkorn } from "../lib/Components/Fonts";

export const metadata: Metadata = {
  title: "Portafolio - Arce Facundo - Software Developer",
  description: "Portafolio del desarrollador de software Arce Facundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${vollkorn.variable} ${advent_Pro.variable} ${chakra.variable} w-full font-Poppins `}>{children}</body>
    </html>
  );
}

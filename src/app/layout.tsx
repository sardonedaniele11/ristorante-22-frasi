import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fbf8f2",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "22 Frasi | Specialità Gastronomiche Pugliesi & Caffetteria - Bari",
  description:
    "22 Frasi - Specialità Gastronomiche Pugliesi & Caffetteria a Bari (Via Putignani, 144). Primi caldi della tradizione, formule pausa pranzo da 7€, rosticceria, secondi di carne e pesce, caffetteria d'autore. Prenota su WhatsApp.",
  keywords: [
    "22 Frasi",
    "22 Frasi Bari",
    "Specialità Gastronomiche Pugliesi",
    "Caffetteria Bari",
    "Formule Pranzo Bari",
    "Riso patate e cozze Bari",
    "Rosticceria barese",
    "Via Putignani Bari",
  ],
  icons: {
    icon: "/images/logo-icon.svg",
  },
  other: {
    "color-scheme": "light only",
    "supported-color-schemes": "light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body
        className="min-h-full flex flex-col bg-[#fbf8f2] text-[#26170d]"
        style={{ colorScheme: "light" }}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

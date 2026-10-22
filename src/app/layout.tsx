import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  themeColor: "#07130e",
};

export const metadata: Metadata = {
  title: "22 Frasi | Specialità Gastronomiche Pugliesi & Caffetteria - Bari",
  description:
    "22 Frasi - Specialità Gastronomiche Pugliesi & Caffetteria a Bari (Via Putignani, 144). Primi caldi della tradizione, formule pausa pranzo da 5€, rosticceria, secondi di carne e pesce, caffetteria d'autore. Prenota su WhatsApp.",
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

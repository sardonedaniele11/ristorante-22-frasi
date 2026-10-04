import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "22 Frasi | Il bistrò di Puglia - Specialità gastronomiche pugliesi",
  description:
    "22 Frasi - Il bistrò di Puglia. Specialità gastronomiche pugliesi, orecchiette, burrata fresca, capocollo di Martina Franca, bombette e grandi vini DOC. Prenota direttamente su WhatsApp.",
  keywords: [
    "22 Frasi",
    "Il bistrò di Puglia",
    "Specialità gastronomiche pugliesi",
    "Bistrò pugliese",
    "Burrata",
    "Orecchiette",
    "Capocollo",
    "Bombette",
    "Prenotazione Tavolo WhatsApp",
  ],
  icons: {
    icon: "/logo.jpg",
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

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
  title: "22 Frasi | Ristorante & Cocktail Bar",
  description:
    "Benvenuti al Ristorante 22 Frasi. Cucina contemporanea, sapori autentici, signature cocktail e un'atmosfera elegante e conviviale. Prenota direttamente su WhatsApp.",
  keywords: [
    "22 Frasi",
    "Ristorante 22 Frasi",
    "Ristorante",
    "Cocktail Bar",
    "Prenotazione Tavolo WhatsApp",
    "Cucina Italiana",
  ],
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

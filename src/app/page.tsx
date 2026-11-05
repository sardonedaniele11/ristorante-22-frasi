import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactAndHours from "@/components/ContactAndHours";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

export const metadata: Metadata = {
  title: "22 Frasi | Cucina Caratteristica Pugliese - Bari Centro",
  description:
    "Bistrò tipico barese in Via Putignani, 144. Tradizione pugliese, giardino interno dehor, formule pranzo e carni alla brace.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#071712] text-neutral-100 flex flex-col font-sans selection:bg-[#d89d42] selection:text-[#07130e]">
      <Navbar />
      <main className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <ContactAndHours />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

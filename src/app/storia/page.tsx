import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import ManifestoSection from "@/components/ManifestoSection";

export const metadata: Metadata = {
  title: "Storia di 22 Frasi | Il Manifesto del Bistrò a Bari",
  description:
    "Scopri perché ci chiamiamo 22 Frasi: il manifesto autentico, l'amore per la condivisione e la tradizione culinaria pugliese in Via Putignani.",
};

export default function StoriaPage() {
  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#26170d] flex flex-col font-sans selection:bg-[#d89d42] selection:text-white">
      <Navbar />

      <main className="flex-1 pb-16 lg:pb-0">
        <ManifestoSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

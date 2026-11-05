import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "Vivi l'Esperienza 22 Frasi | Video Reel e Galleria Foto",
  description:
    "Guarda i video delle nostre bombette artigianali, delle creazioni dello chef e tutte le foto dei piatti e del cortile dehor di 22 Frasi a Bari.",
};

export default function EsperienzaPage() {
  return (
    <div className="min-h-screen bg-[#071712] text-neutral-100 flex flex-col font-sans selection:bg-[#d89d42] selection:text-[#07130e]">
      <Navbar />

      <main className="flex-1 pb-16 lg:pb-0">
        <VideoSection />
        <GallerySection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

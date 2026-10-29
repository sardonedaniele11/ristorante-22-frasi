import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LunchFormulas from "@/components/LunchFormulas";
import CompleteMenuSection from "@/components/CompleteMenuSection";
import ManifestoSection from "@/components/ManifestoSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactAndHours from "@/components/ContactAndHours";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#071712] text-neutral-100 flex flex-col font-sans selection:bg-[#d89d42] selection:text-[#07130e]">
      <Navbar />
      <main className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <LunchFormulas />
        <CompleteMenuSection />
        <ManifestoSection />
        <VideoSection />
        <GallerySection />
        <ReviewsSection />
        <ContactAndHours />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

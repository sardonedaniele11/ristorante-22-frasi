import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import InstagramFeed from "@/components/InstagramFeed";
import SocialConnect from "@/components/SocialConnect";
import ContactAndHours from "@/components/ContactAndHours";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07130e] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-[#07130e]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Specialties />
        <About />
        <InstagramFeed />
        <Gallery />
        <SocialConnect />
        <ContactAndHours />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

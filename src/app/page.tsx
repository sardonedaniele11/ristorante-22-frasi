import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import SocialConnect from "@/components/SocialConnect";
import ContactAndHours from "@/components/ContactAndHours";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-neutral-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <SocialConnect />
        <ContactAndHours />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

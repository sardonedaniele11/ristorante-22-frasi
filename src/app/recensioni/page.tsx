import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import { siteConfig } from "@/config/site";
import { TripAdvisorIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recensioni TripAdvisor & Foto | 22 Frasi - Cucina Caratteristica Pugliese (Bari)",
  description:
    "Scopri cosa dicono di noi i clienti su TripAdvisor (5.0/5) e guarda tutte le foto dei piatti tipici e del nostro locale a Bari in Via Putignani.",
};

export default function RecensioniPage() {
  return (
    <div className="min-h-screen bg-[#071712] text-neutral-100 flex flex-col font-sans selection:bg-[#d89d42] selection:text-[#07130e]">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb / Top bar */}
        <div className="bg-[#0a1f19] border-b border-[#1b4d3e]/60 py-4 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#a3c9b8] hover:text-[#d89d42] transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Torna alla Homepage</span>
            </Link>

            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#00aa6c] animate-pulse" />
              <span>TripAdvisor: Valutazione 5.0 / 5.0</span>
            </div>
          </div>
        </div>

        {/* Page Hero */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0d2821] to-[#071712] border-b border-[#1b4d3e] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00aa6c]/15 border border-[#00aa6c]/40 text-[#00e693] text-xs sm:text-sm uppercase tracking-wider font-bold mb-6">
              <TripAdvisorIcon className="w-4 h-4" />
              <span>Certificato di Eccellenza TripAdvisor</span>
            </div>

            <h1 className="text-3xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Le Recensioni di <span className="text-[#d89d42] italic">22 Frasi</span>
            </h1>

            <p className="text-base sm:text-xl text-[#a3c9b8] max-w-2xl mx-auto font-light leading-relaxed mb-8">
              La voce autentica di chi ha gustato il nostro riso patate e cozze, le orecchiette con le cime di rapa, le carni alla brace e le formule pranzo in Via Putignani.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.contact.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00aa6c] hover:bg-[#00925d] text-white font-bold text-sm shadow-xl shadow-[#00aa6c]/30 hover:scale-105 transition-all"
              >
                <TripAdvisorIcon className="w-5 h-5 text-white" />
                <span>Visualizza Pagina TripAdvisor</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  "Ciao! Ho visto le vostre recensioni e vorrei prenotare un tavolo da 22 Frasi a Bari."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl hover:scale-105 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Prenota su WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Full Gallery with Food vs Location tabs */}
        <GallerySection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

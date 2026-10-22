import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import ReviewsSection from "@/components/ReviewsSection";
import Gallery from "@/components/Gallery";
import { siteConfig } from "@/config/site";
import { TripAdvisorIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { Star, ShieldCheck, Award, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recensioni TripAdvisor & Foto | 22 Frasi - Il bistrò di Puglia (Bari)",
  description:
    "Scopri cosa dicono di noi i clienti su TripAdvisor (5.0/5) e guarda tutte le foto dei piatti tipici e del nostro bistrò a Bari in Via Putignani.",
};

export default function RecensioniPage() {
  return (
    <div className="min-h-screen bg-[#07130e] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-[#07130e]">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb / Top bar */}
        <div className="bg-[#0a1b14] border-b border-[#1b4d3e]/60 py-4 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#a3c9b8] hover:text-amber-300 transition-colors font-medium"
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
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0d221a] to-[#07130e] border-b border-[#1b4d3e] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00aa6c]/15 border border-[#00aa6c]/40 text-[#00e693] text-xs sm:text-sm uppercase tracking-wider font-bold mb-6">
              <TripAdvisorIcon className="w-4 h-4" />
              <span>Certificato di Eccellenza TripAdvisor</span>
            </div>

            <h1 className="text-3xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Le Recensioni di <span className="text-amber-300 italic">22 Frasi</span>
            </h1>

            <p className="text-base sm:text-xl text-[#a3c9b8] max-w-2xl mx-auto font-light leading-relaxed mb-8">
              La voce autentica di chi ha gustato il nostro riso patate e cozze, le orecchiette con le rape, i gran taglieri Bedogni e le nostre rinomate formule pranzo.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.contact.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00aa6c] hover:bg-[#00925d] text-white font-bold text-sm shadow-xl shadow-[#00aa6c]/30 hover:scale-105 transition-all"
              >
                <TripAdvisorIcon className="w-5 h-5 text-white" />
                <span>Visualizza la Nostra Pagina Ufficiale TripAdvisor</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  "Ciao! Ho visto le vostre recensioni e vorrei prenotare un tavolo da 22 Frasi a Bari."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl hover:scale-105 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Prenota su WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Reviews Section with dynamic filter and cards */}
        <ReviewsSection />

        {/* Full Gallery Section */}
        <Gallery />

        {/* Highlights / Why people love 22 Frasi */}
        <section className="py-20 bg-[#0d221a]/60 border-t border-[#1b4d3e]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
                Perché i Clienti ci Danno <span className="text-amber-300 italic">5 Stelle</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a3c9b8]">
                Tre pilastri che rendono unica l&apos;esperienza da 22 Frasi - Il bistrò di Puglia a Bari.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-[#07130e] border border-[#1b4d3e] text-center">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  🍲
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-2">
                  Tradizione Barese Autentica
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Riso, patate e cozze cucinato secondo l&apos;antica ricetta barese, orecchiette fresche artigianali e materie prime d&apos;eccellenza.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#07130e] border border-[#1b4d3e] text-center">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  💶
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-2">
                  Formule Pranzo da 5€
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Il miglior rapporto qualità-prezzo di Bari centro: un primo caldo espresso con acqua e coperto inclusi a soli 5€.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#07130e] border border-[#1b4d3e] text-center">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  ❤️
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-2">
                  Accoglienza del Sud
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Un bistrò familiare dove ogni ospite è accolto con il sorriso, attenzioni autentiche e l&apos;ospitalità calorosa della nostra terra.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

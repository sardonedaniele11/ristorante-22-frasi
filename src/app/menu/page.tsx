import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import LunchFormulas from "@/components/LunchFormulas";
import { siteConfig } from "@/config/site";
import { FileText, Download, Sparkles, ArrowRight, Clock, Utensils } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Menù e Formule Pranzo | 22 Frasi - Bari",
  description:
    "Scopri le formule pranzo da 7€ e scarica i menù ufficiali in PDF del bistrò 22 Frasi a Bari in Via Putignani.",
};

export default function MenuPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Ciao! Vorrei prenotare un tavolo da 22 Frasi a Bari."
  )}`;

  return (
    <div className="min-h-screen bg-[#071712] text-neutral-100 flex flex-col font-sans selection:bg-[#d89d42] selection:text-[#07130e]">
      <Navbar />

      <main className="flex-1 pb-16 lg:pb-0">
        {/* Formule Pranzo in primo piano */}
        <LunchFormulas />

        {/* Sezione PDF Ufficiali del Menù (Senza elenco piatti visibile) */}
        <section className="py-12 sm:py-20 bg-[#0a1f19] text-neutral-100 relative border-t border-[#1b4d3e]/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b4d3e]/60 border border-[#2a6d58] text-[#d89d42] text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-3 shadow-sm">
                <FileText className="w-3.5 h-3.5 text-[#d89d42]" />
                <span>Documenti Ufficiali</span>
              </div>

              <h2 className="text-2xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-3">
                I Nostri <span className="text-[#d89d42] italic">Menù in PDF</span>
              </h2>

              <p className="text-xs sm:text-base text-[#c2dfd3] font-light leading-relaxed">
                Visualizza e scarica i menù originali completi di tutti i piatti della tradizione pugliese, carni alla brace e carta dei vini.
              </p>
            </div>

            {/* 2 Big PDF Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-3xl mx-auto mb-10">
              {/* Card 1: Flyer Pranzo & Specialità */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#07130e] border border-[#2a6d58] hover:border-[#d89d42] transition-all shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#8c1d28]/20 border border-[#8c1d28]/50 flex items-center justify-center text-[#8c1d28] mb-4 group-hover:scale-105 transition-transform">
                    <FileText className="w-6 h-6 text-rose-300" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#8c1d28] font-bold block mb-1">
                    Flyer &amp; Pranzo
                  </span>
                  <h3 className="text-lg sm:text-2xl font-serif font-bold text-white mb-2">
                    Flyer Ufficiale 22 Frasi
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3c9b8] font-light leading-relaxed mb-6">
                    Formule veloci della pausa pranzo da 7€ a 13€, primi caldi della tradizione e promozioni del bistrò.
                  </p>
                </div>

                <a
                  href="/docs/22-FRASI-Flyer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#8c1d28] hover:bg-[#a12330] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#8c1d28]/30 transition-all text-center"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Apri / Scarica Flyer PDF</span>
                </a>
              </div>

              {/* Card 2: Menù Tovaglietta Sera */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#07130e] border border-[#2a6d58] hover:border-[#d89d42] transition-all shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#d89d42]/20 border border-[#d89d42]/50 flex items-center justify-center text-[#d89d42] mb-4 group-hover:scale-105 transition-transform">
                    <FileText className="w-6 h-6 text-[#d89d42]" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#d89d42] font-bold block mb-1">
                    Cena &amp; Tovaglietta
                  </span>
                  <h3 className="text-lg sm:text-2xl font-serif font-bold text-white mb-2">
                    Menù Completo Sera
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3c9b8] font-light leading-relaxed mb-6">
                    Antipasti tipici, taglieri di salumi e burrate, primi e secondi di carne e mare, carta dei vini e dolci.
                  </p>
                </div>

                <a
                  href="/docs/22-Frasi-Menu-Sera.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#d89d42] hover:bg-[#e6ab4e] text-[#07130e] font-bold text-xs sm:text-sm shadow-lg shadow-[#d89d42]/20 transition-all text-center"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Apri / Scarica Menù Sera PDF</span>
                </a>
              </div>
            </div>

            {/* Bottom Reservation Callout */}
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d221a] via-[#091a13] to-[#0d221a] border border-[#1b4d3e] max-w-xl mx-auto">
              <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-2">
                Vuoi prenotare un tavolo per pranzo o cena?
              </h4>
              <p className="text-xs text-[#a3c9b8] mb-4">
                Prenotazione rapida direttamente su WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-950/70 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Prenota su WhatsApp</span>
              </a>
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

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import { siteConfig } from "@/config/site";
import { FileText, Download, Clock, ArrowRight, ShieldAlert, Info } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menù Ufficiale in PDF | 22 Frasi - Bari",
  description:
    "Scarica e visualizza i menù originali in PDF del bistrò 22 Frasi a Bari: flyer delle formule pranzo e menù completo serale.",
};

export default function MenuPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Ciao! Vorrei prenotare un tavolo da 22 Frasi a Bari."
  )}`;

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#26170d] flex flex-col font-sans selection:bg-[#d89d42] selection:text-white">
      <Navbar />

      <main className="flex-1 pb-16 lg:pb-0">
        {/* Intestazione Pagina Menù */}
        <section className="py-10 sm:py-16 bg-gradient-to-b from-[#fbf8f2] via-[#f7f1e5] to-[#f4ecdf] border-b border-[#dfcfb9] text-center px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
              <FileText className="w-3.5 h-3.5 text-[#8c1d28]" />
              <span>Documenti Ufficiali 22 Frasi</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#26170d] tracking-tight mb-3">
              I Nostri <span className="text-[#8c1d28] italic">Menù in PDF</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#6d5644] max-w-xl mx-auto font-light leading-relaxed mb-4">
              Visualizza o scarica comodamente i due documenti completi del bistrò: il flyer della pausa pranzo e la tovaglietta con tutte le specialità della cena.
            </p>

            <Link
              href="/#formule-pranzo"
              className="inline-flex items-center gap-1.5 text-xs text-[#8c1d28] hover:text-[#5a1017] font-semibold underline underline-offset-4"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Vedi le Formule Pranzo veloci nella Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* 2 Big PDF Cards */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
              {/* Card 1: Flyer Pranzo & Specialità */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#dfcfb9] hover:border-[#8c1d28] transition-all shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#8c1d28]/10 border border-[#8c1d28]/25 flex items-center justify-center text-[#8c1d28] mb-4 group-hover:scale-105 transition-transform">
                    <FileText className="w-6 h-6 text-[#8c1d28]" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#8c1d28] font-bold block mb-1">
                    Pranzo • Flyer
                  </span>
                  <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#26170d] mb-2">
                    Flyer Ufficiale 22 Frasi
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6d5644] font-light leading-relaxed mb-6">
                    Tutte le formule pranzo da 7€ a 13€, piatti caldi espressi, opzioni asporto e le offerte dedicate alla pausa lavoro.
                  </p>
                </div>

                <a
                  href="/docs/22-FRASI-Flyer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#8c1d28] hover:bg-[#a12330] text-white font-bold text-xs sm:text-sm shadow-sm transition-all text-center"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Apri / Scarica Flyer PDF</span>
                </a>
              </div>

              {/* Card 2: Menù Tovaglietta Sera */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#dfcfb9] hover:border-[#d89d42] transition-all shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#d89d42]/15 border border-[#d89d42]/30 flex items-center justify-center text-[#a0742d] mb-4 group-hover:scale-105 transition-transform">
                    <FileText className="w-6 h-6 text-[#a0742d]" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#a0742d] font-bold block mb-1">
                    Cena • Tovaglietta
                  </span>
                  <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#26170d] mb-2">
                    Menù Completo Sera
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6d5644] font-light leading-relaxed mb-6">
                    Antipasti pugliesi, gran taglieri Bedogni, burrate fresche, primi alla barese, bombette e carni alla brace, cantina e dolci.
                  </p>
                </div>

                <a
                  href="/docs/22-Frasi-Menu-Sera.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#d89d42] hover:bg-[#e6ab4e] text-[#26170d] font-bold text-xs sm:text-sm shadow-sm transition-all text-center"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Apri / Scarica Menù Sera PDF</span>
                </a>
              </div>
            </div>

            {/* Box Legale Allergeni & Sicurezza Alimentare (Reg. UE 1169/2011) */}
            <div className="mb-10 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#faf6ee] border border-[#dfcfb9] text-xs text-[#4a3424] space-y-3">
              <div className="flex items-center gap-2 text-[#8c1d28] font-serif font-bold text-sm sm:text-base">
                <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Informativa su Allergeni e Sicurezza Alimentare (Reg. UE 1169/2011)</span>
              </div>

              <p className="leading-relaxed">
                Gentile cliente, la tua salute e sicurezza sono per noi al primo posto. Se hai <strong>allergie, intolleranze alimentari o celiachia</strong>, ti preghiamo di comunicarlo tempestivamente al nostro personale di sala prima di ordinare o al momento della prenotazione.
              </p>

              <div className="p-3 rounded-xl bg-white/80 border border-[#ebdcc8] space-y-1.5 text-[11px] sm:text-xs">
                <p className="font-semibold text-[#26170d] flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#8c1d28] shrink-0" />
                  <span>I 14 Allergeni di Legge (All. II Reg. UE 1169/2011):</span>
                </p>
                <p className="text-[#6d5644] leading-relaxed">
                  1. Cereali contenenti glutine • 2. Crostacei • 3. Uova • 4. Pesce • 5. Arachidi • 6. Soia • 7. Latte e derivati • 8. Frutta a guscio • 9. Sedano • 10. Senape • 11. Semi di sesamo • 12. Anidride solforosa e solfiti (&gt;10 mg/kg) • 13. Lupini • 14. Molluschi.
                </p>
                <p className="text-[#6d5644] pt-1">
                  Il nostro personale è a tua completa disposizione per consultare il <em>Registro Cartaceo degli Allergeni</em> con la composizione dettagliata di ogni pietanza.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#6d5644] pt-1">
                <p>
                  * <strong>Prodotti ittici crudi:</strong> Il pesce destinato a essere consumato crudo o praticamente crudo è stato sottoposto a trattamento di bonifica preventiva mediante abbattimento a -20°C per almeno 24 ore, in conformità al Regolamento CE 853/2004.
                </p>
                <p>
                  * <strong>Prodotti surgelati all&apos;origine:</strong> Alcune materie prime o specialità possono essere surgelate o congelate all&apos;origine dal produttore o abbattute in loco per garantire la massima freschezza e sicurezza igienica.
                </p>
              </div>
            </div>

            {/* Prenotazione Tavolo */}
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#dfcfb9] shadow-xs max-w-xl mx-auto">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#26170d] mb-1.5">
                Vuoi prenotare un tavolo a pranzo o a cena?
              </h3>
              <p className="text-xs text-[#6d5644] mb-4">
                Prenotazione rapida direttamente su WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all"
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

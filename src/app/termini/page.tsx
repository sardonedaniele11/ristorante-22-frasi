import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import { siteConfig } from "@/config/site";
import { Scale, FileText, AlertCircle, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termini di Servizio & Note Legali | 22 Frasi - Bari",
  description:
    "Termini di utilizzo, note legali societarie e condizioni d'uso del sito ufficiale di 22 Frasi Bistrò a Bari.",
};

export default function TerminiPage() {
  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#26170d] flex flex-col font-sans selection:bg-[#d89d42] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-[#dfcfb9] shadow-sm">
          {/* Header */}
          <div className="border-b border-[#ebdcc8] pb-6 mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
              <Scale className="w-4 h-4 text-[#8c1d28]" />
              <span>Condizioni Generali &amp; Note Legali</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#26170d] tracking-tight mb-2">
              Termini di Utilizzo &amp; Note Legali
            </h1>
            <p className="text-xs text-[#6d5644]">
              Ai sensi dell&apos;art. 2250 del Codice Civile e del D.Lgs. 70/2003 (Commercio Elettronico)
            </p>
          </div>

          <div className="prose prose-stone max-w-none space-y-8 text-sm text-[#4a3424] leading-relaxed">
            {/* 1. Dati Societari di Legge */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#8c1d28]" />
                <span>Identificazione del Titolare e Dati Aziendali</span>
              </h2>
              <p>
                In ottemperanza agli obblighi di legge previsti dall&apos;art. 2250 c.c. e dal D.Lgs. 70/2003,
                si comunicano i seguenti dati societari:
              </p>
              <div className="p-4 rounded-2xl bg-[#faf6ee] border border-[#dfcfb9] text-xs sm:text-sm space-y-1">
                <p><strong>Denominazione:</strong> {siteConfig.legal.ragioneSociale}</p>
                <p><strong>Insegna:</strong> 22 Frasi • Cucina Caratteristica Pugliese</p>
                <p><strong>Sede Legale &amp; Operativa:</strong> {siteConfig.legal.sedeLegale}</p>
                <p><strong>Partita IVA:</strong> {siteConfig.legal.piva}</p>
                <p><strong>Codice Fiscale:</strong> {siteConfig.legal.codiceFiscale}</p>
                <p><strong>Posta Elettronica Certificata (PEC):</strong> {siteConfig.legal.pec}</p>
              </div>
            </section>

            {/* 2. Proprietà Intellettuale */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#8c1d28]" />
                <span>Proprietà Intellettuale e Diritti d&apos;Autore</span>
              </h2>
              <p>
                Tutti i contenuti presenti su questo sito web, inclusi a titolo esemplificativo ma non esaustivo:
                il marchio denominativo e figurativo <strong>&ldquo;22 Frasi&rdquo;</strong>, il logo con il calice,
                il testo originale del <strong>Manifesto</strong> (&ldquo;Le frasi sono formate da parole...&rdquo;),
                le fotografie dei piatti e della location, i flyer grafici, il codice sorgente e il layout grafico,
                sono di proprietà esclusiva di {siteConfig.legal.ragioneSociale} o dei rispettivi autori e sono protetti
                dalle leggi italiane ed internazionali sul diritto d&apos;autore e sulla proprietà industriale (Legge 633/1941 e s.m.i.).
              </p>
              <p className="text-xs text-[#6d5644]">
                È severamente vietata la riproduzione, copia, alterazione, distribuzione o diffusione a scopo di lucro
                senza previa autorizzazione scritta del titolare.
              </p>
            </section>

            {/* 3. Menù, Prezzi e Disponibilità */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#8c1d28]" />
                <span>Informazioni su Menù, Prezzi e Formule Pranzo</span>
              </h2>
              <p>
                I menù in formato PDF, le formule pranzo e i prezzi indicati sul sito web hanno finalità puramente
                informative e promozionali. Sebbene il titolare si impegni a mantenere costantemente aggiornate le
                informazioni pubblicate, le proposte gastronomiche, gli ingredienti stagionali e i relativi prezzi
                possono subire variazioni in base alla reperibilità sul mercato dei prodotti freschi o a eventi speciali.
              </p>
              <p className="font-semibold text-xs text-[#8c1d28]">
                Fa sempre fede il menù ufficiale cartaceo e la lista prezzi esposti all&apos;interno del locale ai sensi delle vigenti normative di pubblica sicurezza e consumo.
              </p>
            </section>

            {/* 4. Prenotazioni */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d]">Prenotazioni dei Tavoli</h2>
              <p>
                La richiesta di prenotazione inviata tramite WhatsApp, email o telefono è soggetta a conferma espressa
                da parte del personale del bistrò in base alla disponibilità effettiva dei tavoli.
              </p>
            </section>

            {/* 5. Legge Applicabile e Foro Competente */}
            <section className="space-y-3 pt-4 border-t border-[#ebdcc8]">
              <h2 className="text-xl font-serif font-bold text-[#26170d]">Legge Applicabile e Foro Competente</h2>
              <p>
                Le presenti condizioni generali di utilizzo sono regolate dalla legge italiana. Per qualsiasi
                controversia inerente all&apos;interpretazione, esecuzione o validità dell&apos;utilizzo del presente sito web,
                sarà competente in via esclusiva il <strong>Foro di Bari</strong>, fatto salvo il foro inderogabile
                del consumatore qualora applicabile ai sensi del D.Lgs. 206/2005 (Codice del Consumo).
              </p>
            </section>

            {/* 6. Rimando a Privacy e Cookie */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <Link href="/privacy" className="text-[#8c1d28] underline hover:text-[#5a1017]">
                Leggi l&apos;Informativa sulla Privacy (GDPR) →
              </Link>
              <Link href="/cookie" className="text-[#8c1d28] underline hover:text-[#5a1017]">
                Leggi la Cookie Policy →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

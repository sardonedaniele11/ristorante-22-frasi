import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BookOpen, Sparkles, Utensils } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function ManifestoSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section id="chi-siamo" className="py-8 sm:py-14 bg-gradient-to-b from-[#fbf8f2] via-[#f5ede1] to-[#fbf8f2] text-[#26170d] relative overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#d89d42]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intestazione Sezione */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-xs uppercase tracking-widest font-semibold shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#8c1d28]" />
            <span>Il Manifesto Autentico</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#26170d] tracking-tight mt-3 mb-2">
            Perché Ci Chiamiamo <span className="text-[#8c1d28] italic">22 Frasi</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#6d5644] font-serif uppercase tracking-wider">
            {siteConfig.subtitle} • Via Putignani 144, Bari Centro
          </p>
        </div>

        {/* IL MANIFESTO BEIGE - Realizzato in testo tipografico vivo */}
        <div className="relative mx-auto max-w-2xl bg-[#eddcc7] text-[#221308] rounded-2xl sm:rounded-3xl border-2 border-[#d8be9f] shadow-2xl p-6 sm:p-12 transition-all">
          {/* Cornice decorativa interna stile pergamena */}
          <div className="absolute inset-2 sm:inset-3 border border-[#cfb290]/60 rounded-xl sm:rounded-2xl pointer-events-none" />

          {/* Testata Manifesto: Logo e Insegna */}
          <div className="relative z-10 text-center pb-6 sm:pb-8 border-b border-[#cfb290]/70">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto relative mb-2 filter drop-shadow-xs">
              <Image
                src="/images/logo-clean.png"
                alt="22 Frasi - Logo Ufficiale"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-[0.25em] text-[#1f1006] uppercase mt-1">
              FRASI
            </h2>
            <p className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#6d4d31] font-bold mt-1">
              Specialità Gastronomiche Pugliesi
            </p>
          </div>

          {/* Corpo del Manifesto: Le Frasi Tipografiche */}
          <div className="relative z-10 py-6 sm:py-8 space-y-5 sm:space-y-6 text-center select-text">
            {/* Blocco 1 */}
            <div className="space-y-1 sm:space-y-1.5">
              <p className="text-xs sm:text-sm font-sans tracking-[0.15em] uppercase text-[#4d331e] font-medium">
                LE FRASI SONO FORMATE DA PAROLE...
              </p>
              <p className="text-2xl sm:text-3xl font-serif italic text-[#8c1d28] font-bold tracking-tight">
                le parole sono magiche...
              </p>
              <p className="text-xs sm:text-sm font-sans tracking-[0.18em] uppercase text-[#4d331e] font-semibold pt-1">
                HANNO UN POTERE STRABILIANTE
              </p>
              <p className="text-xs sm:text-sm font-sans tracking-[0.18em] uppercase text-[#4d331e] font-semibold">
                PER IL CUORE E PER LA MENTE...
              </p>
            </div>

            {/* Blocco 2 - Conversare */}
            <div className="py-2 space-y-1 border-y border-[#d8be9f]/60">
              <p className="text-sm sm:text-base font-serif font-extrabold tracking-wider uppercase text-[#1f1006]">
                CONVERSARE, SCAMBIARSI PAROLE
              </p>
              <p className="text-sm sm:text-base font-serif font-extrabold tracking-wider uppercase text-[#1f1006]">
                SIGNIFICA DEDICARSI TEMPO...
              </p>
              <p className="text-base sm:text-lg font-serif italic text-[#8c1d28] font-medium pt-0.5">
                tra amici... tra innamorati... in famiglia...
              </p>
            </div>

            {/* Blocco 3 - Sedersi a Tavola */}
            <div className="space-y-1.5 pt-1">
              <p className="text-xs sm:text-sm font-sans tracking-[0.16em] uppercase text-[#3e2716] font-bold">
                SEDERSI AD UN TAVOLO PER MANGIARE
              </p>
              <p className="text-base sm:text-lg font-serif italic text-[#6d4d31]">
                è amicizia... è famiglia...
              </p>
              <p className="text-lg sm:text-2xl font-serif font-extrabold tracking-widest uppercase text-[#8c1d28] py-0.5">
                È CONDIVISIONE... È AMORE...
              </p>
              <p className="text-xs sm:text-sm font-sans tracking-[0.14em] uppercase text-[#4d331e] font-semibold">
                È RINGRAZIAMENTO... È SPIRITUALITÀ...
              </p>
              <p className="text-base sm:text-xl font-serif font-bold text-[#1f1006]">
                È TRADIZIONE... È CALORE... <span className="italic text-[#8c1d28] font-extrabold">e casa..!</span>
              </p>
            </div>

            {/* Separatore decorativo centrale */}
            <div className="flex items-center justify-center gap-3 py-2 text-[#b8956f]">
              <span className="h-px w-16 bg-[#d8be9f]" />
              <Sparkles className="w-4 h-4 text-[#8c1d28]" />
              <span className="h-px w-16 bg-[#d8be9f]" />
            </div>

            {/* Blocco 4 - Nello Spazio di una Conversazione */}
            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm font-sans tracking-[0.15em] uppercase text-[#4d331e] font-medium">
                NELLO SPAZIO DI UNA CONVERSAZIONE
              </p>
              <p className="text-xs sm:text-sm font-sans tracking-[0.15em] uppercase text-[#4d331e] font-medium">
                INIZIANO A FLUTTUARE PAROLE.. FRASI..
              </p>
              <p className="text-xl sm:text-2xl font-serif italic text-[#8c1d28] font-semibold pt-1">
                e a me piace un sacco
              </p>
              <p className="text-base sm:text-xl font-serif font-extrabold tracking-wider uppercase text-[#1f1006]">
                SEDERMI A TAVOLA
              </p>
              <p className="text-sm sm:text-lg font-serif font-extrabold tracking-wider uppercase text-[#1f1006]">
                A MANGIARE, BERE, CHIACCHIERARE
              </p>
              <p className="text-xs sm:text-sm font-sans tracking-[0.16em] uppercase text-[#4d331e] font-semibold">
                CON PERSONE A CUI VOGLIO BENE...
              </p>
            </div>

            {/* Blocco 5 - Condivisione */}
            <div className="pt-2 space-y-1">
              <p className="text-sm sm:text-base font-serif italic text-[#5a3a22]">
                Vorrei che la pausa nel mio locale fosse
              </p>
              <p className="text-2xl sm:text-4xl font-serif font-black tracking-widest uppercase text-[#8c1d28] py-1">
                CONDIVISIONE...
              </p>
              <p className="text-[11px] sm:text-xs font-sans tracking-[0.18em] uppercase text-[#4d331e] font-semibold">
                LAVORATIVA, FAMILIARE, AMICHEVOLE, SENTIMENTALE,
              </p>
              <p className="text-xl sm:text-2xl font-serif italic text-[#1f1006] font-bold">
                divertente, piacevole...
              </p>
            </div>

            {/* Finale - E QUINDI... 22 FRASI */}
            <div className="pt-4 border-t border-[#cfb290]/80 space-y-1">
              <p className="text-xs sm:text-sm font-sans tracking-[0.2em] uppercase text-[#6d4d31] font-bold">
                E QUINDI...
              </p>
              <p className="text-3xl sm:text-5xl font-serif font-black tracking-wider text-[#8c1d28] uppercase drop-shadow-xs">
                22 FRASI
              </p>
            </div>
          </div>
        </div>

        {/* Pulsanti Rapidi Azione */}
        <div className="pt-8 sm:pt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Prenota un Tavolo a Bari</span>
          </a>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#faf5ec] text-[#8c1d28] border border-[#dfcfb9] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-all"
          >
            <Utensils className="w-4 h-4 text-[#8c1d28]" />
            <span>Scopri il Nostro Menù</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

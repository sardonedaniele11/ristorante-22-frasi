import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Heart, Sparkles, BookOpen } from "lucide-react";

export default function ManifestoSection() {
  return (
    <section id="chi-siamo" className="py-20 sm:py-28 bg-[#071712] text-neutral-100 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#007a68]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8c1d28]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pill */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#164e43]/60 border border-[#2a6d58] text-[#d89d42] text-xs uppercase tracking-widest font-semibold shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Perché Ci Chiamiamo 22 Frasi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mt-4 mb-2">
            Il Nostro <span className="text-[#d89d42] italic">Manifesto</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#a3c9b8] font-mono uppercase tracking-wider">
            {siteConfig.subtitle} • {siteConfig.descriptor}
          </p>
        </div>

        {/* Central Manifesto Card styled faithfully after the WhatsApp image */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#0d2821] via-[#091f19] to-[#0d2821] border border-[#2a6d58] shadow-2xl max-w-3xl mx-auto text-center overflow-hidden">
          {/* Subtle logo icon watermark in the background */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 opacity-10 pointer-events-none">
            <Image
              src={siteConfig.logoIcon}
              alt="Watermark 22 Frasi"
              fill
              className="object-contain"
            />
          </div>

          {/* Logo Presentation atop the text */}
          <div className="relative z-10 flex flex-col items-center mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative mb-3">
              <Image
                src={siteConfig.logoIcon}
                alt="22 Frasi Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-serif font-bold tracking-widest text-2xl sm:text-3xl text-white">
              22 FRASI
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#d89d42] font-semibold mt-1">
              CUCINA CARATTERISTICA PUGLIESE
            </span>
            <div className="w-16 h-0.5 bg-[#d89d42]/60 mt-3" />
          </div>

          {/* Authentic Words from the WhatsApp image */}
          <div className="space-y-4 font-serif text-neutral-100 text-sm sm:text-base leading-relaxed tracking-wide">
            <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-neutral-300 font-semibold">
              LE FRASI SONO FORMATE DA PAROLE...
            </p>
            <p className="italic text-lg sm:text-xl text-[#d89d42] font-serif">
              le parole sono magiche...
            </p>
            <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-neutral-300 font-medium">
              HANNO UN POTERE STRABILIANTE PER IL CUORE E PER LA MENTE...
            </p>

            <div className="py-2">
              <p className="font-bold text-sm sm:text-base uppercase tracking-wider text-white">
                CONVERSARE, SCAMBIARSI PAROLE SIGNIFICA DEDICARSI TEMPO...
              </p>
              <p className="italic text-sm sm:text-base text-[#c2dfd3]">
                tra amici... tra innamorati... in famiglia...
              </p>
            </div>

            <div className="py-2 space-y-1">
              <p className="font-bold text-sm sm:text-base uppercase tracking-wider text-white">
                SEDERSI AD UN TAVOLO PER MANGIARE
              </p>
              <p className="italic text-sm sm:text-base text-[#c2dfd3]">
                è amicizia... è famiglia...
              </p>
              <p className="font-bold text-sm sm:text-base uppercase tracking-widest text-amber-300">
                È CONDIVISIONE... È AMORE...
              </p>
              <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-neutral-300">
                È RINGRAZIAMENTO... È SPIRITUALITÀ...
              </p>
              <p className="font-bold text-base sm:text-lg text-white">
                È TRADIZIONE... È CALORE... <span className="italic text-[#d89d42]">è casa..!</span>
              </p>
            </div>

            <div className="py-2 space-y-2">
              <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-neutral-300 font-medium">
                NELLO SPAZIO DI UNA CONVERSAZIONE INIZIANO A FLUTTUARE PAROLE.. FRASI..
              </p>
              <p className="italic text-base sm:text-lg text-[#d89d42]">
                e a me piace un sacco
              </p>
              <p className="font-extrabold text-base sm:text-xl uppercase tracking-wider text-white">
                SEDERMI A TAVOLA
              </p>
              <p className="font-bold text-xs sm:text-sm uppercase tracking-wider text-neutral-200">
                A MANGIARE, BERE, CHIACCHIERARE CON PERSONE A CUI VOGLIO BENE...
              </p>
            </div>

            <div className="py-3 border-t border-b border-[#2a6d58]/60 space-y-1.5 my-4">
              <p className="italic text-sm sm:text-base text-[#c2dfd3]">
                Vorrei che la pausa nel mio locale fosse
              </p>
              <p className="font-extrabold text-lg sm:text-2xl uppercase tracking-widest text-white">
                CONDIVISIONE...
              </p>
              <p className="text-[11px] sm:text-xs font-sans uppercase tracking-wider text-neutral-300 font-semibold">
                LAVORATIVA, FAMILIARE, AMICHEVOLE, SENTIMENTALE,
              </p>
              <p className="italic text-base sm:text-lg text-[#d89d42]">
                divertente, piacevole...
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs font-sans uppercase tracking-widest text-neutral-400 block mb-1">
                E QUINDI...
              </span>
              <span className="font-serif font-black text-3xl sm:text-4xl text-[#8c1d28] bg-rose-950/20 px-4 py-1 rounded-xl border border-[#8c1d28]/50 inline-block shadow-inner">
                22 FRASI
              </span>
            </div>
          </div>

          {/* Note from the flyer and placemat */}
          <div className="mt-10 pt-6 border-t border-[#1b4d3e]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a3c9b8] gap-3">
            <span className="font-serif italic">
              Bistrot • Caffetteria • Eventi • Catering
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300 font-sans">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              Via Nicolò Putignani 144, Bari
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

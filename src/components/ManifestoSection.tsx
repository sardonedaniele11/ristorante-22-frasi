import Image from "next/image";
import { siteConfig } from "@/config/site";
import { BookOpen, Sparkles, Heart } from "lucide-react";

export default function ManifestoSection() {
  return (
    <section id="chi-siamo" className="py-12 sm:py-20 bg-gradient-to-b from-[#fbf8f2] via-[#f7f1e5] to-[#fbf8f2] text-[#26170d] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#d89d42]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pill */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-xs uppercase tracking-widest font-semibold shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#8c1d28]" />
            <span>Perché Ci Chiamiamo 22 Frasi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#26170d] tracking-tight mt-3 mb-2">
            Il Nostro <span className="text-[#8c1d28] italic">Manifesto</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#6d5644] font-serif uppercase tracking-wider">
            {siteConfig.subtitle} • {siteConfig.descriptor}
          </p>
        </div>

        {/* Layout: Poster originale + Frasi autentiche trascritte */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Colonna Sinistra: Poster Ufficiale */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-white border border-[#dfcfb9] shadow-sm max-w-sm w-full">
              <div className="relative w-full overflow-hidden rounded-xl bg-[#faf6ee]">
                <Image
                  src="/images/manifesto-22-frasi.jpg"
                  alt="Il Manifesto Grafico Ufficiale di 22 Frasi"
                  width={1066}
                  height={1600}
                  className="w-full h-auto object-contain block select-none"
                  priority
                />
              </div>
              <div className="mt-3 pt-2 text-center border-t border-[#ebdcc8]">
                <span className="text-[11px] font-mono text-[#6d5644]">
                  Poster originale esposto nel locale
                </span>
              </div>
            </div>
          </div>

          {/* Colonna Destra: Le Frasi generate e trascritte con cura */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-6 sm:p-10 bg-white border border-[#dfcfb9] shadow-sm text-center lg:text-left">
              {/* Logo Presentation atop the text */}
              <div className="flex flex-col items-center lg:items-start mb-6">
                <div className="w-44 h-14 sm:w-52 sm:h-16 relative mb-2">
                  <Image
                    src="/images/logo-clean.png"
                    alt="22 Frasi Logo"
                    fill
                    className="object-contain object-center lg:object-left"
                  />
                </div>
                <div className="w-16 h-0.5 bg-[#d89d42] mt-1" />
              </div>

              {/* Tutte le Frasi Originali */}
              <div className="space-y-4 font-serif text-[#26170d] text-sm sm:text-base leading-relaxed tracking-wide">
                <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#6d5644] font-semibold">
                  LE FRASI SONO FORMATE DA PAROLE...
                </p>
                <p className="italic text-lg sm:text-xl text-[#8c1d28] font-serif font-bold">
                  le parole sono magiche...
                </p>
                <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-[#6d5644] font-medium">
                  HANNO UN POTERE STRABILIANTE PER IL CUORE E PER LA MENTE...
                </p>

                <div className="py-2 border-y border-[#f0e3d3]/80 space-y-1">
                  <p className="font-bold text-sm sm:text-base uppercase tracking-wider text-[#26170d]">
                    CONVERSARE, SCAMBIARSI PAROLE SIGNIFICA DEDICARSI TEMPO...
                  </p>
                  <p className="italic text-sm sm:text-base text-[#8c1d28]">
                    tra amici... tra innamorati... in famiglia...
                  </p>
                </div>

                <div className="py-2 space-y-1.5">
                  <p className="font-bold text-sm sm:text-base uppercase tracking-wider text-[#26170d]">
                    SEDERSI AD UN TAVOLO PER MANGIARE
                  </p>
                  <p className="italic text-sm sm:text-base text-[#6d5644]">
                    è amicizia... è famiglia...
                  </p>
                  <p className="font-bold text-base sm:text-lg uppercase tracking-widest text-[#8c1d28]">
                    È CONDIVISIONE... È AMORE...
                  </p>
                  <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-[#6d5644]">
                    È RINGRAZIAMENTO... È SPIRITUALITÀ...
                  </p>
                  <p className="font-bold text-base sm:text-lg text-[#26170d]">
                    È TRADIZIONE... È CALORE... <span className="italic text-[#8c1d28]">è casa..!</span>
                  </p>
                </div>

                <div className="py-2 border-t border-[#f0e3d3]/80 space-y-2">
                  <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-[#6d5644] font-medium">
                    NELLO SPAZIO DI UNA CONVERSAZIONE INIZIANO A FLUTTUARE PAROLE.. FRASI..
                  </p>
                  <p className="italic text-sm sm:text-base text-[#5a3a22]">
                    e a me piace un sacco sederci a tavola a mangiare, bere, chiacchierare con persone a cui voglio bene...
                  </p>
                  <p className="font-serif text-sm sm:text-base font-bold text-[#8c1d28]">
                    Vorrei che la pausa nel mio locale fosse CONDIVISIONE...
                  </p>
                  <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-[#6d5644]">
                    Lavorativa, familiare, amichevole, sentimentale, divertente, piacevole...
                  </p>
                </div>

                <div className="pt-3 border-t border-[#dfcfb9] space-y-1">
                  <p className="text-base sm:text-lg font-serif font-bold text-[#8c1d28]">
                    QUANTE FRASI SERVONO PER SENTIRSI A CASA?
                  </p>
                  <p className="text-xl sm:text-3xl font-serif font-extrabold text-[#26170d] tracking-widest pt-1">
                    FORSE SOLO 22...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

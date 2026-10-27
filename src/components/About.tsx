import { siteConfig } from "@/config/site";
import { Utensils, Wine, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="chi-siamo" className="py-20 sm:py-24 bg-[#07130e] text-neutral-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4d3e]/50 border border-[#2a6d58] text-amber-300 text-xs uppercase tracking-widest font-semibold mb-6">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>La Nostra Anima Pugliese</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              Il vero bistrò di Puglia: dove ogni sapore è{" "}
              <span className="text-amber-300 italic">casa e convivialità</span>
            </h2>

            <p className="text-[#c2dfd3] text-base sm:text-lg leading-relaxed mb-6 font-light">
              {siteConfig.description}
            </p>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              Abbiamo creato <strong>22 Frasi</strong> a Bari per dare vita a uno spazio intimo, sincero e accogliente. Un bistrò pensato per chi ama sedersi a tavola senza fretta, gustare un calice di Primitivo e lasciarsi conquistare dai profumi del Mediterraneo e dalla tradizione gastronomica pugliese.
            </p>

            {/* Value pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#1b4d3e]/60">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1b4d3e]/60 border border-[#2a6d58] flex items-center justify-center text-amber-300">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-white text-base">Tradizione Pura</h4>
                <p className="text-xs text-[#a3c9b8] leading-normal">
                  Ricette tramandate, dalla tiella barese alle orecchiette fatte a mano.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1b4d3e]/60 border border-[#2a6d58] flex items-center justify-center text-amber-300">
                  <Wine className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-white text-base">Vini del Territorio</h4>
                <p className="text-xs text-[#a3c9b8] leading-normal">
                  Grandi rossi strutturati, rosati freschi e calici selezionati della Murgia e del Salento.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1b4d3e]/60 border border-[#2a6d58] flex items-center justify-center text-amber-300">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-white text-base">Ospitalità del Sud</h4>
                <p className="text-xs text-[#a3c9b8] leading-normal">
                  La calorosa accoglienza barese che ti fa sentire sempre in famiglia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Elegant Bistro Card (Photo-free, Pure Typography & Aesthetics) */}
          <div className="lg:col-span-5">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e271d] via-[#091f16] to-[#07130e] border border-[#2a6d58] shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#07130e] border border-[#2a6d58] p-2 flex items-center justify-center mb-6 shadow-inner">
                  <Image
                    src={siteConfig.logoIcon}
                    alt="Logo 22 Frasi"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                <span className="text-amber-300 text-4xl font-serif leading-none block mb-3">“</span>
                
                <blockquote className="text-lg sm:text-xl text-neutral-100 font-serif italic leading-relaxed mb-6">
                  In Puglia la tavola non è soltanto cibo, è un rito sacro di condivisione, tempo ritrovato e memoria viva.
                </blockquote>

                <div className="w-12 h-0.5 bg-amber-400/40 mb-6" />

                <div className="text-xs uppercase tracking-widest text-[#a3c9b8] font-mono mb-1">
                  22 FRASI • IL BISTRÒ DI PUGLIA
                </div>
                <div className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>Via Nicolò Putignani 144, Bari</span>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1b4d3e]/60 w-full flex items-center justify-around text-center">
                  <div>
                    <span className="text-xs text-[#a3c9b8] uppercase tracking-wider block">Ambiente</span>
                    <span className="text-sm font-semibold text-white">Intimo &amp; Curato</span>
                  </div>
                  <div className="h-8 w-px bg-[#1b4d3e]" />
                  <div>
                    <span className="text-xs text-[#a3c9b8] uppercase tracking-wider block">Cucina</span>
                    <span className="text-sm font-semibold text-white">100% Pugliese</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Utensils, Wine, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="chi-siamo" className="py-24 bg-[#07130e] text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Philosophy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4d3e]/50 border border-[#2a6d58] text-amber-300 text-xs uppercase tracking-widest font-semibold mb-6">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>La Nostra Anima Pugliese</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              Il vero bistrò di Puglia: dove ogni boccone è{" "}
              <span className="text-amber-300 italic">casa e poesia</span>
            </h2>

            <p className="text-[#c2dfd3] text-base sm:text-lg leading-relaxed mb-6 font-light">
              {siteConfig.description}
            </p>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              Abbiamo creato <strong>22 Frasi</strong> per dare vita a uno spazio intimo, conviviale e accogliente. Un bistrò pensato per chi ama sedersi a tavola senza fretta, gustare un calice di Primitivo e lasciarsi conquistare dai profumi del Mediterraneo, dalle focacce calde ai taglieri della tradizione.
            </p>

            {/* Value pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#1b4d3e]/60">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1b4d3e]/60 border border-[#2a6d58] flex items-center justify-center text-amber-300">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-white text-base">Tradizione Pura</h4>
                <p className="text-xs text-[#a3c9b8] leading-normal">
                  Ricette tramandate, dalle orecchiette alle braci pugliesi.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1b4d3e]/60 border border-[#2a6d58] flex items-center justify-center text-amber-300">
                  <Wine className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-white text-base">Vini del Territorio</h4>
                <p className="text-xs text-[#a3c9b8] leading-normal">
                  Grandi rossi strutturati, rosati freschi e bollicine pugliesi.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1b4d3e]/60 border border-[#2a6d58] flex items-center justify-center text-amber-300">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-white text-base">Ospitalità del Sud</h4>
                <p className="text-xs text-[#a3c9b8] leading-normal">
                  La proverbiale accoglienza che ti fa sentire sempre in famiglia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Logo integration */}
          <div className="relative">
            <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-[#1b4d3e] bg-[#0e271d]">
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                alt="Ambiente 22 Frasi - Il bistrò di Puglia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130e] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:left-6 max-w-xs bg-[#0d221a]/95 backdrop-blur-md p-6 rounded-2xl border border-amber-400/30 shadow-2xl">
              <span className="text-amber-300 text-3xl font-serif leading-none block mb-2">“</span>
              <p className="text-xs sm:text-sm text-neutral-200 italic font-serif">
                In Puglia la cucina non è solo cibo, è un racconto d’amore condiviso a tavola.
              </p>
              <span className="text-[10px] uppercase tracking-wider text-amber-300 font-bold block mt-3">
                — 22 Frasi • Il bistrò di Puglia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

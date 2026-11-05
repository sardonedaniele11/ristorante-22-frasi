import Image from "next/image";
import { siteConfig } from "@/config/site";
import { BookOpen, Sparkles, Heart } from "lucide-react";

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-8 sm:py-14 bg-gradient-to-b from-[#f4ecdf] via-[#fbf8f2] to-[#f7f1e5] text-[#26170d] relative overflow-hidden border-b border-[#dfcfb9]">
      {/* Background subtle warm glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#d89d42]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#8c1d28]" />
            <span>Perché ci chiamiamo 22 Frasi</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#26170d] tracking-tight mt-2 mb-1.5">
            Il Nostro <span className="text-[#8c1d28] italic">Manifesto</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#6d5644] font-serif max-w-lg mx-auto">
            Il valore della condivisione, del sedersi a tavola e del sentirsi a casa.
          </p>
        </div>

        {/* Poster Ufficiale del Manifesto */}
        <div className="max-w-md sm:max-w-lg mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-white border border-[#dfcfb9] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative w-full overflow-hidden rounded-xl bg-[#faf6ee]">
              <Image
                src="/images/manifesto-22-frasi.jpg"
                alt="Il Manifesto Ufficiale di 22 Frasi - Specialità Gastronomiche Pugliesi"
                width={1066}
                height={1600}
                className="w-full h-auto object-contain block select-none"
                priority
              />
            </div>

            {/* Bottom Caption */}
            <div className="mt-4 pt-3 border-t border-[#ebdcc8] text-center">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#8c1d28] font-serif font-semibold">
                <Heart className="w-3.5 h-3.5 fill-[#8c1d28]" />
                <span>Condivisione • Tradizione • Casa</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#6d5644] font-light mt-0.5">
                Via Nicolò Putignani, 144 • Bari Centro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { lunchFormulas } from "@/data/restaurantData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CompactLunchProps {
  showPdfLink?: boolean;
}

export default function CompactLunchFormulas({ showPdfLink = true }: CompactLunchProps) {
  return (
    <section id="formule-pranzo" className="py-2.5 sm:py-3.5 bg-[#f4ecdf] text-[#2c1d11] relative border-b border-[#dfcfb9]">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header Ultra-Compatto */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="px-1.5 py-0.5 rounded bg-[#8c1d28] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider font-mono">
              Pranzo
            </span>
            <h2 className="text-xs sm:text-base font-serif font-bold text-[#26170d] tracking-tight">
              Formule Pranzo da 7€
            </h2>
            <span className="text-[10px] sm:text-xs text-[#6d5644] font-normal">
              • Acqua e Coperto inclusi
            </span>
          </div>

          {showPdfLink && (
            <Link
              href="/menu"
              className="inline-flex items-center gap-0.5 text-[11px] sm:text-xs font-semibold text-[#8c1d28] hover:text-[#5a1017] underline shrink-0"
            >
              <span>Menù PDF</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        {/* Griglia Formule Ultra-Compatta: 7 colonne su desktop, 4 su tablet, 2 su mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 sm:gap-2">
          {lunchFormulas.map((formula) => (
            <div
              key={formula.id}
              className={`rounded-lg p-1.5 sm:p-2 flex flex-col justify-between border transition-all ${
                formula.popular
                  ? "bg-white border-[#d89d42] shadow-xs ring-1 ring-[#d89d42]/60"
                  : "bg-[#faf6ee] border-[#dfcfb9] hover:bg-white shadow-xs"
              } ${formula.id === "f-7" ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="px-1.5 py-0.5 rounded bg-[#8c1d28] text-white font-serif font-bold text-xs sm:text-sm leading-none shrink-0">
                  {formula.price}
                </span>
                {formula.popular ? (
                  <span className="text-[9px] font-sans font-semibold text-[#8c1d28] bg-[#fbf0df] px-1 py-0.2 rounded border border-[#e5c48b]/50">
                    ★ Top
                  </span>
                ) : (
                  <span className="text-[9px] font-mono text-[#7a6452]">
                    Asp. {formula.takeawayPrice}
                  </span>
                )}
              </div>

              <div className="font-serif font-bold text-[#26170d] text-[11px] sm:text-xs leading-tight line-clamp-1 my-0.5">
                {formula.title}
              </div>

              <div className="flex items-center justify-between text-[9px] text-[#7a6452] pt-0.5 border-t border-[#ebdcc8]/60 mt-0.5">
                {formula.popular ? (
                  <span className="text-[8.5px] text-[#7a6452]">Asp. {formula.takeawayPrice}</span>
                ) : (
                  <span className="text-[8.5px] text-[#8e7663]">del giorno</span>
                )}
                <span className="text-[8.5px] text-[#b3781f] font-medium">Incluso</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

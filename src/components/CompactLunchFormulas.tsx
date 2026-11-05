import { lunchFormulas } from "@/data/restaurantData";
import { siteConfig } from "@/config/site";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CompactLunchProps {
  showPdfLink?: boolean;
}

export default function CompactLunchFormulas({ showPdfLink = true }: CompactLunchProps) {
  return (
    <section id="formule-pranzo" className="py-4 sm:py-6 bg-[#f4ecdf] text-[#2c1d11] relative border-b border-[#dfcfb9]">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header compatto */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-[#8c1d28] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider font-mono">
              Pranzo
            </span>
            <h2 className="text-base sm:text-2xl font-serif font-bold text-[#26170d] tracking-tight">
              Formule Pranzo da 7€ <span className="text-[11px] sm:text-xs font-sans font-normal text-[#6d5644] hidden sm:inline">(Acqua &amp; Coperto inclusi)</span>
            </h2>
          </div>

          {showPdfLink && (
            <Link
              href="/menu"
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#8c1d28] hover:text-[#5a1017] underline shrink-0"
            >
              <span>Tutti i PDF</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        {/* Griglia Formule compatta e orizzontale/strutturata */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {lunchFormulas.map((formula) => (
            <div
              key={formula.id}
              className={`rounded-xl p-2.5 sm:p-3 flex flex-col justify-between border transition-all ${
                formula.popular
                  ? "bg-white border-[#d89d42] shadow-xs ring-1 ring-[#d89d42]/60"
                  : "bg-[#faf6ee] border-[#dfcfb9] hover:bg-white shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="px-2 py-0.5 rounded bg-[#8c1d28] text-white font-serif font-bold text-sm sm:text-base leading-none">
                    {formula.price}
                  </span>
                  <span className="text-[9px] font-mono font-medium text-[#6d5644]">
                    Asporto {formula.takeawayPrice}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-[#26170d] text-xs leading-snug line-clamp-1 mb-0.5">
                  {formula.title}
                </h3>

                <p className="text-[10px] text-[#6d5644] font-light leading-tight line-clamp-2 mb-1.5">
                  {formula.description}
                </p>
              </div>

              <div className="pt-1.5 border-t border-[#ebdcc8] flex items-center justify-between text-[9px] text-[#553f2e]">
                <span className="truncate">{formula.includes}</span>
                <Check className="w-3 h-3 text-[#d89d42] shrink-0 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

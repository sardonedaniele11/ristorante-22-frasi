import { lunchFormulas } from "@/data/restaurantData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CompactLunchProps {
  showPdfLink?: boolean;
}

export default function CompactLunchFormulas({ showPdfLink = true }: CompactLunchProps) {
  return (
    <section id="formule-pranzo" className="py-2.5 sm:py-3 bg-[#f4ecdf]/75 backdrop-blur-[2px] text-[#2c1d11] relative border-b border-[#dfcfb9]/80">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header: Solo "Formule Pranzo" */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <h2 className="text-sm sm:text-base font-serif font-bold text-[#26170d] tracking-tight">
            Formule Pranzo
          </h2>

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

        {/* Griglia Formule: solo Prezzo e Primo/Secondo/Contorno */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-1.5 sm:gap-2">
          {lunchFormulas.map((formula) => (
            <div
              key={formula.id}
              className={`rounded-lg px-2 py-1.5 sm:px-2.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 border transition-all ${
                formula.popular
                  ? "bg-white border-[#d89d42] shadow-xs ring-1 ring-[#d89d42]/60"
                  : "bg-[#faf6ee] border-[#dfcfb9] hover:bg-white shadow-xs"
              } ${formula.id === "f-7" ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <span className="px-1.5 py-0.5 rounded bg-[#8c1d28] text-white font-serif font-bold text-xs sm:text-sm leading-none shrink-0 shadow-xs">
                {formula.price}
              </span>

              <span className="font-serif font-bold text-[#26170d] text-[11px] sm:text-xs leading-tight">
                {formula.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

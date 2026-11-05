"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { TripAdvisorIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { CheckCircle, ExternalLink } from "lucide-react";

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("tutte");

  const filterOptions = [
    { key: "tutte", label: "Tutte le Recensioni" },
    { key: "primi", label: "Primi della Tradizione" },
    { key: "taglieri", label: "Taglieri & Burrata" },
    { key: "carne", label: "Bombette & Brace" },
  ];

  const filteredReviews = siteConfig.reviews.filter((rev) => {
    if (activeFilter === "tutte") return true;
    if (activeFilter === "primi")
      return (
        rev.dishHighlight?.toLowerCase().includes("riso") ||
        rev.dishHighlight?.toLowerCase().includes("orecchiette") ||
        rev.dishHighlight?.toLowerCase().includes("primi")
      );
    if (activeFilter === "taglieri")
      return (
        rev.dishHighlight?.toLowerCase().includes("tagliere") ||
        rev.dishHighlight?.toLowerCase().includes("burrata")
      );
    if (activeFilter === "carne")
      return (
        rev.dishHighlight?.toLowerCase().includes("bombette") ||
        rev.dishHighlight?.toLowerCase().includes("brace")
      );
    return true;
  });

  return (
    <section id="recensioni" className="py-10 sm:py-16 bg-[#fbf8f2] text-[#26170d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f7f0] border border-[#a2e6cc] text-[#008755] text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-2.5 shadow-xs">
            <TripAdvisorIcon className="w-3.5 h-3.5 text-[#00aa6c]" />
            <span>Valutato Eccellente su TripAdvisor</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#26170d] tracking-tight mb-2">
            Dicono di Noi su <span className="text-[#00aa6c] italic">TripAdvisor</span>
          </h2>
          <p className="text-[#6d5644] text-xs sm:text-sm max-w-xl mx-auto font-light">
            Scopri le recensioni autentiche di chi ha provato i sapori della cucina pugliese da 22 Frasi a Bari.
          </p>
        </div>

        {/* Big TripAdvisor Score Card */}
        <div className="mb-6 sm:mb-10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#dfcfb9] shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center">
            {/* Main TripAdvisor Rating */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-r md:border-r border-[#ebdcc8] pr-2 sm:pr-6">
              <div className="flex items-center gap-1.5 mb-1">
                <TripAdvisorIcon className="w-5 h-5 sm:w-7 sm:h-7 text-[#00aa6c]" />
                <span className="font-serif font-bold text-base sm:text-2xl text-[#26170d] tracking-wide">
                  5.0 ★
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#00aa6c] my-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#00aa6c] inline-block shadow-xs"
                  />
                ))}
              </div>
              <span className="text-[10px] sm:text-xs text-[#6d5644] mt-0.5 block">Voto Massimo 5/5</span>
            </div>

            {/* Quick stats */}
            <div className="flex flex-col items-center text-center md:border-r border-[#ebdcc8] md:pr-6">
              <span className="text-xl sm:text-3xl font-serif font-bold text-[#8c1d28]">100%</span>
              <span className="text-[10px] sm:text-xs text-[#6d5644] uppercase tracking-wider mt-0.5 font-semibold">
                Positive
              </span>
              <span className="text-[9px] sm:text-[11px] text-[#85705e]">Cucina &amp; Servizio</span>
            </div>

            <div className="hidden md:flex flex-col items-center text-center border-r border-[#ebdcc8] pr-6">
              <span className="text-2xl font-serif font-bold text-[#26170d]">Bari Centro</span>
              <span className="text-xs text-[#6d5644] uppercase tracking-wider mt-0.5">
                Via Putignani, 144
              </span>
              <span className="text-[11px] text-[#85705e] mt-0.5">Nel cuore di Bari</span>
            </div>

            {/* CTA TripAdvisor */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-end justify-center pt-2 md:pt-0 border-t md:border-t-0 border-[#ebdcc8]">
              <a
                href={siteConfig.contact.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#00aa6c] hover:bg-[#008f5a] text-white font-bold text-xs sm:text-sm shadow-sm transition-all w-full justify-center"
              >
                <TripAdvisorIcon className="w-4 h-4 text-white" />
                <span>TripAdvisor</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto no-scrollbar py-1 px-1 -mx-2 sm:mx-0 sm:justify-center whitespace-nowrap">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilter(opt.key)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === opt.key
                  ? "bg-[#00aa6c] text-white shadow-xs font-semibold"
                  : "bg-white text-[#6d5644] border border-[#dfcfb9] hover:border-[#00aa6c] hover:text-[#00aa6c]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#dfcfb9] shadow-xs hover:border-[#00aa6c]/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#00aa6c]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full bg-[#00aa6c] inline-block shadow-xs"
                      />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-[#6d5644] bg-[#faf5ec] px-2 py-0.5 rounded-full border border-[#ebdcc8]">
                    {rev.date}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-[#26170d] text-sm sm:text-base mb-2 leading-snug">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-[#553f2e] font-light leading-relaxed mb-4">
                  {rev.text}
                </p>
              </div>

              <div className="pt-3 border-t border-[#ebdcc8] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#26170d] text-xs block">{rev.author}</span>
                  <span className="text-[10px] text-[#85705e]">{rev.location}</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-[#008755] bg-[#e6f7f0] border border-[#a2e6cc] px-2 py-0.5 rounded-full font-medium">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verificata</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to WhatsApp booking */}
        <div className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#dfcfb9] max-w-xl mx-auto shadow-xs">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#26170d] mb-1.5">
            Vieni a vivere l&apos;esperienza 22 Frasi
          </h3>
          <p className="text-xs text-[#6d5644] mb-4">
            Tavoli all&apos;aperto nel cortile o nella sala interna. Prenotazione consigliata.
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              "Ciao! Ho letto le recensioni e vorrei prenotare un tavolo da 22 Frasi a Bari."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Prenota un Tavolo su WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

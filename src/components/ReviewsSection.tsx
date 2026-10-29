"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { TripAdvisorIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { Star, CheckCircle, ExternalLink, ThumbsUp } from "lucide-react";

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
    <section id="recensioni" className="py-10 sm:py-24 bg-[#07130e] text-neutral-100 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00aa6c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00aa6c]/15 border border-[#00aa6c]/40 text-[#00e693] text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-2.5 sm:mb-4 shadow-sm">
            <TripAdvisorIcon className="w-3.5 h-3.5 text-[#00e693]" />
            <span>Valutato Eccellente su TripAdvisor</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-2 sm:mb-4">
            Dicono di Noi su <span className="text-amber-300 italic">TripAdvisor</span>
          </h2>
          <p className="text-[#a3c9b8] text-xs sm:text-lg max-w-xl mx-auto">
            Scopri le recensioni autentiche di chi ha provato i sapori della cucina pugliese da 22 Frasi a Bari.
          </p>
        </div>

        {/* Big TripAdvisor Score Card - Optimized for Mobile Grid */}
        <div className="mb-6 sm:mb-12 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0d261c] via-[#091f16] to-[#0d261c] border border-[#2a6d58] shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center">
            {/* Main TripAdvisor Rating */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-r md:border-r border-[#1b4d3e]/70 pr-2 sm:pr-6">
              <div className="flex items-center gap-1.5 mb-1">
                <TripAdvisorIcon className="w-5 h-5 sm:w-8 sm:h-8 text-[#00aa6c]" />
                <span className="font-serif font-bold text-base sm:text-2xl text-white tracking-wide">
                  5.0 ★
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#00aa6c] my-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-[#00aa6c] inline-block shadow-sm"
                  />
                ))}
              </div>
              <span className="text-[10px] sm:text-xs text-[#a3c9b8] mt-0.5 block">Voto Massimo 5/5</span>
            </div>

            {/* Quick stats */}
            <div className="flex flex-col items-center text-center md:border-r border-[#1b4d3e]/70 md:pr-6">
              <span className="text-xl sm:text-3xl font-serif font-bold text-amber-300">100%</span>
              <span className="text-[10px] sm:text-xs text-[#a3c9b8] uppercase tracking-wider mt-0.5">
                Positive
              </span>
              <span className="text-[9px] sm:text-[11px] text-neutral-300">Cucina &amp; Servizio</span>
            </div>

            <div className="hidden md:flex flex-col items-center text-center border-r border-[#1b4d3e] pr-6">
              <span className="text-3xl font-serif font-bold text-white">Bari Centro</span>
              <span className="text-xs text-[#a3c9b8] uppercase tracking-wider mt-1">
                Via Putignani, 144
              </span>
              <span className="text-[11px] text-neutral-300 mt-1">Nel cuore di Bari</span>
            </div>

            {/* CTA TripAdvisor */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-end justify-center pt-2 md:pt-0 border-t md:border-t-0 border-[#1b4d3e]/60">
              <a
                href={siteConfig.contact.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-[#00aa6c] hover:bg-[#00925d] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#00aa6c]/20 transition-all w-full justify-center"
              >
                <TripAdvisorIcon className="w-4 h-4 text-white" />
                <span>Leggi su TripAdvisor</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Pills - Horizontally scrollable on mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 overflow-x-auto no-scrollbar py-1 px-1 -mx-2 sm:mx-0 sm:justify-center whitespace-nowrap">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilter(opt.key)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === opt.key
                  ? "bg-[#00aa6c] text-white shadow-md shadow-[#00aa6c]/30 font-semibold"
                  : "bg-[#0e271d] text-[#a3c9b8] border border-[#1b4d3e] hover:border-amber-300/40 hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-[#0e271d] border border-[#1b4d3e] shadow-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-[#00aa6c]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full bg-[#00aa6c] inline-block shadow-sm"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-[#a3c9b8] bg-[#07130e] px-2.5 py-1 rounded-full border border-[#1b4d3e]">
                    {rev.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-white text-base sm:text-lg mb-2.5 leading-snug">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                {/* Review body */}
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                  {rev.text}
                </p>
              </div>

              {/* Footer info with verified badge */}
              <div className="pt-4 border-t border-[#1b4d3e]/70 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white text-xs block">{rev.author}</span>
                  <span className="text-[11px] text-[#a3c9b8]">{rev.location}</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#00e693] bg-[#00aa6c]/10 border border-[#00aa6c]/30 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verificata</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to WhatsApp booking */}
        <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-[#0d221a] via-[#091a13] to-[#0d221a] border border-[#1b4d3e] max-w-2xl mx-auto shadow-xl">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            Vieni a vivere l&apos;esperienza 22 Frasi
          </h3>
          <p className="text-xs sm:text-sm text-[#a3c9b8] mb-6">
            Tavoli all&apos;aperto nel cortile o nella sala interna. Prenotazione consigliata.
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              "Ciao! Ho letto le recensioni e vorrei prenotare un tavolo da 22 Frasi a Bari."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-950/70 hover:scale-105 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Prenota un Tavolo su WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

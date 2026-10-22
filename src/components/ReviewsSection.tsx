"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { TripAdvisorIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { Star, CheckCircle, ExternalLink, ThumbsUp, MessageSquare, Award } from "lucide-react";

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("tutte");

  const filterOptions = [
    { key: "tutte", label: "Tutte le Recensioni" },
    { key: "pranzo", label: "Formula Pranzo 5€" },
    { key: "primi", label: "Riso Patate e Cozze & Primi" },
    { key: "taglieri", label: "Taglieri & Burrata" },
    { key: "carne", label: "Bombette & Brace" },
  ];

  const filteredReviews = siteConfig.reviews.filter((rev) => {
    if (activeFilter === "tutte") return true;
    if (activeFilter === "pranzo") return rev.dishHighlight?.toLowerCase().includes("pranzo");
    if (activeFilter === "primi")
      return (
        rev.dishHighlight?.toLowerCase().includes("riso") ||
        rev.dishHighlight?.toLowerCase().includes("orecchiette")
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
    <section id="recensioni" className="py-24 bg-[#07130e] text-neutral-100 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00aa6c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00aa6c]/15 border border-[#00aa6c]/40 text-[#00e693] text-xs uppercase tracking-widest font-bold mb-4 shadow-sm">
            <TripAdvisorIcon className="w-4 h-4 text-[#00e693]" />
            <span>Valutato Eccellente su TripAdvisor</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Dicono di Noi su <span className="text-amber-300 italic">TripAdvisor</span>
          </h2>
          <p className="text-[#a3c9b8] text-base sm:text-lg">
            La soddisfazione dei nostri ospiti è il nostro ingrediente più prezioso. Scopri le recensioni verificate di chi ha provato i nostri primi baresi, i taglieri e le nostre formule pranzo.
          </p>
        </div>

        {/* Big TripAdvisor Score Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d261c] via-[#091f16] to-[#0d261c] border border-[#2a6d58] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Main TripAdvisor Rating */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[#1b4d3e] pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center gap-2 mb-2">
                <TripAdvisorIcon className="w-8 h-8 text-[#00aa6c]" />
                <span className="font-serif font-bold text-2xl text-white tracking-wide">
                  TripAdvisor
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-5xl font-bold font-serif text-white">5.0</span>
                <div>
                  {/* 5 Green Bubbles */}
                  <div className="flex items-center gap-1 text-[#00aa6c]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full bg-[#00aa6c] inline-block shadow-sm"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#a3c9b8] font-medium mt-1 block">
                    Eccellente • 5.0 su 5.0
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendation Stats */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[#1b4d3e] pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                <ThumbsUp className="w-5 h-5" />
                <span className="text-3xl font-serif text-white">98%</span>
              </div>
              <p className="text-sm font-semibold text-neutral-200">
                Consigliato dai Clienti
              </p>
              <p className="text-xs text-[#a3c9b8] mt-0.5">
                Riconosciuto tra i migliori bistrò pugliesi di Bari
              </p>
            </div>

            {/* TheFork & Punteggio Locale */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[#1b4d3e] pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-3xl font-serif text-white">8.9</span>
                <span className="text-xs text-neutral-400 font-sans">/ 10</span>
              </div>
              <p className="text-sm font-semibold text-neutral-200">
                TheFork & Restaurant Guru
              </p>
              <p className="text-xs text-[#a3c9b8] mt-0.5">
                Oltre 240 recensioni positive verificate
              </p>
            </div>

            {/* CTA to TripAdvisor */}
            <div className="flex flex-col items-center justify-center">
              <a
                href={siteConfig.contact.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00aa6c] hover:bg-[#00925d] text-white font-bold text-sm shadow-lg shadow-[#00aa6c]/30 hover:shadow-[#00aa6c]/50 transition-all duration-200 group active:scale-95"
              >
                <TripAdvisorIcon className="w-5 h-5 text-white" />
                <span>Leggi su TripAdvisor</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <span className="text-[11px] text-[#a3c9b8] mt-2 text-center">
                Visualizza tutte le opinioni dei clienti
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilter(opt.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === opt.key
                  ? "bg-amber-400 text-[#07130e] font-bold shadow-md shadow-amber-400/20"
                  : "bg-[#0e271d] text-neutral-300 hover:bg-[#16382b] hover:text-white border border-[#1b4d3e]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#0a1b14] border border-[#1b4d3e] hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header: Author + TripAdvisor Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/30 to-[#1b4d3e] border border-amber-400/40 flex items-center justify-center font-bold text-amber-300 text-sm">
                      {rev.author.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm leading-tight">
                        {rev.author}
                      </h3>
                      <p className="text-[11px] text-[#a3c9b8]">{rev.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#00aa6c]/10 border border-[#00aa6c]/30 text-[#00e693] text-[10px] font-semibold">
                    <TripAdvisorIcon className="w-3 h-3" />
                    <span>Verificata</span>
                  </div>
                </div>

                {/* Rating Green Bubbles + Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full bg-[#00aa6c] inline-block shadow-xs"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">{rev.date}</span>
                </div>

                {/* Review Title */}
                <h4 className="font-serif font-bold text-white text-base mb-2 leading-snug">
                  &ldquo;{rev.title}&rdquo;
                </h4>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                  {rev.text}
                </p>
              </div>

              {/* Footer: Dish Tag */}
              {rev.dishHighlight && (
                <div className="mt-5 pt-4 border-t border-[#1b4d3e]/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#a3c9b8]">Piatto provato:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-semibold">
                    {rev.dishHighlight}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Leave a review box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#0e271d] to-[#07130e] border border-[#2a6d58] shadow-xl text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#00aa6c]/20 border border-[#00aa6c]/40 text-[#00e693] flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">
            Sei stato nostro ospite da 22 Frasi?
          </h3>
          <p className="text-[#a3c9b8] text-sm max-w-xl mx-auto mb-6">
            La tua esperienza ci aiuta a crescere ogni giorno e permette ad altri appassionati della vera cucina pugliese di trovarci nel centro di Bari.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.contact.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00aa6c] hover:bg-[#00925d] text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <TripAdvisorIcon className="w-4 h-4" />
              <span>Scrivi una Recensione su TripAdvisor</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                "Ciao! Vorrei prenotare un tavolo da 22 Frasi - Il bistrò di Puglia."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Prenota un Tavolo su WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

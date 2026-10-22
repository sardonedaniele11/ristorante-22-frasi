"use client";

import { useState } from "react";
import { menuCategories, lunchFormulas } from "@/data/menuData";
import { siteConfig } from "@/config/site";
import { Utensils, Search, Sparkles, CheckCircle2, MessageCircle, Clock, ShoppingBag } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("primi");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = menuCategories
    .map((category) => {
      if (!searchQuery.trim()) {
        return category;
      }
      const q = searchQuery.toLowerCase();
      const filteredItems = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q)) ||
          category.name.toLowerCase().includes(q)
      );
      return {
        ...category,
        items: filteredItems,
      };
    })
    .filter((cat) => cat.items.length > 0);

  const getWhatsAppBookingUrl = (subject: string) => {
    const text = `Ciao! Vorrei informazioni/prenotare per: ${subject} presso 22 Frasi a Bari.`;
    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="py-24 bg-[#07130e] text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4d3e]/50 border border-[#2a6d58] text-amber-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Utensils className="w-3.5 h-3.5" />
            <span>Menù Ufficiale del Bistrò</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Specialità Gastronomiche <span className="text-amber-300 italic">&amp; Caffetteria</span>
          </h2>
          <p className="text-[#a3c9b8] text-base sm:text-lg">
            Dalla pasta fresca alle braci, dalla rosticceria ai piatti pronti per l'asporto, fino alle convenienti formule pranzo e agli aperitivi pugliesi.
          </p>
        </div>

        {/* ============================================================ */}
        {/* SOLO A PRANZO / ONLY LUNCH FORMULAS */}
        {/* ============================================================ */}
        <div className="mb-20">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Solo a Pranzo • Only Lunch</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Le Nostre Formule Menù Pausa Pranzo
            </h3>
            <p className="text-xs sm:text-sm text-[#a3c9b8] mt-1">
              Piatti caldi cucinati ogni mattina • Acqua e coperto sempre inclusi!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {lunchFormulas.map((formula, i) => (
              <div
                key={i}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                  formula.highlight
                    ? "bg-gradient-to-b from-[#184635] to-[#0c241b] border-2 border-amber-400 shadow-2xl shadow-amber-400/10 transform md:-translate-y-2"
                    : "bg-[#0b1f17] border border-[#1b4d3e] hover:border-[#2a6d58] shadow-xl"
                }`}
              >
                {formula.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-[#07130e] text-[11px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
                    {formula.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-amber-300 tracking-tight">
                      {formula.price}
                    </span>
                    <span className="text-xs uppercase font-mono tracking-wider text-[#a3c9b8]">
                      A persona
                    </span>
                  </div>

                  <h4 className="text-xl font-serif font-bold text-white mb-4">
                    {formula.title}
                  </h4>

                  <ul className="space-y-3 mb-8">
                    {formula.includes.map((inc, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppBookingUrl(`Formula Pranzo da ${formula.price}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                    formula.highlight
                      ? "bg-amber-400 hover:bg-amber-300 text-[#07130e]"
                      : "bg-[#16382b] hover:bg-[#1f4c3b] text-neutral-100 border border-[#2a6d58]"
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Prenota Tavolo</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* SEARCH & CATEGORY FILTER */}
        {/* ============================================================ */}
        <div className="mb-10">
          {/* Search Input */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a3c9b8]" />
            <input
              type="text"
              placeholder="Cerca un piatto (es. riso patate e cozze, polpo, panzerotti, caffè)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0b1f17] border border-[#1b4d3e] rounded-2xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Category Tabs (visible when not searching) */}
          {!searchQuery && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === "all"
                    ? "bg-amber-400 text-[#07130e] font-bold shadow-md"
                    : "bg-[#0b1f17] text-neutral-300 hover:bg-[#16382b] border border-[#1b4d3e]"
                }`}
              >
                Tutto il Menù
              </button>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-amber-400 text-[#07130e] font-bold shadow-md"
                      : "bg-[#0b1f17] text-neutral-300 hover:bg-[#16382b] border border-[#1b4d3e]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* MENU ITEMS GRID */}
        {/* ============================================================ */}
        <div className="space-y-14 max-w-5xl mx-auto">
          {filteredCategories
            .filter((category) => activeCategory === "all" || searchQuery || category.id === activeCategory)
            .map((category) => (
              <div key={category.id} className="bg-[#0b1f17]/90 rounded-3xl p-6 sm:p-10 border border-[#1b4d3e] shadow-xl">
                {/* Category Header */}
                <div className="border-b border-[#1b4d3e]/80 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                      {category.name}
                    </h3>
                    {category.subtitle && (
                      <p className="text-xs sm:text-sm text-amber-300/90 mt-1 font-light">
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                  <a
                    href={getWhatsAppBookingUrl(category.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>Ordina / Prenota</span>
                  </a>
                </div>

                {/* Items List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#07130e]/80 border border-[#1b4d3e]/50 hover:border-[#2a6d58] transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-white text-sm sm:text-base">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-[#a3c9b8] mt-1 font-light leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {item.price && (
                          <span className="font-mono font-bold text-amber-300 text-sm sm:text-base whitespace-nowrap">
                            {item.price}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* ============================================================ */}
        {/* DISCLAIMER / ALLERGEN NOTICE */}
        {/* ============================================================ */}
        <div className="mt-16 max-w-3xl mx-auto p-6 rounded-2xl bg-[#0b1f17] border border-[#1b4d3e] text-center text-xs text-[#a3c9b8] leading-relaxed space-y-2">
          <p className="font-medium text-neutral-200">
            * Nel menù sono riportate le voci di tutti i prodotti che noi cuciniamo nel corso dell'intero anno.
            I nostri piatti variano ogni giorno, anche in base alla stagione e alla disponibilità delle materie prime fresche.
          </p>
          <p className="text-[11px] text-neutral-400">
            Per informazioni su allergeni, intolleranze alimentari o richieste per piatti personalizzati, il nostro personale è a vostra completa disposizione anche su WhatsApp o telefonicamente.
          </p>
        </div>
      </div>
    </section>
  );
}

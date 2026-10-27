"use client";

import { useState } from "react";
import { completeMenu, MenuItem } from "@/data/restaurantData";
import { siteConfig } from "@/config/site";
import { Utensils, Wine, Coffee, Flame, Fish, Salad, Cake, FileText, Download, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function CompleteMenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("tutti");

  const categories = [
    { key: "tutti", label: "Tutto il Menù", icon: Utensils },
    { key: "antipasti", label: "Antipasti", icon: Salad },
    { key: "primi", label: "Primi Piatti", icon: Utensils },
    { key: "secondi-pesce", label: "Secondi di Mare", icon: Fish },
    { key: "secondi-carne", label: "Secondi & Brace", icon: Flame },
    { key: "contorni", label: "Contorni", icon: Salad },
    { key: "dolci", label: "Dolci & Dessert", icon: Cake },
    { key: "caffe", label: "Caffetteria", icon: Coffee },
    { key: "vini", label: "Cantina & Vini", icon: Wine },
    { key: "birre-bibite", label: "Birre & Bibite", icon: Wine },
  ];

  const filteredItems = completeMenu.filter((item) => {
    if (activeCategory === "tutti") return true;
    if (activeCategory === "vini") {
      return (
        item.category === "vini-rose" ||
        item.category === "vini-rossi" ||
        item.category === "vini-bianchi" ||
        item.category === "bollicine"
      );
    }
    if (activeCategory === "birre-bibite") {
      return (
        item.category === "birre" ||
        item.category === "bibite" ||
        item.category === "amari"
      );
    }
    return item.category === activeCategory;
  });

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Ciao! Vorrei prenotare un tavolo da 22 Frasi a Bari per gustare i vostri piatti tipici."
  )}`;

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#07130e] text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b4d3e]/50 border border-[#2a6d58] text-[#d89d42] text-xs uppercase tracking-widest font-semibold mb-4 shadow-sm">
            <Utensils className="w-3.5 h-3.5" />
            <span>Cucina Caratteristica Pugliese</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Il Menù <span className="text-[#d89d42] italic">Completo del Bistrò</span>
          </h2>

          <p className="text-base sm:text-lg text-[#a3c9b8] font-light leading-relaxed mb-6">
            Dalla celebre degustazione barese alle carni frollate alla brace, fino ai grandi vini della nostra cantina. Tutti i piatti della tovaglietta serale e del pranzo.
          </p>

          {/* Official PDF Downloads */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/docs/22-FRASI-Flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8c1d28] hover:bg-[#a12330] text-white text-xs font-semibold shadow-md transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Scarica Flyer Ufficiale (PDF)</span>
              <Download className="w-3.5 h-3.5 ml-1" />
            </a>

            <a
              href="/docs/22-Frasi-Menu-Sera.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0e271d] hover:bg-[#16382b] text-[#d89d42] border border-[#2a6d58] text-xs font-semibold shadow-md transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Scarica Menù Sera (PDF)</span>
              <Download className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#d89d42] text-[#07130e] font-bold shadow-lg shadow-[#d89d42]/20 scale-105"
                    : "bg-[#0e271d] text-[#c2dfd3] border border-[#1b4d3e] hover:border-[#d89d42]/50 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-[#0d221a] border border-[#1b4d3e] hover:border-[#d89d42]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <h3 className="font-serif font-bold text-white text-base sm:text-lg">
                    {item.name}
                  </h3>
                  <span className="font-mono font-bold text-sm sm:text-base text-[#d89d42] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>

                {item.nameEn && (
                  <span className="text-[11px] text-[#86ab9a] italic block mb-2 font-serif">
                    {item.nameEn}
                  </span>
                )}

                {item.description && (
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-3">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#1b4d3e]/40 mt-2">
                {item.tag ? (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#8c1d28]/25 border border-[#8c1d28]/60 text-rose-300 px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                ) : (
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
                    22 Frasi • Bari
                  </span>
                )}

                {item.notes && (
                  <span className="text-[11px] text-amber-300 font-medium">
                    {item.notes}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Coperto note & WhatsApp booking */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0d2821] via-[#10382e] to-[#0d2821] border border-[#2a6d58] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-wider text-[#d89d42] font-semibold mb-2">
              <Check className="w-4 h-4 text-[#d89d42]" />
              <span>Coperto Serale: € 3,50 (Incluso nelle formule pranzo)</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              Desideri riservare un tavolo o richiedere un menù speciale?
            </h4>
            <p className="text-xs sm:text-sm text-[#a3c9b8] font-light">
              Eventi privati, catering, cene conviviali e pause pranzo nel nostro giardino o nelle sale interne.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-950/70 hover:scale-105 transition-all whitespace-nowrap"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white" />
            <span>Prenota su WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

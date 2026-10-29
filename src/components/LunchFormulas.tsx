import { lunchFormulas } from "@/data/restaurantData";
import { siteConfig } from "@/config/site";
import { Clock, Check, Utensils, Sparkles, ShoppingBag } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function LunchFormulas() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Ciao! Vorrei informazioni sulle formule pranzo di 22 Frasi o prenotare un tavolo."
  )}`;

  return (
    <section id="formule-pranzo" className="py-10 sm:py-16 bg-[#0a1f19] text-neutral-100 relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8c1d28]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d89d42]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8c1d28]/25 border border-[#8c1d28]/60 text-rose-200 text-[11px] sm:text-xs uppercase tracking-wider font-bold mb-2.5 sm:mb-3 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-rose-300" />
            <span>Solo a Pranzo • Lun – Sab</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-2">
            Le Nostre <span className="text-[#d89d42] italic">Formule Pranzo</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#c2dfd3] font-light leading-relaxed mb-3 max-w-xl mx-auto">
            Ogni giorno piatti caldi espressi della tradizione barese preparati freschi con ingredienti di prima scelta.
          </p>

          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium text-amber-200 bg-[#071712] border border-[#1b4d3e] px-3 py-1.5 rounded-lg">
            <Sparkles className="w-3 h-3 text-[#d89d42]" />
            <span>Tutte le formule includono <strong>Acqua &amp; Coperto</strong></span>
          </div>
        </div>

        {/* Formulas Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          {lunchFormulas.map((formula) => (
            <div
              key={formula.id}
              className={`relative rounded-xl sm:rounded-2xl p-3 sm:p-4.5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${
                formula.popular
                  ? "bg-gradient-to-b from-[#143d32] to-[#0d2821] border-2 border-[#d89d42] shadow-xl shadow-[#d89d42]/10"
                  : "bg-[#0d2821] border border-[#1b4d3e] hover:border-[#8c1d28]/60 shadow-md"
              }`}
            >
              {formula.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#d89d42] text-[#07130e] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                  Più Richiesta
                </div>
              )}

              <div>
                {/* Price Badge styled like the original flyer */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="w-11 h-9 sm:w-14 sm:h-12 rounded-lg sm:rounded-xl bg-[#8c1d28] border border-rose-400/30 flex items-center justify-center shadow-md shadow-[#8c1d28]/30">
                    <span className="font-serif font-extrabold text-lg sm:text-2xl text-white tracking-tight">
                      {formula.price}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-bold text-rose-300 uppercase tracking-wider bg-[#8c1d28]/20 border border-[#8c1d28]/40 px-1.5 py-0.5 rounded">
                      <ShoppingBag className="w-2.5 h-2.5" />
                      <span>{formula.takeawayPrice}</span>
                    </div>
                    <span className="block text-[8px] sm:text-[9px] text-neutral-400 mt-0.5">
                      {formula.includes}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-base font-serif font-bold text-white mb-1 leading-snug line-clamp-2">
                  {formula.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-[#a3c9b8] leading-tight sm:leading-relaxed mb-2.5 font-light line-clamp-3">
                  {formula.description}
                </p>
              </div>

              {/* Bottom features checklist */}
              <div className="pt-2 border-t border-[#1b4d3e]/70 space-y-0.5 text-[10px] sm:text-[11px] text-neutral-300">
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#d89d42] shrink-0" />
                  <span className="truncate">Scelta del giorno</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#d89d42] shrink-0" />
                  <span className="truncate">Acqua &amp; coperto inc.</span>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Info Box in Grid */}
          <div className="col-span-2 sm:col-span-1 rounded-xl sm:rounded-2xl p-3 sm:p-4.5 bg-gradient-to-br from-[#8c1d28]/25 via-[#0d2821] to-[#07130e] border border-[#8c1d28]/50 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#8c1d28] text-white flex items-center justify-center mb-2 shadow-md">
                <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <h3 className="text-xs sm:text-base font-serif font-bold text-white mb-1">
                Pausa Pranzo Rapida &amp; Genuina
              </h3>
              <p className="text-[11px] sm:text-xs text-[#c2dfd3] leading-relaxed mb-2.5">
                Primi caldi della tradizione barese preparati al momento nel cuore di Bari.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              <span>Info &amp; Prenotazioni</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

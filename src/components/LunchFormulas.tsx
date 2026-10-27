import { lunchFormulas } from "@/data/restaurantData";
import { siteConfig } from "@/config/site";
import { Clock, Check, Utensils, Sparkles, ShoppingBag } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function LunchFormulas() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Ciao! Vorrei informazioni sulle formule pranzo di 22 Frasi o prenotare un tavolo."
  )}`;

  return (
    <section id="formule-pranzo" className="py-20 sm:py-24 bg-[#0a1f19] text-neutral-100 relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8c1d28]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d89d42]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8c1d28]/25 border border-[#8c1d28]/60 text-rose-200 text-xs sm:text-sm uppercase tracking-wider font-bold mb-4 shadow-sm">
            <Clock className="w-4 h-4 text-rose-300" />
            <span>Solo a Pranzo • Dal Lunedì al Sabato</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Le Nostre <span className="text-[#d89d42] italic">Formule Pranzo</span>
          </h2>

          <p className="text-base sm:text-lg text-[#c2dfd3] font-light leading-relaxed mb-3">
            Ogni giorno piatti caldi espressi della tradizione barese preparati freschi con ingredienti di prima scelta.
          </p>

          <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-medium text-amber-200 bg-[#071712] border border-[#1b4d3e] px-4 py-2 rounded-xl">
            <Sparkles className="w-4 h-4 text-[#d89d42]" />
            <span>Tutte le formule includono <strong>Acqua &amp; Coperto</strong></span>
          </div>
        </div>

        {/* Formulas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {lunchFormulas.map((formula) => (
            <div
              key={formula.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                formula.popular
                  ? "bg-gradient-to-b from-[#143d32] to-[#0d2821] border-2 border-[#d89d42] shadow-2xl shadow-[#d89d42]/15"
                  : "bg-[#0d2821] border border-[#1b4d3e] hover:border-[#8c1d28]/60 shadow-xl"
              }`}
            >
              {formula.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d89d42] text-[#07130e] text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  Più Richiesta
                </div>
              )}

              <div>
                {/* Price Badge styled like the original flyer */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-20 h-16 rounded-2xl bg-[#8c1d28] border border-rose-400/30 flex items-center justify-center shadow-lg shadow-[#8c1d28]/30">
                    <span className="font-serif font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                      {formula.price}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-300 uppercase tracking-wider bg-[#8c1d28]/20 border border-[#8c1d28]/40 px-2 py-0.5 rounded-lg">
                      <ShoppingBag className="w-3 h-3" />
                      <span>Asporto {formula.takeawayPrice}</span>
                    </div>
                    <span className="block text-[10px] text-neutral-400 mt-1">
                      {formula.includes}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-white mb-2 leading-snug">
                  {formula.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#a3c9b8] leading-relaxed mb-6 font-light">
                  {formula.description}
                </p>
              </div>

              {/* Bottom features checklist */}
              <div className="pt-4 border-t border-[#1b4d3e]/70 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d89d42]" />
                  <span>Primo o secondo a scelta del giorno</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d89d42]" />
                  <span>Acqua e pane/coperto inclusi</span>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Info Box in Grid */}
          <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#8c1d28]/25 via-[#0d2821] to-[#07130e] border border-[#8c1d28]/50 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8c1d28] text-white flex items-center justify-center mb-4 shadow-md">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Pausa Pranzo di Qualità
              </h3>
              <p className="text-xs text-[#c2dfd3] leading-relaxed mb-4">
                Primi caldi della tradizione barese cucinati all&apos;istante per regalarti una pausa pranzo gustosa, rapida e conveniente nel pieno centro di Bari.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Prenota un Tavolo a Pranzo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

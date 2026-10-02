import { siteConfig } from "@/config/site";
import { Phone, ArrowDown, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-neutral-950 overflow-hidden py-24 sm:py-32">
      {/* Background with overlay and subtle warm gradient glow */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-25 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-transparent to-neutral-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-wide mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Ristorante • Cocktail Bar • Esperienza Gastronomica</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6">
          Ristorante <span className="text-amber-400 italic">22 Frasi</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-300 font-light leading-relaxed mb-10">
          Un viaggio fatto di convivialità, materie prime eccellenti e calore autentico.
          Lasciati conquistare dalle nostre creazioni culinarie e dai nostri signature cocktail.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white" />
            <span>Prenota un Tavolo su WhatsApp</span>
          </a>

          <a
            href="#galleria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 text-amber-400 border border-amber-500/30 font-medium text-base px-7 py-4 rounded-xl transition-all"
          >
            <span>Guarda la Galleria</span>
            <ArrowDown className="w-4 h-4 text-amber-400 animate-bounce" />
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-neutral-900/60 text-neutral-300 border border-neutral-700 font-medium text-base px-6 py-4 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4 text-neutral-400" />
            <span>Chiamaci</span>
          </a>
        </div>

        {/* Feature quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-neutral-800/80 text-left">
          <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/50">
            <span className="text-amber-400 font-serif text-2xl font-bold block">100%</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Prodotti Freschi</span>
          </div>
          <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/50">
            <span className="text-amber-400 font-serif text-2xl font-bold block">Cantina</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Vini Selezionati</span>
          </div>
          <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/50">
            <span className="text-amber-400 font-serif text-2xl font-bold block">1 Click</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Prenotazione Diretta</span>
          </div>
          <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/50">
            <span className="text-amber-400 font-serif text-2xl font-bold block">Eventi</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Cene & Ricorrenze</span>
          </div>
        </div>
      </div>
    </section>
  );
}

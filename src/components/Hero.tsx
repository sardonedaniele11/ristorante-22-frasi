import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, ArrowDown, Sparkles, Utensils, Clock } from "lucide-react";
import { WhatsAppIcon, TripAdvisorIcon } from "@/components/SocialIcons";
import Link from "next/link";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center bg-[#071712] overflow-hidden py-10 sm:py-24">
      {/* Background with real courtyard photo and deep teal overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-15 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/location/giardino-dehor-ombrelloni.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071712] via-[#071712]/85 to-[#071712]/90" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8c1d28]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#007a68]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Logo Presentation from PDFs */}
        <div className="mb-4 sm:mb-6 relative group w-full max-w-xs sm:max-w-lg px-2">
          <div className="relative h-24 sm:h-36 w-full filter drop-shadow-[0_8px_25px_rgba(216,157,66,0.22)] group-hover:scale-105 transition-all duration-300">
            <Image
              src={siteConfig.logo}
              alt="22 Frasi - Cucina Caratteristica Pugliese"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#164e43]/60 border border-[#2a6d58] text-[#d89d42] text-[11px] sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#d89d42]" />
          <span className="font-serif">Via Nicolò Putignani, 144 • Bari Centro</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-2 sm:mb-4">
          Cucina Caratteristica <span className="text-[#d89d42] italic">Pugliese</span>
        </h1>

        {/* Subtitle directly from Flyer */}
        <p className="text-sm sm:text-lg text-[#c2dfd3] font-serif italic mb-3 sm:mb-5 max-w-2xl">
          Primi caldi della tradizione • Formule Pranzo da 7€ • Carni alla brace &amp; Dehor all&apos;aperto
        </p>

        <p className="max-w-2xl mx-auto text-xs sm:text-base text-neutral-300 font-light leading-relaxed mb-6 sm:mb-10 line-clamp-3 sm:line-clamp-none">
          Benvenuti nel bistrò dove il cibo è condivisione, tempo dedicato e calore di casa. Dalla vera degustazione barese alle formule veloci per la pausa pranzo, con cortile esterno riservato.
        </p>

        {/* CTA Buttons - Optimized for Mobile Grid */}
        <div className="w-full max-w-md sm:max-w-none mb-8 sm:mb-12">
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2 sm:gap-3.5 mb-2 sm:mb-3">
            <a
              href="#formule-pranzo"
              className="inline-flex items-center justify-center gap-1.5 bg-[#8c1d28] hover:bg-[#a12330] text-white font-bold text-xs sm:text-base px-3 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#8c1d28]/30 transition-all text-center"
            >
              <Clock className="w-3.5 h-3.5 text-rose-300 shrink-0" />
              <span>Pranzo da 7€</span>
            </a>

            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-1.5 bg-[#d89d42] hover:bg-[#e6ab4e] text-[#07130e] font-bold text-xs sm:text-base px-3 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#d89d42]/20 transition-all text-center"
            >
              <Utensils className="w-3.5 h-3.5 text-[#07130e] shrink-0" />
              <span>Menù Completo</span>
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-emerald-950/70 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>Prenota Tavolo su WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Feature quick stats - Compact on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 pt-6 border-t border-[#1b4d3e]/50 text-left w-full">
          <div className="p-2.5 sm:p-4 rounded-xl bg-[#0d2821]/70 border border-[#1b4d3e]/60">
            <span className="text-[#8c1d28] font-serif text-lg sm:text-2xl font-bold block">Da 7 €</span>
            <span className="text-[10px] sm:text-xs text-[#a3c9b8] uppercase tracking-wider">Formule Pranzo</span>
          </div>
          <div className="p-2.5 sm:p-4 rounded-xl bg-[#0d2821]/70 border border-[#1b4d3e]/60">
            <span className="text-[#d89d42] font-serif text-lg sm:text-2xl font-bold block">100% Pugliese</span>
            <span className="text-[10px] sm:text-xs text-[#a3c9b8] uppercase tracking-wider">Prodotti Tipici</span>
          </div>
          <div className="p-2.5 sm:p-4 rounded-xl bg-[#0d2821]/70 border border-[#1b4d3e]/60">
            <span className="text-[#00aa6c] font-serif text-lg sm:text-2xl font-bold block">5.0 ★</span>
            <span className="text-[10px] sm:text-xs text-[#a3c9b8] uppercase tracking-wider">TripAdvisor</span>
          </div>
          <div className="p-2.5 sm:p-4 rounded-xl bg-[#0d2821]/70 border border-[#1b4d3e]/60">
            <span className="text-white font-serif text-lg sm:text-2xl font-bold block">Giardino</span>
            <span className="text-[10px] sm:text-xs text-[#a3c9b8] uppercase tracking-wider">Dehor Esterno</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Sparkles, Utensils, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import Link from "next/link";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative flex items-center justify-center bg-gradient-to-b from-[#fbf8f2] via-[#f7f1e5] to-[#f4ecdf] overflow-hidden pt-8 pb-10 sm:pt-14 sm:pb-16 border-b border-[#dfcfb9]">
      {/* Background warm soft ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d89d42]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8c1d28]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Logo Presentation - Crisp & Enhanced */}
        <div className="mb-3 sm:mb-5 relative group w-full max-w-xs sm:max-w-md px-2">
          <div className="relative h-24 sm:h-32 w-full filter drop-shadow-[0_4px_20px_rgba(60,34,15,0.08)] group-hover:scale-105 transition-all duration-300">
            <Image
              src="/images/logo-clean.png"
              alt="22 Frasi - Cucina Caratteristica Pugliese"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-[11px] sm:text-xs font-semibold tracking-wide mb-3 sm:mb-4 shadow-xs">
          <Sparkles className="w-3 h-3 text-[#d89d42]" />
          <span className="font-serif">Via Nicolò Putignani, 144 • Bari Centro</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#26170d] tracking-tight leading-[1.15] mb-2 sm:mb-3">
          Cucina Caratteristica <span className="text-[#8c1d28] italic">Pugliese</span>
        </h1>

        {/* Subtitle directly from Flyer */}
        <p className="text-xs sm:text-base text-[#6d5644] font-serif italic mb-2 sm:mb-3 max-w-2xl">
          Primi caldi della tradizione • Formule Pranzo da 7€ • Carni alla brace &amp; Dehor all&apos;aperto
        </p>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#553f2e] font-light leading-relaxed mb-5 sm:mb-7">
          Benvenuti nel bistrò dove il cibo è condivisione, tempo dedicato e calore di casa. Dalla vera degustazione barese alle formule veloci per la pausa pranzo, con cortile esterno riservato.
        </p>

        {/* CTA Buttons */}
        <div className="w-full max-w-md sm:max-w-none mb-5 sm:mb-7">
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-2.5">
            <a
              href="#formule-pranzo"
              className="inline-flex items-center justify-center gap-1.5 bg-[#8c1d28] hover:bg-[#a12330] text-white font-bold text-xs sm:text-sm px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md shadow-[#8c1d28]/25 transition-all text-center"
            >
              <Clock className="w-3.5 h-3.5 text-rose-200 shrink-0" />
              <span>Formule da 7€</span>
            </a>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-1.5 bg-[#d89d42] hover:bg-[#e6ab4e] text-[#26170d] font-bold text-xs sm:text-sm px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md shadow-[#d89d42]/20 transition-all text-center"
            >
              <Utensils className="w-3.5 h-3.5 text-[#26170d] shrink-0" />
              <span>Menù e PDF</span>
            </Link>
          </div>

          <div className="flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>Prenota Tavolo su WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Feature quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 pt-4 border-t border-[#dfcfb9] text-left w-full">
          <div className="p-2.5 sm:p-3 rounded-xl bg-white/80 border border-[#dfcfb9] shadow-xs">
            <span className="text-[#8c1d28] font-serif text-base sm:text-xl font-bold block">Da 7 €</span>
            <span className="text-[10px] sm:text-xs text-[#6d5644] uppercase tracking-wider">Formule Pranzo</span>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-white/80 border border-[#dfcfb9] shadow-xs">
            <span className="text-[#d89d42] font-serif text-base sm:text-xl font-bold block">100% Pugliese</span>
            <span className="text-[10px] sm:text-xs text-[#6d5644] uppercase tracking-wider">Prodotti Tipici</span>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-white/80 border border-[#dfcfb9] shadow-xs">
            <span className="text-[#00aa6c] font-serif text-base sm:text-xl font-bold block">5.0 ★</span>
            <span className="text-[10px] sm:text-xs text-[#6d5644] uppercase tracking-wider">TripAdvisor</span>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-white/80 border border-[#dfcfb9] shadow-xs">
            <span className="text-[#26170d] font-serif text-base sm:text-xl font-bold block">Giardino</span>
            <span className="text-[10px] sm:text-xs text-[#6d5644] uppercase tracking-wider">Dehor Esterno</span>
          </div>
        </div>
      </div>
    </section>
  );
}

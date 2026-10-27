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
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#071712] overflow-hidden py-16 sm:py-24">
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Logo Presentation from PDFs */}
        <div className="mb-6 relative group w-full max-w-md sm:max-w-lg px-4">
          <div className="relative h-32 sm:h-40 w-full filter drop-shadow-[0_10px_30px_rgba(216,157,66,0.25)] group-hover:scale-105 transition-all duration-300">
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#164e43]/60 border border-[#2a6d58] text-[#d89d42] text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#d89d42]" />
          <span className="font-serif">Via Nicolò Putignani, 144 • Bari Centro</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-4">
          Cucina Caratteristica <span className="text-[#d89d42] italic">Pugliese</span>
        </h1>

        {/* Subtitle directly from Flyer */}
        <p className="text-base sm:text-xl text-[#c2dfd3] font-serif italic mb-6 max-w-2xl">
          Primi caldi della tradizione • Formule Pranzo da 7€ • Carni alla brace &amp; Dehor all&apos;aperto
        </p>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-10">
          Benvenuti nel bistrò dove il cibo è condivisione, tempo dedicato e calore di casa. Dalla vera degustazione barese alle formule veloci per la pausa pranzo, con cortile esterno riservato.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none mb-12">
          <a
            href="#formule-pranzo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8c1d28] hover:bg-[#a12330] text-white font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-xl shadow-[#8c1d28]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Clock className="w-4 h-4 text-rose-300" />
            <span>Formule Pranzo da 7€</span>
          </a>

          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d89d42] hover:bg-[#e6ab4e] text-[#07130e] font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-xl shadow-[#d89d42]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Utensils className="w-4 h-4 text-[#07130e]" />
            <span>Scopri il Menù Completo</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-xl shadow-xl shadow-emerald-950/70 hover:shadow-emerald-900/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Prenota su WhatsApp</span>
          </a>
        </div>

        {/* Feature quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#1b4d3e]/50 text-left w-full">
          <div className="p-4 rounded-xl bg-[#0d2821]/70 border border-[#1b4d3e]/60">
            <span className="text-[#8c1d28] font-serif text-2xl font-bold block">Da 7 €</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">Formule Pranzo</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0d2821]/70 border border-[#1b4d3e]/60">
            <span className="text-[#d89d42] font-serif text-2xl font-bold block">100% Pugliese</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">Prodotti Tipici</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0d2821]/70 border border-[#1b4d3e]/60">
            <span className="text-[#d89d42] font-serif text-2xl font-bold block">Dehor Verde</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">Tavoli all&apos;Aperto</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0d2821]/70 border border-[#1b4d3e]/60">
            <span className="text-[#00e693] font-serif text-2xl font-bold block">5.0 ★</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">TripAdvisor Eccellenza</span>
          </div>
        </div>
      </div>
    </section>
  );
}

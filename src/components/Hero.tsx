import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, Sparkles, MapPin } from "lucide-react";
import { WhatsAppIcon, TripAdvisorIcon } from "@/components/SocialIcons";
import Link from "next/link";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#07130e] overflow-hidden py-16 sm:py-24">
      {/* Background purely styling - no photos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#1b4d3e]/30 via-emerald-950/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#07130e]/60 to-[#07130e]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Logo Presentation in Hero */}
        <div className="mb-8 relative group w-full max-w-sm sm:max-w-md px-4">
          <div className="relative h-28 sm:h-36 w-full filter drop-shadow-[0_10px_25px_rgba(250,204,21,0.25)] group-hover:scale-105 transition-all duration-300">
            <Image
              src={siteConfig.logo}
              alt="22 Frasi - Il bistrò di Puglia"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b4d3e]/40 border border-[#2a6d58] text-amber-300 text-xs sm:text-sm font-medium tracking-wide mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-serif italic">Bistrò &amp; Caffetteria a Bari • Via Nicolò Putignani, 144</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4">
          Cucina Pugliese <span className="text-amber-300 italic">Autentica</span>
        </h1>

        <p className="text-base sm:text-xl text-[#b8d8cb] font-serif italic mb-6">
          Primi piatti della tradizione barese • Carni alla brace • Taglieri tipici &amp; Vini di Puglia
        </p>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-10">
          Dai sapori genuini cucinati ogni giorno con passione alle cene conviviali e gli aperitivi nel centro di Bari. Un bistrò intimo dove sentirsi a casa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-xl shadow-emerald-950/70 hover:shadow-emerald-900/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white" />
            <span>Prenota su WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#122e23] hover:bg-[#194031] text-neutral-200 border border-[#2a6d58] font-medium text-base px-6 py-4 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Chiama {siteConfig.contact.phoneDisplay}</span>
          </a>

          <Link
            href="/recensioni"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0e271d] hover:bg-[#16382b] text-[#00e693] border border-[#00aa6c]/40 font-medium text-base px-6 py-4 rounded-xl transition-all"
          >
            <TripAdvisorIcon className="w-4 h-4 text-[#00aa6c]" />
            <span>Recensioni 5.0 ★</span>
          </Link>
        </div>

        {/* Feature quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-8 border-t border-[#1b4d3e]/50 text-left w-full">
          <div className="p-4 rounded-xl bg-[#0e271d]/60 border border-[#1b4d3e]/60">
            <span className="text-amber-300 font-serif text-2xl font-bold block">Puglia DOC</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">Prodotti Tipici</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0e271d]/60 border border-[#1b4d3e]/60">
            <span className="text-amber-300 font-serif text-2xl font-bold block">Taglieri</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">Salumi &amp; Latticini</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0e271d]/60 border border-[#1b4d3e]/60">
            <span className="text-amber-300 font-serif text-2xl font-bold block">Cantina</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">Vini Pugliesi</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0e271d]/60 border border-[#1b4d3e]/60">
            <span className="text-[#00e693] font-serif text-2xl font-bold block">5.0 ★</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">TripAdvisor</span>
          </div>
        </div>
      </div>
    </section>
  );
}

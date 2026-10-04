import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, ArrowDown, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#07130e] overflow-hidden py-20 sm:py-28">
      {/* Background with overlay and dark olive atmosphere */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-20 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07130e] via-[#07130e]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130e]/95 via-transparent to-[#07130e]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Logo Presentation in Hero */}
        <div className="mb-6 relative group">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-emerald-950/80 bg-[#16382b] p-1.5 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={siteConfig.logo}
                alt="Logo 22 Frasi - Il bistrò di Puglia"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute -inset-2 rounded-3xl bg-amber-400/10 blur-xl -z-10 group-hover:bg-amber-400/20 transition-all" />
        </div>

        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b4d3e]/40 border border-[#2a6d58] text-amber-300 text-xs sm:text-sm font-medium tracking-wide mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-serif italic">22 Frasi • Il bistrò di Puglia</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4">
          Specialità Gastronomiche <span className="text-amber-300 italic">Pugliesi</span>
        </h1>

        <p className="text-lg sm:text-2xl text-[#b8d8cb] font-serif italic mb-6">
          {siteConfig.subtitle}
        </p>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-10">
          Un viaggio verace nei profumi e nei sapori autentici della nostra terra:
          burrate fresche, orecchiette, bombette, capocollo artigianale, taglieri ricchi e calici di Primitivo.
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
            <span>Prenota un Tavolo su WhatsApp</span>
          </a>

          <a
            href="#specialita"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#122e23] hover:bg-[#194031] text-amber-300 border border-[#2a6d58] font-medium text-base px-7 py-4 rounded-xl transition-all"
          >
            <span>Le Nostre Specialità</span>
            <ArrowDown className="w-4 h-4 text-amber-300 animate-bounce" />
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#122e23]/60 text-neutral-300 border border-neutral-700 font-medium text-base px-6 py-4 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4 text-neutral-400" />
            <span>Chiama Ora</span>
          </a>
        </div>

        {/* Feature quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[#1b4d3e]/50 text-left w-full">
          <div className="p-4 rounded-xl bg-[#0e271d]/60 border border-[#1b4d3e]/60">
            <span className="text-amber-300 font-serif text-2xl font-bold block">Puglia DOC</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">Prodotti Tipici</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0e271d]/60 border border-[#1b4d3e]/60">
            <span className="text-amber-300 font-serif text-2xl font-bold block">Taglieri</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">Salumi & Latticini</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0e271d]/60 border border-[#1b4d3e]/60">
            <span className="text-amber-300 font-serif text-2xl font-bold block">Cantina</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">Vini Pugliesi</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0e271d]/60 border border-[#1b4d3e]/60">
            <span className="text-amber-300 font-serif text-2xl font-bold block">1 Click</span>
            <span className="text-xs text-[#a3c9b8] uppercase tracking-wider">WhatsApp Diretto</span>
          </div>
        </div>
      </div>
    </section>
  );
}

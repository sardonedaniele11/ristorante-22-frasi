import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Sparkles, Utensils, MapPin } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import Link from "next/link";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative flex items-center justify-center bg-[#fbf8f2]/30 backdrop-blur-[1px] overflow-hidden pt-4 pb-4 sm:pt-6 sm:pb-6 border-b border-[#dfcfb9]/70">
      {/* Background warm soft ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#d89d42]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#8c1d28]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Official Logo Presentation - Ultra Compact */}
        <div className="mb-1.5 sm:mb-2 relative group w-full max-w-[220px] sm:max-w-xs px-2">
          <div className="relative h-14 sm:h-20 w-full filter drop-shadow-[0_2px_10px_rgba(60,34,15,0.06)] group-hover:scale-105 transition-all duration-300">
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
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-[10px] sm:text-[11px] font-semibold tracking-wide mb-1.5 sm:mb-2 shadow-xs">
          <Sparkles className="w-3 h-3 text-[#d89d42]" />
          <span className="font-serif">Via Nicolò Putignani, 144 • Bari Centro</span>
        </div>

        {/* Main Title & Tagline Compact */}
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#26170d] tracking-tight leading-tight mb-1">
          Cucina Caratteristica <span className="text-[#8c1d28] italic">Pugliese</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#6d5644] font-serif italic mb-2.5 sm:mb-3 max-w-xl">
          Primi caldi della tradizione • Formule Pranzo • Dehor all&apos;aperto
        </p>

        {/* Fast Action Buttons: Prenota, Menù PDF, Dove Siamo, Instagram, Facebook */}
        <div className="w-full max-w-2xl flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
            <span>Prenota</span>
          </a>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#faf5ec] text-[#8c1d28] border border-[#dfcfb9] font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all text-center"
          >
            <Utensils className="w-3.5 h-3.5 text-[#8c1d28] shrink-0" />
            <span>Menù PDF</span>
          </Link>

          <a
            href="#orari-e-contatti"
            className="inline-flex items-center justify-center gap-1.5 bg-[#f2e7d5] hover:bg-[#e7d8c1] text-[#26170d] border border-[#d6be9f] font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all text-center"
          >
            <MapPin className="w-3.5 h-3.5 text-[#8c1d28] shrink-0" />
            <span>Dove Siamo</span>
          </a>

          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#faf5ec] text-[#26170d] border border-[#dfcfb9] font-semibold text-xs sm:text-sm px-3 sm:px-3.5 py-2 rounded-xl shadow-xs transition-all text-center hover:border-[#c13584]/60 group"
            aria-label="Instagram 22 Frasi"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#c13584] group-hover:scale-110 transition-transform shrink-0" />
            <span>Instagram</span>
          </a>

          <a
            href={siteConfig.contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#faf5ec] text-[#26170d] border border-[#dfcfb9] font-semibold text-xs sm:text-sm px-3 sm:px-3.5 py-2 rounded-xl shadow-xs transition-all text-center hover:border-[#1877f2]/60 group"
            aria-label="Facebook 22 Frasi"
          >
            <FacebookIcon className="w-3.5 h-3.5 text-[#1877f2] group-hover:scale-110 transition-transform shrink-0" fill={true} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}

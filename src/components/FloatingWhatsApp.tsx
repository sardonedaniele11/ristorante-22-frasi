"use client";

import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <aside aria-label="Contatto rapido WhatsApp" className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3">
      {/* Tooltip hint on hover */}
      <span className="hidden sm:inline-block bg-neutral-900/90 text-white text-xs px-3 py-1.5 rounded-full border border-neutral-700 shadow-xl backdrop-blur-md">
        Prenota o chiedi info
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp per prenotare"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Subtle pulsing rings */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75" />
        <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />
      </a>
    </aside>
  );
}

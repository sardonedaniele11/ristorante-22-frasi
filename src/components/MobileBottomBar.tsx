"use client";

import { siteConfig } from "@/config/site";
import { Phone, MapPin } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/SocialIcons";

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#07130e]/95 backdrop-blur-lg border-t border-[#1b4d3e] px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        {/* Chiama */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-neutral-200 active:bg-[#16382b] transition-colors"
        >
          <Phone className="w-5 h-5 text-amber-300 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Chiama</span>
        </a>

        {/* WhatsApp (Pulsante Centrale in Evidenza) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-950/60 active:scale-95 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white" />
          <span className="text-xs">Prenota</span>
        </a>

        {/* Dove Siamo */}
        <a
          href={siteConfig.contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-neutral-200 active:bg-[#16382b] transition-colors"
        >
          <MapPin className="w-5 h-5 text-amber-300 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Mappa</span>
        </a>

        {/* Instagram */}
        <a
          href={siteConfig.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-neutral-200 active:bg-[#16382b] transition-colors"
        >
          <InstagramIcon className="w-5 h-5 text-pink-400 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Social</span>
        </a>
      </div>
    </div>
  );
}

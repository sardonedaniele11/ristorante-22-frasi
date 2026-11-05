"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Clock, Star, Film, Home } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#fdfaf5]/95 backdrop-blur-lg border-t border-[#dfcfb9] px-2 py-1.5 shadow-lg safe-area-bottom">
      <div className="flex items-center justify-around gap-1 max-w-md mx-auto">
        {/* Home */}
        <Link
          href="/"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#6d5644] active:bg-[#f2e7d5] transition-colors"
        >
          <Home className="w-4 h-4 text-[#8c1d28] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Home</span>
        </Link>

        {/* Menù PDF */}
        <Link
          href="/menu"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#6d5644] active:bg-[#f2e7d5] transition-colors"
        >
          <Clock className="w-4 h-4 text-[#d89d42] mb-0.5" />
          <span className="text-[10px] font-bold text-[#8c1d28]">Menù</span>
        </Link>

        {/* WhatsApp Prenota (Centrale in Evidenza) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.3] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-xs active:scale-95 transition-all"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
          <span className="text-xs">Prenota</span>
        </a>

        {/* Esperienza Foto/Video */}
        <Link
          href="/esperienza"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#6d5644] active:bg-[#f2e7d5] transition-colors"
        >
          <Film className="w-4 h-4 text-[#6d5644] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Foto/Video</span>
        </Link>

        {/* Recensioni */}
        <Link
          href="/recensioni"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#6d5644] active:bg-[#f2e7d5] transition-colors"
        >
          <Star className="w-4 h-4 text-[#00aa6c] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Recensioni</span>
        </Link>
      </div>
    </div>
  );
}

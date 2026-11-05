"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Clock, BookOpen, Star, Film, Home } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#071712]/95 backdrop-blur-lg border-t border-[#1b4d3e] px-2 py-2 shadow-2xl safe-area-bottom">
      <div className="flex items-center justify-around gap-1 max-w-md mx-auto">
        {/* Home */}
        <Link
          href="/"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-neutral-200 active:bg-[#0e271d] transition-colors"
        >
          <Home className="w-5 h-5 text-[#a3c9b8] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Home</span>
        </Link>

        {/* Menù & Pranzo */}
        <Link
          href="/menu"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-neutral-200 active:bg-[#0e271d] transition-colors"
        >
          <Clock className="w-5 h-5 text-[#8c1d28] mb-0.5" />
          <span className="text-[10px] font-bold text-[#d89d42]">Menù</span>
        </Link>

        {/* WhatsApp Prenota (Centrale) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.3] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-950/60 active:scale-95 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white" />
          <span className="text-xs">Prenota</span>
        </a>

        {/* Esperienza Foto/Video */}
        <Link
          href="/esperienza"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-neutral-200 active:bg-[#0e271d] transition-colors"
        >
          <Film className="w-5 h-5 text-[#007a68] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Foto/Video</span>
        </Link>

        {/* Recensioni */}
        <Link
          href="/recensioni"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-neutral-200 active:bg-[#0e271d] transition-colors"
        >
          <Star className="w-5 h-5 text-amber-300 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Recensioni</span>
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, Menu, X, Clock, Utensils, BookOpen, Image as ImageIcon } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon, TripAdvisorIcon } from "@/components/SocialIcons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#071712]/95 backdrop-blur-md border-b border-[#1b4d3e]/80 text-neutral-100 transition-all shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 bg-[#0d2821] border border-[#2a6d58] p-1 flex items-center justify-center">
              <Image
                src={siteConfig.logoIcon}
                alt="22 Frasi Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-serif tracking-wider text-white group-hover:text-[#d89d42] transition-colors font-bold leading-none sm:leading-tight">
                22 FRASI
              </span>
              <span className="text-[9px] sm:text-[11px] text-[#d89d42] font-medium tracking-tight font-sans mt-0.5">
                {siteConfig.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium tracking-wide">
            <Link
              href="/#formule-pranzo"
              className="text-[#d89d42] hover:text-amber-200 transition-colors font-bold flex items-center gap-1.5"
            >
              <span>Formule Pranzo</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#8c1d28] text-white font-mono uppercase tracking-wider">
                Da 7€
              </span>
            </Link>

            <Link
              href="/#menu"
              className="text-neutral-200 hover:text-[#d89d42] transition-colors"
            >
              Menù Completo
            </Link>

            <Link
              href="/#chi-siamo"
              className="text-neutral-200 hover:text-[#d89d42] transition-colors"
            >
              Il Manifesto
            </Link>

            <Link
              href="/#video"
              className="text-neutral-200 hover:text-[#d89d42] transition-colors flex items-center gap-1"
            >
              <span>Video</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#d89d42]/20 border border-[#d89d42]/40 text-[#d89d42] font-semibold uppercase">
                Reel
              </span>
            </Link>

            <Link
              href="/#galleria"
              className="text-neutral-200 hover:text-[#d89d42] transition-colors flex items-center gap-1"
            >
              <span>Galleria</span>
              <span className="text-[10px] text-[#a3c9b8]">(Cibo &amp; Locale)</span>
            </Link>

            <Link
              href="/recensioni"
              className="text-neutral-200 hover:text-[#d89d42] transition-colors flex items-center gap-1.5"
            >
              <span>Recensioni</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#00aa6c]/20 border border-[#00aa6c]/50 text-[#00e693] font-bold">
                5.0 ★
              </span>
            </Link>

            <Link
              href="/#orari-e-contatti"
              className="text-neutral-200 hover:text-[#d89d42] transition-colors"
            >
              Dove Siamo &amp; Orari
            </Link>
          </nav>

          {/* Quick Social & Action buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={siteConfig.contact.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-neutral-300 hover:text-[#00aa6c] hover:bg-[#0e271d] transition-colors border border-transparent hover:border-[#2a6d58]"
              title="TripAdvisor 5.0 - Recensioni Verificate"
            >
              <TripAdvisorIcon className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-lg shadow-emerald-950/40 transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Prenota Tavolo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 p-2.5 rounded-full text-white shadow-md sm:hidden"
              title="Prenota su WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-200 hover:text-white hover:bg-[#0e271d] focus:outline-none"
              aria-label="Apri menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#071712]/98 border-b border-[#1b4d3e] px-4 pt-3 pb-6 space-y-3">
          <div className="pb-2 border-b border-[#1b4d3e]/60 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-white font-bold block">
                22 FRASI
              </span>
              <span className="text-[11px] text-[#d89d42] block">
                {siteConfig.subtitle}
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#8c1d28] text-white font-bold">
              Bistrot a Bari
            </span>
          </div>

          <Link
            href="/#formule-pranzo"
            onClick={() => setIsOpen(false)}
            className="py-2.5 text-base text-[#d89d42] font-bold hover:text-amber-200 border-b border-[#1b4d3e]/40 flex items-center justify-between"
          >
            <span>Formule Pranzo</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-[#8c1d28] text-white">Da 7€</span>
          </Link>

          <Link
            href="/#menu"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base text-neutral-200 hover:text-[#d89d42] border-b border-[#1b4d3e]/40"
          >
            Menù Completo del Bistrò
          </Link>

          <Link
            href="/#chi-siamo"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base text-neutral-200 hover:text-[#d89d42] border-b border-[#1b4d3e]/40"
          >
            Il Manifesto di 22 Frasi
          </Link>

          <Link
            href="/#video"
            onClick={() => setIsOpen(false)}
            className="py-2.5 text-base text-neutral-200 hover:text-[#d89d42] border-b border-[#1b4d3e]/40 flex items-center justify-between"
          >
            <span>Video &amp; Atmosfera dal Bistrò</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#d89d42]/20 border border-[#d89d42]/40 text-[#d89d42] font-bold">
              2 Video
            </span>
          </Link>

          <Link
            href="/#galleria"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base text-neutral-200 hover:text-[#d89d42] border-b border-[#1b4d3e]/40"
          >
            Galleria (Cibo &amp; Location)
          </Link>

          <Link
            href="/recensioni"
            onClick={() => setIsOpen(false)}
            className="py-2.5 text-base text-neutral-200 hover:text-[#d89d42] border-b border-[#1b4d3e]/40 flex items-center justify-between"
          >
            <span>Recensioni dei Clienti</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#00aa6c]/20 border border-[#00aa6c]/40 text-[#00e693] font-bold">
              5.0 ★ TripAdvisor
            </span>
          </Link>

          <Link
            href="/#orari-e-contatti"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base text-neutral-200 hover:text-[#d89d42]"
          >
            Dove Siamo &amp; Orari
          </Link>

          <div className="pt-4 grid grid-cols-4 gap-2 text-center border-t border-[#1b4d3e]">
            <a
              href={siteConfig.contact.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-[11px] text-neutral-300 hover:text-[#00e693]"
            >
              <TripAdvisorIcon className="w-4 h-4 text-[#00aa6c]" /> TripAdvisor
            </a>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-[11px] text-neutral-300 hover:text-[#d89d42]"
            >
              <InstagramIcon className="w-4 h-4" /> Instagram
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-[11px] text-neutral-300 hover:text-blue-400"
            >
              <FacebookIcon className="w-4 h-4" /> Facebook
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex flex-col items-center gap-1 text-[11px] text-neutral-300 hover:text-[#d89d42]"
            >
              <Phone className="w-4 h-4" /> Chiama
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

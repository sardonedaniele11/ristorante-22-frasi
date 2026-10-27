"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, Menu, X } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon, TripAdvisorIcon } from "@/components/SocialIcons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d221a]/95 backdrop-blur-md border-b border-[#1b4d3e]/60 text-neutral-100 transition-all shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 bg-[#07130e] border border-[#2a6d58] p-1 flex items-center justify-center">
              <Image
                src={siteConfig.logoIcon}
                alt="22 Frasi Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors font-bold leading-tight">
                22 FRASI
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#a3c9b8] font-medium tracking-tight">
                {siteConfig.descriptor}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <Link
              href="/#chi-siamo"
              className="text-neutral-200 hover:text-amber-300 transition-colors"
            >
              Il Bistrò
            </Link>
            <Link
              href="/recensioni"
              className="text-neutral-200 hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <span>Recensioni</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#00aa6c]/20 border border-[#00aa6c]/50 text-[#00e693] font-bold">
                5.0 ★
              </span>
            </Link>
            <Link
              href="/#orari-e-contatti"
              className="text-neutral-200 hover:text-amber-300 transition-colors"
            >
              Dove Siamo &amp; Orari
            </Link>
          </nav>

          {/* Quick Social & Action buttons */}
          <div className="hidden lg:flex items-center space-x-3.5">
            <a
              href={siteConfig.contact.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-neutral-300 hover:text-[#00aa6c] hover:bg-[#16382b] transition-colors border border-transparent hover:border-[#2a6d58]"
              title="TripAdvisor 5.0 - Recensioni Verificate"
            >
              <TripAdvisorIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-neutral-300 hover:text-amber-300 hover:bg-[#16382b] transition-colors border border-transparent hover:border-[#2a6d58]"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-neutral-300 hover:text-blue-400 hover:bg-[#16382b] transition-colors border border-transparent hover:border-[#2a6d58]"
              title="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
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
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 p-2.5 rounded-full text-white shadow-md"
              title="Prenota su WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-200 hover:text-white hover:bg-[#16382b] focus:outline-none"
              aria-label="Apri menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0d221a]/98 border-b border-[#1b4d3e] px-4 pt-3 pb-6 space-y-3">
          <div className="pb-2 border-b border-[#1b4d3e]/60">
            <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">
              22 FRASI
            </span>
            <span className="text-[11px] text-neutral-300 block">
              {siteConfig.descriptor}
            </span>
          </div>

          <Link
            href="/#chi-siamo"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base text-neutral-200 hover:text-amber-300 border-b border-[#1b4d3e]/40"
          >
            Il Bistrò
          </Link>
          <Link
            href="/recensioni"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base text-neutral-200 hover:text-amber-300 border-b border-[#1b4d3e]/40 flex items-center justify-between"
          >
            <span>Recensioni dei Clienti</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#00aa6c]/20 border border-[#00aa6c]/40 text-[#00e693] font-bold">
              TripAdvisor 5.0 ★
            </span>
          </Link>
          <Link
            href="/#orari-e-contatti"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base text-neutral-200 hover:text-amber-300"
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
              className="flex flex-col items-center gap-1 text-[11px] text-neutral-300 hover:text-amber-300"
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
              className="flex flex-col items-center gap-1 text-[11px] text-neutral-300 hover:text-amber-300"
            >
              <Phone className="w-4 h-4" /> Chiama
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

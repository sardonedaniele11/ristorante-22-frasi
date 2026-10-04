"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, Menu, X } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

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
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#2a6d58] shadow-md group-hover:scale-105 transition-transform duration-300 bg-[#16382b]">
              <Image
                src={siteConfig.logo}
                alt="22 Frasi - Il bistrò di Puglia"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors font-bold leading-tight">
                {siteConfig.name}
              </span>
              <span className="text-[11px] sm:text-xs text-[#a3c9b8] font-medium tracking-tight">
                {siteConfig.subtitle}
              </span>
              <span className="hidden sm:block text-[9px] uppercase tracking-widest text-neutral-400 font-sans">
                {siteConfig.descriptor}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide">
            <a
              href="#chi-siamo"
              className="text-neutral-200 hover:text-amber-300 transition-colors"
            >
              Il Bistrò
            </a>
            <a
              href="#specialita"
              className="text-neutral-200 hover:text-amber-300 transition-colors"
            >
              Specialità Pugliesi
            </a>
            <a
              href="#galleria"
              className="text-neutral-200 hover:text-amber-300 transition-colors"
            >
              Galleria Foto
            </a>
            <a
              href="#social"
              className="text-neutral-200 hover:text-amber-300 transition-colors"
            >
              Social & WhatsApp
            </a>
            <a
              href="#orari-e-contatti"
              className="text-neutral-200 hover:text-amber-300 transition-colors"
            >
              Dove Siamo & Orari
            </a>
          </nav>

          {/* Quick Social & Action buttons */}
          <div className="hidden lg:flex items-center space-x-3.5">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-neutral-300 hover:text-amber-300 hover:bg-[#16382b] transition-colors border border-transparent hover:border-[#2a6d58]"
              title="Seguici su Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-neutral-300 hover:text-amber-300 hover:bg-[#16382b] transition-colors border border-transparent hover:border-[#2a6d58]"
              title="Seguici su Facebook"
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
        <div className="md:hidden bg-[#0d221a]/98 border-b border-[#1b4d3e] px-4 pt-3 pb-6 space-y-4">
          <div className="pb-2 border-b border-[#1b4d3e]/60">
            <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">
              {siteConfig.subtitle}
            </span>
            <span className="text-[11px] text-neutral-300 block">
              {siteConfig.descriptor}
            </span>
          </div>
          <a
            href="#chi-siamo"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base text-neutral-200 hover:text-amber-300 border-b border-[#1b4d3e]/40"
          >
            Il Bistrò
          </a>
          <a
            href="#specialita"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base text-neutral-200 hover:text-amber-300 border-b border-[#1b4d3e]/40"
          >
            Specialità Pugliesi
          </a>
          <a
            href="#galleria"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base text-neutral-200 hover:text-amber-300 border-b border-[#1b4d3e]/40"
          >
            Galleria Foto
          </a>
          <a
            href="#social"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base text-neutral-200 hover:text-amber-300 border-b border-[#1b4d3e]/40"
          >
            Social & WhatsApp
          </a>
          <a
            href="#orari-e-contatti"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base text-neutral-200 hover:text-amber-300"
          >
            Dove Siamo & Orari
          </a>

          <div className="pt-4 flex items-center justify-around border-t border-[#1b4d3e]">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-300"
            >
              <InstagramIcon className="w-4 h-4" /> Instagram
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-300"
            >
              <FacebookIcon className="w-4 h-4" /> Facebook
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-300"
            >
              <Phone className="w-4 h-4" /> Chiama
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

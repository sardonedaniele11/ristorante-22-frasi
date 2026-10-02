"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 text-neutral-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-2xl sm:text-3xl font-serif tracking-widest text-amber-400 group-hover:text-amber-300 transition-colors font-bold">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans -mt-1">
              Ristorante & Cocktail Bar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a
              href="#chi-siamo"
              className="text-neutral-300 hover:text-amber-400 transition-colors"
            >
              Chi Siamo
            </a>
            <a
              href="#galleria"
              className="text-neutral-300 hover:text-amber-400 transition-colors"
            >
              Galleria Foto
            </a>
            <a
              href="#social"
              className="text-neutral-300 hover:text-amber-400 transition-colors"
            >
              Social & Community
            </a>
            <a
              href="#orari-e-contatti"
              className="text-neutral-300 hover:text-amber-400 transition-colors"
            >
              Orari & Dove Siamo
            </a>
          </nav>

          {/* Quick Social & Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-neutral-400 hover:text-amber-400 hover:bg-neutral-900 transition-colors"
              title="Seguici su Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-neutral-400 hover:text-amber-400 hover:bg-neutral-900 transition-colors"
              title="Seguici su Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-lg shadow-emerald-900/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Prenota WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 p-2 rounded-full text-white"
              title="Prenota su WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 focus:outline-none"
              aria-label="Apri menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/98 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-4">
          <a
            href="#chi-siamo"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base text-neutral-200 hover:text-amber-400 border-b border-neutral-800/60"
          >
            Chi Siamo
          </a>
          <a
            href="#galleria"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base text-neutral-200 hover:text-amber-400 border-b border-neutral-800/60"
          >
            Galleria Foto
          </a>
          <a
            href="#social"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base text-neutral-200 hover:text-amber-400 border-b border-neutral-800/60"
          >
            Social & Community
          </a>
          <a
            href="#orari-e-contatti"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base text-neutral-200 hover:text-amber-400"
          >
            Orari & Dove Siamo
          </a>

          <div className="pt-4 flex items-center justify-around border-t border-neutral-800">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-400"
            >
              <InstagramIcon className="w-4 h-4" /> Instagram
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-400"
            >
              <FacebookIcon className="w-4 h-4" /> Facebook
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-400"
            >
              <Phone className="w-4 h-4" /> Chiama
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

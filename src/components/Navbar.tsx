"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Menu,
  X,
  Utensils,
  BookOpen,
  Film,
  Star,
  MapPin,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Home,
} from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  TripAdvisorIcon,
} from "@/components/SocialIcons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  const navItems = [
    {
      title: "Home",
      subtitle: "Bistrò, accoglienza & formule",
      href: "/",
      icon: Home,
      iconColor: "text-[#d89d42]",
      badge: null,
    },
    {
      title: "Menù & Formule Pranzo",
      subtitle: "Formule da 7€ & Menù completi in PDF",
      href: "/menu",
      icon: Utensils,
      iconColor: "text-[#8c1d28]",
      badge: "PDF Ufficiali",
      badgeBg: "bg-[#8c1d28] text-white",
    },
    {
      title: "Storia di 22 Frasi",
      subtitle: "Il manifesto e il significato del bistrò",
      href: "/storia",
      icon: BookOpen,
      iconColor: "text-[#a0742d]",
      badge: "Manifesto",
      badgeBg: "bg-[#f3e7d3] text-[#8c1d28] border border-[#d8be9f]",
    },
    {
      title: "Vivi l'Esperienza",
      subtitle: "Video reel bombette & galleria del locale",
      href: "/esperienza",
      icon: Film,
      iconColor: "text-[#1d6b56]",
      badge: "Video & Foto",
      badgeBg: "bg-[#e2f1ec] text-[#165544] border border-[#a8d5c8]",
    },
    {
      title: "Recensioni Clienti",
      subtitle: "5.0 ★ Eccellenza su TripAdvisor",
      href: "/recensioni",
      icon: Star,
      iconColor: "text-[#00aa6c]",
      badge: "5.0 ★",
      badgeBg: "bg-[#e6f7f0] text-[#008755] border border-[#a2e6cc]",
    },
    {
      title: "Dove Siamo & Orari",
      subtitle: "Via Nicolò Putignani 144, Bari Centro",
      href: "/#orari-e-contatti",
      icon: MapPin,
      iconColor: "text-[#8c1d28]",
      badge: null,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcf9f4]/95 backdrop-blur-md border-b border-[#dfcfb9] text-[#26170d] transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-xs group-hover:scale-105 transition-transform duration-300 bg-white border border-[#dfcfb9] p-1 flex items-center justify-center">
              <Image
                src={siteConfig.logoIcon}
                alt="22 Frasi Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-serif tracking-wider text-[#26170d] group-hover:text-[#8c1d28] transition-colors font-bold leading-none sm:leading-tight">
                22 FRASI
              </span>
              <span className="text-[9px] sm:text-[11px] text-[#8c1d28] font-semibold tracking-tight font-sans mt-0.5">
                {siteConfig.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium tracking-wide">
            <Link
              href="/"
              className={`transition-colors ${
                pathname === "/" ? "text-[#8c1d28] font-bold" : "text-[#4a3424] hover:text-[#8c1d28]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/menu"
              className={`transition-colors font-bold flex items-center gap-1.5 ${
                pathname === "/menu" ? "text-[#8c1d28]" : "text-[#6d5644] hover:text-[#8c1d28]"
              }`}
            >
              <span>Menù &amp; Pranzo</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#8c1d28] text-white font-mono uppercase tracking-wider shadow-xs">
                PDF
              </span>
            </Link>

            <Link
              href="/storia"
              className={`transition-colors ${
                pathname === "/storia" ? "text-[#8c1d28] font-bold" : "text-[#4a3424] hover:text-[#8c1d28]"
              }`}
            >
              Storia di 22 Frasi
            </Link>

            <Link
              href="/esperienza"
              className={`transition-colors flex items-center gap-1.5 ${
                pathname === "/esperienza" ? "text-[#8c1d28] font-bold" : "text-[#4a3424] hover:text-[#8c1d28]"
              }`}
            >
              <span>Vivi l&apos;Esperienza</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#eef6f2] border border-[#a8d5c8] text-[#165544] font-semibold uppercase">
                Video &amp; Foto
              </span>
            </Link>

            <Link
              href="/recensioni"
              className={`transition-colors flex items-center gap-1.5 ${
                pathname === "/recensioni" ? "text-[#8c1d28] font-bold" : "text-[#4a3424] hover:text-[#8c1d28]"
              }`}
            >
              <span>Recensioni</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#00aa6c]/15 border border-[#00aa6c]/30 text-[#008755] font-bold">
                5.0 ★
              </span>
            </Link>

            <Link
              href="/#orari-e-contatti"
              className="text-[#4a3424] hover:text-[#8c1d28] transition-colors"
            >
              Orari &amp; Contatti
            </Link>
          </nav>

          {/* Quick Social & Action buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={siteConfig.contact.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-[#6d5644] hover:text-[#00aa6c] hover:bg-[#f3ecdf] transition-colors border border-transparent hover:border-[#dfcfb9]"
              title="TripAdvisor 5.0 - Recensioni Verificate"
            >
              <TripAdvisorIcon className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8c1d28] hover:bg-[#a12330] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-md shadow-[#8c1d28]/20 transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Prenota Tavolo</span>
            </a>
          </div>

          {/* Mobile Actions: WhatsApp Icon + Stylized Animated Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-95 transition-all"
              title="Prenota su WhatsApp"
              aria-label="Prenota su WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 ${
                isOpen
                  ? "bg-[#8c1d28] border-rose-700 text-white shadow-md"
                  : "bg-white border-[#dfcfb9] text-[#26170d] hover:bg-[#f5eeea]"
              }`}
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isOpen ? (
                <>
                  <X className="w-4 h-4 text-white animate-in spin-in-90 duration-200" />
                  <span className="font-sans font-bold">Chiudi</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-[#8c1d28]" />
                  <span className="font-sans font-bold">Menù</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modern High-End Stylized Mobile Dropdown in Warm Light Cream */}
      {isOpen && (
        <div className="lg:hidden border-b border-[#dfcfb9] bg-gradient-to-b from-[#fcf9f4] via-[#f7f1e5] to-[#f4ecdf] shadow-xl backdrop-blur-xl animate-in slide-in-from-top-3 duration-300 overflow-hidden">
          {/* Top Brand Banner */}
          <div className="px-4 py-3 bg-white/80 border-b border-[#dfcfb9] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-[#dfcfb9] p-0.5 relative flex items-center justify-center">
                <Image
                  src={siteConfig.logoIcon}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] font-serif font-bold text-[#26170d] tracking-wider block leading-none">
                  22 FRASI • BISTRO
                </span>
                <span className="text-[9px] text-[#6d5644] block mt-0.5">
                  Via Putignani, 144 • Bari Centro
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[9px] font-mono text-[#8c1d28]">
              <Sparkles className="w-2.5 h-2.5 text-[#d89d42]" />
              <span>Puglia DOC</span>
            </div>
          </div>

          {/* Navigation Links Cards */}
          <div className="p-3.5 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                    isActive
                      ? "bg-white border-[#8c1d28] shadow-md ring-1 ring-[#8c1d28]"
                      : "bg-white/70 border-[#dfcfb9] hover:bg-white hover:border-[#bda587]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-105 ${
                        isActive
                          ? "bg-[#8c1d28] border-[#8c1d28] text-white"
                          : "bg-[#faf6ee] border-[#dfcfb9] " + item.iconColor
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-serif text-sm font-bold tracking-wide transition-colors ${
                            isActive
                              ? "text-[#8c1d28]"
                              : "text-[#26170d] group-hover:text-[#8c1d28]"
                          }`}
                        >
                          {item.title}
                        </span>
                        {item.badge && (
                          <span
                            className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md font-mono ${item.badgeBg}`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#6d5644] font-light leading-tight mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
                      isActive ? "text-[#8c1d28]" : "text-[#9d8977] group-hover:text-[#26170d]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Dedicated WhatsApp Big Booking Card */}
          <div className="px-3.5 pb-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold text-xs shadow-md active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <span className="block font-bold text-sm leading-tight">
                    Prenota un Tavolo su WhatsApp
                  </span>
                  <span className="block text-[10px] text-emerald-100 font-light">
                    Risposta rapida per pranzo o cena
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-200" />
            </a>
          </div>

          {/* Social and Fast Contact Pill Row */}
          <div className="p-3.5 pt-2 border-t border-[#dfcfb9] bg-white/60">
            <div className="grid grid-cols-4 gap-2 text-center">
              <a
                href={siteConfig.contact.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-[#dfcfb9] hover:border-[#00aa6c] transition-all group shadow-xs"
              >
                <TripAdvisorIcon className="w-4 h-4 text-[#00aa6c] group-hover:scale-110 transition-transform" />
                <span className="text-[9px] text-[#6d5644] mt-1 font-medium group-hover:text-[#26170d]">
                  TripAdvisor
                </span>
              </a>

              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-[#dfcfb9] hover:border-pink-500 transition-all group shadow-xs"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] text-[#6d5644] mt-1 font-medium group-hover:text-[#26170d]">
                  Instagram
                </span>
              </a>

              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-[#dfcfb9] hover:border-blue-500 transition-all group shadow-xs"
              >
                <FacebookIcon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] text-[#6d5644] mt-1 font-medium group-hover:text-[#26170d]">
                  Facebook
                </span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-[#dfcfb9] hover:border-[#8c1d28] transition-all group shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#8c1d28] group-hover:scale-110 transition-transform" />
                <span className="text-[9px] text-[#6d5644] mt-1 font-medium group-hover:text-[#26170d]">
                  Chiama
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

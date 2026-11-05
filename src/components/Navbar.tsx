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
  Clock,
  Utensils,
  BookOpen,
  Film,
  Star,
  MapPin,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Home,
  MessageCircle,
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
      subtitle: "Bistrò, accoglienza & orari",
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
      iconColor: "text-rose-400",
      badge: "PDF Ufficiali",
      badgeBg: "bg-[#8c1d28] text-white",
    },
    {
      title: "Storia di 22 Frasi",
      subtitle: "Il manifesto e il significato del bistrò",
      href: "/storia",
      icon: BookOpen,
      iconColor: "text-amber-300",
      badge: "Manifesto",
      badgeBg: "bg-[#164e43] text-[#d89d42] border border-[#2a6d58]",
    },
    {
      title: "Vivi l'Esperienza",
      subtitle: "Video reel bombette & galleria del locale",
      href: "/esperienza",
      icon: Film,
      iconColor: "text-emerald-400",
      badge: "Video & Foto",
      badgeBg: "bg-[#007a68]/40 text-[#a3c9b8] border border-[#007a68]",
    },
    {
      title: "Recensioni Clienti",
      subtitle: "5.0 ★ Eccellenza su TripAdvisor",
      href: "/recensioni",
      icon: Star,
      iconColor: "text-[#00e693]",
      badge: "5.0 ★",
      badgeBg: "bg-[#00aa6c]/20 text-[#00e693] border border-[#00aa6c]/50",
    },
    {
      title: "Dove Siamo & Orari",
      subtitle: "Via Nicolò Putignani 144, Bari Centro",
      href: "/#orari-e-contatti",
      icon: MapPin,
      iconColor: "text-amber-400",
      badge: null,
    },
  ];

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
              href="/"
              className={`transition-colors ${
                pathname === "/" ? "text-[#d89d42] font-bold" : "text-neutral-200 hover:text-[#d89d42]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/menu"
              className={`transition-colors font-bold flex items-center gap-1.5 ${
                pathname === "/menu" ? "text-amber-300" : "text-[#d89d42] hover:text-amber-200"
              }`}
            >
              <span>Menù &amp; Pranzo</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#8c1d28] text-white font-mono uppercase tracking-wider shadow-sm">
                PDF
              </span>
            </Link>

            <Link
              href="/storia"
              className={`transition-colors ${
                pathname === "/storia" ? "text-[#d89d42] font-bold" : "text-neutral-200 hover:text-[#d89d42]"
              }`}
            >
              Storia di 22 Frasi
            </Link>

            <Link
              href="/esperienza"
              className={`transition-colors flex items-center gap-1.5 ${
                pathname === "/esperienza" ? "text-[#d89d42] font-bold" : "text-neutral-200 hover:text-[#d89d42]"
              }`}
            >
              <span>Vivi l&apos;Esperienza</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#007a68]/40 border border-[#007a68] text-[#a3c9b8] font-semibold uppercase">
                Video &amp; Foto
              </span>
            </Link>

            <Link
              href="/recensioni"
              className={`transition-colors flex items-center gap-1.5 ${
                pathname === "/recensioni" ? "text-[#d89d42] font-bold" : "text-neutral-200 hover:text-[#d89d42]"
              }`}
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
              Orari &amp; Contatti
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

          {/* Mobile Actions: WhatsApp Icon + Stylized Animated Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md active:scale-95 transition-all"
              title="Prenota su WhatsApp"
              aria-label="Prenota su WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 ${
                isOpen
                  ? "bg-[#8c1d28] border-rose-500/50 text-white shadow-lg shadow-[#8c1d28]/40"
                  : "bg-[#0d2821] border-[#2a6d58] text-[#d89d42] hover:bg-[#12362c] hover:text-white"
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
                  <Menu className="w-4 h-4 text-[#d89d42]" />
                  <span className="font-sans font-bold">Menù</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modern High-End Stylized Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-b border-[#2a6d58] bg-gradient-to-b from-[#071712] via-[#091f18] to-[#071712] shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-3 duration-300 overflow-hidden">
          {/* Top Brand Banner */}
          <div className="px-4 py-3 bg-[#0d2821]/90 border-b border-[#1b4d3e]/70 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#071712] border border-[#2a6d58] p-0.5 relative flex items-center justify-center">
                <Image
                  src={siteConfig.logoIcon}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] font-serif font-bold text-white tracking-wider block leading-none">
                  22 FRASI • BISTRO
                </span>
                <span className="text-[9px] text-[#a3c9b8] block mt-0.5">
                  Via Putignani, 144 • Bari Centro
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#164e43] border border-[#2a6d58] text-[9px] font-mono text-[#d89d42]">
              <Sparkles className="w-2.5 h-2.5" />
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
                      ? "bg-gradient-to-r from-[#12362c] to-[#0d2821] border-[#d89d42] shadow-md shadow-[#d89d42]/10"
                      : "bg-[#0a1f18]/90 border-[#1b4d3e]/80 hover:bg-[#0f2d23] hover:border-[#2a6d58]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-105 ${
                        isActive
                          ? "bg-[#d89d42] border-[#d89d42] text-[#07130e]"
                          : "bg-[#071712] border-[#1b4d3e] " + item.iconColor
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-serif text-sm font-bold tracking-wide transition-colors ${
                            isActive
                              ? "text-[#d89d42]"
                              : "text-white group-hover:text-[#d89d42]"
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
                      <span className="text-[10px] text-[#a3c9b8] font-light leading-tight mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
                      isActive ? "text-[#d89d42]" : "text-neutral-500 group-hover:text-neutral-200"
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
              className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/60 active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white/15 backdrop-blur-md">
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <span className="block font-bold text-sm leading-tight">
                    Prenota un Tavolo su WhatsApp
                  </span>
                  <span className="block text-[10px] text-emerald-100 font-light">
                    Risposta immediata per pranzo o cena
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-200" />
            </a>
          </div>

          {/* Social and Fast Contact Pill Row */}
          <div className="p-3.5 pt-2 border-t border-[#1b4d3e]/60 bg-[#061410]/70">
            <div className="grid grid-cols-4 gap-2 text-center">
              <a
                href={siteConfig.contact.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#0a1f18] border border-[#1b4d3e] hover:border-[#00aa6c] transition-all group"
              >
                <TripAdvisorIcon className="w-4 h-4 text-[#00aa6c] group-hover:scale-110 transition-transform" />
                <span className="text-[9px] text-[#a3c9b8] mt-1 font-medium group-hover:text-white">
                  TripAdvisor
                </span>
              </a>

              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#0a1f18] border border-[#1b4d3e] hover:border-pink-500 transition-all group"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] text-[#a3c9b8] mt-1 font-medium group-hover:text-white">
                  Instagram
                </span>
              </a>

              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#0a1f18] border border-[#1b4d3e] hover:border-blue-500 transition-all group"
              >
                <FacebookIcon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] text-[#a3c9b8] mt-1 font-medium group-hover:text-white">
                  Facebook
                </span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#0a1f18] border border-[#1b4d3e] hover:border-[#d89d42] transition-all group"
              >
                <Phone className="w-4 h-4 text-[#d89d42] group-hover:scale-110 transition-transform" />
                <span className="text-[9px] text-[#a3c9b8] mt-1 font-medium group-hover:text-white">
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

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Heart, FileText, Download, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon, TripAdvisorIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-[#05110d] border-t border-[#1b4d3e] text-neutral-400 py-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#2a6d58] bg-[#071712] p-1 flex items-center justify-center">
                <Image
                  src={siteConfig.logoIcon}
                  alt="Logo 22 Frasi"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-white tracking-wider block">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-[#d89d42] font-semibold block uppercase tracking-wider">
                  {siteConfig.subtitle}
                </span>
                <span className="text-[10px] text-[#a3c9b8] block">
                  {siteConfig.descriptor}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-300 max-w-md font-light leading-relaxed">
              {siteConfig.tagline}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.contact.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d2821] border border-[#1b4d3e] flex items-center justify-center text-[#00aa6c] hover:border-[#00aa6c] hover:bg-[#16382b] transition-colors"
                title="TripAdvisor 5.0 - Recensioni"
              >
                <TripAdvisorIcon className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d2821] border border-[#1b4d3e] flex items-center justify-center text-emerald-400 hover:border-emerald-400 hover:bg-[#16382b] transition-colors"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d2821] border border-[#1b4d3e] flex items-center justify-center text-pink-400 hover:border-pink-400 hover:bg-[#16382b] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d2821] border border-[#1b4d3e] flex items-center justify-center text-blue-400 hover:border-blue-400 hover:bg-[#16382b] transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-10 h-10 rounded-full bg-[#0d2821] border border-[#1b4d3e] flex items-center justify-center text-[#d89d42] hover:border-[#d89d42] hover:bg-[#16382b] transition-colors"
                title="Chiama Fisso"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            {/* Document Downloads */}
            <div className="pt-3 flex flex-wrap gap-2 text-xs">
              <a
                href="/docs/22-FRASI-Flyer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#8c1d28]/30 border border-[#8c1d28]/60 text-rose-200 hover:text-white"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Flyer Pranzo (PDF)</span>
              </a>
              <a
                href="/docs/22-Frasi-Menu-Sera.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d2821] border border-[#1b4d3e] text-[#d89d42] hover:text-white"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Menù Serale (PDF)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigazione */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Navigazione
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#formule-pranzo" className="text-[#d89d42] hover:text-amber-200 transition-colors font-medium">
                  Formule Pranzo da 7€
                </Link>
              </li>
              <li>
                <Link href="/#menu" className="hover:text-white transition-colors">
                  Menù Completo del Bistrò
                </Link>
              </li>
              <li>
                <Link href="/#chi-siamo" className="hover:text-white transition-colors">
                  Il Manifesto di 22 Frasi
                </Link>
              </li>
              <li>
                <Link href="/#galleria" className="hover:text-white transition-colors">
                  Galleria (Cibo &amp; Location)
                </Link>
              </li>
              <li>
                <Link href="/recensioni" className="text-[#00e693] hover:text-[#00aa6c] transition-colors font-semibold flex items-center gap-1.5">
                  <span>Recensioni TripAdvisor</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#00aa6c]/20 border border-[#00aa6c]/40">5.0 ★</span>
                </Link>
              </li>
              <li>
                <Link href="/#orari-e-contatti" className="hover:text-white transition-colors">
                  Dove Siamo &amp; Orari
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contatti Rapidi */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Prenotazioni &amp; Info
            </h4>
            <div className="space-y-2.5 text-sm">
              <p className="text-neutral-300">
                Telefono Fisso:{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-[#d89d42] hover:underline">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-neutral-300">
                WhatsApp:{" "}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </p>
              <p className="text-[#a3c9b8] leading-relaxed">
                {siteConfig.contact.address}
              </p>
              <p className="text-xs text-neutral-400 pt-1">
                Lunedì – Venerdì: 11:00-14:30 / 19:30-23:00<br />
                Sabato: 11:00-23:30 (Orario Continuato)<br />
                Domenica: Chiuso
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#122e23] flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {currentYear} {siteConfig.name} - {siteConfig.subtitle}. Tutti i diritti riservati.</p>
          <p className="flex items-center gap-1">
            Realizzato con passione per la Puglia <Heart className="w-3.5 h-3.5 text-[#8c1d28] fill-[#8c1d28]" />
          </p>
        </div>
      </div>
    </footer>
  );
}

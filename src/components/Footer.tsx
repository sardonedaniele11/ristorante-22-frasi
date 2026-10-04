import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-[#050f0b] border-t border-[#1b4d3e] text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#2a6d58] bg-[#16382b]">
                <Image
                  src={siteConfig.logo}
                  alt="Logo 22 Frasi"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-amber-300 tracking-wider block">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-[#a3c9b8] font-medium block">
                  {siteConfig.subtitle} • {siteConfig.descriptor}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-300 max-w-md font-light leading-relaxed">
              {siteConfig.tagline}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0e271d] border border-[#1b4d3e] flex items-center justify-center text-emerald-400 hover:border-emerald-400 hover:bg-[#16382b] transition-colors"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0e271d] border border-[#1b4d3e] flex items-center justify-center text-pink-400 hover:border-pink-400 hover:bg-[#16382b] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0e271d] border border-[#1b4d3e] flex items-center justify-center text-blue-400 hover:border-blue-400 hover:bg-[#16382b] transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-10 h-10 rounded-full bg-[#0e271d] border border-[#1b4d3e] flex items-center justify-center text-amber-300 hover:border-amber-300 hover:bg-[#16382b] transition-colors"
                title="Chiama"
              >
                <Phone className="w-5 h-5" />
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
                <a href="#chi-siamo" className="hover:text-amber-300 transition-colors">
                  Il Bistrò
                </a>
              </li>
              <li>
                <a href="#specialita" className="hover:text-amber-300 transition-colors">
                  Specialità Pugliesi
                </a>
              </li>
              <li>
                <a href="#galleria" className="hover:text-amber-300 transition-colors">
                  Galleria Foto
                </a>
              </li>
              <li>
                <a href="#social" className="hover:text-amber-300 transition-colors">
                  Social & WhatsApp
                </a>
              </li>
              <li>
                <a href="#orari-e-contatti" className="hover:text-amber-300 transition-colors">
                  Dove Siamo & Orari
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contatti Rapidi */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Prenotazioni & Info
            </h4>
            <div className="space-y-2.5 text-sm">
              <p className="text-neutral-300">
                Telefono:{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-amber-300 hover:underline">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-neutral-300">
                Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-300 hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-[#a3c9b8]">{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#122e23] flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {currentYear} {siteConfig.name} - {siteConfig.subtitle}. Tutti i diritti riservati.</p>
          <p className="flex items-center gap-1">
            Realizzato con passione per la Puglia <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}

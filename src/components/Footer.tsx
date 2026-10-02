import { siteConfig } from "@/config/site";
import { Phone, Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-2xl font-serif font-bold text-amber-400 tracking-wider">
              {siteConfig.name}
            </span>
            <p className="text-sm text-neutral-300 max-w-md font-light leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 hover:border-emerald-500 hover:bg-neutral-850 transition-colors"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-pink-400 hover:border-pink-500 hover:bg-neutral-850 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 hover:border-blue-500 hover:bg-neutral-850 transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 hover:border-amber-500 hover:bg-neutral-850 transition-colors"
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
                <a href="#chi-siamo" className="hover:text-amber-400 transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#galleria" className="hover:text-amber-400 transition-colors">
                  Galleria Foto
                </a>
              </li>
              <li>
                <a href="#social" className="hover:text-amber-400 transition-colors">
                  Canali Social
                </a>
              </li>
              <li>
                <a href="#orari-e-contatti" className="hover:text-amber-400 transition-colors">
                  Orari & Dove Siamo
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
                <a href={`tel:${siteConfig.contact.phone}`} className="text-amber-400 hover:underline">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-neutral-300">
                Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-400 hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-neutral-300">{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {currentYear} {siteConfig.name}. Tutti i diritti riservati.</p>
          <p className="flex items-center gap-1">
            Realizzato con <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> con Next.js, React e Tailwind CSS. Pronto per il deploy su Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}

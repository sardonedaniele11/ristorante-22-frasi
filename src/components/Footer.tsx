import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { InstagramIcon, FacebookIcon, WhatsAppIcon, TripAdvisorIcon } from "@/components/SocialIcons";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f2e9dc] border-t border-[#dfcfb9] text-[#26170d] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="w-40 h-14 relative mb-3">
              <Image
                src="/images/logo-clean.png"
                alt="22 Frasi - Il Bistrò di Puglia"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-[#6d5644] leading-relaxed mb-4">
              Cucina caratteristica pugliese nel cuore di Bari. Formule pranzo veloci da 7€, carni alla brace, piatti autentici baresi e cortile dehor esterno.
            </p>
            <div className="flex items-center space-x-3 text-[#6d5644]">
              <a
                href={siteConfig.contact.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-[#dfcfb9] hover:text-[#00aa6c] hover:border-[#00aa6c] transition-colors"
                title="TripAdvisor"
              >
                <TripAdvisorIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-[#dfcfb9] hover:text-pink-600 hover:border-pink-500 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-[#dfcfb9] hover:text-blue-600 hover:border-blue-500 transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigazione */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#26170d] mb-3 uppercase tracking-wider">
              Pagine
            </h4>
            <ul className="space-y-2 text-xs text-[#6d5644]">
              <li>
                <Link href="/" className="hover:text-[#8c1d28] transition-colors">
                  Home (Bistrò &amp; Formule)
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#8c1d28] transition-colors">
                  Menù &amp; Flyer PDF
                </Link>
              </li>
              <li>
                <Link href="/storia" className="hover:text-[#8c1d28] transition-colors">
                  Storia di 22 Frasi (Manifesto)
                </Link>
              </li>
              <li>
                <Link href="/esperienza" className="hover:text-[#8c1d28] transition-colors">
                  Vivi l&apos;Esperienza (Video &amp; Foto)
                </Link>
              </li>
              <li>
                <Link href="/recensioni" className="hover:text-[#8c1d28] transition-colors">
                  Recensioni TripAdvisor 5.0 ★
                </Link>
              </li>
            </ul>
          </div>

          {/* Orari Sintetici */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#26170d] mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#8c1d28]" />
              <span>Orari Bistrò</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[#6d5644]">
              <li className="flex justify-between">
                <span>Lun – Sab:</span>
                <span className="font-mono text-[#26170d]">11:30–15:30 / 19:30–23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Domenica:</span>
                <span className="text-red-700 font-semibold">Chiuso</span>
              </li>
            </ul>
          </div>

          {/* Contatti Rapidi */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#26170d] mb-3 uppercase tracking-wider">
              Contatti &amp; Dove Siamo
            </h4>
            <ul className="space-y-2 text-xs text-[#6d5644]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8c1d28] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8c1d28] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-700 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-emerald-700 font-medium"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#dfcfb9] text-[11px] text-[#6d5644] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <p className="font-semibold text-[#26170d]">
              © {new Date().getFullYear()} {siteConfig.legal.ragioneSociale} • Insegna &ldquo;22 Frasi&rdquo;
            </p>
            <p className="text-[10px] text-[#85705e]">
              Sede: {siteConfig.legal.sedeLegale} • P.IVA: <span className="font-mono font-semibold text-[#26170d]">{siteConfig.legal.piva}</span> • PEC: {siteConfig.legal.pec}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
            <Link href="/privacy" className="hover:text-[#8c1d28] underline underline-offset-2 transition-colors">
              Privacy Policy (GDPR)
            </Link>
            <span className="text-[#dfcfb9]">•</span>
            <Link href="/cookie" className="hover:text-[#8c1d28] underline underline-offset-2 transition-colors">
              Cookie Policy
            </Link>
            <span className="text-[#dfcfb9]">•</span>
            <Link href="/termini" className="hover:text-[#8c1d28] underline underline-offset-2 transition-colors">
              Termini &amp; Note Legali
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

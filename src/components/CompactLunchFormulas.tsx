import { lunchFormulas } from "@/data/restaurantData";
import { siteConfig } from "@/config/site";
import { Clock, Check, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import Link from "next/link";

interface CompactLunchProps {
  showPdfLink?: boolean;
}

export default function CompactLunchFormulas({ showPdfLink = true }: CompactLunchProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Ciao! Vorrei informazioni sulle formule pranzo di 22 Frasi o prenotare un tavolo."
  )}`;

  return (
    <section id="formule-pranzo" className="py-8 sm:py-12 bg-[#f4ecdf] text-[#2c1d11] relative border-y border-[#dfcfb9]">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header compatto */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-7">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8c1d28]/10 border border-[#8c1d28]/25 text-[#8c1d28] text-[10px] sm:text-[11px] uppercase tracking-wider font-bold mb-1.5">
              <Clock className="w-3 h-3 text-[#8c1d28]" />
              <span>Pausa Pranzo Espressa • Lun – Sab</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#26170d] tracking-tight">
              Le Nostre Formule Pranzo <span className="text-[#8c1d28] italic">da 7€</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6d5644] font-light mt-0.5">
              Primi caldi della tradizione barese preparati al momento. Tutte le formule includono <strong>Acqua &amp; Coperto</strong>.
            </p>
          </div>

          {showPdfLink && (
            <Link
              href="/menu"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#8c1d28] hover:text-[#5a1017] underline underline-offset-4 shrink-0"
            >
              <span>Vedi i menù completi in PDF</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* Griglia Formule Strutturata e Compatta: 2 col su mobile, 4 su desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
          {lunchFormulas.map((formula) => (
            <div
              key={formula.id}
              className={`rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-200 border ${
                formula.popular
                  ? "bg-white border-[#d89d42] shadow-md shadow-[#d89d42]/15 ring-1 ring-[#d89d42]"
                  : "bg-[#faf6ee] border-[#dfcfb9] hover:bg-white hover:border-[#bda587] shadow-sm"
              }`}
            >
              <div>
                {/* Badge e Prezzo */}
                <div className="flex items-start justify-between gap-1 mb-2">
                  <div className="px-2.5 py-1 rounded-lg bg-[#8c1d28] text-white flex items-center justify-center shadow-sm">
                    <span className="font-serif font-bold text-base sm:text-lg leading-none">
                      {formula.price}
                    </span>
                  </div>

                  <div className="text-right">
                    {formula.popular ? (
                      <span className="inline-block text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#9b6616] bg-[#fdf3dc] border border-[#d89d42]/40 px-1.5 py-0.5 rounded">
                        Più scelta
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-0.5 text-[8px] sm:text-[9px] font-semibold text-[#6d5644]">
                        <ShoppingBag className="w-2.5 h-2.5" />
                        <span>Asporto {formula.takeawayPrice}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Titolo Formula */}
                <h3 className="font-serif font-bold text-[#26170d] text-xs sm:text-sm mb-1 leading-snug line-clamp-1">
                  {formula.title}
                </h3>

                {/* Descrizione Breve */}
                <p className="text-[11px] text-[#6d5644] font-light leading-snug mb-2 line-clamp-2">
                  {formula.description}
                </p>
              </div>

              {/* Dettagli inclusi compatti */}
              <div className="pt-2 border-t border-[#ebdcc8] space-y-0.5 text-[10px] text-[#553f2e]">
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#d89d42] shrink-0" />
                  <span className="truncate">Scelta del giorno</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#d89d42] shrink-0" />
                  <span className="truncate">{formula.includes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Barra di prenotazione rapida a fondo sezione */}
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#dfcfb9] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#8c1d28]/10 text-[#8c1d28] flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif font-bold text-xs sm:text-sm text-[#26170d] block leading-tight">
                Pausa pranzo veloce in centro a Bari
              </span>
              <span className="text-[11px] text-[#6d5644] font-light">
                Cortile dehor riservato all&apos;aperto o sala interna climatizzata
              </span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-all shrink-0 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
            <span>Prenota un Tavolo a Pranzo</span>
          </a>
        </div>
      </div>
    </section>
  );
}

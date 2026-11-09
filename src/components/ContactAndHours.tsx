import { siteConfig } from "@/config/site";
import { Clock, MapPin, Phone, Navigation } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function ContactAndHours() {
  return (
    <section id="orari-e-contatti" className="py-12 sm:py-20 bg-[#fbf8f2]/40 backdrop-blur-[1px] text-[#26170d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Orari */}
          <div className="p-6 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-[#dfcfb9] shadow-xs">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-3 rounded-2xl bg-[#f5ede1] text-[#8c1d28] border border-[#dfcfb9]">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#26170d]">Orari del Bistrò</h3>
                <p className="text-xs text-[#6d5644]">Pranzo, Aperitivi Pugliesi e Cena</p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {siteConfig.contact.hours.map((schedule, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-[#ebdcc8] gap-1.5"
                >
                  <span className="font-serif font-semibold text-[#26170d] text-sm sm:text-base">
                    {schedule.days}
                  </span>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono flex-wrap">
                    {schedule.lunch === "Chiuso" ? (
                      <span className="px-3 py-0.5 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-semibold">
                        Chiuso tutto il giorno
                      </span>
                    ) : (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-[#faf5ec] border border-[#dfcfb9] text-[#8c1d28] text-xs font-medium">
                          Pranzo: {schedule.lunch}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-[#faf5ec] border border-[#dfcfb9] text-[#553f2e] text-xs font-medium">
                          Cena: {schedule.dinner}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-[#faf5ec] border border-[#dfcfb9] text-[#553f2e] text-xs leading-relaxed">
              Consigliamo di prenotare il tavolo via WhatsApp, sia per il pranzo che per la cena.
            </div>
          </div>

          {/* Right Column: Posizione & Contatti */}
          <div className="p-6 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-[#dfcfb9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-3 rounded-2xl bg-[#f5ede1] text-[#8c1d28] border border-[#dfcfb9]">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#26170d]">Dove Trovarci</h3>
                  <p className="text-xs text-[#6d5644]">Vieni a trovarci nel nostro bistrò</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 text-sm text-[#4a3424]">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#faf5ec] text-[#8c1d28] border border-[#dfcfb9] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-[#26170d] text-xs sm:text-sm">Indirizzo</h5>
                    <p className="text-xs sm:text-sm text-[#6d5644]">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#faf5ec] text-[#8c1d28] border border-[#dfcfb9] mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-[#26170d] text-xs sm:text-sm">Telefono Fisso Locale</h5>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-xs sm:text-sm text-[#8c1d28] hover:underline"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#faf5ec] text-[#8c1d28] border border-[#dfcfb9] mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-[#26170d] text-xs sm:text-sm">Recapito Cellulare</h5>
                    <a
                      href={`tel:${siteConfig.contact.phoneMobile}`}
                      className="text-xs sm:text-sm text-[#8c1d28] hover:underline"
                    >
                      {siteConfig.contact.phoneMobileDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#eef7f2] text-emerald-700 border border-[#b8decb] mt-0.5">
                    <WhatsAppIcon className="w-4 h-4 fill-emerald-700" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-[#26170d] text-xs sm:text-sm">WhatsApp Prenotazioni</h5>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                        siteConfig.contact.whatsappDefaultMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-emerald-700 hover:underline font-semibold"
                    >
                      {siteConfig.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#dfcfb9]">
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#faf5ec] hover:bg-[#f4ebe0] text-[#26170d] font-semibold text-xs sm:text-sm border border-[#dfcfb9] transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#8c1d28]" />
                <span>Apri la posizione su Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

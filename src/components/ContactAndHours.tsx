import { siteConfig } from "@/config/site";
import { Clock, MapPin, Phone, Mail, Navigation } from "lucide-react";

export default function ContactAndHours() {
  return (
    <section id="orari-e-contatti" className="py-24 bg-neutral-900 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Orari */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">Orari di Apertura</h3>
                <p className="text-xs text-neutral-400">Vieni a trovarci a pranzo o a cena</p>
              </div>
            </div>

            <div className="space-y-6">
              {siteConfig.contact.hours.map((schedule, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-neutral-800/80 gap-2"
                >
                  <span className="font-medium text-white text-base">
                    {schedule.days}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-neutral-300 font-mono">
                    <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-amber-400 text-xs">
                      Pranzo: {schedule.lunch}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs">
                      Cena: {schedule.dinner}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-neutral-300 text-xs leading-relaxed">
              Consigliamo caldamente la prenotazione via WhatsApp, specialmente durante il fine settimana o per gruppi numerosi.
            </div>
          </div>

          {/* Right Column: Posizione & Contatti */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">Dove Siamo</h3>
                  <p className="text-xs text-neutral-400">Facile da raggiungere, parcheggio nelle vicinanze</p>
                </div>
              </div>

              <div className="space-y-6 text-sm text-neutral-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-neutral-900 text-neutral-400 mt-1">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Indirizzo</h5>
                    <p className="text-neutral-400">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-neutral-900 text-neutral-400 mt-1">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Telefono & Prenotazioni</h5>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-neutral-900 text-neutral-400 mt-1">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Email</h5>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-white font-medium text-sm border border-neutral-700 hover:border-amber-500/50 transition-all"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Ottieni indicazioni stradali (Google Maps)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

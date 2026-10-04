import { siteConfig } from "@/config/site";
import { Clock, MapPin, Phone, Mail, Navigation } from "lucide-react";

export default function ContactAndHours() {
  return (
    <section id="orari-e-contatti" className="py-24 bg-[#0a1b14] text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Orari */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#07130e] border border-[#1b4d3e] shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-[#1b4d3e] text-amber-300 border border-[#2a6d58]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">Orari del Bistrò</h3>
                <p className="text-xs text-[#a3c9b8]">Pranzo, Aperitivi Pugliesi e Cena</p>
              </div>
            </div>

            <div className="space-y-6">
              {siteConfig.contact.hours.map((schedule, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#1b4d3e]/60 gap-2"
                >
                  <span className="font-medium text-white text-base">
                    {schedule.days}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-neutral-300 font-mono">
                    <span className="px-2.5 py-1 rounded bg-[#0e271d] border border-[#1b4d3e] text-amber-300 text-xs">
                      Pranzo: {schedule.lunch}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#0e271d] border border-[#1b4d3e] text-[#a3c9b8] text-xs">
                      Cena: {schedule.dinner}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#1b4d3e]/30 border border-[#2a6d58] text-[#c2dfd3] text-xs leading-relaxed">
              Consigliamo di prenotare il tavolo via WhatsApp, specialmente per il fine settimana e per gustare le nostre preparazioni speciali a base di burrate fresche e bombette.
            </div>
          </div>

          {/* Right Column: Posizione & Contatti */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#07130e] border border-[#1b4d3e] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-[#1b4d3e] text-amber-300 border border-[#2a6d58]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">Dove Trovarci</h3>
                  <p className="text-xs text-[#a3c9b8]">Vieni a trovarci nel nostro bistrò</p>
                </div>
              </div>

              <div className="space-y-6 text-sm text-neutral-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#0e271d] text-amber-300 border border-[#1b4d3e] mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Indirizzo</h5>
                    <p className="text-[#a3c9b8]">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#0e271d] text-emerald-300 border border-[#1b4d3e] mt-1">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Telefono & Prenotazioni</h5>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[#a3c9b8] hover:text-white transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#0e271d] text-amber-300 border border-[#1b4d3e] mt-1">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Email</h5>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[#a3c9b8] hover:text-white transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1b4d3e]">
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#0e271d] hover:bg-[#16382b] text-white font-medium text-sm border border-[#2a6d58] transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Apri la posizione su Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

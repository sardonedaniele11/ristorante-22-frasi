import { siteConfig } from "@/config/site";
import { MapPin, Phone, ExternalLink, Share2 } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function SocialConnect() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  const channels = [
    {
      title: "WhatsApp Prenotazioni",
      subtitle: "Scrivici direttamente per bloccare il tuo tavolo in pochi secondi.",
      actionText: "Chatta con noi",
      href: whatsappUrl,
      icon: WhatsAppIcon,
      accentColor: "from-emerald-500/20 to-emerald-950/40",
      borderColor: "border-emerald-500/30 hover:border-emerald-500",
      badgeColor: "bg-emerald-500/20 text-emerald-400",
      textColor: "text-emerald-400",
      buttonBg: "bg-emerald-600 hover:bg-emerald-500 text-white",
    },
    {
      title: "Instagram Ufficiale",
      subtitle: `Segui ${siteConfig.contact.instagramHandle} per piatti del giorno, reel e storie in diretta.`,
      actionText: "Segui su Instagram",
      href: siteConfig.contact.instagram,
      icon: InstagramIcon,
      accentColor: "from-pink-500/20 to-purple-950/40",
      borderColor: "border-pink-500/30 hover:border-pink-500",
      badgeColor: "bg-pink-500/20 text-pink-400",
      textColor: "text-pink-400",
      buttonBg: "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white",
    },
    {
      title: "Facebook Community",
      subtitle: "Rimani aggiornato su serate a tema, eventi speciali e recensioni dei clienti.",
      actionText: "Visita la Pagina",
      href: siteConfig.contact.facebook,
      icon: FacebookIcon,
      accentColor: "from-blue-500/20 to-blue-950/40",
      borderColor: "border-blue-500/30 hover:border-blue-500",
      badgeColor: "bg-blue-500/20 text-blue-400",
      textColor: "text-blue-400",
      buttonBg: "bg-blue-600 hover:bg-blue-500 text-white",
    },
    {
      title: "Come Raggiungerci",
      subtitle: `${siteConfig.contact.address} - Apri il navigatore su Google Maps.`,
      actionText: "Apri Mappa",
      href: siteConfig.contact.googleMapsUrl,
      icon: MapPin,
      accentColor: "from-amber-500/20 to-amber-950/40",
      borderColor: "border-amber-500/30 hover:border-amber-500",
      badgeColor: "bg-amber-500/20 text-amber-400",
      textColor: "text-amber-400",
      buttonBg: "bg-amber-600 hover:bg-amber-500 text-white",
    },
  ];

  return (
    <section id="social" className="py-24 bg-neutral-950 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest font-semibold mb-4">
            <Share2 className="w-3.5 h-3.5" />
            <span>Sempre Connessi Con Te</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Tutti i Canali di <span className="text-amber-400 italic">22 Frasi</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Un unico punto di riferimento digitale collegato direttamente a WhatsApp, Instagram, Facebook e Google Maps per offrirti massima comodità.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <div
                key={i}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-b ${channel.accentColor} bg-neutral-900/60 border ${channel.borderColor} transition-all duration-300 hover:-translate-y-1 shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${channel.badgeColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Diretto
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                    {channel.subtitle}
                  </p>
                </div>

                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all ${channel.buttonBg}`}
                >
                  <span>{channel.actionText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Banner with direct phone call */}
        <div className="mt-12 p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-white">Preferisci chiamare per telefono?</h4>
              <p className="text-sm text-neutral-400">Siamo a tua disposizione per informazioni, eventi privati e intolleranze.</p>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-amber-400 font-semibold text-sm border border-neutral-700 transition-colors"
          >
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

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
      subtitle: "Scrivici per prenotare il tuo tavolo per pranzo, aperitivo o cena.",
      actionText: "Chatta con noi",
      href: whatsappUrl,
      icon: WhatsAppIcon,
      accentColor: "from-emerald-500/20 to-[#07130e]",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      badgeColor: "bg-emerald-500/20 text-emerald-300",
      buttonBg: "bg-emerald-600 hover:bg-emerald-500 text-white",
    },
    {
      title: "Instagram Ufficiale",
      subtitle: `Segui ${siteConfig.contact.instagramHandle} per scoprire i piatti del giorno e i nostri taglieri.`,
      actionText: "Segui su Instagram",
      href: siteConfig.contact.instagram,
      icon: InstagramIcon,
      accentColor: "from-pink-500/20 to-[#07130e]",
      borderColor: "border-pink-500/40 hover:border-pink-400",
      badgeColor: "bg-pink-500/20 text-pink-300",
      buttonBg: "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white",
    },
    {
      title: "Facebook Community",
      subtitle: "Segui la pagina per eventi speciali, serate a tema e recensioni.",
      actionText: "Visita la Pagina",
      href: siteConfig.contact.facebook,
      icon: FacebookIcon,
      accentColor: "from-blue-500/20 to-[#07130e]",
      borderColor: "border-blue-500/40 hover:border-blue-400",
      badgeColor: "bg-blue-500/20 text-blue-300",
      buttonBg: "bg-blue-600 hover:bg-blue-500 text-white",
    },
    {
      title: "Come Raggiungerci",
      subtitle: `${siteConfig.contact.address} - Apri le indicazioni stradali su Google Maps.`,
      actionText: "Apri Navigatore",
      href: siteConfig.contact.googleMapsUrl,
      icon: MapPin,
      accentColor: "from-amber-500/20 to-[#07130e]",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      badgeColor: "bg-amber-500/20 text-amber-300",
      buttonBg: "bg-amber-500 hover:bg-amber-400 text-[#07130e] font-bold",
    },
  ];

  return (
    <section id="social" className="py-24 bg-[#07130e] text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4d3e]/50 border border-[#2a6d58] text-amber-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Share2 className="w-3.5 h-3.5" />
            <span>I Nostri Canali Diretti</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Resta in Contatto con <span className="text-amber-300 italic">22 Frasi</span>
          </h2>
          <p className="text-[#a3c9b8] text-base sm:text-lg">
            Siamo a tua disposizione su WhatsApp per qualsiasi richiesta di tavolo, evento o curiosità sul nostro menù pugliese.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <div
                key={i}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-b ${channel.accentColor} bg-[#0e271d]/80 border ${channel.borderColor} transition-all duration-300 hover:-translate-y-1 shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${channel.badgeColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#a3c9b8]">
                      Canale Diretto
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
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all shadow-md ${channel.buttonBg}`}
                >
                  <span>{channel.actionText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Banner with direct phone call */}
        <div className="mt-12 p-8 rounded-3xl bg-[#0e271d] border border-[#1b4d3e] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-[#1b4d3e] text-amber-300 border border-[#2a6d58]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-white">Preferisci chiamare al telefono?</h4>
              <p className="text-sm text-[#a3c9b8]">Siamo felici di rispondere alle tue domande e preparare il tuo tavolo pugliese.</p>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#16382b] hover:bg-[#1b4d3e] text-amber-300 font-semibold text-sm border border-[#2a6d58] transition-colors"
          >
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

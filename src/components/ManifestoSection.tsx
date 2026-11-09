import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BookOpen, Sparkles, Heart, Utensils } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function ManifestoSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section id="chi-siamo" className="py-10 sm:py-16 bg-gradient-to-b from-[#fbf8f2] via-[#f7f1e5] to-[#fbf8f2] text-[#26170d] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#d89d42]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pill */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-xs uppercase tracking-widest font-semibold shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#8c1d28]" />
            <span>La Nostra Storia</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#26170d] tracking-tight mt-3 mb-2">
            Perché Ci Chiamiamo <span className="text-[#8c1d28] italic">22 Frasi</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#6d5644] font-serif uppercase tracking-wider">
            {siteConfig.subtitle} • {siteConfig.descriptor}
          </p>
        </div>

        {/* Layout: Poster originale + Storia autentica narrata con il cuore */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Colonna Sinistra: Poster Ufficiale */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-white border border-[#dfcfb9] shadow-md max-w-sm w-full">
              <div className="relative w-full overflow-hidden rounded-xl bg-[#faf6ee]">
                <Image
                  src="/images/manifesto-22-frasi.jpg"
                  alt="Il Manifesto Grafico Ufficiale di 22 Frasi"
                  width={1066}
                  height={1600}
                  className="w-full h-auto object-contain block select-none"
                  priority
                />
              </div>
              <div className="mt-3 pt-2 text-center border-t border-[#ebdcc8]">
                <span className="text-[11px] font-mono text-[#6d5644]">
                  Il Manifesto originale esposto nel locale in Via Putignani
                </span>
              </div>
            </div>
          </div>

          {/* Colonna Destra: La narrazione autentica & accogliente */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-6 sm:p-10 bg-white/90 backdrop-blur-xs border border-[#dfcfb9] shadow-sm text-left space-y-5">
              {/* Logo Presentation */}
              <div className="flex items-center gap-3 pb-2 border-b border-[#ebdcc8]">
                <div className="w-10 h-10 rounded-xl bg-[#f2e7d5] border border-[#d6be9f] p-1.5 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#8c1d28]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#26170d]">
                    Il Valore della Condivisione
                  </h2>
                  <p className="text-xs text-[#8c1d28] font-semibold tracking-wide">
                    Le parole sono magiche... hanno un potere strabiliante.
                  </p>
                </div>
              </div>

              {/* Testo narrativo elegante e caldo */}
              <div className="space-y-4 font-serif text-[#4a3424] text-sm sm:text-base leading-relaxed">
                <p>
                  Nel cuore pulsante di Bari, <strong>22 Frasi</strong> nasce da un&apos;idea semplice e profonda:
                  sedersi a tavola non è mai solo consumare un pasto, ma un atto di tempo dedicato a chi si ama.
                </p>

                <p className="italic bg-[#fbf8f2] p-4 rounded-xl border border-[#ebdcc8] text-[#26170d]">
                  &ldquo;Conversare, scambiarsi parole significa dedicarsi tempo... tra amici, tra innamorati, in famiglia.
                  Sedersi a mangiare è amicizia, calore, tradizione... è sentirsi a casa.&rdquo;
                </p>

                <p>
                  Vogliamo che ogni momento trascorso nel nostro bistrò — dal profumo delle orecchiette fatte a mano
                  alle carni selezionate alla brace, fino a un calice di Primitivo nel nostro dehor — sia un&apos;occasione
                  di incontro autentico e spensieratezza.
                </p>

                <div className="pt-2">
                  <p className="font-bold text-[#8c1d28] text-base sm:text-lg">
                    Quante frasi servono per sentirsi veramente a casa?
                  </p>
                  <p className="font-sans text-2xl sm:text-3xl font-extrabold text-[#26170d] tracking-tight mt-1">
                    Forse solo 22.
                  </p>
                </div>
              </div>

              {/* Bottoni veloci */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-[#ebdcc8]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Prenota un Tavolo</span>
                </a>

                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-[#f2e7d5] hover:bg-[#e7d8c1] text-[#26170d] border border-[#d6be9f] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs transition-all"
                >
                  <Utensils className="w-4 h-4 text-[#8c1d28]" />
                  <span>Scopri il Nostro Menù</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

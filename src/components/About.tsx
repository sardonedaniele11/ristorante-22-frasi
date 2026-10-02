import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Utensils, Wine, Clock, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="chi-siamo" className="py-24 bg-neutral-950 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Philosophy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest font-semibold mb-6">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>La Nostra Filosofia</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              Ogni piatto racconta una storia, ogni serata ha le sue{" "}
              <span className="text-amber-400 italic">22 Frasi</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              {siteConfig.description}
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Dal pranzo di lavoro alla cena romantica a lume di candela, fino ai brindisi tra amici nel weekend: creiamo momenti indimenticabili attraverso sapori che sanno emozionare e un servizio attento e cordiale.
            </p>

            {/* Value pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-800">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-white text-base">Cucina Genuina</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Ingredienti del territorio trattati con cura e creatività.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Wine className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-white text-base">Cantina & Drink</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Etichette prestigiose e cocktail equilibrati per ogni palato.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-white text-base">Convivialità</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Il tempo a tavola vissuto con serenità e passione.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="relative">
            <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                alt="Ambiente 22 Frasi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:left-6 max-w-xs bg-neutral-900/95 backdrop-blur-md p-6 rounded-2xl border border-amber-500/30 shadow-2xl">
              <span className="text-amber-400 text-3xl font-serif leading-none block mb-2">“</span>
              <p className="text-xs sm:text-sm text-neutral-200 italic font-serif">
                Non c'è amore più sincero di quello per il buon cibo e la buona compagnia.
              </p>
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block mt-3">
                — Ristorante 22 Frasi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

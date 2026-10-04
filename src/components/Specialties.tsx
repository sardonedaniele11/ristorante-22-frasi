import { Sparkles, UtensilsCrossed, Flame, Grape, Wheat } from "lucide-react";
import Image from "next/image";

export default function Specialties() {
  const specialties = [
    {
      title: "I Latticini & Le Burrate",
      subtitle: "Dal cuore della Murgia",
      description: "Burrata di Andria IGP fresca di giornata, stracciatella filante, nodini e caciocavallo podolico stagionato.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pasta Fresca & Orecchiette",
      subtitle: "Tradizione fatta a mano",
      description: "Orecchiette con cime di rapa e acciughe, cavatelli con sugo pugliese e ricotte salate della tradizione.",
      icon: Wheat,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Capocollo, Bombette & Brace",
      subtitle: "I sapori della Valle d'Itria",
      description: "Il celebre capocollo di Martina Franca e le irresistibili bombette ripiene di formaggio fondente.",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Focacce, Friselle & Vini DOC",
      subtitle: "Primitivo & Negroamaro",
      description: "Focaccia alta barese con pomodorini e olive baresane, friselle condite con olio EVO e grandi calici di Puglia.",
      icon: Grape,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="specialita" className="py-24 bg-[#0a1b14] text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4d3e]/50 border border-[#2a6d58] text-amber-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Eccellenze del Territorio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Le Specialità del <span className="text-amber-300 italic">Bistrò di Puglia</span>
          </h2>
          <p className="text-[#a3c9b8] text-base sm:text-lg">
            Da 22 Frasi la cucina è un atto d’amore verso la Puglia: solo ingredienti genuini, ricette veraci e il calore di una tavola imbandita a festa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-[#0e271d] border border-[#1b4d3e] shadow-xl hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e271d] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 p-2.5 rounded-xl bg-[#0a1b14]/80 backdrop-blur-sm text-amber-300 border border-[#1b4d3e]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

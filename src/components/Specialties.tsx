import { Sparkles, UtensilsCrossed, Flame, Grape, Wheat, Fish } from "lucide-react";
import Image from "next/image";

export default function Specialties() {
  const specialties = [
    {
      title: "Degustazione Barese della Casa",
      subtitle: "Il benvenuto di 22 Frasi",
      description: "Cozze ripiene, polpette al sugo, sgagliozze di polenta, riso patate e cozze: tutto il cuore della cucina barese in un unico assaggio.",
      icon: Sparkles,
      image: "/images/piatti/degustazione-barese.jpg",
    },
    {
      title: "Cozze Ripiene & Riso Patate e Cozze",
      subtitle: "I simboli di Bari",
      description: "Cozze imbottite gratinate nel pomodoro e il tiellone barese per eccellenza: riso, patate a fette e cozze nere cotte al forno.",
      icon: Fish,
      image: "/images/piatti/cozze-ripiene-riso.jpg",
    },
    {
      title: "Gran Tagliere di Salumi Pugliesi",
      subtitle: "Salumificio Bedogni & artigiani locali",
      description: "Capocollo di Martina Franca, bresaola, prosciutto crudo, sgagliozze di polenta e bruschette: la tradizione norcina pugliese.",
      icon: Wheat,
      image: "/images/piatti/gran-tagliere-salumi.jpg",
    },
    {
      title: "Spiedini & Carni alla Brace",
      subtitle: "Brace & Valle d'Itria",
      description: "Filetti e spiedini di carne grigliati sulla brace viva, serviti su tagliere di legno con rucola, pomodorini e caciocavallo grattugiato.",
      icon: Flame,
      image: "/images/piatti/spiedini-carne-brace.jpg",
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
            Da 22 Frasi la cucina è un atto d&apos;amore verso la Puglia: solo ingredienti genuini, ricette veraci e il calore di una tavola imbandita a festa.
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
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e271d] via-[#0e271d]/20 to-transparent" />
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

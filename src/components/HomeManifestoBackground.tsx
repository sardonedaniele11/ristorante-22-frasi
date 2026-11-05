import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

export default function HomeManifestoBackground() {
  return (
    <section
      id="il-manifesto"
      className="relative py-12 sm:py-20 overflow-hidden bg-[#fbf8f2] text-[#26170d] border-b border-[#dfcfb9]"
    >
      {/* Sfondo Layout: Manifesto originale come filigrana / sfondo sottostante */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-2xl h-full min-h-[500px] opacity-[0.14] sm:opacity-[0.18] mix-blend-multiply transition-opacity">
          <Image
            src="/images/manifesto-22-frasi.jpg"
            alt="Manifesto 22 Frasi Sfondo"
            fill
            className="object-contain object-center scale-110 filter blur-[0.5px]"
            priority
          />
        </div>
        {/* Soft radial vignette so content pops */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#fbf8f2]/60 to-[#fbf8f2]" />
      </div>

      {/* Contenuto / Scritte sovrapposte al layout */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e7d5]/90 border border-[#d6be9f] text-[#8c1d28] text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-4 shadow-xs backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#d89d42]" />
          <span>La Nostra Filosofia</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#26170d] tracking-tight leading-tight mb-3">
          Le parole sono magiche... <br className="hidden sm:inline" />
          <span className="text-[#8c1d28] italic">hanno un potere strabiliante</span>
        </h2>

        <div className="space-y-3 font-serif text-[#4a3424] text-sm sm:text-base leading-relaxed max-w-xl mx-auto my-5">
          <p className="italic">
            &ldquo;Sedersi ad un tavolo per mangiare è amicizia, famiglia,
            condivisione e amore. È tradizione, calore... è sentirsi a casa.&rdquo;
          </p>
          <p className="font-bold text-[#26170d] text-base sm:text-lg">
            Quante frasi servono per sentirsi a casa? <br />
            <span className="text-[#8c1d28] text-xl sm:text-2xl tracking-wide">
              Forse solo 22...
            </span>
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/storia"
            className="inline-flex items-center gap-2 bg-[#8c1d28] hover:bg-[#6e141e] text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xs transition-all"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Leggi la Storia &amp; il Manifesto Completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

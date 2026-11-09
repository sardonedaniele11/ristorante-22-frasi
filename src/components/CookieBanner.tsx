"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "22frasi_cookie_consent";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se l'utente ha già espresso una preferenza
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        // Mostra il banner dopo un breve delay per evitare flash all'avvio
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback sicuro se localStorage è disabilitato
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({ status: "accepted", date: new Date().toISOString() })
      );
    } catch {}
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({ status: "necessary_only", date: new Date().toISOString() })
      );
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Informativa Cookie"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-5 pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-[#dfcfb9] text-[#26170d] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl pointer-events-auto">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] shrink-0">
            <Cookie className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <div className="flex-1 space-y-1.5 sm:space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#26170d] flex items-center gap-1.5">
                <span>Rispettiamo la tua Privacy</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </h3>

              <button
                type="button"
                onClick={handleNecessaryOnly}
                className="text-[#6d5644] hover:text-[#26170d] p-1 rounded-lg transition-colors"
                aria-label="Chiudi e accetta solo tecnici"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#553f2e] leading-relaxed">
              Questo sito web utilizza <strong>esclusivamente cookie tecnici essenziali</strong> al corretto
              funzionamento della navigazione e per memorizzare le tue preferenze. Non utilizziamo cookie di
              profilazione o marketing di terze parti. Per maggiori informazioni consulta la nostra{" "}
              <Link
                href="/cookie"
                className="text-[#8c1d28] underline underline-offset-2 hover:text-[#5a1017] font-medium"
              >
                Cookie Policy
              </Link>{" "}
              e l&apos;
              <Link
                href="/privacy"
                className="text-[#8c1d28] underline underline-offset-2 hover:text-[#5a1017] font-medium"
              >
                Informativa Privacy
              </Link>
              .
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleAccept}
                className="px-4 py-2 rounded-xl bg-[#8c1d28] hover:bg-[#6e141e] text-white font-semibold text-xs transition-all shadow-xs"
              >
                Accetta Tutti
              </button>

              <button
                type="button"
                onClick={handleNecessaryOnly}
                className="px-4 py-2 rounded-xl bg-[#f2e7d5] hover:bg-[#e7d8c1] text-[#26170d] border border-[#d6be9f] font-semibold text-xs transition-all"
              >
                Solo Cookie Tecnici
              </button>

              <Link
                href="/cookie"
                className="text-xs text-[#6d5644] hover:text-[#8c1d28] underline underline-offset-2 ml-auto"
              >
                Personalizza / Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import { siteConfig } from "@/config/site";
import { Cookie, ShieldCheck, CheckCircle2, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CookiePolicyPage() {
  const [resetMessage, setResetMessage] = useState<string | null>(null);

  const handleResetCookie = () => {
    try {
      localStorage.removeItem("22frasi_cookie_consent");
      setResetMessage("Preferenze cookie resettate con successo. Ricarica la pagina per rivedere il banner.");
    } catch {
      setResetMessage("Errore nel reset delle preferenze.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#26170d] flex flex-col font-sans selection:bg-[#d89d42] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-[#dfcfb9] shadow-sm">
          {/* Header */}
          <div className="border-b border-[#ebdcc8] pb-6 mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
              <Cookie className="w-4 h-4 text-[#8c1d28]" />
              <span>Linee Guida Garante Privacy 10 Giugno 2021</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#26170d] tracking-tight mb-2">
              Informativa sui Cookie (Cookie Policy)
            </h1>
            <p className="text-xs text-[#6d5644]">
              Ultimo aggiornamento: Novembre 2026 • Versione 1.0
            </p>
          </div>

          <div className="prose prose-stone max-w-none space-y-8 text-sm text-[#4a3424] leading-relaxed">
            {/* Introduzione */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d]">Cosa Sono i Cookie</h2>
              <p>
                I cookie sono brevi frammenti di testo (lettere e/o numeri) che permettono al server web di
                memorizzare sul client (il browser) informazioni da riutilizzare nel corso della medesima visita
                al sito (cookie di sessione) o in seguito, anche a distanza di giorni (cookie persistenti). I cookie
                vengono memorizzati, in base alle preferenze dell&apos;utente, dal singolo browser sullo specifico
                dispositivo utilizzato (computer, tablet, smartphone).
              </p>
            </section>

            {/* Tipologie di Cookie utilizzate dal Sito */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif font-bold text-[#26170d]">
                Tipologie di Cookie Utilizzate da 22 Frasi
              </h2>

              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Sito Privo di Cookie di Profilazione o Pubblicitari</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950">
                  Desideriamo informare gli utenti che <strong>questo sito web NON installa cookie di profilazione</strong>,
                  non traccia le abitudini di consumo degli utenti e non condivide dati con piattaforme pubblicitarie
                  per scopi di marketing (nessun tracciatore Meta Pixel, Google Ads o simili attivo sul sito).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-base text-[#26170d]">1. Cookie Tecnici e di Navigazione (Strettamente Necessari)</h3>
                <p>
                  Questo sito fa uso <strong>esclusivo di cookie tecnici di prima parte</strong> e chiavi di memoria locale (HTML5 Web Storage),
                  strettamente necessari per il corretto funzionamento delle pagine, per garantire la sicurezza della trasmissione e per
                  memorizzare le preferenze espresse dall&apos;utente (come l&apos;avvenuta presa visione del banner informativo).
                </p>
                <p className="text-xs text-[#6d5644]">
                  Ai sensi dell&apos;art. 122 del Codice Privacy e delle Linee Guida del Garante Privacy del 10 giugno 2021, per
                  l&apos;utilizzo dei soli cookie tecnici non è richiesto il preventivo consenso dell&apos;utente, ma la presente informativa.
                </p>
              </div>
            </section>

            {/* Tabella Cookie Tecnici */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d]">Tabella dei Dati Tecnici Memorizzati</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#dfcfb9]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#faf5ec] border-b border-[#dfcfb9] text-[#26170d] font-serif font-bold">
                    <tr>
                      <th className="p-3">Identificatore</th>
                      <th className="p-3">Tipologia</th>
                      <th className="p-3">Finalità</th>
                      <th className="p-3">Durata</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ebdcc8] text-[#553f2e]">
                    <tr>
                      <td className="p-3 font-mono font-semibold text-[#8c1d28]">22frasi_cookie_consent</td>
                      <td className="p-3">Tecnico (LocalStorage)</td>
                      <td className="p-3">Memorizza la scelta dell&apos;utente per non mostrare ripetutamente il banner cookie.</td>
                      <td className="p-3">1 anno (o fino a cancellazione cache)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-[#8c1d28]">Sessione Next.js</td>
                      <td className="p-3">Tecnico di prima parte</td>
                      <td className="p-3">Garantisce le prestazioni del server e la corretta navigazione tra le pagine.</td>
                      <td className="p-3">Sessione di navigazione</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Collegamenti Esterni Terze Parti */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d]">Link a Servizi Esterni (WhatsApp, Google Maps, Social)</h2>
              <p>
                Sul nostro sito sono presenti pulsanti e collegamenti a servizi esterni di terze parti (come WhatsApp
                per la prenotazione, Instagram, Facebook, TripAdvisor e Google Maps). Cliccando su tali link, l&apos;utente
                lascia il nostro sito web e si connette direttamente alle rispettive piattaforme terze, le quali
                gestiscono i propri cookie secondo le proprie informative privacy autonome:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>
                  <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#8c1d28] underline">
                    Informativa Privacy WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#8c1d28] underline">
                    Informativa Privacy Google &amp; Maps
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-[#8c1d28] underline">
                    Informativa Privacy Meta (Facebook &amp; Instagram)
                  </a>
                </li>
              </ul>
            </section>

            {/* Gestione Cookie dal Browser */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d]">Come Disabilitare i Cookie dal Tuo Browser</h2>
              <p>
                L&apos;utente può gestire le preferenze relative ai cookie direttamente all&apos;interno del proprio browser ed
                impedire che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile
                eliminare i cookie installati in passato.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#faf6ee] border border-[#dfcfb9] text-center hover:border-[#8c1d28] transition-colors font-medium"
                >
                  Google Chrome
                </a>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#faf6ee] border border-[#dfcfb9] text-center hover:border-[#8c1d28] transition-colors font-medium"
                >
                  Apple Safari
                </a>
                <a
                  href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#faf6ee] border border-[#dfcfb9] text-center hover:border-[#8c1d28] transition-colors font-medium"
                >
                  Mozilla Firefox
                </a>
                <a
                  href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#faf6ee] border border-[#dfcfb9] text-center hover:border-[#8c1d28] transition-colors font-medium"
                >
                  Microsoft Edge
                </a>
              </div>
            </section>

            {/* Gestione Preferenze sul Sito */}
            <section className="space-y-3 pt-4 border-t border-[#ebdcc8]">
              <h2 className="text-xl font-serif font-bold text-[#26170d]">Gestione Preferenze del Nostro Sito</h2>
              <p>
                Se desideri reimpostare la tua scelta sul banner informativo per la navigazione su questo sito,
                puoi farlo cliccando sul pulsante sottostante:
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleResetCookie}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8c1d28] hover:bg-[#6e141e] text-white font-semibold text-xs transition-all shadow-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reimposta Preferenze Cookie</span>
                </button>
                {resetMessage && (
                  <p className="text-xs text-emerald-700 font-semibold mt-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{resetMessage}</span>
                  </p>
                )}
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-[#ebdcc8] text-center sm:text-left text-xs text-[#6d5644]">
            <p>
              Per qualunque informazione o esercizio dei diritti di protezione dei dati, visita la nostra{" "}
              <Link href="/privacy" className="text-[#8c1d28] font-bold underline hover:text-[#5a1017]">
                Informativa sulla Privacy (GDPR)
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Mail, MapPin, Phone, FileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Informativa sulla Privacy (GDPR) | 22 Frasi - Bari",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) di 22 Frasi Bistrò a Bari.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#26170d] flex flex-col font-sans selection:bg-[#d89d42] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-[#dfcfb9] shadow-sm">
          {/* Header */}
          <div className="border-b border-[#ebdcc8] pb-6 mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Conforme al Regolamento UE 2016/679 (GDPR)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#26170d] tracking-tight mb-2">
              Informativa sulla Privacy
            </h1>
            <p className="text-xs text-[#6d5644]">
              Ultimo aggiornamento: Novembre 2026 • Versione 1.0
            </p>
          </div>

          <div className="prose prose-stone max-w-none space-y-8 text-sm text-[#4a3424] leading-relaxed">
            {/* 1. Titolare del Trattamento */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#f2e7d5] text-[#8c1d28] flex items-center justify-center text-xs font-bold font-mono">
                  1
                </span>
                <span>Titolare del Trattamento dei Dati</span>
              </h2>
              <p>
                Il Titolare del trattamento dei dati personali raccolti tramite questo sito web è:
              </p>
              <div className="p-4 rounded-2xl bg-[#faf6ee] border border-[#dfcfb9] text-xs sm:text-sm space-y-1.5">
                <p className="font-bold text-[#26170d]">{siteConfig.legal.ragioneSociale}</p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8c1d28] shrink-0" />
                  <span>Sede: {siteConfig.legal.sedeLegale}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#8c1d28] shrink-0" />
                  <span>P.IVA: {siteConfig.legal.piva} • C.F.: {siteConfig.legal.codiceFiscale}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#8c1d28] shrink-0" />
                  <span>Email: {siteConfig.contact.email} • PEC: {siteConfig.legal.pec}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#8c1d28] shrink-0" />
                  <span>Telefono: {siteConfig.contact.phoneDisplay}</span>
                </p>
              </div>
            </section>

            {/* 2. Tipologia di Dati Trattati */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#f2e7d5] text-[#8c1d28] flex items-center justify-center text-xs font-bold font-mono">
                  2
                </span>
                <span>Tipologia di Dati Raccolti</span>
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Dati di navigazione:</strong> I sistemi informatici e le procedure software preposte
                  al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni
                  dati personali la cui trasmissione è implicita nell&apos;uso dei protocolli di comunicazione di
                  Internet (indirizzi IP in forma anonima o aggregata, parametri relativi al sistema operativo
                  dell&apos;utente, log di sistema per motivi di sicurezza).
                </li>
                <li>
                  <strong>Dati forniti volontariamente dall&apos;utente:</strong> L&apos;invio facoltativo ed esplicito di
                  messaggi tramite i recapiti presenti sul sito (posta elettronica, chiamate o messaggi tramite
                  l&apos;applicazione WhatsApp per la prenotazione di tavoli o richieste informative) comporta
                  l&apos;acquisizione del numero di telefono o dell&apos;indirizzo email del mittente, nonché degli
                  eventuali dati personali inseriti nella comunicazione (es. nome, orario della prenotazione, numero
                  di persone).
                </li>
              </ul>
            </section>

            {/* 3. Finalità e Basi Giuridiche del Trattamento */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#f2e7d5] text-[#8c1d28] flex items-center justify-center text-xs font-bold font-mono">
                  3
                </span>
                <span>Finalità e Basi Giuridiche del Trattamento</span>
              </h2>
              <p>I dati personali sono trattati esclusivamente per le seguenti finalità:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-[#faf6ee] border border-[#dfcfb9]">
                  <p className="font-bold text-[#26170d] mb-1">Gestione Prenotazioni &amp; Contatto</p>
                  <p className="text-[#6d5644]">
                    Per rispondere a richieste di informazioni e confermare la prenotazione di tavoli al bistrò.
                    <br />
                    <em>Base giuridica: Esecuzione di misure precontrattuali o contrattuali (Art. 6, par. 1, lett. b GDPR).</em>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#faf6ee] border border-[#dfcfb9]">
                  <p className="font-bold text-[#26170d] mb-1">Sicurezza e Funzionamento Tecnico</p>
                  <p className="text-[#6d5644]">
                    Per garantire la corretta visualizzazione e la protezione informatica del sito contro attacchi o abusi.
                    <br />
                    <em>Base giuridica: Legittimo interesse del Titolare (Art. 6, par. 1, lett. f GDPR).</em>
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#8c1d28] font-semibold">
                Nessun dato viene venduto a terzi o utilizzato per profilazione commerciale o invio di newsletter non richieste.
              </p>
            </section>

            {/* 4. Modalità di Trattamento e Sicurezza */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#f2e7d5] text-[#8c1d28] flex items-center justify-center text-xs font-bold font-mono">
                  4
                </span>
                <span>Modalità di Trattamento e Sicurezza</span>
              </h2>
              <p>
                Il trattamento viene effettuato con strumenti informatici e telematici mediante misure di sicurezza
                tecniche ed organizzative adeguate a prevenire la perdita dei dati, usi illeciti o non corretti ed accessi
                non autorizzati (tra cui crittografia HTTPS/TLS su tutte le comunicazioni web).
              </p>
            </section>

            {/* 5. Conservazione dei Dati */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#f2e7d5] text-[#8c1d28] flex items-center justify-center text-xs font-bold font-mono">
                  5
                </span>
                <span>Periodo di Conservazione dei Dati</span>
              </h2>
              <p>
                I dati comunicati per le prenotazioni vengono conservati per il tempo strettamente necessario
                alla gestione del servizio richiesto e, successivamente, cancellati o resi anonimi, fatti salvi
                eventuali obblighi di conservazione previsti dalla legge (es. documenti contabili/fiscali per 10 anni).
              </p>
            </section>

            {/* 6. Destinatari e Trasferimento Dati */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#f2e7d5] text-[#8c1d28] flex items-center justify-center text-xs font-bold font-mono">
                  6
                </span>
                <span>Destinatari e Luogo di Trattamento</span>
              </h2>
              <p>
                I dati possono essere trattati dal personale autorizzato del ristorante o da fornitori di servizi tecnici
                nominati, ove necessario, Responsabili del Trattamento (es. hosting provider Vercel Inc., che adotta
                garanzie contrattuali standard per la protezione dati conformi al Data Privacy Framework UE-USA).
                I dati non vengono diffusi pubblicamente.
              </p>
            </section>

            {/* 7. Diritti dell'Interessato */}
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#26170d] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#f2e7d5] text-[#8c1d28] flex items-center justify-center text-xs font-bold font-mono">
                  7
                </span>
                <span>I Tuoi Diritti (Artt. 15-22 GDPR)</span>
              </h2>
              <p>
                In qualità di interessato, hai diritto di esercitare in qualsiasi momento i diritti previsti dal GDPR:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ottenere la conferma dell&apos;esistenza o meno di dati personali che ti riguardano e riceverne copia;</li>
                <li>Chiedere la rettifica dei dati inesatti o l&apos;integrazione di quelli incompleti;</li>
                <li>Chiedere la cancellazione dei dati (&ldquo;diritto all&apos;oblio&rdquo;) nei casi previsti dall&apos;art. 17 GDPR;</li>
                <li>Ottenere la limitazione del trattamento o opporti allo stesso per motivi legittimi;</li>
                <li>Richiedere la portabilità dei dati in formato strutturato e leggibile da dispositivo automatico.</li>
              </ul>
              <p className="pt-2">
                Per esercitare i tuoi diritti puoi scrivere all&apos;indirizzo email:{" "}
                <a href={`mailto:${siteConfig.legal.privacyEmail}`} className="text-[#8c1d28] font-bold underline">
                  {siteConfig.legal.privacyEmail}
                </a>{" "}
                o inviare una raccomandata alla sede legale del Titolare.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mt-2">
                <strong>Reclamo all&apos;Autorità di Controllo:</strong> Hai inoltre il diritto di proporre reclamo al
                Garante per la Protezione dei Dati Personali (Piazza Venezia 11, 00187 Roma,{" "}
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  www.garanteprivacy.it
                </a>
                ) qualora ritieni che il trattamento violi la normativa vigente.
              </div>
            </section>

            {/* 8. Cookie Policy Link */}
            <section className="space-y-3 pt-4 border-t border-[#ebdcc8]">
              <h2 className="text-xl font-serif font-bold text-[#26170d]">Cookie Policy</h2>
              <p>
                Per conoscere il dettaglio dei cookie tecnici utilizzati da questo sito web e le modalità di gestione delle preferenze, consulta la pagina dedicata:{" "}
                <Link href="/cookie" className="text-[#8c1d28] font-bold underline hover:text-[#5a1017]">
                  Informativa Estesa sui Cookie (Cookie Policy)
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

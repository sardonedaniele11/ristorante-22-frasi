export interface GalleryItem {
  id: string;
  title: string;
  category: "piatti" | "sala" | "cocktail" | "atmosfera";
  description: string;
  src: string;
}

export const siteConfig = {
  name: "22 Frasi",
  subtitle: "Ristorante & Cocktail Bar",
  tagline: "Un viaggio culinario fatto di passione, sapori autentici e calda ospitalità.",
  description:
    "Benvenuti al Ristorante 22 Frasi: un connubio perfetto tra tradizione italiana e tocchi contemporanei. Atmosfera elegante e accogliente, piatti curati e ottima selezione di vini e cocktail.",

  // Contatti e Social collegabili direttamente
  contact: {
    phone: "+39 000 0000000", // Da sostituire con il numero reale del ristorante
    phoneDisplay: "+39 000 000 0000",
    whatsapp: "390000000000", // Numero WhatsApp senza spazi e senza '+'
    whatsappDefaultMessage:
      "Ciao! Vorrei prenotare un tavolo presso il Ristorante 22 Frasi.",
    instagram: "https://instagram.com", // Da sostituire con la pagina ufficiale
    instagramHandle: "@22frasiristorante",
    facebook: "https://facebook.com", // Da sostituire con la pagina ufficiale
    facebookName: "Ristorante 22 Frasi",
    email: "info@22frasiristorante.it",
    address: "Via del Gusto, 22 - Italia", // Indirizzo reale
    googleMapsUrl: "https://maps.google.com",
    hours: [
      { days: "Lunedì - Venerdì", lunch: "12:30 - 15:00", dinner: "19:30 - 23:30" },
      { days: "Sabato", lunch: "12:30 - 15:30", dinner: "19:30 - 00:00" },
      { days: "Domenica", lunch: "12:30 - 16:00", dinner: "Chiuso la sera" },
    ],
  },

  // Foto iniziali (segnaposto professionali ad alta risoluzione, pronti per essere sostituiti con le foto del cliente)
  gallery: [
    {
      id: "1",
      title: "La Nostra Sala Principale",
      category: "sala",
      description: "Ambiente intimo ed elegante, illuminazione soffusa e cura del dettaglio.",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "2",
      title: "Pasta Fresca Artigianale",
      category: "piatti",
      description: "Tradizione e maestria nella preparazione quotidiana dei nostri primi piatti.",
      src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "3",
      title: "Tagliata di Fassona & Aromi",
      category: "piatti",
      description: "Carni selezionate cotte a puntino, servite con sale di Cervia e rosmarino.",
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "4",
      title: "Signature Cocktail al Bancone",
      category: "cocktail",
      description: "Mixology d'autore pensata per aperitivi ricercati e dopo cena conviviali.",
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "5",
      title: "I Nostri Antipasti di Mare",
      category: "piatti",
      description: "Freschezza del pescato del giorno, lavorato con sapienza e tocco moderno.",
      src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "6",
      title: "Tavolo Riservato & Atmosfera",
      category: "atmosfera",
      description: "L'angolo ideale per cene romantiche, anniversari e serate speciali.",
      src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "7",
      title: "Dolce della Casa",
      category: "piatti",
      description: "Delizie artigianali preparate ogni giorno dal nostro pastry chef.",
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "8",
      title: "La Cantina Selezionata",
      category: "atmosfera",
      description: "Oltre cento etichette tra grandi classici italiani e piccole cantine biodinamiche.",
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    },
  ] as GalleryItem[],

  features: [
    {
      title: "Materia Prima d'Eccellenza",
      description: "Selezioniamo solo ingredienti freschissimi di stagione da produttori locali certificati.",
    },
    {
      title: "Prenotazione Immediata",
      description: "Blocca il tuo tavolo in un clic via WhatsApp senza attese né registrazioni.",
    },
    {
      title: "Ambiente Ricercato",
      description: "Design moderno, musica d'ambiente e un'atmosfera ideale per ogni occasione speciale.",
    },
  ],
};

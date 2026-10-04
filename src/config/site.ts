export interface GalleryItem {
  id: string;
  title: string;
  category: "specialita" | "ambiente" | "taglieri" | "cantina";
  description: string;
  src: string;
}

export const siteConfig = {
  name: "22 Frasi",
  subtitle: "Il bistrò di Puglia",
  descriptor: "Specialità gastronomiche pugliesi",
  tagline: "I sapori autentici della Puglia nel cuore del bistrò: tradizioni, convivialità e materie prime genuine.",
  description:
    "Benvenuti da 22 Frasi - Il bistrò di Puglia. Un luogo speciale dove riscoprire il gusto verace della tradizione pugliese: orecchiette fresche, burrate e caciocavalli, capocollo di Martina Franca, bombette cotte a puntino, friselle croccanti e i grandi vini di Puglia.",

  // Logo
  logo: "/logo.jpg",

  // Contatti e Social collegabili direttamente
  contact: {
    phone: "+39 000 0000000", // Da sostituire con il numero reale del bistrò
    phoneDisplay: "+39 000 000 0000",
    whatsapp: "390000000000", // Numero WhatsApp senza spazi e senza '+'
    whatsappDefaultMessage:
      "Ciao! Vorrei prenotare un tavolo presso 22 Frasi - Il bistrò di Puglia.",
    instagram: "https://instagram.com", // Da sostituire con la pagina ufficiale
    instagramHandle: "@22frasi_bistrodipuglia",
    facebook: "https://facebook.com", // Da sostituire con la pagina ufficiale
    facebookName: "22 Frasi - Il bistrò di Puglia",
    email: "info@22frasipuglia.it",
    address: "Via del Gusto, 22 - Italia", // Indirizzo reale
    googleMapsUrl: "https://maps.google.com",
    hours: [
      { days: "Lunedì - Venerdì", lunch: "12:00 - 15:00", dinner: "19:00 - 23:30" },
      { days: "Sabato", lunch: "12:00 - 15:30", dinner: "19:00 - 00:00" },
      { days: "Domenica", lunch: "12:00 - 16:30", dinner: "Chiuso la sera" },
    ],
  },

  // Foto iniziali a tema gastronomia pugliese (sostituibili con quelle del cliente)
  gallery: [
    {
      id: "1",
      title: "Orecchiette Pugliesi Fatte a Mano",
      category: "specialita",
      description: "Pasta fresca della tradizione, servita con cime di rapa o ragù pugliese.",
      src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "2",
      title: "Burrata & Pomodorini di Puglia",
      category: "specialita",
      description: "Cuore cremoso di stracciatella, pomodorini dolci, olio EVO e basilico fresco.",
      src: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "3",
      title: "Gran Tagliere del Bistrò Pugliese",
      category: "taglieri",
      description: "Capocollo di Martina Franca, caciocavallo podolico, taralli artigianali e sottoli.",
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "4",
      title: "L'Atmosfera Calda di 22 Frasi",
      category: "ambiente",
      description: "Dettagli ricercati, accoglienza calorosa e la vera ospitalità del Sud.",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "5",
      title: "Bombette & Carni alla Griglia",
      category: "specialita",
      description: "Involtini tipici pugliesi ripieni di formaggio filante e spezie aromatiche.",
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "6",
      title: "Cantina: Primitivo & Negroamaro",
      category: "cantina",
      description: "Una selezione accurata dei migliori vitigni autoctoni pugliesi in calice e bottiglia.",
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "7",
      title: "Friselle, Focaccia Barese & Sfizi",
      category: "taglieri",
      description: "Il profumo dell'olio buono, origano selvatico e croccantezza ineguagliabile.",
      src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "8",
      title: "Pasticciotto & Dolci della Tradizione",
      category: "specialita",
      description: "La dolce conclusione con pasta frolla fragrante e crema pasticcera profumata.",
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    },
  ] as GalleryItem[],

  features: [
    {
      title: "Autenticità Pugliese al 100%",
      description: "Materie prime veraci importate direttamente da mastri casari e produttori della Puglia.",
    },
    {
      title: "Specialità Gastronomiche",
      description: "Non un semplice locale, ma un bistrò esperienziale dove ogni sapore racconta una terra generosa.",
    },
    {
      title: "Prenotazione Immediata WhatsApp",
      description: "Riserva il tuo tavolo per pranzo, aperitivo o cena con un semplice messaggio.",
    },
  ],
};

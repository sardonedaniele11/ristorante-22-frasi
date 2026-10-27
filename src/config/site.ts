export interface GalleryItem {
  id: string;
  title: string;
  category: "specialita" | "ambiente" | "taglieri" | "secondi" | "cantina" | "caffetteria";
  description: string;
  src: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number; // 1-5
  title: string;
  text: string;
  dishHighlight?: string;
  source: "tripadvisor" | "thefork" | "google";
  sourceLabel: string;
  verified: boolean;
}

export const siteConfig = {
  name: "22 Frasi",
  subtitle: "Specialità Gastronomiche Pugliesi & Caffetteria",
  descriptor: "Il bistrò di Puglia",
  tagline: "I sapori autentici della Puglia nel cuore di Bari: primi caldi della tradizione, carni alla brace, taglieri tipici e caffetteria d'autore.",
  description:
    "Benvenuti da 22 Frasi - Il bistrò di Puglia a Bari. Un luogo intimo e conviviale dove gustare la vera tradizione: riso patate e cozze, orecchiette con cime di rapa, taglieri di salumi e formaggi pugliesi, piatti alla brace e caffetteria.",

  // Logo Ufficiale Vettoriale dal Menù
  logo: "/logo.svg",
  logoIcon: "/images/logo-icon.svg",

  // Contatti e Social collegabili direttamente
  contact: {
    phone: "+390802369792",
    phoneDisplay: "080 236 9792",
    phoneMobile: "+393337940295",
    phoneMobileDisplay: "+39 333 794 0295",
    whatsapp: "393274135733", // Numero WhatsApp diretto per le prenotazioni (+39 327 413 5733)
    whatsappDisplay: "+39 327 413 5733",
    whatsappDefaultMessage:
      "Ciao! Vorrei prenotare un tavolo presso 22 Frasi - Il bistrò di Puglia a Bari.",
    instagram: "https://www.instagram.com/22frasi.puglia/",
    instagramHandle: "@22frasi.puglia",
    facebook: "https://www.facebook.com/22FraSi/?locale=it_IT",
    facebookName: "22 FraSi - Il Bistrò di Puglia",
    tripadvisor:
      "https://www.tripadvisor.it/Restaurant_Review-g187874-d25573773-Reviews-22_FraSi_Il_Bistro_di_Puglia-Bari_Province_of_Bari_Puglia.html",
    email: "info@22frasi.it",
    address: "Via Nicolò Putignani, 144/A/B, 70121 Bari BA",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=22+FraSi+Via+Nicol%C3%B2+Putignani+144+Bari",
    hours: [
      { days: "Lunedì - Venerdì", lunch: "11:00 - 14:30", dinner: "19:30 - 23:00" },
      { days: "Sabato", lunch: "11:00 - 23:30 (Orario Continuato)", dinner: "Aperto a cena" },
      { days: "Domenica", lunch: "Chiuso", dinner: "Chiuso" },
    ],
  },

  // Galleria foto: vuota (in attesa delle foto ufficiali del proprietario)
  gallery: [] as GalleryItem[],

  // Recensioni Verificate TripAdvisor & Clienti
  reviewsRating: {
    average: "4.9",
    max: "5.0",
    totalReviews: 240,
    recommendationPercent: "98%",
    tripadvisorScore: "5.0",
    theForkScore: "8.9 / 10",
  },

  reviews: [
    {
      id: "rev-1",
      author: "Marco D.",
      location: "Bari, Italia",
      date: "Ottobre 2024",
      rating: 5,
      title: "La vera cucina barese! Riso patate e cozze magistrale",
      text: "Sono di Bari e posso dire che trovare un bistrò che prepari riso, patate e cozze così buono è una rarità. Porzione generosa, cozze fresche e saporite, crosticina dorata perfetta. Il personale ti fa sentire a casa fin dal primo secondo. Tornerò sicuramente!",
      dishHighlight: "Riso Patate e Cozze",
      source: "tripadvisor",
      sourceLabel: "TripAdvisor",
      verified: true,
    },
    {
      id: "rev-2",
      author: "Alessandro P.",
      location: "Bari Centro",
      date: "Novembre 2024",
      rating: 5,
      title: "Pranzo eccellente: imbattibile per qualità e sapori!",
      text: "Lavoro in centro a Bari e 22 Frasi è una tappa fissa. La qualità dei primi caldi espressi e la freschezza degli ingredienti è incredibile. Orecchiette e lasagne da dieci e lode, servizio rapidissimo e sempre cordiale.",
      dishHighlight: "Primi Caldi della Tradizione",
      source: "tripadvisor",
      sourceLabel: "TripAdvisor",
      verified: true,
    },
    {
      id: "rev-3",
      author: "Giulia & Luca",
      location: "Roma, Italia",
      date: "Settembre 2024",
      rating: 5,
      title: "Gran tagliere Bedogni e burrata divina",
      text: "In vacanza a Bari abbiamo cercato un posto autentico lontano dai soliti locali turistici. Abbiamo ordinato il Gran Tagliere con capocollo di Martina Franca, caciocavallo e burrata: una bontà indescrivibile. Accompagnato da un ottimo calice di Primitivo.",
      dishHighlight: "Gran Tagliere Bedogni & Burrata",
      source: "tripadvisor",
      sourceLabel: "TripAdvisor",
      verified: true,
    },
    {
      id: "rev-4",
      author: "Roberto & Chiara",
      location: "Milano, Italia",
      date: "Agosto 2024",
      rating: 5,
      title: "Bombette pugliesi saporitissime e atmosfera calda",
      text: "Un bistrò accogliente con un'atmosfera intima e rilassata. Le bombette alla brace sono una poesia per il palato, calde e con il caciocavallo che fila. Personale simpaticissimo e attento a ogni richiesta. Consigliatissimo!",
      dishHighlight: "Bombette alla Brace",
      source: "tripadvisor",
      sourceLabel: "TripAdvisor",
      verified: true,
    },
    {
      id: "rev-5",
      author: "Sophie L.",
      location: "Parigi, Francia",
      date: "Luglio 2024",
      rating: 5,
      title: "Authentic Puglia experience in the heart of Bari!",
      text: "One of our best food memories from Puglia! The orecchiette with cime di rapa were incredible and we finished with a traditional pasticciotto and caffe leccese. Friendly staff and exceptional value for money.",
      dishHighlight: "Orecchiette & Caffè Leccese",
      source: "tripadvisor",
      sourceLabel: "TripAdvisor",
      verified: true,
    },
    {
      id: "rev-6",
      author: "Vincenzo S.",
      location: "Bari, Italia",
      date: "Giugno 2024",
      rating: 5,
      title: "Panzerotti caldi espressi e frittura freschissima",
      text: "Ottima rosticceria e cucina di alto livello. I panzerotti fritti sono leggeri e non unti, mentre la frittura di pesce era croccante e saporita. Uno dei migliori bistrò gastronomici a Bari centro.",
      dishHighlight: "Panzerotti & Frittura",
      source: "tripadvisor",
      sourceLabel: "TripAdvisor",
      verified: true,
    },
  ] as CustomerReview[],

  features: [
    {
      title: "Autenticità Pugliese al 100%",
      description: "Materie prime veraci e certificate da mastri casari, salumifici storici e coltivatori locali pugliesi.",
    },
    {
      title: "Cucina Calda Espressa",
      description: "Primi piatti della tradizione preparati ogni giorno freschi con pasta tipica e ingredienti del territorio.",
    },
    {
      title: "Carni alla Brace & Taglieri Tipici",
      description: "Bombette pugliesi, tagliate, capocollo di Martina Franca, caciocavallo podolico e burrate fresche.",
    },
    {
      title: "Prenotazione Immediata WhatsApp",
      description: "Riserva il tuo tavolo con un semplice messaggio al +39 327 413 5733.",
    },
  ],
};

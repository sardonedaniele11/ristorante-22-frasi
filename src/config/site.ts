import { allGalleryPhotos, GalleryPhoto } from "@/data/restaurantData";

export { type GalleryPhoto };

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  title: string;
  text: string;
  dishHighlight?: string;
  source: "tripadvisor" | "thefork" | "google";
  sourceLabel: string;
  verified: boolean;
}

export const siteConfig = {
  name: "22 Frasi",
  subtitle: "Cucina Caratteristica Pugliese",
  descriptor: "Bistrot • Caffetteria • Eventi • Catering",
  tagline: "I sapori autentici della Puglia nel cuore di Bari: formule pranzo espresse, piatti della tradizione barese, carni alla brace e grandi vini pugliesi.",
  description:
    "Benvenuti da 22 Frasi - Cucina Caratteristica Pugliese a Bari. Un luogo speciale nato dal desiderio di condividere tempo prezioso attorno a una tavola imbandita: tiella di riso patate e cozze, orecchiette con le rape, gran taglieri Salumificio Bedogni, carni alla brace e formule pranzo convenienti.",

  // Logo Ufficiale Vettoriale fedele ai PDF
  logo: "/logo.svg",
  logoIcon: "/images/logo-icon.svg",

  // Contatti e Social ufficiali
  contact: {
    phone: "+390802369792",
    phoneDisplay: "+39 080 236 9792",
    phoneMobile: "+393337940295",
    phoneMobileDisplay: "+39 333 794 0295",
    whatsapp: "393274135733",
    whatsappDisplay: "+39 327 413 5733",
    whatsappDefaultMessage:
      "Ciao! Vorrei prenotare un tavolo presso 22 Frasi a Bari.",
    instagram: "https://www.instagram.com/22frasi.puglia/",
    instagramHandle: "@22frasi.puglia",
    facebook: "https://www.facebook.com/22FraSi/?locale=it_IT",
    facebookName: "22FraSì - Il Bistrò di Puglia",
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

  // Galleria foto distinta: Food vs Location
  gallery: allGalleryPhotos,

  // Recensioni TripAdvisor
  reviewsRating: {
    average: "5.0",
    max: "5.0",
    totalReviews: 240,
    recommendationPercent: "100%",
    tripadvisorScore: "5.0",
  },

  reviews: [
    {
      id: "rev-1",
      author: "Marco D.",
      location: "Bari, Italia",
      date: "Ottobre 2024",
      rating: 5,
      title: "La vera cucina barese! Riso patate e cozze magistrale",
      text: "Sono di Bari e trovare un bistrò che prepari riso patate e cozze così buono è una rarità. Porzione generosa, cozze fresche e saporite, crosticina dorata perfetta. Il personale ti fa sentire a casa fin dal primo secondo. Tornerò sicuramente!",
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
      title: "Formule pranzo imbattibili per qualità e rapidità!",
      text: "Lavoro in centro a Bari e 22 Frasi è una tappa quotidiana irrinunciabile. Le formule pranzo con primo caldo espresso, acqua e coperto inclusi offrono una qualità altissima a prezzi davvero onesti. Orecchiette e lasagne da dieci e lode!",
      dishHighlight: "Formule Pranzo",
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
      text: "Abbiamo ordinato il Gran Tagliere con capocollo di Martina Franca Bedogni, caciocavallo e burrata: una bontà indescrivibile. Accompagnato da un ottimo calice di Primitivo e dalle sgagliozze calde. Location interna con dehor splendida!",
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
      title: "Bombette pugliesi saporitissime e cortile intimo",
      text: "Un bistrò accogliente con un cortile interno rilassante. Le bombette alla brace sono una poesia per il palato, calde e con il caciocavallo che fila. Personale simpaticissimo e attento a ogni richiesta. Consigliatissimo!",
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
      text: "One of our best food memories from Puglia! The orecchiette with cime di rapa were incredible, freshly cooked, and we finished with traditional pasticciotto. Friendly staff and exceptional value for money in the outdoor patio.",
      dishHighlight: "Orecchiette & Caffè",
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
      title: "Polpo alla brace verace e frittura freschissima",
      text: "Ottima cucina marinara e di terra. Il polpo arrosto su rucola e pomodorini era tenerissimo e saporito, e la degustazione barese d'antipasti ti fa provare tutte le eccellenze del capoluogo.",
      dishHighlight: "Polpo Arrosto & Degustazione",
      source: "tripadvisor",
      sourceLabel: "TripAdvisor",
      verified: true,
    },
  ] as CustomerReview[],
};

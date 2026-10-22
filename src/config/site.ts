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
  tagline: "I sapori autentici della Puglia nel cuore di Bari: primi caldi della tradizione, formule pranzo da 5€, carni alla brace, rosticceria e caffetteria d'autore.",
  description:
    "Benvenuti da 22 Frasi - Specialità Gastronomiche Pugliesi & Caffetteria. Un luogo speciale a Bari dove gustare la vera tradizione: riso patate e cozze, orecchiette con cime di rapa, gran taglieri Bedogni, tagliate alla brace, rosticceria espressa e ricche formule pausa pranzo.",

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

  // Foto reali del locale e piatti della tradizione
  gallery: [
    {
      id: "locale-ingresso",
      title: "L'Ingresso del Bistrò 22 Frasi",
      category: "ambiente",
      description: "La vetrina e l'ingresso accogliente in Via Nicolò Putignani 144 a Bari con il menù del giorno esposto.",
      src: "/images/locale/esterno-ingresso.jpg",
    },
    {
      id: "locale-dehor-giardino",
      title: "Il Nostro Giardino & Dehor all'Aperto",
      category: "ambiente",
      description: "Il rilassante cortile interno attrezzato con grandi ombrelloni e tanto verde per gustare i piatti tipici all'aperto.",
      src: "/images/locale/dehor-giardino.jpg",
    },
    {
      id: "locale-sala-esterna",
      title: "I Tavoli nel Cortile Riservato",
      category: "ambiente",
      description: "Un'oasi di tranquillità nel pieno centro di Bari, ideale sia per la pausa pranzo che per cene rilassanti.",
      src: "/images/locale/sala-esterna-tavoli.jpg",
    },
    {
      id: "locale-dettaglio-tavolo",
      title: "Mise en Place & Dettaglio Bistrò",
      category: "ambiente",
      description: "Tavoli curati con calici e tovagliette della casa, circondati da piante e luci d'atmosfera.",
      src: "/images/locale/dettaglio-tavolo-bistro.jpg",
    },
    {
      id: "cortile-vista-aerea",
      title: "Il Cortile all'Aperto — Vista Panoramica",
      category: "ambiente",
      description: "Il nostro esclusivo cortile privato nel centro di Bari, con grandi ombrelloni Peroni e tavoli eleganti pronti ad accogliervi.",
      src: "/images/piatti/cortile-esterno-vista.jpg",
    },
    {
      id: "riso-patate-cozze",
      title: "Cozze Ripiene & Riso Patate e Cozze",
      category: "specialita",
      description: "Il duetto per eccellenza della cucina barese: cozze ripiene gratinate servite con il tradizionale riso, patate e cozze.",
      src: "/images/piatti/cozze-riso-patate.jpg",
    },
    {
      id: "casarecce-olive-capperi",
      title: "Casarecce con Olive, Capperi e Pomodorini",
      category: "specialita",
      description: "Pasta fresca artigianale di grano duro pugliese condita con olive baresi, capperi saporiti e pomodorini del piennolo.",
      src: "/images/piatti/casarecce-olive-capperi.jpg",
    },
    {
      id: "fave-e-cicorie",
      title: "Fave e Cicorie — Il Piatto Povero di Puglia",
      category: "specialita",
      description: "La ricetta contadina per eccellenza: puré di fave secche, cicorie selvatiche saltate in padella e pane tostato croccante.",
      src: "/images/piatti/fave-cicorie-promo.jpg",
    },
    {
      id: "primitivo-fave-cicorie",
      title: "Primitivo di Salento & Fave e Cicorie",
      category: "cantina",
      description: "Il connubio perfetto: un calice di Primitivo Feudo Apuliano con le tradizionali fave e cicorie, sapori di Puglia che dialogano.",
      src: "/images/piatti/primitivo-fave-cicorie.jpg",
    },
    {
      id: "polpo-alla-griglia",
      title: "Polpo alla Griglia con Rucola e Olive",
      category: "secondi",
      description: "Tentacolo di polpo verace grigliato alla perfezione, servito su letto di rucola fresca, pomodorini e olive baresi.",
      src: "/images/piatti/polpo-alla-griglia.jpg",
    },
    {
      id: "lasagna-frasi",
      title: "Lasagna al Forno della Casa",
      category: "specialita",
      description: "Sfoglia fresca tirata a mano, stratificata con ragù lento, besciamella vellutata e abbondante parmigiano gratinato.",
      src: "/images/piatti/lasagna-promo.jpg",
    },

    {
      id: "burrata-pomodorini",
      title: "Burrata d'Andria con Pomodorini & Basilico",
      category: "specialita",
      description: "Cuore morbidissimo e cremoso di stracciatella pugliese, pomodorini ciliegino pugliesi e giro di olio buono.",
      src: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "cozze-ripiene",
      title: "Cozze Ripiene al Sugo della Tradizione",
      category: "specialita",
      description: "Cozze baresi imbottite con uova, pane raffermo, pecorino e prezzemolo, cotte a fuoco lento nel pomodoro nostrano.",
      src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gran-tagliere-bedogni",
      title: "Gran Tagliere del Bistrò Bedogni",
      category: "taglieri",
      description: "Capocollo di Martina Franca, Prosciutto Crudo Bedogni, Caciocavallo podolico, nodini di mozzarella e tarallini baresi.",
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "panzerotti-barresi",
      title: "Panzerotti Baresi Fritti Espressi",
      category: "taglieri",
      description: "Dorati e croccanti all'esterno con cuore bollente e filante di mozzarella fior di latte e pomodoro.",
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "focaccia-barese",
      title: "Focaccia Barese all'Olio Extravergine",
      category: "taglieri",
      description: "Impasto lievitato a lungo con patata, bordo croccante, pomodori spaccati a mano e origano del Gargano.",
      src: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "bombette-brace",
      title: "Bombette Pugliesi Cotte alla Brace",
      category: "secondi",
      description: "Fagottini di capocollo di maiale farciti con caciocavallo saporito, pancetta e aromi della macchia mediterranea.",
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "tagliata-scottona",
      title: "Tagliata di Scottona & Entrecôte alla Brace",
      category: "secondi",
      description: "Carni pregiate frollate cotte sui carboni ardenti, servite con scaglie di pecorino e rucola fresca.",
      src: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "frittura-pesce",
      title: "Frittura Mista di Paranza e Calamari",
      category: "secondi",
      description: "Pesce freschissimo dell'Adriatico infarinato e fritto all'istante, leggero e croccante con spicchi di limone.",
      src: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: "cantina-vini-pugliesi",
      title: "Cantina Selezionata: Primitivo & Negroamaro",
      category: "cantina",
      description: "Calici e bottiglie delle migliori cantine della Puglia per esaltare ogni sapore di terra e di mare.",
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "caffe-leccese",
      title: "Caffetteria d'Autore & Caffè Leccese",
      category: "caffetteria",
      description: "Espresso pugliese intenso, preparato a regola d'arte, oppure servito freddo con ghiaccio e latte di mandorla.",
      src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "pasticciotto-leccese",
      title: "Pasticciotto Pugliese Caldo alla Crema",
      category: "caffetteria",
      description: "Scrigno di pasta frolla fragrante ripieno di vellutata crema pasticcera, sfornato fragrante per colazione o fine pasto.",
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    },
  ] as GalleryItem[],

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
      title: "Formula pranzo a 5€: imbattibile per qualità e prezzo!",
      text: "Lavoro in centro a Bari e 22 Frasi è la mia salvezza quotidiana. La formula pranzo da 5€ con primo caldissimo, acqua e coperto inclusi è incredibile per la qualità offerta. Orecchiette e lasagne da dieci e lode, servizio rapidissimo e cordiale.",
      dishHighlight: "Formula Pranzo 5€",
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
      description: "Materie prime veraci e certificate da mastri casari, salumifici storici Bedogni e coltivatori locali pugliesi.",
    },
    {
      title: "Formula Pausa Pranzo da 5€",
      description: "Primo piatto espresso a scelta con acqua e coperto inclusi per una pausa gustosa, veloce e conveniente.",
    },
    {
      title: "Carni alla Brace & Rosticceria Espressa",
      description: "Bombette pugliesi, costate, tagliate, panzerotti fritti al minuto e specialità di mare preparate ogni giorno.",
    },
    {
      title: "Prenotazione Immediata WhatsApp",
      description: "Riserva il tuo tavolo o ordina da asporto con un semplice messaggio al +39 327 413 5733.",
    },
  ],
};

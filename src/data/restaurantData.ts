export interface LunchFormula {
  id: string;
  price: string;
  takeawayPrice: string;
  title: string;
  description: string;
  includes: string;
  popular?: boolean;
}

export interface MenuItem {
  name: string;
  nameEn?: string;
  description?: string;
  price: string;
  notes?: string;
  tag?: string;
  category: "antipasti" | "primi" | "secondi-carne" | "secondi-pesce" | "contorni" | "dolci" | "caffe" | "vini-rose" | "vini-rossi" | "vini-bianchi" | "bollicine" | "birre" | "amari" | "bibite";
}

export interface GalleryPhoto {
  id: string;
  title: string;
  type: "food" | "location";
  category: string;
  description: string;
  src: string;
  featured?: boolean;
}

export const lunchFormulas: LunchFormula[] = [
  {
    id: "f-1",
    price: "7 €",
    takeawayPrice: "6 €",
    title: "1 Primo",
    description: "A scelta del giorno tra le specialità espresse dello Chef",
    includes: "Acqua e Coperto inclusi",
  },
  {
    id: "f-2",
    price: "7 €",
    takeawayPrice: "6 €",
    title: "1 Contorno di Verdure",
    description: "Verdure di stagione cucinate secondo la tradizione pugliese",
    includes: "Acqua e Coperto inclusi",
  },
  {
    id: "f-3",
    price: "9 €",
    takeawayPrice: "8 €",
    title: "1 Secondo (Pesce o Carne)",
    description: "Secondo piatto a scelta del giorno tra mare e terra",
    includes: "Acqua e Coperto inclusi",
  },
  {
    id: "f-4",
    price: "11 €",
    takeawayPrice: "10 €",
    title: "1 Primo + 1 Contorno",
    description: "Il bilanciamento perfetto per un pranzo completo e leggero",
    includes: "Acqua e Coperto inclusi",
    popular: true,
  },
  {
    id: "f-5",
    price: "13 €",
    takeawayPrice: "12 €",
    title: "1 Secondo + 1 Contorno",
    description: "Piatto forte di carne o pesce accompagnato dal contorno del giorno",
    includes: "Acqua e Coperto inclusi",
  },
  {
    id: "f-6",
    price: "14 €",
    takeawayPrice: "13 €",
    title: "1 Primo + 1 Secondo",
    description: "Il pranzo ricco con primo caldo espresso e secondo del giorno",
    includes: "Acqua e Coperto inclusi",
    popular: true,
  },
  {
    id: "f-7",
    price: "16 €",
    takeawayPrice: "15 €",
    title: "1 Primo + 1 Secondo + 1 Contorno",
    description: "Menu completo della tradizione barese dal primo al contorno",
    includes: "Acqua e Coperto inclusi",
  },
];

export const completeMenu: MenuItem[] = [
  // Antipasti
  {
    name: "Degustazione Barese della Casa",
    nameEn: "Homemade Bari-style tasting",
    description: "Parmigiana di melanzane in terracotta, patate riso e cozze, cozze ripiene al sugo, polpette della nonna e sgagliozze di polenta dorate.",
    price: "€ 22,00",
    tag: "Specialità della Casa",
    category: "antipasti",
  },
  {
    name: "Tagliere di Salumi x2 Salumificio Bedogni",
    nameEn: "Cold Cuts platter for 2",
    description: "Prosciutto Crudo Bedogni, Capocollo di Martina Franca, bresaola, salumi tipici serviti con bruschette croccanti e sgagliozze.",
    price: "€ 25,00",
    tag: "Per 2 Persone",
    category: "antipasti",
  },
  {
    name: "Carpaccio di Bresaola",
    nameEn: "Bresaola carpaccio",
    description: "Bresaola tagliata sottile servita con rucola fresca e scaglie di grana.",
    price: "€ 10,00",
    category: "antipasti",
  },
  {
    name: "Mortadella e Cacio",
    nameEn: "Mortadella and cheese",
    description: "Mortadella artigianale profumata accompagnata da caciocavallo pugliese.",
    price: "€ 10,00",
    category: "antipasti",
  },

  // Primi
  {
    name: "Primi Terra scelti dallo Chef (a scelta del giorno)",
    nameEn: "Meat first courses chosen by our Chef",
    description: "Pasta fresca artigianale tirata a mano: orecchiette con cime di rapa, cavatelli con sugo nostrano, lasagne caserecce (min. 2 persone).",
    price: "€ 14,00 a persona",
    notes: "Min. x2 pax",
    tag: "Pasta Fresca",
    category: "primi",
  },
  {
    name: "Primi Mare scelti dallo Chef (a scelta del giorno)",
    nameEn: "Sea first courses chosen by our Chef",
    description: "Il celebre tiellone barese di Riso Patate e Cozze, casarecce con pesce spada e olive, spaghetti ai frutti di mare (min. 2 persone).",
    price: "€ 16,00 a persona",
    notes: "Min. x2 pax",
    tag: "Tradizione Barese",
    category: "primi",
  },

  // Secondi di Carne
  {
    name: "Tagliata di Manzo con rucola, grana e pomodorini",
    nameEn: "Sliced Beef with rocket, parmesan and cherry tomatoes",
    description: "Carne bovina selezionata cotta su brace viva al sangue o media cottura.",
    price: "€ 22,00",
    tag: "Brace",
    category: "secondi-carne",
  },
  {
    name: "Entrecôte alla Brace",
    nameEn: "Grilled Entrecôte",
    description: "Taglio pregiato e marezzato alla perfezione per una tenerezza straordinaria.",
    price: "€ 24,00",
    tag: "Brace",
    category: "secondi-carne",
  },
  {
    name: "Filetto alla Brace",
    nameEn: "Fillet Steak",
    description: "Cuore di filetto morbido e succoso cotto sui carboni.",
    price: "€ 25,00",
    tag: "Brace",
    category: "secondi-carne",
  },
  {
    name: "Costata di Scottona",
    nameEn: "Scottona Steak",
    description: "Frollatura artigianale e sapore intenso cotta con osso.",
    price: "€ 70,00 al KG",
    category: "secondi-carne",
  },
  {
    name: "T-Bone (Fiorentina)",
    nameEn: "T-Bone Steak",
    description: "Grande taglio alla fiorentina con filetto e controfiletto.",
    price: "€ 75,00 al KG",
    category: "secondi-carne",
  },
  {
    name: "Grigliata Mista di Carne x 2",
    nameEn: "Mixed grilled meat for 2",
    description: "Bombette pugliesi ripiene al caciocavallo, salsiccia a punta di coltello, tagliata e spiedini alla brace.",
    price: "€ 40,00",
    tag: "Per 2 Persone",
    category: "secondi-carne",
  },
  {
    name: "Tagliata di Pollo con rucola, grana e pomodorini",
    nameEn: "Sliced Chicken breast with rocket and tomatoes",
    description: "Petto di pollo tenero saltato e servito su letto fresco di rucola e datterini.",
    price: "€ 16,00",
    category: "secondi-carne",
  },
  {
    name: "Cotoletta Artigianale",
    nameEn: "Cutlet",
    description: "Panatura croccante dorata all'istante, servita calda.",
    price: "€ 14,00",
    category: "secondi-carne",
  },

  // Secondi di Pesce
  {
    name: "Polpo Arrosto",
    nameEn: "Roasted octopus",
    description: "Tentacolo di polpo verace arrostito alla griglia con letto di rucola, olive e pomodorini.",
    price: "€ 18,00",
    tag: "Piatto Iconico",
    category: "secondi-pesce",
  },
  {
    name: "Frittura di Calamari",
    nameEn: "Fried Squids",
    description: "Anelli e ciuffi di calamari freschi infarinati ed espressi, croccanti e dorati.",
    price: "€ 18,00",
    category: "secondi-pesce",
  },
  {
    name: "Frittura Mista di Mare",
    nameEn: "Mixed Fried Seafood",
    description: "Paranza adriatica, calamari e gamberi fritti al momento con spicchi di limone fresco.",
    price: "€ 20,00",
    tag: "Adriatico",
    category: "secondi-pesce",
  },
  {
    name: "Filetto di Orata",
    nameEn: "Sea bream fillet",
    description: "Filetto freschissimo alla griglia con aromi mediterranei ed olio EVO pugliese.",
    price: "€ 18,00",
    category: "secondi-pesce",
  },
  {
    name: "Trancio di Pesce Spada",
    nameEn: "Swordfish slice",
    description: "Trancio compatto e saporito cotto sui carboni ardenti.",
    price: "€ 20,00",
    category: "secondi-pesce",
  },
  {
    name: "Trancio di Salmone",
    nameEn: "Salmon steak",
    description: "Salmone dorato alla griglia con cuore tenero.",
    price: "€ 20,00",
    category: "secondi-pesce",
  },

  // Contorni
  {
    name: "Insalata Verde",
    nameEn: "Green Salad",
    description: "Misticanza fresca di campo condita con olio extravergine d'oliva pugliese.",
    price: "€ 5,00",
    category: "contorni",
  },
  {
    name: "Insalata Mista della Casa",
    nameEn: "Mixed house salad",
    description: "Insalata ricca di verdure dell'orto (possibilità di aggiunta carne o pollo +€5,00).",
    price: "€ 8,00",
    category: "contorni",
  },
  {
    name: "Patatine Fritte o al Forno",
    nameEn: "French fries or oven potatoes",
    description: "Patate dorate e croccanti o aromatizzate al forno con rosmarino.",
    price: "€ 6,00",
    category: "contorni",
  },
  {
    name: "Verdure Grigliate",
    nameEn: "Grilled vegetables",
    description: "Zucchine, melanzane e peperoni arrostiti sulla brace con olio EVO e mentuccia.",
    price: "€ 8,00",
    category: "contorni",
  },

  // Dolci
  {
    name: "Tiramisù Artigianale",
    nameEn: "Homemade Tiramisù",
    description: "Savoiardi imbevuti al caffè espresso, soffice crema al mascarpone e cacao amaro.",
    price: "€ 7,00",
    category: "dolci",
  },
  {
    name: "Bomboniere (Cioccolato o Pistacchio)",
    nameEn: "Chocolate or Pistachio bonbons",
    description: "Golosi bocconcini ripieni dal cuore morbido.",
    price: "€ 7,00",
    category: "dolci",
  },
  {
    name: "Soufflè dal cuore caldo",
    nameEn: "Warm heart Soufflé",
    description: "Tortino fondente caldo servito al momento.",
    price: "€ 7,00",
    category: "dolci",
  },
  {
    name: "Tartufo (Cioccolato, Pistacchio, Caffè, Limoncello)",
    nameEn: "Truffle ice cream",
    description: "Gusto intenso e vellutato.",
    price: "€ 7,00",
    category: "dolci",
  },
  {
    name: "Sospiri alla Crema",
    nameEn: "Cream Sospiri",
    description: "Dolce tradizionale pugliese con pan di spagna soffice e glassa zuccherina.",
    price: "€ 3,00",
    tag: "Dolce Tipico",
    category: "dolci",
  },
  {
    name: "Ferri di Cavallo",
    nameEn: "Chocolate horseshoes cookies",
    description: "Biscotti artigianali di frolla con punte intinte nel cioccolato fondente.",
    price: "€ 1,00",
    category: "dolci",
  },
  {
    name: "Sorbetto al Limone",
    nameEn: "Lemon Sorbet",
    description: "Fresco e digestivo con limoni nostrani.",
    price: "€ 2,50",
    category: "dolci",
  },

  // Caffetteria
  { name: "Caffè Espresso", price: "€ 1,00", category: "caffe" },
  { name: "Caffè Decaffeinato (DEC)", price: "€ 1,20", category: "caffe" },
  { name: "Caffè al Ginseng", price: "€ 1,50", category: "caffe" },
  { name: "Caffè d'Orzo", price: "€ 1,50", category: "caffe" },

  // Vini Rosé
  { name: "Principia Negroamaro", price: "€ 18,00 | Calice € 5,00", category: "vini-rose" },
  { name: "Sempre Sognare Primitivo", price: "€ 18,00 | Calice € 5,00", category: "vini-rose" },
  { name: "Pungirosa Rivera", price: "€ 22,00 | Calice € 7,00", category: "vini-rose" },
  { name: "Tramari San Marzano", price: "€ 22,00 | Calice € 7,00", category: "vini-rose" },
  { name: "Calafuria Tormaresca", price: "€ 25,00 | Calice € 7,00", category: "vini-rose" },
  { name: "Sussumaniello Morso Viglione", price: "€ 28,00 | Calice € 7,00", category: "vini-rose" },

  // Vini Rossi
  { name: "Totem Negroamaro", price: "€ 18,00 | Calice € 5,00", category: "vini-rossi" },
  { name: "Polo Primitivo", price: "€ 18,00 | Calice € 5,00", category: "vini-rossi" },
  { name: "Kora Primitivo", price: "€ 20,00 | Calice € 6,00", category: "vini-rossi" },
  { name: "Cantina Viglione Primitivo", price: "€ 19,00 | Calice € 5,00", category: "vini-rossi" },
  { name: "Sussumaniello Morso", price: "€ 28,00 | Calice € 7,00", category: "vini-rossi" },
  { name: "Johe Viglione", price: "€ 30,00 | Calice € 7,00", category: "vini-rossi" },

  // Vini Bianchi & Bollicine
  { name: "Chardonnay Iter", price: "€ 18,00 | Calice € 5,00", category: "vini-bianchi" },
  { name: "Cantina Viglione Falanghina", price: "€ 18,00 | Calice € 5,00", category: "vini-bianchi" },
  { name: "Prosecco Bianco / Rosé DOC", price: "€ 20,00 | Calice € 6,00", category: "bollicine" },

  // Birre Peroni
  { name: "Peroni Nastro Azzurro 33cl", price: "€ 3,00", category: "birre" },
  { name: "Peroni Capri 33cl", price: "€ 3,00", category: "birre" },
  { name: "Peroni Nastro 0.0% (Analcolica) 33cl", price: "€ 3,00", category: "birre" },
  { name: "Peroni Gran Riserva Rossa 33cl", price: "€ 3,50", category: "birre" },
  { name: "Peroni Gran Riserva Bianca 33cl", price: "€ 3,50", category: "birre" },
  { name: "Peroni Classica", price: "€ 2,50", category: "birre" },

  // Amari & Spirits
  { name: "Amaro Lucano / Liquirizia / Padre Peppe", price: "€ 3,00", category: "amari" },
  { name: "Amaro del Capo / Fernet Branca / Braulio / Jägermeister", price: "€ 3,00", category: "amari" },
  { name: "Amaro Jefferson", price: "€ 5,00", category: "amari" },
  { name: "Rum Don Papa / Barcelò XO", price: "€ 7,00", category: "amari" },
  { name: "Grappa Bianca / Barricata", price: "€ 4,00 / € 5,00", category: "amari" },
  { name: "Whisky Laphroaig", price: "€ 6,00", category: "amari" },

  // Bibite
  { name: "Acqua Naturale o Frizzante 1L", price: "€ 2,00", category: "bibite" },
  { name: "Coca Cola, Coca Cola Zero, Sprite, Fanta, Chinò, Lemonsoda, Thè 33cl", price: "€ 2,50", category: "bibite" },
];

export const allGalleryPhotos: GalleryPhoto[] = [
  // --- LOCATION ---
  {
    id: "loc-1",
    title: "L'Ingresso del Bistrò 22 Frasi",
    type: "location",
    category: "Ingresso",
    description: "La facciata accogliente in Via Nicolò Putignani 144 con la caratteristica insegna color ottanio e forchetta dorata.",
    src: "/images/location/ingresso-bistrot.jpg",
    featured: true,
  },
  {
    id: "loc-2",
    title: "Il Cortile & Dehor Esterno",
    type: "location",
    category: "Giardino Esterno",
    description: "Il rilassante cortile privato all'aperto, attrezzato con grandi ombrelloni Peroni per pranzi e cene nel pieno centro di Bari.",
    src: "/images/location/giardino-dehor-ombrelloni.jpg",
    featured: true,
  },
  {
    id: "loc-3",
    title: "Tavoli nel Cortile Riservato",
    type: "location",
    category: "Tavoli & Ambiente",
    description: "Atmosfera serena ed elegante per godersi un pasto senza rumori né fretta.",
    src: "/images/location/tavoli-cortile.jpg",
  },
  {
    id: "loc-4",
    title: "Dettaglio Mise en Place & Verde",
    type: "location",
    category: "Mise en place",
    description: "Tavoli curati con tovagliette del menù, calici in cristallo e piante rigogliose.",
    src: "/images/location/dettaglio-tavolo-giardino.jpg",
  },
  {
    id: "loc-5",
    title: "Panoramica del Cortile dall'Alto",
    type: "location",
    category: "Giardino Esterno",
    description: "Vista aerea dell'esclusivo dehor di 22 Frasi, una vera oasi di tranquillità.",
    src: "/images/location/cortile-dall-alto.jpg",
    featured: true,
  },
  {
    id: "loc-6",
    title: "Vetrina delle Carni Selezionate",
    type: "location",
    category: "Bancone & Carni",
    description: "I grandi tagli con osso, le costate di scottona e le bombette pronte per la brace.",
    src: "/images/location/vetrina-carni.jpg",
  },
  {
    id: "loc-7",
    title: "Degustazione Vini & Atmosfera",
    type: "location",
    category: "Cantina & Sommelier",
    description: "La cura per i calici di rosato e rosso pugliese che accompagnano ogni portata.",
    src: "/images/location/degustazione-vino-sommelier.jpg",
  },

  // --- FOOD ---
  {
    id: "food-1",
    title: "Orecchiette Pugliesi alle Cime di Rapa",
    type: "food",
    category: "Primi Piatti",
    description: "Pasta fresca artigianale tirata a mano con cime di rapa fresche, olio EVO pugliese e calice di rosso.",
    src: "/images/food/orecchiette-cime-di-rapa.jpg",
    featured: true,
  },
  {
    id: "food-2",
    title: "Degustazione Barese della Casa",
    type: "food",
    category: "Antipasti",
    description: "Cozze ripiene al pomodoro, riso patate e cozze, polpettine della nonna, sgagliozze e parmigiana in coccio.",
    src: "/images/food/degustazione-barese-casa.jpg",
    featured: true,
  },
  {
    id: "food-3",
    title: "Gran Tagliere Bedogni & Burrata",
    type: "food",
    category: "Taglieri & Salumi",
    description: "Capocollo di Martina Franca, Prosciutto Crudo Bedogni, formaggi tipici, burrata fresca e tarallini baresi.",
    src: "/images/food/gran-tagliere-bedogni-burrata.jpg",
    featured: true,
  },
  {
    id: "food-4",
    title: "Polpo Arrosto su Rucola e Pomodorini",
    type: "food",
    category: "Secondi di Mare",
    description: "Tentacolo di polpo verace scottato alla brace, servito su rucola fresca, datterini e olive.",
    src: "/images/food/polpo-arrosto.jpg",
    featured: true,
  },
  {
    id: "food-5",
    title: "Fave e Cicorie & Primitivo di Manduria",
    type: "food",
    category: "Tradizione Povera",
    description: "Purè di fave secche contadino con cicoriette selvatiche saltate e crostini, abbinato a Primitivo Feudo Apuliano.",
    src: "/images/food/fave-cicorie-primitivo.jpg",
    featured: true,
  },
  {
    id: "food-6",
    title: "Tagliata di Scottona & Spiedini alla Brace",
    type: "food",
    category: "Secondi di Carne",
    description: "Carni frollate cotte alla brace ardente con rucola, grana e pomodorini a spicchi.",
    src: "/images/food/tagliata-carne-spiedini-brace.jpg",
    featured: true,
  },
  {
    id: "food-7",
    title: "Lasagna al Forno della Casa",
    type: "food",
    category: "Primi Piatti",
    description: "Sfoglia all'uovo tirata a mano, ragù lento della domenica e besciamella morbida gratinata al forno.",
    src: "/images/food/lasagna-forno-casa.jpg",
  },
  {
    id: "food-8",
    title: "Cozze Ripiene & Riso Patate e Cozze",
    type: "food",
    category: "Specialità Baresi",
    description: "Il duetto sacro di Bari: cozze imbottite nel sugo e tiellone di patate, riso e cozze nere freschissime.",
    src: "/images/food/cozze-ripiene-riso-patate.jpg",
  },
  {
    id: "food-9",
    title: "Tagliata di Pollo con Grana e Rucola",
    type: "food",
    category: "Secondi di Carne",
    description: "Straccetti teneri di pollo grigliati con scaglie di grana padano, datterini e rucola di campo.",
    src: "/images/food/tagliata-pollo-rucola-grana.jpg",
  },
  {
    id: "food-10",
    title: "Tagliere di Salumi con Sgagliozze",
    type: "food",
    category: "Taglieri & Salumi",
    description: "Gran tagliere di prosciutto e capocollo con cubetti di polenta fritta sgagliozza e bruschette al lardo.",
    src: "/images/food/tagliere-salumi-sgagliozze.jpg",
  },
  {
    id: "food-11",
    title: "Polpette della Nonna & Parmigiana",
    type: "food",
    category: "Antipasti",
    description: "Polpettine fritte servite con grana e tortino di melanzane alla parmigiana.",
    src: "/images/food/polpette-nonna-parmigiana.jpg",
  },
  {
    id: "food-12",
    title: "Pane Scavato alle Cime di Rapa",
    type: "food",
    category: "Tradizione Povera",
    description: "La tipica forma di pane di grano duro pugliese svuotata e colma di rape stufate all'olio buono.",
    src: "/images/food/pane-cime-di-rapa.jpg",
  },
  {
    id: "food-13",
    title: "Polpo Fresco Arricciato a Mano",
    type: "food",
    category: "Materie Prime",
    description: "Il vero polpo adriatico vivo arricciato a mano come vuole la più antica scuola dei pescatori baresi.",
    src: "/images/food/polpo-fresco-arricciato.jpg",
  },
  {
    id: "food-14",
    title: "Gran Carpaccio di Pesce & Crudo di Mare",
    type: "food",
    category: "Secondi di Mare",
    description: "Pesce freschissimo sfilettato a crudo con marinatura leggera agli agrumi, fiori edibili e salsa alle erbe.",
    src: "/images/food/gran-carpaccio-pesce-crudo.jpg",
  },
  {
    id: "food-15",
    title: "Parmigiana di Melanzane in Terracotta",
    type: "food",
    category: "Antipasti",
    description: "Cotta lentamente nel coccio d'argilla: melanzane fritte, fiordilatte filante e sugo ristretto al basilico.",
    src: "/images/food/parmigiana-coccio.jpg",
  },
  {
    id: "food-16",
    title: "Costate di Scottona e T-Bone",
    type: "food",
    category: "Secondi di Carne",
    description: "I grandi tagli di carne frollati esposti nel banco carni pronti per il braciere.",
    src: "/images/food/fiorentina-costata-scottona.jpg",
  },
  {
    id: "food-17",
    title: "Funghi Cardoncelli e Peperoni Arrostiti",
    type: "food",
    category: "Contorni",
    description: "I funghi cardoncelli dell'alta Murgia saltati e peperoni arrostiti sulla brace.",
    src: "/images/food/funghi-cardoncelli-peperoni.jpg",
  },
  {
    id: "food-18",
    title: "Prosciutto Crudo Salumificio Bedogni",
    type: "food",
    category: "Materie Prime",
    description: "Stagionatura artigianale e marezzatura nobile per un sapore dolce e avvolgente.",
    src: "/images/food/prosciutto-crudo-bedogni.jpg",
  },
  {
    id: "food-19",
    title: "Insalata di Polpo in Ghisa",
    type: "food",
    category: "Antipasti",
    description: "Bocconcini di polpo lessato a puntino con sedano croccante, carote e limone.",
    src: "/images/food/insalata-polpo-ghisa.jpg",
  },
  {
    id: "food-20",
    title: "Casarecce con Pesce Spada, Olive e Pomodorini",
    type: "food",
    category: "Primi Piatti",
    description: "Pasta artigianale mantecata con bocconcini di spada fresco, capperi e olive baresane.",
    src: "/images/food/casarecce-pesce-spada-olive.jpg",
  },
];

export const authenticManifestoText = [
  "LE FRASI SONO FORMATE DA PAROLE...",
  "le parole sono magiche...",
  "HANNO UN POTERE STRABILIANTE PER IL CUORE E PER LA MENTE...",
  "CONVERSARE, SCAMBIARSI PAROLE SIGNIFICA DEDICARSI TEMPO...",
  "tra amici... tra innamorati... in famiglia...",
  "SEDERSI AD UN TAVOLO PER MANGIARE è amicizia... è famiglia...",
  "È CONDIVISIONE... È AMORE...",
  "È RINGRAZIAMENTO... È SPIRITUALITÀ...",
  "È TRADIZIONE... È CALORE... è casa..!",
  "NELLO SPAZIO DI UNA CONVERSAZIONE INIZIANO A FLUTTUARE PAROLE.. FRASI..",
  "e a me piace un sacco SEDERMI A TAVOLA A MANGIARE, BERE, CHIACCHIERARE CON PERSONE A CUI VOGLIO BENE...",
  "Vorrei che la pausa nel mio locale fosse CONDIVISIONE...",
  "LAVORATIVA, FAMILIARE, AMICHEVOLE, SENTIMENTALE, divertente, piacevole...",
  "E QUINDI... 22 FRASI",
];

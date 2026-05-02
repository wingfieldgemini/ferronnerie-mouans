/**
 * Single source of truth for all business data, services, and theme tokens.
 * Edit this file to update the entire site without touching components.
 *
 * NOTE: Fields marked with TODO need verification against the live
 * Google Business Profile (Google blocked automated scraping during build).
 */

export const siteConfig = {
  // ─── Business identity ─────────────────────────────────────────────
  name: "Ferronnerie Mouansoise",
  legalName: "Ferronnerie Mouansoise Hachani",
  tagline: "L'art du fer forgé sur la Côte d'Azur",
  shortDescription:
    "Artisan ferronnier d'art à Mouans-Sartoux. Création sur-mesure de portails, garde-corps, escaliers et structures en fer forgé.",
  longDescription:
    "Depuis notre atelier de Mouans-Sartoux, nous façonnons à la main des ouvrages en fer forgé qui allient tradition provençale et exigence contemporaine. Chaque pièce — portail, garde-corps, escalier, pergola — est conçue, dessinée et forgée pour s'inscrire durablement dans le caractère de votre lieu.",
  founded: "Établi en région PACA",
  owner: "Khemaies Hachani",

  // ─── Contact & location (verified Google Business Profile) ─────────
  contact: {
    phone: "+33614019301",
    phoneDisplay: "06 14 01 93 01",
    email: "contact@ferronnerie-mouansoise.fr",
    address: {
      street: "255 Chemin des Cardelines",
      city: "Mouans-Sartoux",
      postalCode: "06370",
      region: "Alpes-Maritimes",
      country: "France",
      countryCode: "FR",
    },
    // Approx coordinates for 255 Chemin des Cardelines, Mouans-Sartoux
    geo: { latitude: 43.6238, longitude: 6.9806 },
  },

  // ─── Hours (verified Google Business Profile) ──────────────────────
  hours: [
    { day: "Lundi", open: "08:00", close: "17:00" },
    { day: "Mardi", open: "08:00", close: "17:00" },
    { day: "Mercredi", open: "08:00", close: "17:00" },
    { day: "Jeudi", open: "08:00", close: "17:00" },
    { day: "Vendredi", open: "08:00", close: "17:00" },
    { day: "Samedi", open: "Fermé", close: null },
    { day: "Dimanche", open: "Fermé", close: null },
  ],

  // ─── Service area (cities served) ──────────────────────────────────
  serviceArea: [
    "Mouans-Sartoux",
    "Mougins",
    "Cannes",
    "Grasse",
    "Valbonne",
    "Antibes",
    "Le Cannet",
    "Vallauris",
  ],

  // ─── URLs & socials ────────────────────────────────────────────────
  url: "https://ferronnerie-mouansoise.fr",
  social: {
    google: "https://www.google.com/search?q=Ferronnerie+mouansoise+Hachani",
  },

  // ─── Brand / theme tokens ──────────────────────────────────────────
  theme: {
    colors: {
      iron: "#b85431",
      ironDeep: "#8b3d22",
      ember: "#d4793f",
      parchment: "#faf6ef",
      cream: "#f3ece0",
      ink: "#1a1612",
      smoke: "#5c534a",
      mist: "#a8a097",
      hairline: "#d9d1c4",
    },
  },

  // ─── Services ──────────────────────────────────────────────────────
  services: [
    {
      slug: "portails",
      title: "Portails & portillons",
      summary:
        "Portails coulissants, battants et portillons en fer forgé, dessinés sur-mesure à votre architecture.",
      bullets: [
        "Modèles classiques, contemporains ou ornementés",
        "Motorisation et automatismes intégrés",
        "Traitement antirouille et finition haute tenue",
      ],
    },
    {
      slug: "garde-corps",
      title: "Garde-corps & rampes",
      summary:
        "Garde-corps de balcon, terrasse ou mezzanine — sécurité, élégance, finitions discrètes.",
      bullets: [
        "Conformité aux normes NF P01-012",
        "Lignes contemporaines ou volutes traditionnelles",
        "Pose en milieu marin avec protection renforcée",
      ],
    },
    {
      slug: "escaliers",
      title: "Escaliers métalliques",
      summary:
        "Escaliers droits, hélicoïdaux ou suspendus, en fer ou acier patiné — intérieur comme extérieur.",
      bullets: [
        "Structures auto-portantes",
        "Marches bois, acier ou pierre",
        "Adaptation aux contraintes du bâti existant",
      ],
    },
    {
      slug: "clotures",
      title: "Clôtures & grilles",
      summary:
        "Clôtures de propriété, grilles défensives et brise-vue, pensées pour s'inscrire dans le paysage.",
      bullets: [
        "Hauteurs et motifs sur-mesure",
        "Pose sur muret existant ou plots",
        "Combinaisons fer / bois / acier corten",
      ],
    },
    {
      slug: "verandas",
      title: "Verrières & marquises",
      summary:
        "Verrières d'intérieur style atelier, marquises d'entrée et pergolas en structure métallique.",
      bullets: [
        "Profilés acier fins, vitrage feuilleté",
        "Marquises sur entrée ancienne ou contemporaine",
        "Pergolas bioclimatiques et tonnelles",
      ],
    },
    {
      slug: "structures",
      title: "Structures & ouvrages d'art",
      summary:
        "Charpentes métalliques, mezzanines, passerelles et pièces sur plan d'architecte.",
      bullets: [
        "Calculs de charge et notes techniques",
        "Soudure TIG / MIG en atelier",
        "Pose et levage coordonnés sur chantier",
      ],
    },
  ],

  // ─── Values ────────────────────────────────────────────────────────
  values: [
    {
      title: "Forgé à la main",
      body: "Chaque pièce est tracée, découpée et soudée dans notre atelier. Pas de produit catalogue — uniquement des ouvrages dessinés pour leur lieu.",
    },
    {
      title: "Sur-mesure intégral",
      body: "De la prise de cotes au dessin technique, nous concevons chaque projet en lien direct avec vous, votre architecte ou votre maître d'œuvre.",
    },
    {
      title: "Tenue dans le temps",
      body: "Acier de qualité, traitement antirouille en plusieurs couches, finition adaptée à l'environnement marin de la Côte d'Azur.",
    },
    {
      title: "Une parole d'artisan",
      body: "Devis clair, délais tenus, intervention soignée. La relation directe avec l'artisan reste votre interlocuteur unique du premier rendez-vous à la pose.",
    },
  ],

  // ─── Gallery ───────────────────────────────────────────────────────
  gallery: [
    { src: "/assets/gallery/staircase-exterior-modern.png", alt: "Escalier extérieur métallique, structure noire", category: "Escaliers" },
    { src: "/assets/gallery/gate-ornate-traditional.png", alt: "Portail en fer forgé ornementé, double battant", category: "Portails" },
    { src: "/assets/gallery/railing-terrace-view.png", alt: "Garde-corps de terrasse face à la mer", category: "Garde-corps" },
    { src: "/assets/gallery/work-01.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-02.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-03.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-04.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-05.png", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-06.png", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-07.png", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-08.png", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-09.png", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-10.png", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-11.png", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-12.png", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-13.png", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-14.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-15.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-16.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-17.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-18.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-19.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-20.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-21.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-22.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
    { src: "/assets/gallery/work-23.jpg", alt: "Réalisation ferronnerie Mouans-Sartoux", category: "Ouvrages" },
  ],

  // ─── Navigation ────────────────────────────────────────────────────
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/atelier", label: "L'atelier" },
    { href: "/services", label: "Savoir-faire" },
    { href: "/realisations", label: "Réalisations" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

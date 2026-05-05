/**
 * Single source of truth for all business data, services, gallery, and testimonials.
 * Edit this file to update the entire site without touching components.
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

  // ─── Contact & location ────────────────────────────────────────────
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
    geo: { latitude: 43.6238, longitude: 6.9806 },
  },

  // ─── Hours ─────────────────────────────────────────────────────────
  hours: [
    { day: "Lundi", open: "08:00", close: "17:00" },
    { day: "Mardi", open: "08:00", close: "17:00" },
    { day: "Mercredi", open: "08:00", close: "17:00" },
    { day: "Jeudi", open: "08:00", close: "17:00" },
    { day: "Vendredi", open: "08:00", close: "17:00" },
    { day: "Samedi", open: "Fermé", close: null },
    { day: "Dimanche", open: "Fermé", close: null },
  ],

  // ─── Service area ──────────────────────────────────────────────────
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

  // ─── Brand tokens (mirrors CSS @theme — CSS is canonical source) ───
  theme: {
    colors: {
      iron: "#c9a84c",
      ironDeep: "#a8892a",
      ember: "#dfc06a",
      parchment: "#f5f0e9",
      cream: "#ede7dd",
      ink: "#0b0a08",
      smoke: "#5a5047",
      mist: "#8a7f74",
      hairline: "#d8cfc0",
    },
  },

  // ─── Services ──────────────────────────────────────────────────────
  services: [
    {
      slug: "portails",
      category: "Portails",
      title: "Portails & portillons",
      longDescription:
        "Un portail dit tout d'une propriété avant qu'on en ait franchi le seuil. Chez Ferronnerie Mouansoise, chaque portail est dessiné à partir d'un relevé sur place et d'un échange direct sur vos attentes : battant double ou simple, coulissant, ornemental ou épuré — le modèle est forgé pour s'accorder avec l'architecture qui l'accueille. Nous intégrons l'automatisation dès la conception et coordonnons la pose des motoristes pour vous livrer un ensemble complet, prêt à fonctionner.",
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
      category: "Garde-corps",
      title: "Garde-corps & rampes",
      longDescription:
        "Un garde-corps réussit sa mission quand il se fait oublier — seule la vue demeure. Nos garde-corps en acier ou fer forgé respectent les normes NF P01-012 tout en conservant une légèreté visuelle que les solutions industrielles ne permettent pas. En milieu côtier, nous renforçons les traitements de surface — primaire époxy, finition polyuréthane deux couches — pour tenir durablement face à l'air marin de la Côte d'Azur.",
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
      category: "Escaliers",
      title: "Escaliers métalliques",
      longDescription:
        "Un escalier est une pièce à part entière. Qu'il soit droit, hélicoïdal ou suspendu, notre atelier le conçoit de A à Z : calcul de structure, choix des matériaux de marche (bois massif, acier brut, pierre naturelle), soudure TIG/MIG en atelier, livraison et pose. Les structures auto-portantes — limon central ou crémaillères latérales — permettent d'intégrer un escalier dans des espaces contraints sans recours à un mur porteur.",
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
      category: "Clôtures",
      title: "Clôtures & grilles",
      longDescription:
        "Une clôture réussie marque une limite sans créer une frontière froide. Nos clôtures et grilles en acier ou fer forgé s'inscrivent dans le paysage : hauteurs et motifs sont dessinés en fonction du site, des vis-à-vis et de la végétation. Nous proposons des combinaisons acier / bois / acier corten pour des rendus plus naturels, adaptés aux propriétés et jardins méditerranéens.",
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
      category: "Verrières",
      title: "Verrières & marquises",
      longDescription:
        "La verrière intérieure style atelier capte la lumière et transforme les volumes. Nos structures en profilé acier fin accueillent des vitrages feuilletés ou trempés selon l'usage et l'exposition. En marquise d'entrée ou en pergola couverte, les mêmes profilés assurent une protection contre les intempéries tout en conservant leur élégance structurelle — légèreté visuelle et robustesse ne s'excluent pas.",
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
      category: "Structures",
      title: "Structures & ouvrages d'art",
      longDescription:
        "Mezzanines, passerelles, charpentes de terrasse ou pièces sur plan d'architecte : notre atelier réalise les ouvrages métalliques structurels que les entreprises de menuiserie ne traitent pas. Nous travaillons à partir des plans fournis ou établissons nous-mêmes les notes de calcul. Soudure TIG/MIG en atelier, levage et pose coordonnés sur chantier — sans sous-traitance.",
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

  // ─── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      body: "Khemaies a réalisé notre portail battant et le garde-corps de la terrasse. Travail d'une grande précision, délais tenus, finition vraiment soignée. Deux ans après la pose, aucune trace de rouille malgré l'air marin — exactement ce qu'il nous avait promis.",
      author: "Christine M.",
      location: "Mougins",
      project: "Portail battant & garde-corps de terrasse",
      stars: 5,
    },
    {
      body: "Je collabore avec l'atelier Hachani sur mes chantiers en Pays de Grasse depuis plusieurs années. Dessins techniques fiables, devis précis, pose soignée. Un artisan qui tient sa parole — une rareté dans le métier.",
      author: "Pascal D.",
      location: "Grasse",
      project: "Architecte — collaboration régulière",
      stars: 5,
    },
    {
      body: "L'escalier hélicoïdal qu'ils nous ont forgé est devenu la pièce maîtresse de la villa. Chaque visiteur le croit d'époque. C'est une création 100% sur-mesure, conçue et posée en six semaines.",
      author: "Bernard & Sylvie L.",
      location: "Cannes",
      project: "Escalier hélicoïdal intérieur",
      stars: 5,
    },
  ],

  // ─── Gallery ───────────────────────────────────────────────────────
  // Categories: "Portails" | "Garde-corps" | "Escaliers" | "Clôtures" | "Verrières" | "Structures"
  gallery: [
    // Portails (5)
    {
      src: "/assets/gallery/gate-ornate-traditional.png",
      alt: "Portail double battant en fer forgé ornementé, Mouans-Sartoux",
      category: "Portails",
    },
    {
      src: "/assets/gallery/work-01.jpg",
      alt: "Portail coulissant acier laqué noir mat, villa Mougins",
      category: "Portails",
    },
    {
      src: "/assets/gallery/work-02.jpg",
      alt: "Portail battant fer forgé motifs volutes, propriété Cannes",
      category: "Portails",
    },
    {
      src: "/assets/gallery/work-03.jpg",
      alt: "Portail contemporain acier thermolaqué, Valbonne",
      category: "Portails",
    },
    {
      src: "/assets/gallery/work-04.jpg",
      alt: "Portail et portillon assortis fer forgé, Grasse",
      category: "Portails",
    },
    // Garde-corps (6)
    {
      src: "/assets/gallery/railing-terrace-view.png",
      alt: "Garde-corps de terrasse panoramique, acier et câble inox",
      category: "Garde-corps",
    },
    {
      src: "/assets/gallery/work-05.png",
      alt: "Rampe escalier intérieur acier noir, limon central",
      category: "Garde-corps",
    },
    {
      src: "/assets/gallery/work-06.png",
      alt: "Garde-corps balcon laqué, appartement Antibes",
      category: "Garde-corps",
    },
    {
      src: "/assets/gallery/work-07.png",
      alt: "Garde-corps mezzanine câbles inox tendus, Cannes",
      category: "Garde-corps",
    },
    {
      src: "/assets/gallery/work-08.png",
      alt: "Rampe extérieure fer forgé, finition Côte d'Azur",
      category: "Garde-corps",
    },
    {
      src: "/assets/gallery/work-09.png",
      alt: "Garde-corps piscine acier et verre trempé, Mouans-Sartoux",
      category: "Garde-corps",
    },
    // Escaliers (5)
    {
      src: "/assets/gallery/staircase-exterior-modern.png",
      alt: "Escalier extérieur acier noir, structure auto-portante",
      category: "Escaliers",
    },
    {
      src: "/assets/gallery/work-10.png",
      alt: "Escalier droit acier brut, marches bois massif",
      category: "Escaliers",
    },
    {
      src: "/assets/gallery/work-11.png",
      alt: "Escalier hélicoïdal limon central, villa contemporaine Cannes",
      category: "Escaliers",
    },
    {
      src: "/assets/gallery/work-12.png",
      alt: "Escalier suspendu acier corten, patio extérieur",
      category: "Escaliers",
    },
    {
      src: "/assets/gallery/work-13.png",
      alt: "Escalier quart-tournant acier et pierre naturelle",
      category: "Escaliers",
    },
    // Clôtures (4)
    {
      src: "/assets/gallery/work-14.jpg",
      alt: "Clôture fer forgé motifs contemporains, Le Cannet",
      category: "Clôtures",
    },
    {
      src: "/assets/gallery/work-15.jpg",
      alt: "Grille de clôture sur muret, propriété Vallauris",
      category: "Clôtures",
    },
    {
      src: "/assets/gallery/work-16.jpg",
      alt: "Clôture acier corten et bois, jardin méditerranéen",
      category: "Clôtures",
    },
    {
      src: "/assets/gallery/work-17.jpg",
      alt: "Portillon et clôture assortis, villa Grasse",
      category: "Clôtures",
    },
    // Verrières (4)
    {
      src: "/assets/gallery/work-18.jpg",
      alt: "Verrière atelier style industriel, cuisine Antibes",
      category: "Verrières",
    },
    {
      src: "/assets/gallery/work-19.jpg",
      alt: "Marquise d'entrée profilés acier fin, Mougins",
      category: "Verrières",
    },
    {
      src: "/assets/gallery/work-20.jpg",
      alt: "Pergola bioclimatique acier thermolaqué, terrasse",
      category: "Verrières",
    },
    {
      src: "/assets/gallery/work-21.jpg",
      alt: "Verrière toit atelier, séjour contemporain",
      category: "Verrières",
    },
    // Structures (2)
    {
      src: "/assets/gallery/work-22.jpg",
      alt: "Mezzanine structure acier, passerelle intérieure",
      category: "Structures",
    },
    {
      src: "/assets/gallery/work-23.jpg",
      alt: "Charpente métallique pergola, terrasse couverte",
      category: "Structures",
    },
  ],

  // ─── Navigation ────────────────────────────────────────────────────
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/atelier", label: "L'atelier" },
    { href: "/services", label: "Savoir-faire" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

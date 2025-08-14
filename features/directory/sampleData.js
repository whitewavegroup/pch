export const CATEGORIES = [
  { id: "production", en: "Production", es: "Producción" },
  { id: "creative", en: "Creative", es: "Creativo" },
  { id: "talent", en: "Talent", es: "Talento" },
  { id: "services", en: "Services", es: "Servicios" },
];
export const SUBS = [
  { id: "tech", en: "Tech", es: "Técnico" },
  { id: "live", en: "Live", es: "En Vivo" },
  { id: "permanent", en: "Permanent", es: "Permanente" },
];
export const LOCATIONS = [
  { id: "pr", en: "Puerto Rico", es: "Puerto Rico" },
  { id: "fl", en: "Florida", es: "Florida" },
  { id: "bogota", en: "Bogotá, Colombia", es: "Bogotá, Colombia" },
];
export const SAMPLE_LISTINGS = [
  { id: 1, category: "production", sub: "tech", location: "pr", tier: "free",
    name: { en: "FOH Engineer – San Juan Audio", es: "Ingeniero FOH – San Juan Audio" },
    bio: { en: "Live sound mixing for concerts and churches. Line-array friendly.", es: "Mezcla de sonido en vivo para conciertos e iglesias. Experto en line-array." },
    locationLabel: { en: "San Juan, PR", es: "San Juan, PR" },
    tags: ["FOH","Mixing","Live"]
  },
  { id: 2, category: "production", sub: "live", location: "fl", tier: "featured",
    name: { en: "Lighting Designer – Miami LX", es: "Diseñador de Iluminación – Miami LX" },
    bio: { en: "Touring LD with pixel mapping and timecode experience.", es: "LD de gira con experiencia en pixel mapping y timecode." },
    locationLabel: { en: "Miami, FL", es: "Miami, FL" },
    tags: ["Lighting","Pixel","Timecode"]
  },
  { id: 3, category: "production", sub: "permanent", location: "bogota", tier: "premium",
    name: { en: "AV Installer – Bogotá Integrations", es: "Instalador AV – Integraciones Bogotá" },
    bio: { en: "Permanent installs for venues, churches, and theaters.", es: "Instalaciones permanentes para venues, iglesias y teatros." },
    locationLabel: { en: "Bogotá, CO", es: "Bogotá, CO" },
    tags: ["Installer","AV","Permanent"]
  },
  { id: 4, category: "creative", sub: "live", location: "fl", tier: "enhanced",
    name: { en: "VJ / Media Server Tech", es: "VJ / Técnico de Media Server" },
    bio: { en: "Resolume, Disguise, Notch — festival visuals and tours.", es: "Resolume, Disguise, Notch — visuales para festivales y giras." },
    locationLabel: { en: "Orlando, FL", es: "Orlando, FL" },
    tags: ["VJ","Disguise","Notch"]
  },
  { id: 5, category: "creative", sub: "permanent", location: "pr", tier: "featured",
    name: { en: "Editor / Colorist – Isla Post", es: "Editor / Colorista – Isla Post" },
    bio: { en: "Commercials, worship content, and music videos.", es: "Comerciales, contenido de adoración y videoclips." },
    locationLabel: { en: "Bayamón, PR", es: "Bayamón, PR" },
    tags: ["Post","Color","DaVinci"]
  },
  { id: 6, category: "talent", sub: "live", location: "bogota", tier: "free",
    name: { en: "Session Drummer – Chapinero", es: "Baterista de Sesión – Chapinero" },
    bio: { en: "Studio & live drummer, click-ready, fast turnaround.", es: "Baterista de estudio y en vivo, listo para clic, entrega rápida." },
    locationLabel: { en: "Bogotá, CO", es: "Bogotá, CO" },
    tags: ["Drums","Live","Studio"]
  },
  { id: 7, category: "services", sub: "tech", location: "fl", tier: "premium",
    name: { en: "AV Rentals – Orlando Pro", es: "Renta AV – Orlando Pro" },
    bio: { en: "LED walls, line-array, lighting kits. Weekend packages.", es: "Pantallas LED, line-array, kits de iluminación. Paquetes de fin de semana." },
    locationLabel: { en: "Orlando, FL", es: "Orlando, FL" },
    tags: ["LED","Rental","Line-Array"]
  },
];

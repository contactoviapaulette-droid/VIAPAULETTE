import type { EnlaceContacto, EnlaceNavegacion } from "./types";

/**
 * Identidad y datos de contacto del centro.
 * Es la única fuente de verdad para nombre, lema y vías de contacto.
 */
export const sitio = {
  nombre: "Vía Paulette",
  descriptor: "Centro de Bienestar Emocional",
  lema: "Un espacio para sanar, crecer y reconectar contigo.",
  descripcion:
    "Un espacio de acompañamiento emocional con un enfoque humano, empático y profesional. Vía Paulette te acompaña en tu bienestar emocional, el manejo del estrés y la ansiedad, la psicoeducación y tus procesos de cambio y crecimiento personal.",
  correo: "contacto.viapaulette@gmail.com",
  whatsapp: "https://wa.me/16822738427",
  instagram: "https://www.instagram.com/viapaulette87/",
  facebook: "https://www.facebook.com/profile.php?id=61563585524160",
} as const;

/** Secciones alcanzables desde el navbar y el footer. */
export const navegacion: EnlaceNavegacion[] = [
  { etiqueta: "Sobre nosotros", ancla: "#sobre-nosotros" },
  { etiqueta: "Servicios", ancla: "#servicios" },
  { etiqueta: "Beneficios", ancla: "#beneficios" },
  { etiqueta: "Testimonios", ancla: "#testimonios" },
];

/** Destino de todos los botones de conversión. */
export const anclaAgendar = "#agendar";

export const contacto: EnlaceContacto[] = [
  { etiqueta: sitio.correo, href: `mailto:${sitio.correo}`, icono: "correo" },
  { etiqueta: "WhatsApp", href: sitio.whatsapp, icono: "whatsapp" },
  { etiqueta: "Instagram", href: sitio.instagram, icono: "instagram" },
  { etiqueta: "Facebook", href: sitio.facebook, icono: "facebook" },
];

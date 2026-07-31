"use client";

import { useEffect, useState } from "react";
import { sitio } from "@/models";
import Icono from "@/templates/graphics/Icono";

/**
 * Aparece recién al dejar atrás el Hero: ahí ya compiten "Agendar cita" y
 * "Ver servicios", así que sumar el botón desde el primer segundo saturaría la
 * entrada. El mismo umbral y patrón de scroll que usa el Navbar.
 */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alHacerScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.6);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  return (
    <a
      href={sitio.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full
                  border border-dorado-mate/50 bg-verde-bosque text-marfil
                  shadow-[0_20px_45px_-20px_rgba(58,76,56,0.55)]
                  transition-all duration-500 ease-out hover:scale-105 hover:bg-verde-oscuro
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dorado-mate
                  focus-visible:ring-offset-2 focus-visible:ring-offset-marfil md:bottom-8 md:right-8
                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  }`}
    >
      <Icono nombre="whatsapp" size={26} strokeWidth={1.6} />
    </a>
  );
}

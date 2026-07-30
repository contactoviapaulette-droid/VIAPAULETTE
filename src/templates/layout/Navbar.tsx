"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { anclaAgendar, navegacion, sitio } from "@/models";
import BrandMark from "@/templates/graphics/BrandMark";
import useReducedMotionSafe from "@/templates/motion/useReducedMotionSafe";
import Button from "@/templates/ui/Button";
import Container from "./Container";

const enlaceFoco =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-dorado-mate focus-visible:ring-offset-4 focus-visible:ring-offset-marfil";

export default function Navbar() {
  const [conFondo, setConFondo] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const prefiereMenosMovimiento = useReducedMotionSafe();

  useEffect(() => {
    const alHacerScroll = () => setConFondo(window.scrollY > 24);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  // Con el menú desplegado el fondo no debe seguir desplazándose.
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAbierto]);

  // Escape cierra el menú: es lo que espera quien navega con teclado.
  useEffect(() => {
    if (!menuAbierto) return;
    const alPulsar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setMenuAbierto(false);
    };
    window.addEventListener("keydown", alPulsar);
    return () => window.removeEventListener("keydown", alPulsar);
  }, [menuAbierto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        conFondo
          ? "bg-marfil/80 shadow-[0_1px_0_0_rgba(58,76,56,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4 md:py-5">
        <a href="#inicio" className={`flex items-center gap-3 ${enlaceFoco}`}>
          <BrandMark className="h-9 w-9 md:h-10 md:w-10" />
          <span className="font-display text-xl tracking-wide text-verde-bosque md:text-2xl">
            {sitio.nombre}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-10 md:flex">
          {navegacion.map((enlace) => (
            <a
              key={enlace.ancla}
              href={enlace.ancla}
              className={`font-sans text-sm tracking-wide text-verde-oscuro/80 transition-colors duration-500 hover:text-verde-bosque ${enlaceFoco}`}
            >
              {enlace.etiqueta}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={anclaAgendar}>Agendar cita</Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(true)}
          className={`text-verde-bosque md:hidden ${enlaceFoco}`}
        >
          <Menu size={26} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </Container>

      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefiereMenosMovimiento ? 0.15 : 0.4 }}
            className="fixed inset-0 z-50 bg-marfil md:hidden"
          >
            <Container className="flex items-center justify-between py-4">
              <a
                href="#inicio"
                onClick={() => setMenuAbierto(false)}
                className={`flex items-center gap-3 ${enlaceFoco}`}
              >
                <BrandMark className="h-9 w-9" />
                <span className="font-display text-xl text-verde-bosque">
                  {sitio.nombre}
                </span>
              </a>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setMenuAbierto(false)}
                className={`text-verde-bosque ${enlaceFoco}`}
              >
                <X size={26} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </Container>

            <nav
              aria-label="Principal"
              className="mt-16 flex flex-col items-center gap-8"
            >
              {navegacion.map((enlace) => (
                <a
                  key={enlace.ancla}
                  href={enlace.ancla}
                  onClick={() => setMenuAbierto(false)}
                  className={`font-display text-3xl text-verde-oscuro ${enlaceFoco}`}
                >
                  {enlace.etiqueta}
                </a>
              ))}
              <Button
                href={anclaAgendar}
                className="mt-4"
                onClick={() => setMenuAbierto(false)}
              >
                Agendar cita
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

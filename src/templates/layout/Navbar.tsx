"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { anclaAgendar, navegacion, sitio } from "@/models";
import { EASE_ORGANICO } from "@/templates/motion/Reveal";
import useReducedMotionSafe from "@/templates/motion/useReducedMotionSafe";
import Button from "@/templates/ui/Button";
import Container from "./Container";

const enlaceFoco =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-dorado-mate focus-visible:ring-offset-4 focus-visible:ring-offset-marfil";

export default function Navbar() {
  const [conFondo, setConFondo] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("");
  const prefiereMenosMovimiento = useReducedMotionSafe();

  useEffect(() => {
    const alHacerScroll = () => setConFondo(window.scrollY > 24);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  // La línea de lectura está aproximadamente a un tercio de la ventana:
  // la sección que la cruza es la que la navegación marca como activa.
  useEffect(() => {
    const secciones = navegacion
      .map((enlace) => ({
        ancla: enlace.ancla,
        elemento: document.querySelector<HTMLElement>(enlace.ancla),
      }))
      .filter(
        (
          seccion,
        ): seccion is { ancla: string; elemento: HTMLElement } =>
          seccion.elemento !== null,
      );

    let frame = 0;
    const actualizarSeccion = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const lineaLectura = window.innerHeight * 0.34;
        const actual = secciones.find(({ elemento }) => {
          const limites = elemento.getBoundingClientRect();
          return limites.top <= lineaLectura && limites.bottom > lineaLectura;
        });
        setSeccionActiva(actual?.ancla ?? "");
      });
    };

    actualizarSeccion();
    window.addEventListener("scroll", actualizarSeccion, { passive: true });
    window.addEventListener("resize", actualizarSeccion);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", actualizarSeccion);
      window.removeEventListener("resize", actualizarSeccion);
    };
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
          <Image
            src="/img/logo-white.png"
            alt=""
            width={56}
            height={56}
            className="h-12 w-12 rounded-full shadow-[0_2px_10px_rgba(40,52,38,0.25)] md:h-14 md:w-14"
          />
          <span className="font-display text-xl tracking-wide text-verde-bosque md:text-2xl">
            {sitio.nombre}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-10 md:flex">
          {navegacion.map((enlace) => {
            const esActivo = seccionActiva === enlace.ancla;

            return (
              <a
                key={enlace.ancla}
                href={enlace.ancla}
                aria-current={esActivo ? "page" : undefined}
                onClick={() => setSeccionActiva(enlace.ancla)}
                className={`relative py-2 font-sans text-sm tracking-wide transition-colors duration-500 hover:text-verde-bosque ${
                  esActivo ? "text-verde-bosque" : "text-verde-oscuro/70"
                } ${enlaceFoco}`}
              >
                {enlace.etiqueta}
                {esActivo && (
                  <motion.span
                    layoutId="indicador-navegacion"
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-dorado-mate"
                    transition={
                      prefiereMenosMovimiento
                        ? { duration: 0 }
                        : { duration: 0.5, ease: EASE_ORGANICO }
                    }
                  />
                )}
              </a>
            );
          })}
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
                <Image
                  src="/img/logo-white.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-11 w-11 rounded-full shadow-[0_2px_10px_rgba(40,52,38,0.25)]"
                />
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
              {navegacion.map((enlace) => {
                const esActivo = seccionActiva === enlace.ancla;

                return (
                  <a
                    key={enlace.ancla}
                    href={enlace.ancla}
                    aria-current={esActivo ? "page" : undefined}
                    onClick={() => {
                      setSeccionActiva(enlace.ancla);
                      setMenuAbierto(false);
                    }}
                    className={`relative font-display text-3xl ${
                      esActivo ? "text-verde-bosque" : "text-verde-oscuro"
                    } ${enlaceFoco}`}
                  >
                    {enlace.etiqueta}
                    {esActivo && (
                      <motion.span
                        layoutId="indicador-navegacion-movil"
                        aria-hidden="true"
                        className="absolute -bottom-2 inset-x-0 mx-auto h-0.5 w-12 rounded-full bg-dorado-mate"
                        transition={
                          prefiereMenosMovimiento
                            ? { duration: 0 }
                            : { duration: 0.5, ease: EASE_ORGANICO }
                        }
                      />
                    )}
                  </a>
                );
              })}
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

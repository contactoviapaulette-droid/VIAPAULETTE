"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonios } from "@/models";
import Container from "@/templates/layout/Container";
import Section from "@/templates/layout/Section";
import SectionTitle from "@/templates/ui/SectionTitle";
import TestimonialCard from "@/templates/ui/TestimonialCard";
import { EASE_ORGANICO } from "@/templates/motion/Reveal";
import useReducedMotionSafe from "@/templates/motion/useReducedMotionSafe";

const controlFoco =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dorado-mate " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-beige-natural";

export default function TestimonialsView() {
  const [actual, setActual] = useState(0);
  const prefiereMenosMovimiento = useReducedMotionSafe();

  const siguiente = () => setActual((previo) => (previo + 1) % testimonios.length);
  const anterior = () =>
    setActual((previo) => (previo - 1 + testimonios.length) % testimonios.length);

  const transicion = prefiereMenosMovimiento
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.7, ease: EASE_ORGANICO },
      };

  return (
    <Section id="testimonios" fondo="beige">
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle eyebrow="Testimonios" titulo="Voces que han transitado el camino" />

        <div className="w-full max-w-2xl">
          {/* aria-live avisa del cambio a quien usa lector de pantalla. */}
          <div aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={testimonios[actual].slug} {...transicion}>
                <TestimonialCard testimonio={testimonios[actual]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Testimonio anterior"
              onClick={anterior}
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-verde-salvia text-verde-bosque transition-colors duration-500 hover:bg-verde-salvia/30 ${controlFoco}`}
            >
              <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>

            <div className="flex gap-2">
              {testimonios.map((testimonio, indice) => (
                <button
                  key={testimonio.slug}
                  type="button"
                  aria-label={`Ver el testimonio de ${testimonio.nombre}`}
                  aria-current={indice === actual}
                  onClick={() => setActual(indice)}
                  className={`h-2 w-2 rounded-full transition-colors duration-500 ${controlFoco} ${
                    indice === actual ? "bg-verde-bosque" : "bg-verde-salvia/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Testimonio siguiente"
              onClick={siguiente}
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-verde-salvia text-verde-bosque transition-colors duration-500 hover:bg-verde-salvia/30 ${controlFoco}`}
            >
              <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

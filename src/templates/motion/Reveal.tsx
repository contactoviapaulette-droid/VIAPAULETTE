"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import useReducedMotionSafe from "./useReducedMotionSafe";

/** Curva y duraciones compartidas: toda la página respira al mismo ritmo. */
export const EASE_ORGANICO = [0.22, 1, 0.36, 1] as const;
export const DURACION_LENTA = 1.1;

type RevealProps = {
  children: ReactNode;
  /** Desplazamiento inicial en píxeles. `0` deja solo el fundido. */
  desplazamiento?: number;
  /** Retraso en segundos, para escalonar grupos de hermanos. */
  retraso?: number;
  duracion?: number;
  className?: string;
  /** Etiqueta a renderizar; permite usar Reveal sin romper la semántica. */
  as?: "div" | "li" | "figure" | "section";
};

/**
 * Envoltura única para las apariciones al hacer scroll.
 *
 * Centralizarlas aquí cumple dos objetivos del manual: que todas las
 * animaciones compartan la misma curva lenta, y que quien haya pedido menos
 * movimiento en su sistema reciba el contenido sin desplazamientos.
 */
export default function Reveal({
  children,
  desplazamiento = 24,
  retraso = 0,
  duracion = DURACION_LENTA,
  className = "",
  as = "div",
}: RevealProps) {
  const prefiereMenosMovimiento = useReducedMotionSafe();
  const Etiqueta = motion[as];

  if (prefiereMenosMovimiento) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Etiqueta
      initial={{ opacity: 0, y: desplazamiento }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: duracion, ease: EASE_ORGANICO, delay: retraso }}
      className={className}
    >
      {children}
    </Etiqueta>
  );
}

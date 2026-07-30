"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import useReducedMotionSafe from "@/templates/motion/useReducedMotionSafe";

/**
 * El hilo de la vía.
 *
 * El nombre de la marca es un camino, así que la página lleva uno literal: una
 * línea dorada de un píxel que se dibuja en el margen a medida que se baja.
 * Es el único elemento que atraviesa toda la composición, y por eso se mantiene
 * casi transparente — acompaña la lectura sin competir con ella.
 *
 * Solo aparece en pantallas anchas, donde el margen deja sitio de sobra, y se
 * desactiva por completo si el sistema pide menos movimiento.
 */
export default function PathThread() {
  const prefiereMenosMovimiento = useReducedMotionSafe();
  const { scrollYProgress } = useScroll();
  const avance = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 24,
    restDelta: 0.001,
  });

  if (prefiereMenosMovimiento) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-10 hidden w-px xl:block"
    >
      {/* Lecho apagado: sugiere el camino completo antes de recorrerlo. */}
      <div className="absolute inset-0 bg-verde-salvia/20" />

      <motion.div
        style={{ scaleY: avance, transformOrigin: "top" }}
        className="absolute inset-0 bg-gradient-to-b from-dorado-mate/70 via-dorado-mate/40 to-transparent"
      />
    </div>
  );
}

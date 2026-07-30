"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_ORGANICO } from "@/templates/motion/Reveal";
import useReducedMotionSafe from "@/templates/motion/useReducedMotionSafe";

type Variante = "bosque" | "salvia" | "dorado" | "beige";
/** Cada forma tiene un radio distinto: como hojas, ninguna se repite. */
type Forma = "hoja" | "semilla" | "canto" | "guijarro";

type OrganicPanelProps = {
  variante?: Variante;
  forma?: Forma;
  className?: string;
  children?: ReactNode;
};

const degradados: Record<Variante, string> = {
  bosque: "radial-gradient(circle at 30% 20%, #5B6D52 0%, #3A4C38 55%, #283426 100%)",
  salvia: "radial-gradient(circle at 70% 30%, #C8CFBE 0%, #AAB59A 60%, #7D8D74 100%)",
  dorado: "radial-gradient(circle at 30% 70%, #E6E1D4 0%, #CDB277 70%, #A79F8C 100%)",
  beige: "radial-gradient(circle at 50% 40%, #F6F3EA 0%, #E6E1D4 60%, #C8CFBE 100%)",
};

const formas: Record<Forma, string> = {
  hoja: "42% 58% 64% 36% / 46% 40% 60% 54%",
  semilla: "58% 42% 38% 62% / 54% 62% 38% 46%",
  canto: "36% 64% 52% 48% / 62% 38% 62% 38%",
  guijarro: "50% 50% 44% 56% / 40% 58% 42% 60%",
};

/**
 * Mancha orgánica que sustituye a la fotografía.
 *
 * Ocupa por completo a su contenedor, así que el `relative` vive aquí y el
 * padre solo decide la proporción. Antes el padre imponía `absolute inset-0` y
 * chocaba con el `relative` interno, dejando el panel en tamaño cero.
 */
export default function OrganicPanel({
  variante = "bosque",
  forma = "hoja",
  className = "",
  children,
}: OrganicPanelProps) {
  const prefiereMenosMovimiento = useReducedMotionSafe();

  return (
    <motion.div
      initial={prefiereMenosMovimiento ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      whileInView={prefiereMenosMovimiento ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: EASE_ORGANICO }}
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background: degradados[variante],
        borderRadius: formas[forma],
      }}
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay
                   bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.4),transparent_60%)]"
      />
      {children}
    </motion.div>
  );
}

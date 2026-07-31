"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE_ORGANICO } from "@/templates/motion/Reveal";
import useReducedMotionSafe from "@/templates/motion/useReducedMotionSafe";

/** Los mismos radios del panel orgánico: ninguna foto se recorta en rectángulo. */
type Forma = "hoja" | "semilla" | "canto" | "guijarro" | "circulo";

type FotografiaProps = {
  src: string;
  alt: string;
  forma?: Forma;
  className?: string;
  /** Solo para la imagen visible al cargar; el resto se carga en diferido. */
  prioridad?: boolean;
  /** Ancho aproximado de presentación, para que el navegador elija bien. */
  sizes?: string;
};

const formas: Record<Forma, string> = {
  hoja: "42% 58% 64% 36% / 46% 40% 60% 54%",
  semilla: "58% 42% 38% 62% / 54% 62% 38% 46%",
  canto: "36% 64% 52% 48% / 62% 38% 62% 38%",
  guijarro: "50% 50% 44% 56% / 40% 58% 42% 60%",
  circulo: "50%",
};

/**
 * Fotografía con recorte orgánico.
 *
 * Sobre la imagen van dos capas muy tenues: un velo cálido que la acerca al
 * marfil de la marca y un filo dorado que la separa del fondo sin sombra dura.
 */
export default function Fotografia({
  src,
  alt,
  forma = "hoja",
  className = "",
  prioridad = false,
  sizes = "(max-width: 768px) 90vw, 45vw",
}: FotografiaProps) {
  const prefiereMenosMovimiento = useReducedMotionSafe();

  return (
    <motion.figure
      initial={prefiereMenosMovimiento ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
      whileInView={prefiereMenosMovimiento ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.3, ease: EASE_ORGANICO }}
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ borderRadius: formas[forma] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={prioridad}
        className="object-cover"
      />

      {/* Velo cálido: integra cualquier foto a la atmósfera de la marca. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-dorado-mate/10 mix-blend-soft-light"
      />

      {/* Filo dorado en lugar de sombra: separa sin pesar. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 ring-1 ring-inset ring-dorado-mate/25"
        style={{ borderRadius: formas[forma] }}
      />
    </motion.figure>
  );
}

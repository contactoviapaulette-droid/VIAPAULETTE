"use client";

import { motion } from "framer-motion";
import { EASE_ORGANICO } from "@/templates/motion/Reveal";
import useReducedMotionSafe from "@/templates/motion/useReducedMotionSafe";

/**
 * Rama que acompaña el flanco de una fotografía orgánica.
 *
 * No es un icono suelto: el trazo está calculado para correr por fuera del
 * recorte de `Fotografia`, a unos pocos píxeles de su borde, de modo que la
 * foto y la rama se lean como una sola pieza. Las hojas nacen sobre la propia
 * curva —sus anclajes son puntos del trazo— y por eso no flotan.
 *
 * El lienzo es 300×400 (la proporción 3/4 del contenedor) y el trazo se sale
 * a coordenadas negativas a propósito, así que el SVG va con overflow visible.
 */

/** Curva maestra: baja por el flanco izquierdo y cierra bajo la fotografía. */
const RAMA =
  "M62-6C8 26-14 76-14 140C-14 252 22 348 92 410";

/** Hoja con el nacimiento en el origen y la punta hacia arriba. */
const HOJA = "M0 0C7-5 8-15 0-23C-8-15-7-5 0 0Z";
/** Nervadura: la misma hoja vista por dentro, para que no quede plana. */
const NERVADURA = "M0-2L0-19";

/**
 * Anclajes tomados sobre la curva —no repartidos a ojo—, con el giro que
 * lleva cada punta hacia afuera y una escala que decrece hacia el tallo.
 */
const hojas = [
  { x: -2.8, y: 70, giro: -45, escala: 0.72 },
  { x: -12.5, y: 112, giro: -70, escala: 1 },
  { x: -11.6, y: 189, giro: -95, escala: 0.88 },
  { x: -0.8, y: 251, giro: -112, escala: 1.05 },
  { x: 24, y: 320, giro: -135, escala: 0.8 },
];

type OrnamentoBotanicoProps = {
  className?: string;
};

export default function OrnamentoBotanico({
  className = "",
}: OrnamentoBotanicoProps) {
  const prefiereMenosMovimiento = useReducedMotionSafe();

  return (
    <svg
      viewBox="0 0 300 400"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible ${className}`}
    >
      {/* El tallo se dibuja solo: el trazo crece como crecería la rama. */}
      <motion.path
        d={RAMA}
        className="stroke-dorado-mate/70"
        strokeWidth={1.2}
        strokeLinecap="round"
        initial={prefiereMenosMovimiento ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
        whileInView={
          prefiereMenosMovimiento
            ? { opacity: 1 }
            : { pathLength: 1, opacity: 1 }
        }
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.8, ease: EASE_ORGANICO }}
      />

      {hojas.map((hoja, indice) => (
        /* La colocación va en el atributo del grupo exterior y la animación en
           el interior: si compartieran nodo, el `transform` animado por
           framer-motion pisaría el translate/rotate del anclaje. */
        <g
          key={`${hoja.x}-${hoja.y}`}
          transform={`translate(${hoja.x} ${hoja.y}) rotate(${hoja.giro}) scale(${hoja.escala})`}
        >
          <motion.g
            initial={
              prefiereMenosMovimiento ? { opacity: 0 } : { opacity: 0, scale: 0.6 }
            }
            whileInView={
              prefiereMenosMovimiento ? { opacity: 1 } : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              ease: EASE_ORGANICO,
              /* Brotan detrás del trazo, en el mismo orden en que este avanza. */
              delay: prefiereMenosMovimiento ? 0 : 0.5 + indice * 0.16,
            }}
            style={{ transformOrigin: "0px 0px" }}
          >
            <path
              d={HOJA}
              className="fill-verde-salvia/20 stroke-verde-salvia/80"
              strokeWidth={1}
              strokeLinejoin="round"
            />
            <path
              d={NERVADURA}
              className="stroke-verde-salvia/60"
              strokeWidth={0.7}
              strokeLinecap="round"
            />
          </motion.g>
        </g>
      ))}
    </svg>
  );
}

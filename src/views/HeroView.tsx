"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { anclaAgendar, sitio } from "@/models";
import Container from "@/templates/layout/Container";
import Button from "@/templates/ui/Button";
import Fotografia from "@/templates/ui/Fotografia";
import { EASE_ORGANICO } from "@/templates/motion/Reveal";
import useReducedMotionSafe from "@/templates/motion/useReducedMotionSafe";

/**
 * La entrada es una secuencia orquestada, no efectos sueltos: el descriptor
 * abre, el titular sigue y los botones cierran. Un solo momento, bien medido.
 */
export default function HeroView() {
  const prefiereMenosMovimiento = useReducedMotionSafe();

  const aparecer = (retraso: number) =>
    prefiereMenosMovimiento
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4 } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, ease: EASE_ORGANICO, delay: retraso },
        };

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      {/* Atmósfera: dos halos muy difusos, nada que compita con el texto. */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-verde-claro/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-dorado-mate/20 blur-3xl"
      />

      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
        <div className="flex flex-col items-start gap-8 md:col-span-7">
          <motion.p {...aparecer(0)} className="font-sans text-eyebrow uppercase text-verde-eucalipto">
            {sitio.descriptor}
          </motion.p>

          <motion.h1
            {...aparecer(0.1)}
            className="text-balance font-display text-display-lg text-verde-oscuro"
          >
            Un espacio para sanar, crecer y{" "}
            <span className="italic text-verde-bosque">reconectar</span> contigo
          </motion.h1>

          <motion.p
            {...aparecer(0.25)}
            className="max-w-prose text-pretty font-sans text-base leading-relaxed text-verde-oliva md:text-lg"
          >
            Vía Paulette es un refugio para tu bienestar emocional: un lugar
            seguro donde acompañarte en tu proceso de crecimiento personal,
            sanación y reconexión.
          </motion.p>

          <motion.div {...aparecer(0.4)} className="flex flex-col gap-4 sm:flex-row">
            <Button href={anclaAgendar}>Agendar cita</Button>
            <Button href="#servicios" variant="contorno">
              Ver servicios
            </Button>
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md md:col-span-5">
          {/* El consultorio real: la promesa de refugio se ve antes de leerse. */}
          <Fotografia
            src="/img/wellness-space.webp"
            alt="Consultorio de Vía Paulette: sillones, plantas y luz cálida"
            forma="hoja"
            prioridad
            sizes="(max-width: 768px) 90vw, 40vw"
          />

          {/* El logotipo se posa como un sello sobre la propia foto: el
              recorte orgánico no llega a las esquinas de la caja, así que el
              disco va hacia adentro para quedar siempre sobre la imagen. */}
          <motion.div
            {...aparecer(0.55)}
            className="absolute bottom-5 left-5 h-28 w-28 overflow-hidden rounded-full drop-shadow-[0_7px_12px_rgba(40,52,38,0.24)] md:h-32 md:w-32"
          >
            <Image
              src="/img/logo-white.png"
              alt="Vía Paulette"
              fill
              sizes="(max-width: 768px) 7rem, 8rem"
              priority
              className="rounded-full object-contain"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

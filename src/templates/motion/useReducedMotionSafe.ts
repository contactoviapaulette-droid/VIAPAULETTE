"use client";

import { useSyncExternalStore } from "react";

const CONSULTA = "(prefers-reduced-motion: reduce)";

function suscribir(callback: () => void) {
  const medioQuery = window.matchMedia(CONSULTA);
  medioQuery.addEventListener("change", callback);
  return () => medioQuery.removeEventListener("change", callback);
}

function leerPreferencia() {
  return window.matchMedia(CONSULTA).matches;
}

/** El servidor no tiene `matchMedia`: asume que el movimiento está permitido. */
function preferenciaEnServidor() {
  return false;
}

/**
 * `useReducedMotion` de framer-motion consulta `matchMedia` de forma
 * síncrona en el primer render del cliente, así que si el sistema del
 * visitante pide menos movimiento, ese primer render no coincide con el HTML
 * que generó el servidor y rompe la hidratación.
 *
 * `useSyncExternalStore` está pensado justo para esto: usa el snapshot del
 * servidor durante la hidratación y solo después vuelve a leer el real.
 */
export default function useReducedMotionSafe(): boolean {
  return useSyncExternalStore(suscribir, leerPreferencia, preferenciaEnServidor);
}

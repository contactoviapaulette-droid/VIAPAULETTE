import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  /** Alterna el fondo para marcar el paso de una sección a la siguiente. */
  fondo?: "marfil" | "beige" | "bosque";
  className?: string;
  /** Etiqueta accesible cuando la sección no abre con un encabezado visible. */
  "aria-label"?: string;
};

const fondos = {
  marfil: "bg-marfil",
  beige: "bg-beige-natural/45",
  bosque: "bg-verde-bosque",
} as const;

/**
 * Ritmo vertical único de la página.
 *
 * Que el espaciado viva en un solo lugar evita que las secciones peleen entre
 * sí por el padding, que es de donde suele salir el ritmo irregular.
 */
export default function Section({
  id,
  children,
  fondo = "marfil",
  className = "",
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      {...rest}
      className={`relative scroll-mt-24 py-24 md:py-32 lg:py-36 ${fondos[fondo]} ${className}`}
    >
      {children}
    </section>
  );
}

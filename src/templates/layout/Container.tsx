import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** `ancho` para composiciones editoriales, `lectura` para texto corrido. */
  medida?: "ancho" | "lectura";
};

const medidas = {
  ancho: "max-w-6xl",
  lectura: "max-w-2xl",
} as const;

export default function Container({
  children,
  className = "",
  medida = "ancho",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${medidas[medida]} px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

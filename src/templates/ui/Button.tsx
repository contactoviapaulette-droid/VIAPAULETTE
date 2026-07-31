import type { ReactNode } from "react";

type ButtonVariant = "primario" | "secundario" | "contorno";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variantes: Record<ButtonVariant, string> = {
  primario:
    "border-verde-bosque bg-verde-bosque text-marfil hover:bg-verde-oscuro hover:border-verde-oscuro",
  secundario:
    "border-verde-salvia bg-verde-salvia text-verde-oscuro hover:bg-verde-claro hover:border-verde-claro",
  contorno:
    "border-verde-bosque bg-transparent text-verde-bosque hover:bg-verde-bosque hover:text-marfil",
};

/**
 * El anillo de foco usa Dorado Mate: es el único acento fuerte de la marca y
 * garantiza contraste tanto sobre Marfil como sobre Verde Bosque.
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3 " +
  "font-sans text-sm font-medium tracking-wide transition-colors duration-500 ease-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dorado-mate focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-marfil";

export default function Button({
  children,
  href,
  variant = "primario",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const clases = `${base} ${variantes[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={clases} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={clases}>
      {children}
    </button>
  );
}

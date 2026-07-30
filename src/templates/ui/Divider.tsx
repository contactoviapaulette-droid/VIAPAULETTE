type DividerProps = {
  /** Ajusta el trazo de la línea para fondos oscuros. */
  sobreOscuro?: boolean;
  className?: string;
};

/**
 * Divisor de hoja tomado del manual de identidad.
 * La hoja va siempre en Dorado Mate; solo cambia el tono de las líneas.
 */
export default function Divider({
  sobreOscuro = false,
  className = "",
}: DividerProps) {
  const dorado = "#CDB277";
  const linea = sobreOscuro ? "#7D8D74" : "#AAB59A";

  return (
    <svg
      width="140"
      height="20"
      viewBox="0 0 140 20"
      fill="none"
      className={`opacity-80 ${className}`}
      aria-hidden="true"
    >
      <line x1="0" y1="10" x2="52" y2="10" stroke={linea} strokeWidth="1" />
      <path
        d="M70 4 C73 8, 73 12, 70 16 C67 12, 67 8, 70 4 Z"
        stroke={dorado}
        strokeWidth="1"
        fill="none"
      />
      <circle cx="70" cy="10" r="1.4" fill={dorado} />
      <line x1="88" y1="10" x2="140" y2="10" stroke={linea} strokeWidth="1" />
    </svg>
  );
}

type BrandMarkProps = {
  className?: string;
  color?: string;
  /** Dibuja el círculo dorado que enmarca el árbol. */
  conAnillo?: boolean;
};

/**
 * Árbol sostenido por dos manos, dentro de un anillo dorado.
 * Trazo lineal, sin relleno, según la iconografía del manual.
 */
export default function BrandMark({
  className = "",
  color = "#3A4C38",
  conAnillo = true,
}: BrandMarkProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      {conAnillo && (
        <circle cx="60" cy="60" r="52" stroke="#CDB277" strokeWidth="1" />
      )}

      {/* Tronco */}
      <path d="M60 30 C60 46, 60 46, 60 66" stroke={color} strokeWidth="2.2" strokeLinecap="round" />

      {/* Ramas */}
      <path d="M60 40 C50 34, 44 36, 38 32" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M60 40 C70 34, 76 36, 82 32" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M60 50 C52 46, 47 47, 41 44" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M60 50 C68 46, 73 47, 79 44" stroke={color} strokeWidth="1.6" strokeLinecap="round" />

      {/* Raíces */}
      <path d="M60 66 C55 74, 53 78, 44 82" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M60 66 C65 74, 67 78, 76 82" stroke={color} strokeWidth="1.8" strokeLinecap="round" />

      {/* Manos */}
      <path
        d="M30 86 C36 78, 46 78, 50 84 C52 87, 52 90, 50 92 C42 92, 34 91, 30 86 Z"
        stroke="#CDB277"
        strokeWidth="1.4"
      />
      <path
        d="M90 86 C84 78, 74 78, 70 84 C68 87, 68 90, 70 92 C78 92, 86 91, 90 86 Z"
        stroke="#CDB277"
        strokeWidth="1.4"
      />
    </svg>
  );
}

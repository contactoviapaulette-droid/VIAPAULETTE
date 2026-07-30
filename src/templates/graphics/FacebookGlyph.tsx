type FacebookGlyphProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/**
 * lucide-react v1 ya no exporta marcas comerciales, así que dibujamos el glifo
 * en el mismo estilo lineal y sin relleno del resto de la iconografía.
 */
export default function FacebookGlyph({
  size = 16,
  strokeWidth = 1.4,
  className = "",
}: FacebookGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M14.2 8.1c-1-.5-2.3-.5-3 .3-.5.6-.6 1.3-.6 2v1.6" />
      <path d="M9.3 12.6h4.6" />
      <path d="M11.3 12v6.4" />
    </svg>
  );
}

type InstagramGlyphProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/**
 * lucide-react v1 ya no exporta marcas comerciales, así que dibujamos el glifo
 * en el mismo estilo lineal y sin relleno del resto de la iconografía.
 */
export default function InstagramGlyph({
  size = 16,
  strokeWidth = 1.4,
  className = "",
}: InstagramGlyphProps) {
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
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

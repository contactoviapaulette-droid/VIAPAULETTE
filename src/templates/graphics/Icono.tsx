import {
  Anchor,
  Brain,
  Compass,
  Heart,
  HandHeart,
  Leaf,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Sprout,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/models";
import FacebookGlyph from "./FacebookGlyph";
import InstagramGlyph from "./InstagramGlyph";

/**
 * Traduce la clave de icono que guarda el modelo al SVG que la dibuja.
 *
 * Mantener el mapa aquí —y no en el modelo— evita pasar componentes como datos,
 * que es lo que obliga a marcar secciones enteras como Client Components.
 */
const iconos: Record<IconName, LucideIcon | typeof InstagramGlyph> = {
  corazon: Heart,
  calma: Wind,
  ancla: Anchor,
  brillo: Sparkles,
  mente: Brain,
  brote: Sprout,
  escudo: ShieldCheck,
  hoja: Leaf,
  manos: HandHeart,
  brujula: Compass,
  correo: Mail,
  whatsapp: MessageCircle,
  instagram: InstagramGlyph,
  facebook: FacebookGlyph,
};

type IconoProps = {
  nombre: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function Icono({
  nombre,
  size = 24,
  strokeWidth = 1.4,
  className = "",
}: IconoProps) {
  const Glifo = iconos[nombre];
  return (
    <Glifo
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    />
  );
}

import Reveal from "@/templates/motion/Reveal";
import Divider from "./Divider";

type SectionTitleProps = {
  eyebrow?: string;
  titulo: string;
  subtitulo?: string;
  alineacion?: "centro" | "izquierda";
  sobreOscuro?: boolean;
  /** Nivel semántico real del encabezado dentro del documento. */
  as?: "h2" | "h3";
  id?: string;
};

export default function SectionTitle({
  eyebrow,
  titulo,
  subtitulo,
  alineacion = "centro",
  sobreOscuro = false,
  as: Encabezado = "h2",
  id,
}: SectionTitleProps) {
  const esCentro = alineacion === "centro";

  return (
    <Reveal
      className={`flex flex-col gap-5 ${
        esCentro ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <span
          className={`font-sans text-eyebrow uppercase ${
            sobreOscuro ? "text-verde-claro" : "text-verde-eucalipto"
          }`}
        >
          {eyebrow}
        </span>
      )}

      <Encabezado
        id={id}
        className={`text-balance font-display text-display-sm md:text-display-md ${
          sobreOscuro ? "text-marfil" : "text-verde-oscuro"
        }`}
      >
        {titulo}
      </Encabezado>

      <Divider sobreOscuro={sobreOscuro} className={esCentro ? "" : "-ml-1"} />

      {subtitulo && (
        <p
          className={`max-w-prose text-pretty font-sans text-base leading-relaxed md:text-lg ${
            sobreOscuro ? "text-beige-natural" : "text-verde-oliva"
          }`}
        >
          {subtitulo}
        </p>
      )}
    </Reveal>
  );
}

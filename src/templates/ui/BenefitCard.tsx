import type { Beneficio } from "@/models";
import Icono from "@/templates/graphics/Icono";
import Reveal from "@/templates/motion/Reveal";

type BenefitCardProps = {
  beneficio: Beneficio;
  indice?: number;
};

export default function BenefitCard({ beneficio, indice = 0 }: BenefitCardProps) {
  return (
    <Reveal as="li" retraso={indice * 0.1} className="flex items-start gap-5">
      <span
        className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full
                   border border-dorado-mate/60 text-verde-bosque"
      >
        <Icono nombre={beneficio.icono} size={20} />
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="text-balance font-display text-xl text-verde-oscuro">
          {beneficio.titulo}
        </h3>
        <p className="text-pretty font-sans text-sm leading-relaxed text-verde-oliva">
          {beneficio.descripcion}
        </p>
      </div>
    </Reveal>
  );
}

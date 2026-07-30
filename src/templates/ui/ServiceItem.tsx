import type { Servicio } from "@/models";
import Icono from "@/templates/graphics/Icono";
import Reveal from "@/templates/motion/Reveal";

type ServiceItemProps = {
  servicio: Servicio;
  /** Posición en la lista, para escalonar la aparición. */
  indice?: number;
};

export default function ServiceItem({ servicio, indice = 0 }: ServiceItemProps) {
  return (
    <Reveal as="li" retraso={indice * 0.07} desplazamiento={24} className="h-full">
      <article
        className="group flex h-full flex-col items-start gap-5 rounded-[1.75rem] border border-verde-claro/60
                   bg-marfil/70 p-8 shadow-[0_20px_50px_-40px_rgba(58,76,56,0.55)]
                   transition-colors duration-500 ease-out hover:border-dorado-mate/60"
      >
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full bg-verde-claro/40
                     text-verde-bosque transition-colors duration-500 ease-out
                     group-hover:bg-dorado-mate/30"
        >
          <Icono nombre={servicio.icono} size={22} />
        </span>

        <p className="text-pretty font-sans text-base leading-relaxed text-verde-oscuro">
          {servicio.texto}
        </p>
      </article>
    </Reveal>
  );
}

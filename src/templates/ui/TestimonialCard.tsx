import { Quote } from "lucide-react";
import type { Testimonio } from "@/models";

type TestimonialCardProps = {
  testimonio: Testimonio;
};

export default function TestimonialCard({ testimonio }: TestimonialCardProps) {
  return (
    <figure
      className="flex h-full flex-col justify-between gap-8 rounded-[2rem] bg-marfil p-10
                 shadow-[0_30px_70px_-50px_rgba(40,52,38,0.7)]"
    >
      <Quote className="text-dorado-mate" size={30} strokeWidth={1.3} aria-hidden="true" />

      <blockquote className="text-pretty font-display text-xl italic leading-relaxed text-verde-oscuro md:text-2xl">
        “{testimonio.cita}”
      </blockquote>

      <figcaption className="flex flex-col">
        <span className="font-sans text-sm font-medium text-verde-bosque">
          {testimonio.nombre}
        </span>
        <span className="font-sans text-xs text-verde-eucalipto">
          {testimonio.proceso}
        </span>
      </figcaption>
    </figure>
  );
}

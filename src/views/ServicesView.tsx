import { servicios } from "@/models";
import Container from "@/templates/layout/Container";
import Section from "@/templates/layout/Section";
import Fotografia from "@/templates/ui/Fotografia";
import SectionTitle from "@/templates/ui/SectionTitle";
import ServiceItem from "@/templates/ui/ServiceItem";

export default function ServicesView() {
  return (
    <Section id="servicios" fondo="beige">
      <Container className="flex flex-col gap-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionTitle
              eyebrow="Servicios"
              titulo="Formas de acompañarte"
              subtitulo="Cada proceso es distinto. Estos son algunos de los espacios en los que podemos caminar juntos."
              alineacion="izquierda"
            />
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs md:col-span-5">
            <Fotografia
              src="/img/founder-desk.webp"
              alt="Profesional de Vía Paulette preparando una sesión de acompañamiento"
              forma="guijarro"
              sizes="(max-width: 768px) 90vw, 35vw"
            />
          </div>
        </div>

        <ul className="grid w-full auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, indice) => (
            <ServiceItem key={servicio.slug} servicio={servicio} indice={indice} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}

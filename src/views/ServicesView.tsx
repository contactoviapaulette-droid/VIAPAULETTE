import { servicios } from "@/models";
import Container from "@/templates/layout/Container";
import Section from "@/templates/layout/Section";
import SectionTitle from "@/templates/ui/SectionTitle";
import ServiceItem from "@/templates/ui/ServiceItem";

export default function ServicesView() {
  return (
    <Section id="servicios" fondo="beige">
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Servicios"
          titulo="Formas de acompañarte"
          subtitulo="Cada proceso es distinto. Estos son algunos de los espacios en los que podemos caminar juntos."
        />

        <ul className="grid w-full auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, indice) => (
            <ServiceItem key={servicio.slug} servicio={servicio} indice={indice} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}

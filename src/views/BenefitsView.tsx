import { beneficios } from "@/models";
import OrganicPanel from "@/templates/graphics/OrganicPanel";
import Container from "@/templates/layout/Container";
import Section from "@/templates/layout/Section";
import BenefitCard from "@/templates/ui/BenefitCard";
import SectionTitle from "@/templates/ui/SectionTitle";

export default function BenefitsView() {
  return (
    <Section id="beneficios">
      {/* El eje se invierte respecto a «Sobre nosotros»: la mancha pasa a la
          derecha y la lectura vuelve a empezar por la izquierda. */}
      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
        <div className="flex flex-col items-start gap-12 md:col-span-7">
          <SectionTitle
            eyebrow="Beneficios"
            titulo="Por qué elegir Vía Paulette"
            subtitulo="Más que un centro terapéutico: un espacio pensado para tu bienestar integral."
            alineacion="izquierda"
          />

          <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
            {beneficios.map((beneficio, indice) => (
              <BenefitCard
                key={beneficio.slug}
                beneficio={beneficio}
                indice={indice}
              />
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm md:col-span-5">
          <OrganicPanel variante="dorado" forma="canto" />
        </div>
      </Container>
    </Section>
  );
}

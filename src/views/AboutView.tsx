import { valores } from "@/models";
import OrganicPanel from "@/templates/graphics/OrganicPanel";
import Container from "@/templates/layout/Container";
import Section from "@/templates/layout/Section";
import Reveal from "@/templates/motion/Reveal";
import SectionTitle from "@/templates/ui/SectionTitle";

export default function AboutView() {
  return (
    <Section id="sobre-nosotros">
      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
        <div className="relative order-2 mx-auto aspect-square w-full max-w-md md:order-1 md:col-span-5">
          <OrganicPanel variante="salvia" forma="semilla" />
        </div>

        <div className="order-1 flex flex-col items-start gap-12 md:order-2 md:col-span-7">
          <SectionTitle
            eyebrow="Sobre nosotros"
            titulo="Un refugio para reencontrarte contigo mismo"
            subtitulo="Vía Paulette nace de una historia de transformación personal y del deseo de acompañar a otras personas en su proceso de bienestar emocional. Es un espacio de acompañamiento humano, empático y profesional, donde encuentras un lugar seguro para comprender tu historia, fortalecer tus recursos personales y construir una vida con mayor equilibrio."
            alineacion="izquierda"
          />

          <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
            {valores.map((valor, indice) => (
              <Reveal
                as="li"
                key={valor.slug}
                retraso={indice * 0.12}
                desplazamiento={20}
                className="flex flex-col gap-2"
              >
                <h3 className="font-display text-2xl text-verde-bosque">
                  {valor.titulo}
                </h3>
                <p className="text-pretty font-sans text-sm leading-relaxed text-verde-oliva">
                  {valor.descripcion}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal
            desplazamiento={16}
            className="border-t border-verde-salvia/30 pt-8"
          >
            <p className="max-w-prose text-pretty font-display text-xl italic leading-relaxed text-verde-bosque md:text-2xl">
              Creemos que cada proceso es único, y que sanar no significa
              olvidar lo vivido, sino aprender a relacionarnos de una manera
              más saludable con nuestra historia.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

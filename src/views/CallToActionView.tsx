import { sitio } from "@/models";
import Container from "@/templates/layout/Container";
import Section from "@/templates/layout/Section";
import Reveal from "@/templates/motion/Reveal";
import Button from "@/templates/ui/Button";
import Divider from "@/templates/ui/Divider";

/**
 * Única inversión de fondo de la página: tras recorrer todo en Marfil, el
 * Verde Bosque marca que aquí se toma la decisión.
 */
export default function CallToActionView() {
  return (
    <Section id="agendar" fondo="bosque" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-verde-oscuro/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-dorado-mate/20 blur-3xl"
      />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal desplazamiento={16} className="flex flex-col items-center gap-8">
          <p className="font-sans text-eyebrow uppercase text-verde-claro">
            Tu proceso comienza hoy
          </p>

          <h2 className="max-w-2xl text-balance font-display text-display-sm text-marfil md:text-display-md">
            Date el permiso de sanar, crecer y reconectar contigo
          </h2>

          <Divider sobreOscuro />

          <p className="max-w-prose text-pretty font-sans text-base leading-relaxed text-beige-natural">
            Escríbenos y agenda tu primera sesión. Te respondemos en menos de 24
            horas para encontrar el momento que mejor te acomode.
          </p>

          <Button href={sitio.whatsapp} variant="secundario">
            Agendar cita
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}

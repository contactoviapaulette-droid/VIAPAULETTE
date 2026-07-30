import { contacto, navegacion, sitio } from "@/models";
import BrandMark from "@/templates/graphics/BrandMark";
import Icono from "@/templates/graphics/Icono";
import Container from "./Container";

const enlaceFoco =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-dorado-mate focus-visible:ring-offset-4 focus-visible:ring-offset-verde-oscuro";

export default function Footer() {
  return (
    <footer className="relative bg-verde-oscuro py-16 text-beige-natural">
      <Container className="flex flex-col gap-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BrandMark className="h-9 w-9" color="#F6F3EA" />
              <span className="font-display text-xl text-marfil">{sitio.nombre}</span>
            </div>
            <p className="max-w-xs text-pretty font-sans text-sm leading-relaxed text-verde-claro">
              {sitio.lema}
            </p>
          </div>

          <nav aria-label="Secciones" className="flex flex-col gap-4">
            <h2 className="font-sans text-eyebrow uppercase text-dorado-mate">
              Navegación
            </h2>
            <ul className="flex flex-col gap-3">
              {navegacion.map((enlace) => (
                <li key={enlace.ancla}>
                  <a
                    href={enlace.ancla}
                    className={`font-sans text-sm text-beige-natural/90 transition-colors duration-500 hover:text-marfil ${enlaceFoco}`}
                  >
                    {enlace.etiqueta}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-eyebrow uppercase text-dorado-mate">
              Contacto
            </h2>
            <ul className="flex flex-col gap-3">
              {contacto.map((via) => (
                <li key={via.href}>
                  <a
                    href={via.href}
                    className={`flex items-center gap-2 font-sans text-sm text-beige-natural/90 transition-colors duration-500 hover:text-marfil ${enlaceFoco}`}
                  >
                    <Icono nombre={via.icono} size={16} strokeWidth={1.5} />
                    {via.etiqueta}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-verde-eucalipto/30 pt-8 text-center">
          <p className="font-sans text-xs text-verde-claro/80">
            © {new Date().getFullYear()} {sitio.nombre}. {sitio.descriptor}.
          </p>
        </div>
      </Container>
    </footer>
  );
}

/**
 * Tipos del dominio de Vía Paulette.
 *
 * Los modelos no conocen React: describen QUÉ se comunica, nunca CÓMO se ve.
 * Por eso los iconos se guardan como una clave (`IconName`) y no como un
 * componente — el mapeo clave → SVG vive en la capa de plantillas.
 */

export type IconName =
  | "corazon"
  | "calma"
  | "ancla"
  | "brillo"
  | "mente"
  | "brote"
  | "escudo"
  | "hoja"
  | "manos"
  | "brujula"
  | "correo"
  | "whatsapp"
  | "instagram"
  | "facebook";

/** Un servicio que ofrece el centro. */
export type Servicio = {
  slug: string;
  icono: IconName;
  texto: string;
};

/** Una razón para elegir Vía Paulette. */
export type Beneficio = {
  slug: string;
  icono: IconName;
  titulo: string;
  descripcion: string;
};

/** La voz de alguien que ya transitó un proceso. */
export type Testimonio = {
  slug: string;
  cita: string;
  nombre: string;
  proceso: string;
};

/** Un valor que sostiene la práctica del centro. */
export type Valor = {
  slug: string;
  titulo: string;
  descripcion: string;
};

/** Un destino de navegación dentro de la página. */
export type EnlaceNavegacion = {
  etiqueta: string;
  ancla: string;
};

/** Una vía de contacto del footer. */
export type EnlaceContacto = {
  etiqueta: string;
  href: string;
  icono: IconName;
};

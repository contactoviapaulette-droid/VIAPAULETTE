# Vía Paulette

Landing page del centro de bienestar emocional **Vía Paulette**. Una experiencia digital editorial y serena construida con Next.js, pensada para transmitir calma, confianza y armonía desde el primer segundo.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para animaciones suaves
- [Lucide Icons](https://lucide.dev/) para iconografía lineal

## Requisitos previos

- Node.js 18.18 o superior
- npm

## Instalación

```bash
npm install
```

## Scripts disponibles

| Comando         | Descripción                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Levanta el servidor de desarrollo             |
| `npm run build` | Genera el build de producción                 |
| `npm run start` | Sirve el build de producción                  |
| `npm run lint`  | Corre ESLint sobre el proyecto                |

Con el servidor de desarrollo corriendo, abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

```
src/
├── app/         # Rutas de Next.js (App Router), layout global y metadata
├── models/      # Datos y tipos del contenido del sitio (servicios, beneficios, testimonios, valores)
├── templates/   # Componentes reutilizables: layout, UI, gráficos y animaciones
└── views/       # Secciones de la landing (Hero, Sobre Nosotros, Servicios, Beneficios, Testimonios, CTA)
```

## Identidad de marca

La línea gráfica, paleta de colores, tipografías y filosofía de diseño del proyecto están documentadas en [RULES.md](./RULES.md). Cualquier cambio visual o de contenido debe respetar esos lineamientos.

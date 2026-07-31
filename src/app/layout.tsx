import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { sitio } from "@/models";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  /**
   * Sin esto, Next.js resuelve las imágenes de Open Graph contra
   * "localhost" y los previews (WhatsApp, redes) salen rotos. Cambiar
   * NEXT_PUBLIC_SITE_URL al dominio real antes de publicar.
   */
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://viapaulette.com"),
  title: `${sitio.nombre} — ${sitio.descriptor}`,
  description: sitio.descripcion,
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${sitio.nombre} — ${sitio.descriptor}`,
    description: sitio.descripcion,
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-marfil font-sans text-verde-oscuro">
        {children}
      </body>
    </html>
  );
}

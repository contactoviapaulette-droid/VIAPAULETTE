import Navbar from "@/templates/layout/Navbar";
import Footer from "@/templates/layout/Footer";
import PathThread from "@/templates/graphics/PathThread";
import HeroView from "@/views/HeroView";
import AboutView from "@/views/AboutView";
import ServicesView from "@/views/ServicesView";
import BenefitsView from "@/views/BenefitsView";
import TestimonialsView from "@/views/TestimonialsView";
import CallToActionView from "@/views/CallToActionView";
import WhatsAppFloat from "@/templates/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60]
                   focus:rounded-full focus:bg-verde-bosque focus:px-6 focus:py-3
                   focus:font-sans focus:text-sm focus:text-marfil"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" className="relative flex flex-1 flex-col">
        <PathThread />

        <HeroView />
        <AboutView />
        <ServicesView />
        <BenefitsView />
        <TestimonialsView />
        <CallToActionView />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

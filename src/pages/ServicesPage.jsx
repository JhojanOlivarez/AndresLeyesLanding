import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import PortfolioScroller from "../components/PortfolioScroller";
import SectionIntro from "../components/SectionIntro";
import ServiceCard from "../components/ServiceCard";
import { portfolioStories, servicePillars, services } from "../data/siteData";

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones terapeuticas disenadas para recuperar funcion con precision y elevar la experiencia del paciente."
        description="Cada plan se ajusta al diagnostico funcional, al contexto del paciente y a la meta que realmente importa: volver a moverse con seguridad."
        primaryCta={{ label: "Agendar valoracion", href: "/citas" }}
        secondaryCta={{ label: "Hablar con la clinica", href: "/contacto" }}
        stats={[
          { value: "1:1", label: "Sesiones centradas en acompanamiento personalizado" },
          { value: "360", label: "Valoracion fisica y lectura global del movimiento" },
          { value: "Top", label: "Atencion pensada para pacientes exigentes" },
        ]}
      />

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Portafolio clinico"
          title="Intervenciones de alto nivel para distintos perfiles de paciente."
          description="Lesiones, dolor persistente, posoperatorios, readaptacion deportiva o terapias preventivas: la atencion se diseña desde la necesidad real."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Como trabajamos"
          title="Cada servicio se sostiene en una estructura terapeutica clara."
          description="No vendemos sesiones sueltas: construimos procesos con diagnostico, objetivo y control de evolucion."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {servicePillars.map((item) => (
            <article key={item.title} className="rounded-[2rem] bg-white p-7 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-brand-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-14">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Escenarios de servicio"
            title="Tipos de procesos que mejor representan el alcance de la clinica."
            description="Este scroll resume las rutas terapeuticas y perfiles de paciente a los que se orienta el portafolio."
          />
        </div>
        <div className="mt-10">
          <PortfolioScroller items={portfolioStories} />
        </div>
      </AnimatedSection>
    </>
  );
}

export default ServicesPage;

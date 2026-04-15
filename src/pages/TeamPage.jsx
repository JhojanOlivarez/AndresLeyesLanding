import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import SpecialistCard from "../components/SpecialistCard";
import { specialists, teamNotes } from "../data/siteData";

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Profesionales que convierten la rehabilitacion en una experiencia guiada, precisa y con imagen de alto nivel."
        description="Cada perfil aporta criterio terapeutico, calidez y capacidad de personalizar el proceso segun el objetivo funcional del paciente."
        primaryCta={{ label: "Agendar con nosotros", href: "/citas" }}
        secondaryCta={{ label: "Ver servicios", href: "/servicios" }}
        stats={[
          { value: "3", label: "Pilares de la propuesta clinica" },
          { value: "1:1", label: "Atencion detallada con mirada funcional" },
          { value: "High", label: "Experiencia alineada con pacientes exigentes" },
        ]}
      />

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Especializacion"
          title="Talento clinico con enfoque humano y vision premium."
          description="El equipo acompana cada etapa: valoracion, intervencion, educacion y seguimiento para mantener el avance."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {specialists.map((specialist) => (
            <SpecialistCard key={specialist.name} specialist={specialist} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Lo que hace fuerte al equipo"
          title="Una forma de trabajar que cuida el resultado y la confianza."
          description="La experiencia premium no depende solo del nombre del profesional, sino del sistema de atencion completo."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {teamNotes.map((note) => (
            <div key={note} className="rounded-[2rem] bg-white p-7 shadow-soft">
              <p className="text-base leading-8 text-brand-slate">{note}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}

export default TeamPage;

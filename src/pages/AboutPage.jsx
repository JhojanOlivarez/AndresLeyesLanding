import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { aboutValues, achievements, processSteps } from "../data/siteData";

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Una clinica que entiende que rehabilitar tambien es cuidar la experiencia, la confianza y la imagen profesional."
        description="En Andres Leyes Fisioterapia se combina criterio clinico, sensibilidad humana y una presentacion impecable para elevar la percepcion del sector salud."
        primaryCta={{ label: "Conocer al equipo", href: "/equipo" }}
        secondaryCta={{ label: "Reservar cita", href: "/citas" }}
        stats={[
          { value: "Humano", label: "Acompanamiento cercano sin perder rigor tecnico" },
          { value: "Claro", label: "Procesos explicados para aumentar adherencia" },
          { value: "Premium", label: "Diseno, atencion y seguimiento al mismo nivel" },
        ]}
      />

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Filosofia"
          title="Recuperacion con proposito, no sesiones repetidas sin narrativa."
          description="La vision es construir confianza. Eso significa escuchar, evaluar con profundidad, medir avances y presentar soluciones que hagan sentido para la vida del paciente."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {aboutValues.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[2rem] bg-white p-7 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mist text-2xl text-brand-navy">
                  <Icon />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-slate">{item.text}</p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Lo que nos distingue"
          title="Una combinacion de autoridad, cercania y capacidad de acompanar casos exigentes."
          description="La clinica se ha posicionado para atraer pacientes que valoran resultados, estetica y orden."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[2rem] border border-white/60 bg-white p-7 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-2xl text-white">
                  <Icon />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-slate">{item.description}</p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <div className="rounded-[2.5rem] bg-brand-navy p-8 text-white shadow-glow sm:p-12">
          <SectionIntro
            eyebrow="Metodologia"
            title="Asi se estructura la experiencia clinica."
            description="Cada etapa esta disenada para que el paciente perciba claridad, control y evolucion."
            light
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-[2rem] bg-white/10 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">{item.step}</div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default AboutPage;

import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiAward, FiCheckCircle, FiTarget, FiUsers } from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";
import HeroPortraitCard from "../components/HeroPortraitCard";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { serviceBySlug } from "../data/siteData";

function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceBySlug[slug];

  if (!service) {
    return (
      <div className="section-shell py-40">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft">
          <h1 className="font-display text-4xl font-semibold text-brand-ink">Servicio no encontrado</h1>
          <p className="mt-4 copy">Revisa el portafolio principal o agenda una cita para orientarte.</p>
          <Link to="/servicios" className="mt-6 inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white">
            Volver a servicios
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.headline}
        description={service.summary}
        primaryCta={{ label: "Agendar cita", href: "/citas" }}
        secondaryCta={{ label: "Volver a servicios", href: "/servicios" }}
        visual={<HeroPortraitCard eyebrow="Experiencia real" title={service.title} />}
      />

      <AnimatedSection className="section-shell py-10">
        <Link to="/servicios" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
          <FiArrowLeft />
          Volver al portafolio de servicios
        </Link>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.2rem] bg-brand-navy p-8 text-white shadow-glow">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
              <Icon />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold">{service.title}</h2>
            <p className="mt-4 text-base leading-8 text-white/75">{service.description}</p>
            <img
              src="/media/logo-andres-leyes.png"
              alt="Andres Leyes Fisioterapia"
              className="mt-10 w-40 brightness-0 invert"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-[2rem] bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                <FiTarget />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-brand-ink">Como se aborda</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-slate">
                {service.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                <FiAward />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-brand-ink">Logros esperados</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-slate">
                {service.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                <FiUsers />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-brand-ink">Casos frecuentes</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-slate">
                {service.cases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Ruta del tratamiento"
          title="Un servicio explicado con claridad para que el paciente entienda como se trabaja."
          description="La propuesta no se queda en el nombre del servicio. Se traduce en una manera concreta de abordar el caso, intervenir y llevar al paciente hasta la siguiente meta."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {service.approach.map((item, index) => (
            <div key={item} className="rounded-[2rem] border border-white/60 bg-white p-7 shadow-soft">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-slate">
                Etapa {index + 1}
              </div>
              <p className="mt-4 text-base leading-8 text-brand-ink">{item}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#0B3C5D_0%,#123f60_45%,#5CA7C7_100%)] p-8 text-white shadow-glow sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow border-white/20 bg-white/10 text-white">CTA directo</span>
              <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
                Agenda una cita y recibe una orientacion personalizada para este servicio.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                Si este es el enfoque que mas encaja con tu caso, pasa al modulo de reservas y abre WhatsApp con el mensaje listo.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6">
              {service.outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 py-3 text-sm leading-7 text-white/85">
                  <FiCheckCircle className="mt-1 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
              <Link
                to="/citas"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-navy transition hover:-translate-y-1"
              >
                Agendar cita para este servicio
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default ServiceDetailPage;

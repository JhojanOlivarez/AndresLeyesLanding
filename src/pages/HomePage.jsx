import { Link } from "react-router-dom";
import { FiCheckCircle, FiInstagram, FiMessageCircle } from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";
import HeroPortraitCard from "../components/HeroPortraitCard";
import PageHero from "../components/PageHero";
import PortfolioScroller from "../components/PortfolioScroller";
import SectionIntro from "../components/SectionIntro";
import ServiceCard from "../components/ServiceCard";
import SpecialistCard from "../components/SpecialistCard";
import TestimonialCard from "../components/TestimonialCard";
import {
  achievements,
  brand,
  ctaLinks,
  differentiators,
  heroHighlights,
  portfolioStories,
  processSteps,
  servicePillars,
  services,
  specialists,
  stats,
  testimonials,
} from "../data/siteData";

function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Fisioterapia premium"
        title="Recuperacion de alto nivel para pacientes exigentes, atletas y procesos funcionales que necesitan resultados reales."
        description="Andres Leyes Fisioterapia combina autoridad clinica, imagen premium y una experiencia digital pensada para convertir interes en citas agendadas con confianza."
        primaryCta={ctaLinks.primary}
        secondaryCta={{ label: "Conocer servicios", href: "/servicios" }}
        stats={stats}
        visual={<HeroPortraitCard eyebrow="Hero de marca" title="Presencia clinica moderna y confiable" />}
      />

      <AnimatedSection className="section-shell py-8">
        <div className="relative overflow-hidden rounded-[2.7rem] bg-[#08273d] px-6 py-10 text-white shadow-glow sm:px-10 sm:py-12">
          <img
            src={brand.logo}
            alt={brand.name}
            className="pointer-events-none absolute right-[-4rem] top-1/2 w-[18rem] -translate-y-1/2 opacity-[0.07] brightness-0 invert sm:w-[28rem]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="eyebrow border-white/20 bg-white/10 text-white">Marca con autoridad</span>
              <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold sm:text-4xl">
                Un sistema visual y clinico pensado para inspirar confianza antes incluso de la consulta.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                La marca, la atencion y la experiencia digital se alinean para posicionar a Andres Leyes como una referencia premium en fisioterapia, rehabilitacion y acompanamiento deportivo.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.8rem] bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">Instagram</p>
                <p className="mt-3 font-display text-3xl font-semibold">{brand.instagramStats.followers}</p>
                <p className="mt-2 text-sm text-white/65">seguidores</p>
              </div>
              <div className="rounded-[1.8rem] bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">Comunidad</p>
                <p className="mt-3 font-display text-3xl font-semibold">{brand.instagramStats.posts}</p>
                <p className="mt-2 text-sm text-white/65">publicaciones</p>
              </div>
              <div className="rounded-[1.8rem] bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">Contacto</p>
                <p className="mt-3 font-display text-xl font-semibold">{brand.phoneDisplay}</p>
                <p className="mt-2 text-sm text-white/65">WhatsApp directo</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-8 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[2rem] bg-white p-7 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mist text-2xl text-brand-navy">
                  <Icon />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{item.description}</p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Autoridad clinica"
          title="Una propuesta posicionada para atender desde pacientes particulares hasta perfiles profesionales."
          description="La marca y la experiencia transmiten confianza, pero lo que sostiene el resultado es un proceso terapeutico serio, claro y adaptado a la exigencia de cada caso."
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

      <AnimatedSection className="py-14">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Portafolio de servicios"
            title="Un recorrido visual y estrategico por el tipo de procesos que acompana la clinica."
            description="Este scroll resume el tipo de casos, perfiles y objetivos funcionales para los que esta preparada Andres Leyes Fisioterapia."
          />
        </div>
        <div className="mt-10">
          <PortfolioScroller items={portfolioStories} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Servicios estrategicos"
          title="Intervenciones de alto nivel para distintos perfiles de paciente."
          description="Lesiones, dolor persistente, posoperatorios, readaptacion deportiva o terapias preventivas: la atencion se disena desde la necesidad real."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {servicePillars.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] bg-brand-mist/70 p-6">
              <h3 className="font-display text-xl font-semibold text-brand-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-slate">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Equipo clinico"
          title="Especialistas que convierten conocimiento en confianza."
          description="Nuestra propuesta premium se siente en la calidad humana, el criterio clinico y la claridad con la que guiamos cada proceso."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {specialists.map((specialist) => (
            <SpecialistCard key={specialist.name} specialist={specialist} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <div className="grid gap-10 overflow-hidden rounded-[2.5rem] bg-brand-navy p-8 text-white shadow-glow lg:grid-cols-[0.95fr_1.05fr] lg:items-center sm:p-12">
          <div>
            <span className="eyebrow border-white/20 bg-white/10 text-white">Pacientes profesionales</span>
            <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
              Recuperaciones de alto nivel para quienes no pueden volver a medias.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              La clinica esta preparada para acompanar atletas, talentos emergentes y pacientes con metas funcionales exigentes, cuidando tanto el rendimiento como la imagen profesional del proceso.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <div key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm">
                  <FiCheckCircle />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] bg-white/10 p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">{item.step}</div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.4rem] bg-white p-8 shadow-soft">
            <SectionIntro
              eyebrow="Instagram"
              title="Una presencia digital coherente con la marca y el nivel de atencion."
              description="La cuenta refuerza autoridad, comunidad y confianza, mostrando rehabilitacion deportiva, prevencion y acompanamiento clinico."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.6rem] bg-brand-mist p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-slate">Publicaciones</p>
                <p className="mt-2 font-display text-3xl font-semibold text-brand-navy">{brand.instagramStats.posts}</p>
              </div>
              <div className="rounded-[1.6rem] bg-brand-mist p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-slate">Seguidores</p>
                <p className="mt-2 font-display text-3xl font-semibold text-brand-navy">{brand.instagramStats.followers}</p>
              </div>
              <div className="rounded-[1.6rem] bg-brand-mist p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-slate">Seguidos</p>
                <p className="mt-2 font-display text-3xl font-semibold text-brand-navy">{brand.instagramStats.following}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-4 text-sm font-semibold text-white"
              >
                Ver perfil
                <FiInstagram />
              </a>
              <a
                href={`https://wa.me/${brand.phoneDisplay.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-white px-6 py-4 text-sm font-semibold text-brand-navy"
              >
                Escribir por WhatsApp
                <FiMessageCircle />
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <div className="overflow-hidden rounded-[2.5rem] bg-brand-navy p-8 text-white shadow-glow sm:p-12">
          <span className="eyebrow border-white/20 bg-white/10 text-white">Agenda sin friccion</span>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            Una ruta de reserva pensada para convertir interes en cita confirmada.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
            Selecciona fecha, elige hora, completa tus datos y abre WhatsApp con el mensaje listo.
          </p>
          <Link
            to="/citas"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-navy transition hover:-translate-y-1"
          >
            Ir al modulo de citas
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}

export default HomePage;

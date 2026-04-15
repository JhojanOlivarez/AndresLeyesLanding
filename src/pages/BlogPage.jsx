import AnimatedSection from "../components/AnimatedSection";
import BlogCard from "../components/BlogCard";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { blogPosts } from "../data/siteData";

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Contenido clinico elegante, util y accionable para pacientes mejor informados."
        description="Creamos articulos que traducen conocimiento tecnico en decisiones simples para cuidar el movimiento, prevenir recaidas y elegir mejor el proceso terapeutico."
        primaryCta={{ label: "Agendar cita", href: "/citas" }}
        secondaryCta={{ label: "Contactar la clinica", href: "/contacto" }}
        stats={[
          { value: "Tips", label: "Educacion clara para mejorar adherencia y autocuidado" },
          { value: "Data", label: "Contenidos basados en practica clinica" },
          { value: "Simple", label: "Lenguaje cercano sin perder profundidad" },
        ]}
      />

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Articulos destacados"
          title="Perspectivas que ayudan a tomar decisiones mas inteligentes sobre tu recuperacion."
          description="Una biblioteca editorial pensada para sumar confianza antes, durante y despues del tratamiento."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-soft sm:p-12">
          <SectionIntro
            eyebrow="Objetivo editorial"
            title="Contenido para educar, posicionar y facilitar la conversion."
            description="El blog no solo informa: tambien prepara al paciente para entender el valor de una valoracion profesional y tomar accion."
          />
        </div>
      </AnimatedSection>
    </>
  );
}

export default BlogPage;

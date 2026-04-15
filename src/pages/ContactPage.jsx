import AnimatedSection from "../components/AnimatedSection";
import ContactCard from "../components/ContactCard";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { contactCards } from "../data/siteData";

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Conversemos sobre tu caso y encontremos el mejor punto de partida para tu recuperacion."
        description="Si tienes dudas sobre disponibilidad, tipo de servicio o el enfoque adecuado para tu lesion, te orientamos rapidamente."
        primaryCta={{ label: "Agendar cita", href: "/citas" }}
        secondaryCta={{ label: "Ver servicios", href: "/servicios" }}
        stats={[
          { value: "WhatsApp", label: "Canal rapido para resolver dudas y reservar" },
          { value: "Lun-Sab", label: "Disponibilidad pensada para agendas reales" },
          { value: "Premium", label: "Respuesta clara desde el primer contacto" },
        ]}
      />

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Canales de atencion"
          title="Informacion clara para agendar o resolver inquietudes con facilidad."
          description="La comunicacion debe ser tan simple como la reserva. Por eso centralizamos el contacto en vias rapidas y faciles de usar."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => (
            <ContactCard key={card.label} label={card.label} value={card.value} detail={card.detail} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-14">
        <div className="rounded-[2.5rem] bg-brand-navy p-8 text-white shadow-glow sm:p-12">
          <SectionIntro
            eyebrow="Agendamiento directo"
            title="La forma mas rapida de reservar sigue estando en WhatsApp."
            description="Si ya sabes que quieres una valoracion, entra al modulo de citas, completa tus datos y envia el mensaje listo."
            light
          />
        </div>
      </AnimatedSection>
    </>
  );
}

export default ContactPage;

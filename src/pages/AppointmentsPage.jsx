import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import { AnimatePresence, motion } from "framer-motion";
import { FiCalendar, FiCheckCircle, FiClock, FiMessageCircle, FiUser } from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { appointmentSlots, servicesOptions } from "../data/siteData";
import { buildWhatsAppUrl, formatAppointmentDate, validateAppointment } from "../utils/appointments";

const steps = [
  { id: 1, title: "Selecciona fecha", icon: FiCalendar },
  { id: 2, title: "Selecciona hora", icon: FiClock },
  { id: 3, title: "Completa tus datos", icon: FiUser },
  { id: 4, title: "Confirma por WhatsApp", icon: FiMessageCircle }
];

function AppointmentsPage() {
  const [form, setForm] = useState({
    date: new Date(),
    time: "",
    name: "",
    phone: "",
    service: "",
    reason: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentStep = useMemo(() => {
    if (!form.date) return 1;
    if (!form.time) return 2;
    if (!isSubmitted) return 3;
    return 4;
  }, [form.date, form.time, isSubmitted]);

  const whatsappUrl = useMemo(() => buildWhatsAppUrl(form), [form]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    if (field !== "date" && field !== "time") setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = validateAppointment(form);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Citas"
        title="Agenda una cita con una experiencia premium, clara y memorable."
        description="Elegimos un flujo simple de cuatro pasos para reducir fricción: fecha, hora, datos y confirmación por WhatsApp con mensaje dinámico listo para enviar."
        primaryCta={{ label: "Iniciar reserva", href: "/citas" }}
        secondaryCta={{ label: "Ver servicios", href: "/servicios" }}
        stats={[
          { value: "Paso 1", label: "Escoge la fecha que más te conviene" },
          { value: "Paso 2", label: "Selecciona un bloque horario visible" },
          { value: "Paso 3", label: "Completa tus datos y confirma" }
        ]}
      />

      <AnimatedSection className="section-shell py-14">
        <SectionIntro
          eyebrow="Reserva guiada"
          title="Una experiencia de agendamiento construida para convertir."
          description="Cada paso ofrece feedback visual, estados claros y una transición natural hacia la confirmación final."
        />

        <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-soft lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id || (isSubmitted && step.id === 4);
            const isComplete = step.id < currentStep || (isSubmitted && step.id < 4);

            return (
              <div
                key={step.id}
                className={`rounded-[1.5rem] p-4 transition ${
                  isActive
                    ? "bg-brand-navy text-white shadow-soft"
                    : isComplete
                      ? "bg-brand-cyan/10 text-brand-navy"
                      : "bg-brand-mist/60 text-brand-slate"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-lg">
                    <Icon />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em]">Paso {step.id}</div>
                    <div className="mt-1 text-sm font-semibold">{step.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2.25rem] p-6 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-brand-ink">Paso 1. Elige tu fecha</h3>
            <p className="mt-3 text-sm leading-7 text-brand-slate">
              Selecciona un día disponible. Los domingos quedan bloqueados para proteger la operación.
            </p>

            <div className="mt-6 rounded-[2rem] bg-brand-ivory p-4">
              <Calendar
                locale="es-ES"
                minDate={new Date()}
                onChange={(value) => handleChange("date", value)}
                value={form.date}
                tileDisabled={({ date }) => date.getDay() === 0}
              />
            </div>

            {errors.date ? <p className="mt-4 text-sm font-semibold text-red-500">{errors.date}</p> : null}
          </div>

          <div className="space-y-8">
            <div className="glass-panel rounded-[2.25rem] p-6 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-brand-ink">Paso 2. Selecciona la hora</h3>
              <p className="mt-3 text-sm leading-7 text-brand-slate">
                Bloques visibles, táctiles y optimizados para móvil. Elige la franja que prefieras.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {appointmentSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => handleChange("time", slot)}
                    className={`rounded-2xl px-4 py-4 text-sm font-semibold transition ${
                      form.time === slot
                        ? "bg-brand-navy text-white shadow-soft"
                        : "border border-brand-navy/10 bg-white text-brand-navy hover:-translate-y-1 hover:border-brand-cyan/50"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {errors.time ? <p className="mt-4 text-sm font-semibold text-red-500">{errors.time}</p> : null}
            </div>

            <motion.form layout onSubmit={handleSubmit} className="glass-panel rounded-[2.25rem] p-6 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-brand-ink">Paso 3. Completa tus datos</h3>
              <p className="mt-3 text-sm leading-7 text-brand-slate">
                Usa un motivo breve y un número de contacto correcto para agilizar la confirmación.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field
                  label="Nombre completo"
                  value={form.name}
                  onChange={(value) => handleChange("name", value)}
                  error={errors.name}
                  placeholder="Ej. María Rodríguez"
                />
                <Field
                  label="Teléfono"
                  value={form.phone}
                  onChange={(value) => handleChange("phone", value)}
                  error={errors.phone}
                  placeholder="Ej. 3001234567"
                />
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-brand-ink">Servicio</label>
                  <select
                    value={form.service}
                    onChange={(event) => handleChange("service", event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-4 text-sm text-brand-ink outline-none transition focus:border-brand-cyan"
                  >
                    <option value="">Selecciona un servicio</option>
                    {servicesOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service ? <p className="mt-2 text-sm font-semibold text-red-500">{errors.service}</p> : null}
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-brand-ink">Motivo de consulta</label>
                  <textarea
                    value={form.reason}
                    onChange={(event) => handleChange("reason", event.target.value)}
                    placeholder="Cuéntanos qué te gustaría tratar o mejorar"
                    rows="5"
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-4 text-sm text-brand-ink outline-none transition focus:border-brand-cyan"
                  />
                  {errors.reason ? <p className="mt-2 text-sm font-semibold text-red-500">{errors.reason}</p> : null}
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex rounded-full bg-brand-navy px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-brand-ink"
              >
                Validar y continuar
              </button>
            </motion.form>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isSubmitted ? "confirmed" : "summary"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
            className={`mt-10 overflow-hidden rounded-[2.5rem] p-8 shadow-glow sm:p-10 ${
              isSubmitted ? "bg-brand-navy text-white" : "bg-white"
            }`}
          >
            {isSubmitted ? (
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                    <FiCheckCircle />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-semibold">
                    Paso 4. Tu cita está lista para confirmarse por WhatsApp
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/75">
                    Ya preparamos el mensaje con tus datos. Solo falta abrir WhatsApp y enviarlo.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-white/10 p-6">
                  <div className="space-y-3 text-sm leading-7 text-white/85">
                    <p><strong>Fecha:</strong> {formatAppointmentDate(form.date)}</p>
                    <p><strong>Hora:</strong> {form.time}</p>
                    <p><strong>Paciente:</strong> {form.name}</p>
                    <p><strong>Servicio:</strong> {form.service}</p>
                    <p><strong>Motivo:</strong> {form.reason}</p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
                  >
                    Confirmar por WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <h3 className="font-display text-3xl font-semibold text-brand-ink">Resumen de tu reserva</h3>
                  <p className="mt-4 text-base leading-8 text-brand-slate">
                    Antes de confirmar, revisa que la fecha y hora elegidas coincidan con tu disponibilidad.
                  </p>
                </div>
                <div className="grid gap-3 rounded-[2rem] bg-brand-ivory p-5 text-sm font-semibold text-brand-navy sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4">{formatAppointmentDate(form.date)}</div>
                  <div className="rounded-2xl bg-white p-4">{form.time || "Selecciona una hora"}</div>
                  <div className="rounded-2xl bg-white p-4">{form.service || "Selecciona un servicio"}</div>
                  <div className="rounded-2xl bg-white p-4">{form.name || "Completa tus datos"}</div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </AnimatedSection>
    </>
  );
}

function Field({ label, value, onChange, placeholder, error }) {
  return (
    <div>
      <label className="text-sm font-semibold text-brand-ink">{label}</label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-4 text-sm text-brand-ink outline-none transition focus:border-brand-cyan"
      />
      {error ? <p className="mt-2 text-sm font-semibold text-red-500">{error}</p> : null}
    </div>
  );
}

export default AppointmentsPage;

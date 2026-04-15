import dayjs from "dayjs";
import "dayjs/locale/es";
import { whatsappNumber } from "../data/siteData";

dayjs.locale("es");

export function formatAppointmentDate(value) {
  return dayjs(value).format("dddd, D [de] MMMM [de] YYYY");
}

export function buildWhatsAppUrl(form) {
  const message = `Hola, quiero agendar una cita en Andres Leyes Fisioterapia:

Nombre: ${form.name}

Teléfono: ${form.phone}

Servicio: ${form.service}

Fecha: ${formatAppointmentDate(form.date)}

Hora: ${form.time}

Motivo: ${form.reason}`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function validateAppointment(form) {
  const errors = {};

  if (!form.date) errors.date = "Selecciona una fecha para continuar.";
  if (!form.time) errors.time = "Elige un horario disponible.";
  if (!form.name.trim()) errors.name = "Escribe tu nombre completo.";
  if (!form.phone.trim()) errors.phone = "Déjanos un teléfono de contacto.";
  if (!form.service.trim()) errors.service = "Selecciona el servicio de interés.";
  if (!form.reason.trim()) errors.reason = "Cuéntanos brevemente el motivo de consulta.";

  return errors;
}

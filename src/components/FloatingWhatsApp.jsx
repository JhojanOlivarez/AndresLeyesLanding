import { FiMessageCircle } from "react-icons/fi";
import { buildWhatsAppUrl } from "../utils/appointments";

function FloatingWhatsApp() {
  const url = buildWhatsAppUrl({
    name: "Quiero más información",
    phone: "Pendiente",
    service: "Valoración integral",
    date: new Date(),
    time: "Por definir",
    reason: "Deseo conocer disponibilidad y servicios"
  });

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-glow transition hover:-translate-y-1"
      aria-label="Abrir WhatsApp"
    >
      <FiMessageCircle />
    </a>
  );
}

export default FloatingWhatsApp;

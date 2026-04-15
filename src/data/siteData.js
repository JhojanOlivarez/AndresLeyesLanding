import {
  FiActivity,
  FiArrowRight,
  FiAward,
  FiCalendar,
  FiCheckCircle,
  FiCompass,
  FiHeart,
  FiHome,
  FiShield,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export const whatsappNumber = "573186135272";

export const brand = {
  name: "Andres Leyes Fisioterapia",
  shortName: "Andres Leyes FT",
  logo: "/media/logo-andres-leyes.png",
  heroImage: "/media/InicioLogo.jpeg",
  instagramHandle: "@andresleyes_ft",
  instagramUrl: "https://www.instagram.com/andresleyes_ft/",
  city: "Bogota, Colombia",
  phoneDisplay: "+57 318 613 5272",
  profileName: "Andres Leyes FT",
  instagramStats: {
    posts: "116",
    followers: "3.673",
    following: "5.454",
  },
};

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Equipo", href: "/equipo" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
  { label: "Citas", href: "/citas" },
];

export const stats = [
  { value: "12+", label: "Anos acompanando recuperaciones funcionales exigentes" },
  { value: "3.673", label: "Seguidores que respaldan una marca clinica con autoridad" },
  { value: "24h", label: "Tiempo promedio de respuesta para reservas por WhatsApp" },
];

export const heroHighlights = [
  "Rehabilitacion deportiva",
  "Prevencion de lesiones",
  "Descarga muscular y acompanamiento deportivo",
];

export const achievements = [
  {
    title: "Pacientes profesionales",
    description:
      "Atencion a perfiles competitivos y pacientes con alta exigencia fisica que necesitan volver con seguridad.",
    icon: FiStar,
  },
  {
    title: "Recuperaciones de alto nivel",
    description:
      "Procesos claros, medibles y acompanados desde la valoracion hasta el retorno funcional.",
    icon: FiTrendingUp,
  },
  {
    title: "Experiencia uno a uno",
    description:
      "Cada consulta esta disenada para elevar la confianza, la adherencia y la percepcion de valor.",
    icon: FiUserCheck,
  },
];

export const services = [
  {
    slug: "fisioterapia-ortopedica",
    title: "Fisioterapia Ortopedica",
    description:
      "Recuperacion para lesiones musculares, articulares, dolor mecanico y procesos posoperatorios con enfoque funcional.",
    icon: FiActivity,
    headline: "Lesiones ortopedicas tratadas con criterio clinico y retorno progresivo a la funcion.",
    summary:
      "Ideal para pacientes con dolor, limitacion de movimiento, cirugias recientes o molestias que afectan la vida diaria.",
    outcomes: [
      "Disminucion del dolor y mejora de la movilidad",
      "Reeducacion del movimiento y control de carga",
      "Seguimiento de recuperacion paso a paso",
    ],
    approach: [
      "Valoracion fisica profunda y lectura biomecanica",
      "Terapia manual, ejercicio terapeutico y progresion funcional",
      "Educacion para evitar recaidas y ganar autonomia",
    ],
    cases: [
      "Esguinces, tendinopatias y sobrecargas",
      "Dolor lumbar, cervical y hombro",
      "Posoperatorios de rodilla, hombro o tobillo",
    ],
  },
  {
    slug: "rehabilitacion-deportiva",
    title: "Rehabilitacion Deportiva",
    description:
      "Protocolos para deportistas amateurs y profesionales que necesitan retorno seguro al rendimiento.",
    icon: FiTrendingUp,
    headline: "Procesos de readaptacion pensados para volver a competir, entrenar y rendir con seguridad.",
    summary:
      "Se acompana al deportista desde la lesion o la sobrecarga hasta la reincorporacion progresiva al juego.",
    outcomes: [
      "Retorno seguro al deporte y al entrenamiento",
      "Mejor control de cargas y reduccion de recaidas",
      "Preparacion funcional especifica por disciplina",
    ],
    approach: [
      "Analisis del gesto deportivo y de la demanda fisica real",
      "Trabajo de fuerza, estabilidad, potencia y tolerancia al esfuerzo",
      "Seguimiento de sintomas, tolerancia y progresion",
    ],
    cases: [
      "Futbolistas, jugadores de alto rendimiento y talentos juveniles",
      "Lesiones musculares, tendinosas y articulares",
      "Prevencion y retorno posterior a competencias",
    ],
  },
  {
    slug: "terapia-manual-avanzada",
    title: "Terapia Manual Avanzada",
    description:
      "Intervencion precisa para movilidad, control del dolor y mejora del tejido blando.",
    icon: FiHeart,
    headline: "Tratamiento manual de alta precision para aliviar, desbloquear y preparar al paciente para moverse mejor.",
    summary:
      "Se usa cuando el tejido, la rigidez o el dolor requieren una intervencion mas directa y sensible al detalle.",
    outcomes: [
      "Disminucion de dolor y sensacion de tension",
      "Mejora del rango articular y la calidad del movimiento",
      "Mayor preparacion para ejercicio y readaptacion",
    ],
    approach: [
      "Evaluacion palapatoria y funcional del tejido",
      "Liberacion, movilizacion y tecnicas orientadas a objetivo",
      "Integracion inmediata con movimiento activo y educacion",
    ],
    cases: [
      "Contracturas y descargas musculares",
      "Rigidez articular y dolor de sobreuso",
      "Preparacion previa a entrenamiento o competencia",
    ],
  },
  {
    slug: "fisioterapia-neurologica",
    title: "Fisioterapia Neurologica",
    description:
      "Acompanamiento funcional para potenciar autonomia, control motor y calidad de vida.",
    icon: FiShield,
    headline: "Intervenciones enfocadas en control motor, estabilidad y mejora funcional sostenida.",
    summary:
      "Se trabaja desde las capacidades del paciente, priorizando seguridad, autonomia y calidad de movimiento.",
    outcomes: [
      "Mayor independencia funcional",
      "Mejor control de postura, equilibrio y marcha",
      "Procesos acompanados con claridad para paciente y familia",
    ],
    approach: [
      "Valoracion del control motor y nivel funcional actual",
      "Ejercicios guiados y tareas orientadas a actividades reales",
      "Seguimiento progresivo con objetivos medibles",
    ],
    cases: [
      "Secuelas neurologicas y alteraciones motoras",
      "Procesos de reeducacion de la marcha",
      "Trabajo funcional en consulta y domicilio",
    ],
  },
  {
    slug: "atencion-domiciliaria",
    title: "Atencion Domiciliaria",
    description:
      "Servicio premium en casa con continuidad terapeutica para pacientes que requieren comodidad y seguimiento.",
    icon: FiHome,
    headline: "La experiencia clinica se desplaza al hogar sin perder calidad, orden ni enfoque terapeutico.",
    summary:
      "Pensado para pacientes que necesitan comodidad, movilidad limitada o continuidad en su propio entorno.",
    outcomes: [
      "Tratamiento accesible y personalizado en casa",
      "Mayor adherencia por comodidad y practicidad",
      "Adaptacion de ejercicios al contexto real del paciente",
    ],
    approach: [
      "Valoracion funcional en el entorno cotidiano",
      "Intervencion ajustada al espacio y necesidades de casa",
      "Educacion al paciente y acompanantes para continuidad",
    ],
    cases: [
      "Adultos mayores y posoperatorios",
      "Pacientes con movilidad reducida",
      "Seguimiento de recuperacion fuera de la clinica",
    ],
  },
  {
    slug: "valoracion-integral",
    title: "Valoracion Integral",
    description:
      "Lectura profunda del movimiento, antecedentes, dolor y meta funcional para trazar la mejor ruta.",
    icon: FiTarget,
    headline: "La consulta donde se entiende el caso completo y se diseña un plan con direccion.",
    summary:
      "Es la puerta de entrada ideal para quienes quieren claridad, diagnostico funcional y una ruta de trabajo seria.",
    outcomes: [
      "Diagnostico funcional claro desde el inicio",
      "Plan terapeutico alineado con objetivos reales",
      "Mayor confianza para empezar tratamiento",
    ],
    approach: [
      "Entrevista clinica y lectura del contexto del paciente",
      "Pruebas funcionales, movimiento y analisis de limitaciones",
      "Explicacion del caso con ruta recomendada de tratamiento",
    ],
    cases: [
      "Pacientes nuevos que no saben por donde empezar",
      "Lesiones recurrentes o dolor persistente",
      "Casos que requieren segunda mirada profesional",
    ],
  },
];

export const servicePillars = [
  {
    title: "Diagnostico funcional real",
    text: "No se trata solo de aliviar, sino de entender por que se limita el movimiento y que lo dispara.",
  },
  {
    title: "Plan terapeutico con narrativa",
    text: "Cada sesion tiene un objetivo dentro del proceso, para que el paciente perciba direccion y avance.",
  },
  {
    title: "Readaptacion con criterio",
    text: "El retorno al entrenamiento o la actividad diaria ocurre con control de cargas y decisiones inteligentes.",
  },
];

export const portfolioStories = [
  {
    title: "Readaptacion deportiva",
    label: "Alto rendimiento",
    summary:
      "Procesos orientados a deportistas que necesitan regresar a competir o entrenar con confianza.",
  },
  {
    title: "Control del dolor persistente",
    label: "Movimiento inteligente",
    summary:
      "Tratamientos que combinan terapia manual, ejercicio y educacion para recuperar funcion sin improvisacion.",
  },
  {
    title: "Posoperatorios y lesiones complejas",
    label: "Recuperacion guiada",
    summary:
      "Seguimiento cercano con hitos claros para que la evolucion sea visible y medible.",
  },
  {
    title: "Atencion a figuras y talentos emergentes",
    label: "Confianza y autoridad",
    summary:
      "Un servicio que proyecta imagen profesional y sostiene el nivel de exigencia de pacientes destacados.",
  },
];

export const specialists = [
  {
    name: "Andres Leyes",
    role: "Director Clinico y Fisioterapeuta",
    description:
      "Especialista en recuperacion funcional, dolor persistente, readaptacion y acompanamiento a pacientes exigentes.",
    metrics: "Mas de 2.500 valoraciones personalizadas",
  },
  {
    name: "Modelo de trabajo",
    role: "Precision + cercania",
    description:
      "Una metodologia donde el paciente entiende su proceso, participa y ve avances con claridad.",
    metrics: "Procesos terapeuticos con direccion real",
  },
  {
    name: "Marca y autoridad",
    role: "Experiencia premium",
    description:
      "Una identidad clinica fuerte que conecta con pacientes particulares, deportistas y perfiles profesionales.",
    metrics: "Imagen alineada con atencion de alto nivel",
  },
];

export const testimonials = [
  {
    name: "Paciente deportista",
    quote:
      "Se sintio como una atencion seria, cuidada y pensada para volver a rendir, no solo para salir del dolor.",
  },
  {
    name: "Paciente en rehabilitacion",
    quote:
      "El seguimiento fue cercano y muy profesional. Siempre tuve claro en que etapa iba y que seguia.",
  },
  {
    name: "Paciente particular",
    quote:
      "La experiencia desde la web hasta WhatsApp y la consulta se siente por encima del promedio del sector salud.",
  },
];

export const differentiators = [
  {
    title: "Atencion uno a uno",
    description: "Cada sesion prioriza tiempo real de intervencion, escucha y evolucion medible.",
    icon: FiUserCheck,
  },
  {
    title: "Protocolos con evidencia",
    description: "Decisiones clinicas respaldadas por evaluacion funcional y seguimiento constante.",
    icon: FiAward,
  },
  {
    title: "Agendamiento agil",
    description: "Reserva simple, clara y directa por WhatsApp en pocos pasos.",
    icon: FiCalendar,
  },
];

export const aboutValues = [
  {
    title: "Precision clinica",
    text: "Se evalua con profundidad para tomar decisiones terapeuticas que de verdad muevan el proceso.",
    icon: FiCompass,
  },
  {
    title: "Acompanamiento humano",
    text: "La calidad humana no compite con el nivel tecnico. Se potencian entre si.",
    icon: FiHeart,
  },
  {
    title: "Imagen profesional",
    text: "Todo comunica cuidado: la marca, la experiencia digital, el entorno y la sesion.",
    icon: FiCheckCircle,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Valoracion premium",
    text: "Se analiza historia, dolor, movimiento, limitaciones y objetivo funcional.",
  },
  {
    step: "02",
    title: "Intervencion estrategica",
    text: "Se combina terapia manual, ejercicio y educacion segun el momento del paciente.",
  },
  {
    step: "03",
    title: "Seguimiento y readaptacion",
    text: "Se ajustan cargas, se miden avances y se prepara el retorno con criterio.",
  },
];

export const teamNotes = [
  "Atencion a deportistas, pacientes particulares y procesos complejos.",
  "Comunicacion clara que aumenta adherencia y confianza.",
  "Marca personal fuerte y reconocimiento por acompanar perfiles exigentes.",
];

export const blogPosts = [
  {
    title: "Como saber si tu dolor lumbar necesita fisioterapia",
    excerpt:
      "Claves para diferenciar una molestia pasajera de una limitacion que requiere intervencion y plan terapeutico.",
    category: "Dolor y movimiento",
  },
  {
    title: "Retorno al deporte: errores que prolongan la lesion",
    excerpt:
      "Lo que mas retrasa la recuperacion despues de una lesion y como reducir el riesgo de recaida.",
    category: "Rehabilitacion deportiva",
  },
  {
    title: "Que esperar en una valoracion funcional premium",
    excerpt:
      "Asi se estructura una consulta pensada para que el paciente salga con claridad, plan y confianza.",
    category: "Experiencia clinica",
  },
];

export const contactCards = [
  {
    label: "WhatsApp",
    value: brand.phoneDisplay,
    detail: "Agenda, consulta horarios o solicita orientacion inicial desde el canal principal.",
  },
  {
    label: "Instagram",
    value: brand.instagramHandle,
    detail: "Comunidad y marca clinica con contenido de rehabilitacion, prevencion y acompanamiento.",
  },
  {
    label: "Ubicacion",
    value: brand.city,
    detail: "Atencion presencial en un entorno comodo, profesional y pensado para generar confianza.",
  },
  {
    label: "Horario",
    value: "8:00 AM - 6:00 PM",
    detail: "De lunes a sabado con agenda organizada por bloques y respuesta agil.",
  },
];

export const instagramHighlights = [
  "Agenda tu cita al DM",
  "Rehabilitacion deportiva",
  "Prevencion de lesiones",
  "Descarga muscular y acompanamiento deportivo",
];

export const appointmentSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export const servicesOptions = services.map((service) => service.title);

export const ctaLinks = {
  primary: {
    label: "Agendar cita",
    href: "/citas",
    icon: FiArrowRight,
  },
};

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

export const serviceDetailSections = [
  {
    title: "Como se aborda",
    icon: FiZap,
  },
  {
    title: "Logros esperados",
    icon: FiAward,
  },
  {
    title: "Casos frecuentes",
    icon: FiUsers,
  },
];

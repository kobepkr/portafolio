export const projects = [
  {
    id: "01",
    featured: true,
    title: "Sistema Web de Gestión y Control de Asistencia Escolar",
    desc: "Plataforma web moderna para optimizar el control de asistencia de alumnos en establecimientos educacionales. Registra asistencia mediante QR o modo selector, con panel administrativo completo y reportes automáticos.",
    tags: ["React", "Node.js", "Firebase", "CSS", "QR", "Multi-colegio"],
    type: "Web App",
    url: "https://asistencia.escuelapilotopardo.cl/",
     thumbnail: "/asis1.png",
    images: [
      { src: "/asistencia-1.png", caption: "Panel principal" },
      { src: "/asistencia-2.png", caption: "Registro QR" },
      { src: "/asistencia-3.png", caption: "Reportes" },
      { src: "/asistencia-4.png", caption: "Estadísticas" },
      { src: "/asistencia-5.png", caption: "Gestión de cursos" },
      { src: "/asistencia-6.png", caption: "Panel administrativo" },
    ],
    details: {
      intro: "Plataforma web moderna diseñada para optimizar el control y la administración de asistencia de alumnos en establecimientos educacionales, entregando una solución rápida, segura y eficiente para docentes, asistentes y administradores.\n\nEl sistema permite registrar la asistencia de los estudiantes de dos formas distintas:\n\n• Asistencia mediante código QR: Cada alumno cuenta con un código QR único, generado automáticamente por la plataforma, permitiendo registrar su asistencia de manera rápida y precisa mediante escaneo.\n\n• Asistencia manual o modo selector: Los docentes o asistentes pueden registrar la asistencia directamente desde el sistema seleccionando a los alumnos presentes.",
      sections: [
        {
          title: "Gestión de Asistencia",
          items: [
            "Registro de asistencia en tiempo real.",
            "Historial de asistencia por alumno y curso.",
            "Control de asistencia por jornada y período escolar.",
            "Validación rápida y segura de registros.",
          ],
        },
        {
          title: "Sistema de Códigos QR",
          items: [
            "Generación automática de QR únicos para cada estudiante.",
            "Diseño minimalista y personalizado.",
            "Integración de la insignia institucional del colegio en cada código QR.",
            "Administración centralizada de credenciales y accesos.",
          ],
        },
        {
          title: "Panel Administrativo",
          items: [
            "Gestión completa de alumnos, cursos y docentes.",
            "Administración de asistentes y usuarios del sistema.",
            "Configuración personalizada por establecimiento.",
            "Control de períodos académicos y niveles educativos.",
          ],
        },
        {
          title: "Reportes y Exportación",
          items: [
            "Visualización de asistencia por fechas y períodos.",
            "Reportes filtrados por curso, alumno o rango de fechas.",
            "Exportación de información para respaldo y análisis.",
            "Generación automática de reportes y estadísticas.",
          ],
        },
        {
          title: "Plataforma Multi-Colegio",
          items: [
            "Base de datos independiente por establecimiento.",
            "Configuración personalizada por institución.",
            "Administración separada por colegio.",
            "Gestión individual de alumnos, docentes y asistencia.",
          ],
        },
      ],
      closing: "Esta solución entrega una herramienta moderna, adaptable y eficiente para mejorar el control de asistencia escolar y optimizar la gestión administrativa de las instituciones educativas.",
    },
  },
  {
    id: "02",
    featured: false,
    title: "Landing Page — Comercializadora Flowers",
    desc: "Sitio web corporativo para CFlowers, empresa real de comercialización. Diseño moderno, responsivo y optimizado para conversión, con catálogo de productos y formulario de contacto.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Sitio Web",
    url: "https://www.cflowers.cl/",
    thumbnail: "/cflowers12.png",
    images: [
      { src: "/banner.png", caption: "Panel principal" },
      { src: "/cflowers1.png", caption: "Sección de productos" },
      { src: "/nosotro.png", caption: "Quiénes somos" },
      { src: "/catalogo.png", caption: "Catálogo" },
    ],
    details: {
      intro: "Sitio web corporativo desarrollado para Comercializadora Flowers (CFlowers), empresa real del rubro de comercialización. El objetivo fue darle presencia digital profesional con un diseño moderno, limpio y orientado a captar clientes.",
      sections: [
        {
          title: "Características",
          items: [
            "Diseño responsivo adaptado a móvil y escritorio.",
            "Catálogo de productos con imágenes y descripciones.",
            "Formulario de contacto funcional.",
            "Optimizado para carga rápida y buena experiencia de usuario.",
            "Muestra de productos recientes con su marca y detalles",
            "Footer Moderno con toda la información necesaria para un contacto rápido",
            "Sección de redes sociales que redirige a las redes de la empresa",
            "Botón de WhatsApp funcional que redirige al teléfono de la empresa",
          ],
        },
      ],
      closing: "El proyecto resultó en una presencia digital profesional que aumentó las consultas de clientes potenciales.",
    },
  },
  
  {
    id: "03",
    featured: false,
    title: "Página web - Escuela Gaspar Cabrales de Valparaíso",
    desc: "Página desarrollada para la institución en React con JS, donde aparece todo lo relacionado con la escuela.",
    tags: ["React", "JavaScript", "CSS"],
    type: "Sitio Web",
    url: "https://gaspar-coral.vercel.app/",
    thumbnail: "/gasparmain.png",
    images: [
      { src: "/1.png", caption: "Página principal" },
      { src: "/2.png", caption: "Información institucional" },
      { src: "/3.png", caption: "Galería de actividades" },
      { src: "/4.png", caption: "Formulario de contacto" },
    ],
    details: {
      intro: "Página que destaca el Proyecto Educativo Institucional, su reglamento interno, su plan de mejora y una variedad de información de gestión de la escuela.",
      sections: [
        {
          title: "Características",
          items: [
            "Interfaz adaptada al gusto de la directora del establecimiento.",
            "Integración de carrusel con imágenes de las actividades de la escuela.",
            "Integración de videos subidos y creados por mí donde se muestran pequeñas partes del evento realizado.",
            "Footer con título, información relevante del colegio como dirección, número de teléfono y email de contacto.",
            "Formulario para hacer consultas.",
            "Mapa de Google para saber dónde está ubicada la escuela.",
          ],
        },
      ],
      closing: "La página ha mejorado la comunicación entre la escuela y la comunidad educativa.",
    },
  },
 
];

export const stack = [
  { icon: "⚛️", name: "React" },
  { icon: "💚", name: "HTML" },
  { icon: "📱", name: "React Native" },
  { icon: "🟨", name: "JavaScript" },
  { icon: "🎨", name: "CSS / Tailwind" },
  { icon: "🟢", name: "Node.js" },
  { icon: "🗄️", name: "Firebase" },
  { icon: "🐙", name: "Git / GitHub" },
];

export const experience = [
  {
    year: "2025 — hoy",
    title: "Desarrollador Web Freelance",
    place: "Independiente · Chile",
    desc: "Diseño y desarrollo de sitios y aplicaciones web para empresas que buscan presencia digital. Gestión completa del proyecto: desde el levantamiento de requerimientos hasta el despliegue.",
  },
  {
    year: "2020 — 2023",
    title: "Ingeniería en Informática",
    place: "DuocUC de Viña del Mar",
    desc: "Formación en desarrollo de software, bases de datos, arquitectura de sistemas y metodologías ágiles. Proyecto de título con calificación destacada.",
  },
];
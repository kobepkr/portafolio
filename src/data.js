export const projects = [
  {
    id: "01",
    featured: true,
    title: "Sistema Web de Gestión y Control de Asistencia Escolar",
    desc: "Plataforma web moderna para optimizar el control de asistencia de alumnos en establecimientos educacionales. Registra asistencia mediante QR o modo selector, con panel administrativo completo y reportes automáticos.",
    tags: ["React", "Node.js", "Firebase", "CSS", "QR", "Multi-colegio"],
    type: "Web App",
    url: "https://asistencia.escuelapilotopardo.cl/",
    thumbnail: "/mainasis.png",
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
    id: "002",
    featured: false,
    title: "Landing Page — Comercializadora Flowers",
    desc: "Sitio web corporativo para CFlowers, empresa real de comercialización. Diseño moderno, responsivo y optimizado para conversión, con catálogo de productos y formulario de contacto.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Sitio Web",
    url: "https://www.cflowers.cl/",
    thumbnail: "/banner.png",
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
    id: "003",
    featured: false,
    title: "Proyecto de Título",
    desc: "Proyecto final de carrera desarrollado como Ingeniero en Informática. Aplicación completa con análisis de requerimientos, diseño de arquitectura, implementación y documentación técnica.",
    tags: ["Full Stack", "Investigación", "Documentación"],
    type: "Académico",
    details: {
      intro: "Proyecto final de carrera desarrollado para obtener el título de Ingeniero en Informática. Abarcó todas las etapas del ciclo de desarrollo de software, desde el levantamiento de requerimientos hasta el despliegue y documentación.",
      sections: [
        {
          title: "Etapas del proyecto",
          items: [
            "Análisis y levantamiento de requerimientos.",
            "Diseño de arquitectura de software.",
            "Implementación frontend y backend.",
            "Pruebas y validación del sistema.",
            "Documentación técnica completa.",
          ],
        },
      ],
      closing: "Proyecto aprobado con calificación destacada, demostrando competencias integrales en desarrollo de software.",
    },
  },
  {
    id: "004",
    featured: false,
    title: "Página web - Escuela Gaspar Cabrales de Valparaíso",
    desc: "Página desarrollada para la institución en React con JS, donde aparece todo lo relacionado con la escuela.",
    tags: ["React", "JavaScript", "CSS"],
    type: "Sitio Web",
    url: "https://gaspar-coral.vercel.app/",
    thumbnail: "/1.png",
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
  { 
    name: "React", 
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg",
  },
  { 
    name: "HTML5", 
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg",
  },
  { 
    name: "React Native", 
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg",
  },
  { 
    name: "JavaScript", 
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg",
  },
  { 
    name: "Tailwind CSS", 
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg",
  },
  { 
    name: "CSS3", 
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/css3.svg",
  },
  { 
    name: "Node.js", 
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg",
  },
  { 
    name: "Firebase", 
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/firebase.svg",
  },
  { 
    name: "Git", 
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg",
  },
];

export const experience = [
  {
    year: "2025 — hoy",
    title: "Desarrollador Web Freelance",
    place: "Independiente · Chile",
    fullDescription: `Desarrollo de sitios web y aplicaciones para empresas e instituciones que buscan fortalecer su presencia digital. Experiencia trabajando de manera independiente en proyectos personalizados, encargándome de todo el proceso: levantamiento de requerimientos, diseño, desarrollo, implementación y mantención continua.

### Experiencia destacada

**CFlowers — Desarrollo y mantención web**
Actualmente trabajo como desarrollador web para CFlowers, empresa dedicada a la venta mayorista de prendas de vestir especializada en saldos. Me encargué del desarrollo completo de su sitio web y actualmente realizo mantención, actualización de contenido y mejoras continuas según las necesidades del negocio.

**Escuela Gaspar Cabrales — Desarrollo web institucional**
Desarrollé el sitio web institucional de la escuela, enfocado en mejorar la comunicación con apoderados, estudiantes y funcionarios, entregando una plataforma clara y accesible para la comunidad educativa.

**Escuela Piloto Pardo Villalón — Mantención y soporte informático**
Trabajo en la actualización y administración del sitio web institucional, además de brindar soporte y apoyo informático en distintas necesidades tecnológicas del establecimiento.

**Aplicación móvil para cliente independiente**
Participé en el desarrollo de una aplicación móvil para un cliente independiente, colaborando en la implementación de funcionalidades y mejoras enfocadas en la experiencia de usuario.

### Tecnologías y herramientas

* HTML, CSS y JavaScript
* React y React Native
* WordPress
* Desarrollo Front-End
* Mantención y soporte web
* Gestión y despliegue de proyectos

### Enfoque de trabajo

Me especializo en desarrollar soluciones digitales funcionales y adaptadas a las necesidades de cada cliente, manteniendo una comunicación cercana y entregando soporte continuo para asegurar el correcto funcionamiento de cada proyecto.`
  },
  {
    year: "2020 — 2023",
    title: "Ingeniería en Informática",
    place: "DuocUC de Viña del Mar",
    fullDescription: "Formación en desarrollo de software, bases de datos, arquitectura de sistemas y metodologías ágiles. Proyecto de título con calificación destacada."
  }
];
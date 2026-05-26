import { useState, useEffect } from "react";

const projects = [
  {
    id: "001",
    featured: true,
    title: "Control de Asistencia — Escuela Piloto Pardo",
    desc: "Sistema web para la gestión y control de asistencia del personal docente y administrativo. Permite registrar, visualizar y exportar asistencia por período, con panel de administración y reportes automáticos.",
    tags: ["React", "Node.js", "MySQL", "CSS"],
    type: "Web App",
  },
  {
    id: "002",
    featured: false,
    title: "Landing Page — Comercializadora Flowers",
    desc: "Sitio web corporativo para CFlowers, empresa real de comercialización. Diseño moderno, responsivo y optimizado para conversión, con catálogo de productos y formulario de contacto.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Sitio Web",
  },
  {
    id: "003",
    featured: false,
    title: "Proyecto de Título",
    desc: "Proyecto final de carrera desarrollado como Ingeniero en Informática. Aplicación completa con análisis de requerimientos, diseño de arquitectura, implementación y documentación técnica.",
    tags: ["Full Stack", "Investigación", "Documentación"],
    type: "Académico",
  },
  {
    id: "004",
    featured: false,
    title: "Aplicación Móvil",
    desc: "Desarrollo de aplicación móvil multiplataforma, actualmente en progreso. Orientada a resolver una necesidad real con enfoque en usabilidad y rendimiento.",
    tags: ["React Native", "Mobile", "En desarrollo"],
    type: "App Móvil",
  },
];

const stack = [
  { icon: "⚛️", name: "React" },
  { icon: "💚", name: "Vue.js" },
  { icon: "📱", name: "React Native" },
  { icon: "🟨", name: "JavaScript" },
  { icon: "🎨", name: "CSS / Tailwind" },
  { icon: "🟢", name: "Node.js" },
  { icon: "🗄️", name: "SQL / NoSQL" },
  { icon: "🐙", name: "Git / GitHub" },
];

const experience = [
  {
    year: "2024 — hoy",
    title: "Desarrollador Web Freelance",
    place: "Independiente · Chile",
    desc: "Diseño y desarrollo de sitios y aplicaciones web para empresas que buscan presencia digital. Gestión completa del proyecto: desde el levantamiento de requerimientos hasta el despliegue.",
  },
  {
    year: "2019 — 2024",
    title: "Ingeniería en Informática",
    place: "Universidad · Chile",
    desc: "Formación en desarrollo de software, bases de datos, arquitectura de sistemas y metodologías ágiles. Proyecto de título con calificación destacada.",
  },
];

export default function Portfolio() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      maxWidth: 760,
      margin: "0 auto",
      padding: "0 2rem 4rem",
      color: "#111",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fafaf8; }
        a { text-decoration: none; color: inherit; }
        ::selection { background: #c9f0df; }

        .nav-link {
          font-size: 13px;
          color: #888;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #111; }

        .btn-primary {
          background: #111;
          color: #fafaf8;
          border: none;
          padding: 10px 22px;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          cursor: pointer;
          font-weight: 500;
          transition: opacity 0.2s;
        }
        .btn-primary:hover { opacity: 0.82; }

        .btn-secondary {
          background: transparent;
          color: #111;
          border: 1px solid #ddd;
          padding: 10px 22px;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .btn-secondary:hover { border-color: #aaa; }

        .project-card {
          background: #fff;
          border: 1px solid #ebebeb;
          border-radius: 14px;
          padding: 1.4rem 1.5rem;
          transition: border-color 0.2s, transform 0.2s;
          cursor: default;
        }
        .project-card:hover {
          border-color: #ccc;
          transform: translateY(-2px);
        }

        .tag {
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid #e5e5e5;
          color: #777;
          letter-spacing: 0.02em;
        }

        .stack-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.75rem 1rem;
          background: #f4f4f1;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #333;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.875rem 1.25rem;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          font-size: 14px;
          color: #333;
          transition: border-color 0.2s, background 0.2s;
        }
        .contact-link:hover { border-color: #bbb; background: #fafaf8; }

        @media (max-width: 520px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 36px !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .stack-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 0 1.25rem",
        borderBottom: "1px solid #ebebeb",
        marginBottom: "3.5rem",
      }}>
        <span style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 20,
          letterSpacing: "-0.02em",
        }}>VL</span>
        <nav style={{ display: "flex", gap: "1.75rem" }}>
          {["Sobre mí", "Proyectos", "Stack", "Experiencia"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="nav-link">{l}</a>
          ))}
        </nav>
      </nav>

      {/* HERO */}
      <section style={{ paddingBottom: "3.5rem", borderBottom: "1px solid #ebebeb", marginBottom: "3.5rem" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          fontSize: 12,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: "1.25rem",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%", background: "#1D9E75",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }} />
          <style>{`@keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.35} }`}</style>
          Disponible para proyectos freelance
        </div>

        <h1 className="hero-title" style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 52,
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
        }}>
          Víctor Labbé<br />
          <em style={{ color: "#999", fontStyle: "italic" }}>Desarrollador Web</em>
        </h1>

        <p style={{
          fontSize: 16,
          color: "#666",
          lineHeight: 1.75,
          maxWidth: 500,
          marginBottom: "1.75rem",
        }}>
          Ingeniero en Informática especializado en frontend moderno. Construyo sitios web rápidos, limpios y accesibles para empresas que quieren destacar en el mundo digital.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="mailto:victor@correo.com">
            <button className="btn-primary">Escríbeme →</button>
          </a>
          <a href="#proyectos">
            <button className="btn-secondary">Ver proyectos</button>
          </a>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mí" style={{ marginBottom: "3.5rem" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bbb", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #ebebeb" }}>
          Sobre mí
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Soy ingeniero en informática con pasión por el diseño de interfaces y la experiencia de usuario. He trabajado con instituciones educativas, empresas reales y proyectos propios, construyendo soluciones que realmente funcionan. Mi enfoque es entregar productos digitales que sean una carta de presentación sólida para cada cliente.
        </p>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[
            { num: "4+", lbl: "Proyectos completados" },
            { num: "100%", lbl: "Enfoque en resultados" },
          ].map(s => (
            <div key={s.lbl} style={{ background: "#f4f4f1", borderRadius: 10, padding: "1rem 1.25rem" }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" style={{ marginBottom: "3.5rem" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bbb", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #ebebeb" }}>
          Proyectos
        </p>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {projects.map((p, i) => (
            <div key={p.id} className="project-card" style={p.featured ? { gridColumn: "1 / -1" } : {}}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.05em" }}>{p.id}{p.featured ? " — Destacado" : ""}</span>
                <span style={{ fontSize: 11, color: "#999", background: "#f4f4f1", padding: "2px 9px", borderRadius: 20 }}>{p.type}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</div>
              <p style={{ fontSize: 13, color: "#777", lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={{ marginBottom: "3.5rem" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bbb", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #ebebeb" }}>
          Stack técnico
        </p>
        <div className="stack-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
          {stack.map(s => (
            <div key={s.name} className="stack-item">
              <span style={{ fontSize: 18 }}>{s.icon}</span>
              {s.name}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" style={{ marginBottom: "3.5rem" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bbb", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #ebebeb" }}>
          Experiencia & formación
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {experience.map((e, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "1.25rem",
              paddingBottom: "1.5rem",
              borderBottom: i < experience.length - 1 ? "1px solid #ebebeb" : "none",
            }}>
              <span style={{ fontSize: 12, color: "#bbb", paddingTop: 3 }}>{e.year}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{e.title}</div>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 6 }}>{e.place}</div>
                <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.65 }}>{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ marginBottom: "3rem" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bbb", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #ebebeb" }}>
          Contacto
        </p>
        <a href="mailto:victor@correo.com" className="contact-link" style={{ display: "inline-flex" }}>
          ✉️ &nbsp;victor@correo.com
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #ebebeb",
        paddingTop: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
        color: "#ccc",
      }}>
        <span>© 2025 Víctor Rodrigo Labbé Gutiérrez</span>
        <span>Chile</span>
      </footer>
    </div>
  );
}

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Portfolio.css";
import { projects, stack, experience } from "./data.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

/* ── MODAL ── */
function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  const { title, type, tags, details, images, url } = project;
  const hasImages = images && images.length > 0;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-type">{type}</span>
            <h2 className="modal-title">{title}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <div className="modal-body">
          {url && (
            <div style={{ marginBottom: "1rem" }}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="modal-link">
                🔗 {url}
              </a>
            </div>
          )}

          {hasImages && (
            <div className="modal-gallery">
              <div className="modal-img-wrap">
                <img
                  src={images[imgIndex].src}
                  alt={images[imgIndex].caption}
                  className="modal-img"
                  loading="lazy"
                />
                {images.length > 1 && (
                  <>
                    <button className="gallery-btn gallery-prev" onClick={() => setImgIndex((imgIndex - 1 + images.length) % images.length)}>‹</button>
                    <button className="gallery-btn gallery-next" onClick={() => setImgIndex((imgIndex + 1) % images.length)}>›</button>
                  </>
                )}
              </div>
              <div className="modal-img-dots">
                {images.map((_, i) => (
                  <span key={i} className={`img-dot${i === imgIndex ? " active" : ""}`} onClick={() => setImgIndex(i)} />
                ))}
              </div>
              {images[imgIndex].caption && (
                <p className="modal-img-caption">{images[imgIndex].caption}</p>
              )}
            </div>
          )}

          {details.intro.split("\n\n").map((para, i) => (
            <p key={i} className="modal-intro">{para}</p>
          ))}

          {details.sections.map((sec) => (
            <div key={sec.title} className="modal-section">
              <h3 className="modal-section-title">{sec.title}</h3>
              <ul className="modal-list">
                {sec.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {details.closing && (
            <p className="modal-closing">{details.closing}</p>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "1.5rem" }}>
            {tags.map((t) => {
              let tooltip = "";
              if (t === "React") tooltip = "Biblioteca para interfaces interactivas";
              else if (t === "Node.js") tooltip = "JavaScript en el servidor";
              else if (t === "Firebase") tooltip = "Backend como servicio de Google";
              else if (t === "Tailwind") tooltip = "Framework CSS utilitario";
              else if (t === "React Native") tooltip = "Apps móviles con React";
              else tooltip = `Tecnología: ${t}`;
              
              return (
                <span key={t} className="tag" data-tooltip={tooltip}>
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ── MAIN ── */
export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <nav className={`navbar-fixed ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span className="navbar-logo">VL</span>
            <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="nav-links">
            {["Proyectos", "Stack", "Experiencia", "Sobre mí"].map((l) => (
              <button 
                key={l} 
                onClick={() => scrollToSection(l.toLowerCase().replace(/ /g, "-").replace("í", "i"))} 
                className="nav-link-btn"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="main-content">
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-text">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1D9E75", display: "inline-block", animation: "pulse 2s infinite" }} />
              Disponible para proyectos freelance
            </div>
            <h1 className="hero-title">
              Víctor Labbé<br />
              <em style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Desarrollador Web</em>
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 500, marginBottom: "1.75rem" }}>
              Ingeniero en Informática especializado en frontend moderno. Construyo sitios web rápidos, limpios y accesibles para empresas que buscan destacar en el mundo digital.
            </p>
            <div className="hero-buttons">
              <a href="https://github.com/kobepkr" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary github-btn">
                  <i className="fab fa-github"></i> GitHub
                </button>
              </a>
              <a href="https://www.linkedin.com/in/victor-labbe-ing2023/" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary linkedin-btn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </button>
              </a>
              <a href="mailto:victorlabbe26@gmail.com">
                <button className="btn-primary email-btn">
                  <i className="fa-solid fa-envelope"></i> Email
                </button>
              </a>
              <button onClick={() => scrollToSection("proyectos")} className="btn-secondary">
                <i className="fas fa-folder-open"></i> Ver proyectos
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img src="/perfil.png" alt="Víctor Labbé - Desarrollador Web" />
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">Proyectos Destacados</p>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.id} className={`project-card${p.featured ? " featured" : ""}`}>
                {p.thumbnail && (
                  <div className="project-thumbnail">
                    <img src={p.thumbnail} alt={p.title} />
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.05em" }}>{p.id}{p.featured ? " — Destacado" : ""}</span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)", background: "var(--card-bg)", padding: "2px 9px", borderRadius: 20 }}>{p.type}</span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1rem" }}>
                  {p.tags.map((t) => {
                    let tooltip = "";
                    if (t === "React") tooltip = "Biblioteca para interfaces interactivas";
                    else if (t === "Node.js") tooltip = "JavaScript en el servidor";
                    else if (t === "Firebase") tooltip = "Backend como servicio de Google";
                    else tooltip = `Tecnología: ${t}`;
                    
                    return (
                      <span key={t} className="tag" data-tooltip={tooltip}>
                        {t}
                      </span>
                    );
                  })}
                </div>
                <button className="btn-ver-mas" onClick={() => setSelectedProject(p)}>
                  ir al proyecto →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section id="stack" style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">Stack técnico</p>
          <div className="stack-grid">
            {stack.map((s) => (
              <div key={s.name} className="stack-item">
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                {s.name}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">Experiencia & formación</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {experience.map((e, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "1.25rem", paddingBottom: "1.5rem", borderBottom: i < experience.length - 1 ? "1px solid var(--border-color)" : "none" }}>
                <span style={{ fontSize: 12, color: "var(--text-muted)", paddingTop: 3 }}>{e.year}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4, color: "var(--text-primary)" }}>{e.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>{e.place}</div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">Sobre mí</p>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Soy ingeniero en informática con pasión por el diseño de interfaces y la experiencia de usuario. He trabajado con instituciones educativas, empresas reales y proyectos propios, construyendo soluciones que realmente funcionan. Mi enfoque es entregar productos digitales que sean una carta de presentación sólida para cada cliente.
          </p>
          <div className="about-grid">
            {[{ num: "4+", lbl: "Proyectos completados" }, { num: "100%", lbl: "Enfoque en resultados" }].map((s) => (
              <div key={s.lbl} style={{ background: "var(--card-bg)", borderRadius: 10, padding: "1rem 1.25rem" }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="methodology-badge" style={{
            background: "linear-gradient(135deg, var(--card-bg), var(--border-color))",
            borderRadius: 12,
            padding: "1rem",
            marginTop: "1rem",
            borderLeft: "3px solid #3b82f6"
          }}>
            <div style={{ fontSize: 11, color: "#6366f1", marginBottom: 6, letterSpacing: "0.05em" }}>
              MI PROCESO
            </div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["🔍 Investigación", "📐 Prototipado", "💻 Desarrollo", "✅ Testing", "🚀 Despliegue"].map(step => (
                <span key={step} style={{ background: "var(--bg-color)", padding: "4px 10px", borderRadius: 20, fontSize: 11 }}>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" style={{ marginBottom: "3rem" }}>
          <p className="section-label">Contacto</p>
          <a href="mailto:victorlabbe26@gmail.com" className="contact-link">
            ✉️ &nbsp;victorlabbe26@gmail.com
          </a>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-muted)", flexWrap: "wrap", gap: "0.5rem" }}>
          <span>© 2025 Víctor Rodrigo Labbé Gutiérrez</span>
          <span>Chile</span>
        </footer>
      </div>
    </>
  );
}
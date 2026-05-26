import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Portfolio.css";
import { projects, stack, experience } from "./data.js";

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

  const { title, type, tags, details, images } = project;
  const hasImages = images && images.length > 0;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <span className="modal-type">{type}</span>
            <h2 className="modal-title">{title}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        {/* Body */}
        <div className="modal-body">

          {/* Galería de imágenes */}
          {hasImages && (
            <div className="modal-gallery">
              <div className="modal-img-wrap">
                <img
                  src={images[imgIndex].src}
                  alt={images[imgIndex].caption}
                  className="modal-img"
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

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "1.5rem" }}>
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
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

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    <div
      style={{
        fontFamily: "'DM Sans', -apple-system, sans-serif",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 1rem 4rem",
        color: "#111",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 0 1.25rem",
          borderBottom: "1px solid #ebebeb",
          marginBottom: "3.5rem",
        }}
      >
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, letterSpacing: "-0.02em" }}>
          VL
        </span>
        <nav style={{ display: "flex", gap: "1.75rem" }}>
          {["Sobre mí", "Proyectos", "Stack", "Experiencia"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="nav-link">{l}</a>
          ))}
        </nav>
      </nav>

      {/* HERO */}
      <section style={{ paddingBottom: "3.5rem", borderBottom: "1px solid #ebebeb", marginBottom: "3.5rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, letterSpacing: "0.07em", textTransform: "uppercase", color: "#888", marginBottom: "1.25rem" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1D9E75", display: "inline-block", animation: "pulse 2s infinite" }} />
          Disponible para proyectos freelance
        </div>
        <h1 className="hero-title" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
          Víctor Labbé<br />
          <em style={{ color: "#999", fontStyle: "italic" }}>Desarrollador Web</em>
        </h1>
        <p style={{ fontSize: 16, color: "#666", lineHeight: 1.75, maxWidth: 500, marginBottom: "1.75rem" }}>
          Ingeniero en Informática especializado en frontend moderno. Construyo sitios web rápidos, limpios y accesibles para empresas que buscan destacar en el mundo digital.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="mailto:victor@correo.com"><button className="btn-primary">Escríbeme →</button></a>
          <a href="#proyectos"><button className="btn-secondary">Ver proyectos</button></a>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mí" style={{ marginBottom: "3.5rem" }}>
        <p className="section-label">Sobre mí</p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Soy ingeniero en informática con pasión por el diseño de interfaces y la experiencia de usuario. He trabajado con instituciones educativas, empresas reales y proyectos propios, construyendo soluciones que realmente funcionan. Mi enfoque es entregar productos digitales que sean una carta de presentación sólida para cada cliente.
        </p>
        <div className="about-grid">
          {[{ num: "4+", lbl: "Proyectos completados" }, { num: "100%", lbl: "Enfoque en resultados" }].map((s) => (
            <div key={s.lbl} style={{ background: "#f4f4f1", borderRadius: 10, padding: "1rem 1.25rem" }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" style={{ marginBottom: "3.5rem" }}>
        <p className="section-label">Proyectos Destacados</p>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className={`project-card${p.featured ? " featured" : ""}`}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.05em" }}>{p.id}{p.featured ? " — Destacado" : ""}</span>
                <span style={{ fontSize: 11, color: "#999", background: "#f4f4f1", padding: "2px 9px", borderRadius: 20 }}>{p.type}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</div>
              <p style={{ fontSize: 13, color: "#777", lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1rem" }}>
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <button className="btn-ver-mas" onClick={() => setSelectedProject(p)}>
                Ver más →
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
            <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "1.25rem", paddingBottom: "1.5rem", borderBottom: i < experience.length - 1 ? "1px solid #ebebeb" : "none" }}>
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
        <p className="section-label">Contacto</p>
        <a href="mailto: victorlabbe26@gmail.com" className="contact-link">
          ✉️ &nbsp;victorlabbe26@gmail.com
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #ebebeb", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#ccc" }}>
        <span>© 2025 Víctor Rodrigo Labbé Gutiérrez</span>
        <span>Chile</span>
      </footer>
    </div>
    </>
  );
}

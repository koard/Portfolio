"use client";

import { useEffect, useRef, useState } from "react";

export interface ProjectDetail {
  icon: string;
  badge?: string;
  title: string;
  period: string;
  description: string;
  longDescription: string;
  role: string;
  status: "Production" | "In Development" | "Academic" | "Personal" | "Completed";
  achievements: string[];
  stack: string[];
  color: string;
  github: string | null;
  demo: string | null;
  screenshots: string[];
  highlight: boolean;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

/* ─── Status config ──────────────────────────────────────────────── */
const STATUS_CONFIG: Record<string, { color: string; bg: string; border: string }> = {
  Production:      { color: "#10b981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.3)"  },
  "In Development":{ color: "#f59e0b", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.3)"  },
  Academic:        { color: "#818cf8", bg: "rgba(129,140,248,0.1)", border: "rgba(129,140,248,0.3)" },
  Personal:        { color: "#60a5fa", bg: "rgba(96,165,250,0.1)",  border: "rgba(96,165,250,0.3)"  },
  Completed:       { color: "#3b82f6", bg: "rgba(59,130,246,0.1)",  border: "rgba(59,130,246,0.3)"  },
};

/* ─── Component ──────────────────────────────────────────────────── */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when a new project is opened
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  /* Lock body scroll + ESC to close */
  useEffect(() => {
    if (!project) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    /* Focus the modal for keyboard nav */
    containerRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const status = STATUS_CONFIG[project.status] ?? STATUS_CONFIG["Personal"];

  return (
    /* ── Backdrop ───────────────────────────────────────────────── */
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
      aria-hidden="false"
    >
      {/* ── Container ─────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="modal-header">
          <div className="modal-header-left">
            <div className="modal-badges-row">
              <span
                className="modal-status-badge"
                style={{ color: status.color, background: status.bg, borderColor: status.border }}
              >
                <span
                  className="modal-status-dot"
                  style={{ background: status.color, boxShadow: `0 0 6px ${status.color}` }}
                />
                {project.status}
              </span>
            </div>

            <h2 id="modal-project-title" className="modal-title">
              {project.title}
            </h2>

            <div className="modal-meta-line">
              <span className="modal-meta-key">Role</span>
              <span className="modal-meta-val">{project.role}</span>
              <span className="modal-meta-sep" aria-hidden="true">·</span>
              <span className="modal-meta-key">Period</span>
              <span className="modal-meta-val">{project.period}</span>
            </div>
          </div>

          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="modal-screenshots-area">
          {project.screenshots.length > 0 ? (
            <div className="modal-carousel-container" style={{ position: "relative", width: "100%", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", padding: "16px", minHeight: "300px" }}>
              <img
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title} — screenshot ${currentImageIndex + 1}`}
                style={{ width: "100%", height: "auto", maxHeight: "65vh", objectFit: "contain", borderRadius: "8px" }}
                loading="lazy"
              />
              
              {project.screenshots.length > 1 && (
                <>
                  {/* Prev Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
                    }}
                    style={{
                      position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)",
                      width: "44px", height: "44px", borderRadius: "50%",
                      background: "rgba(0, 0, 0, 0.65)", color: "white", border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer", zIndex: 10, backdropFilter: "blur(8px)",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = "var(--accent-primary)"; e.currentTarget.style.borderColor = "var(--accent-primary)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.05)"; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = "rgba(0, 0, 0, 0.65)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
                    aria-label="Previous screenshot"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
                    }}
                    style={{
                      position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)",
                      width: "44px", height: "44px", borderRadius: "50%",
                      background: "rgba(0, 0, 0, 0.65)", color: "white", border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer", zIndex: 10, backdropFilter: "blur(8px)",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = "var(--accent-primary)"; e.currentTarget.style.borderColor = "var(--accent-primary)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.05)"; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = "rgba(0, 0, 0, 0.65)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
                    aria-label="Next screenshot"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>

                  {/* Indicator */}
                  <div style={{
                    position: "absolute", bottom: "16px", left: "50%", transform: "translateX(-50%)",
                    background: "rgba(0,0,0,0.7)", padding: "6px 14px", borderRadius: "20px",
                    fontSize: "0.85rem", fontWeight: 600, color: "white", backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.1)", letterSpacing: "0.05em"
                  }}>
                    {currentImageIndex + 1} / {project.screenshots.length}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="modal-screenshot-placeholder">
              <div className="placeholder-inner">
                <div className="placeholder-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <p className="placeholder-label">Screenshots coming soon</p>
              </div>
            </div>
          )}
        </div>

        {/* ── Body ───────────────────────────────────────────────── */}
        <div className="modal-body">

          {/* Overview */}
          <section className="modal-section" aria-labelledby="modal-overview-title">
            <h3 id="modal-overview-title" className="modal-section-title">
              <span aria-hidden="true">📋</span> Overview
            </h3>
            <p className="modal-overview-text">{project.longDescription}</p>
          </section>

          {/* Key Achievements */}
          {project.achievements.length > 0 && (
            <section className="modal-section" aria-labelledby="modal-achievements-title">
              <h3 id="modal-achievements-title" className="modal-section-title">
                <span aria-hidden="true">🏆</span> Key Achievements
              </h3>
              <ul className="modal-achievement-list">
                {project.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack */}
          <section className="modal-section" aria-labelledby="modal-stack-title">
            <h3 id="modal-stack-title" className="modal-section-title">
              <span aria-hidden="true">⚙️</span> Tech Stack
            </h3>
            <div className="modal-stack-tags">
              {project.stack.map((s) => (
                <span key={s} className="tech-tag">{s}</span>
              ))}
            </div>
          </section>

        </div>

        {/* ── Footer / Links ──────────────────────────────────────── */}
        {(project.github || project.demo) && (
          <div className="modal-footer">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary modal-link-btn"
                aria-label={`View ${project.title} on GitHub (opens in new tab)`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary modal-link-btn"
                aria-label={`View live demo of ${project.title} (opens in new tab)`}
              >
                Live Demo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

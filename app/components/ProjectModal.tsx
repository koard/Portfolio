"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const [imageState, setImageState] = useState({ projectTitle: "", index: 0 });
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  const handleClose = () => {
    setIsImageFullscreen(false);
    onClose();
  };

  const setProjectImageIndex = useCallback((updater: (current: number) => number) => {
    if (!project) return;
    setImageState((current) => {
      const currentIndex = current.projectTitle === project.title ? current.index : 0;
      return { projectTitle: project.title, index: updater(currentIndex) };
    });
  }, [project]);

  const handlePrevImage = useCallback(() => {
    if (!project || project.screenshots.length <= 1) return;
    setProjectImageIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
  }, [project, setProjectImageIndex]);

  const handleNextImage = useCallback(() => {
    if (!project || project.screenshots.length <= 1) return;
    setProjectImageIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
  }, [project, setProjectImageIndex]);

  /* Touch Swipe Handlers */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
      if (diffX > 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  /* Lock body scroll + ESC + Arrow keys for navigation */
  useEffect(() => {
    if (!project) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isImageFullscreen) {
          setIsImageFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };
    window.addEventListener("keydown", handleKey);

    /* Focus the modal for keyboard nav */
    containerRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose, isImageFullscreen, handlePrevImage, handleNextImage]);

  if (!project) return null;

  const status = STATUS_CONFIG[project.status] ?? STATUS_CONFIG["Personal"];
  const currentImageIndex = imageState.projectTitle === project.title ? imageState.index : 0;
  const currentScreenshot = project.screenshots[currentImageIndex];

  return (
    /* ── Backdrop ───────────────────────────────────────────────── */
    <div
      className="modal-backdrop"
      onClick={handleClose}
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
            onClick={handleClose}
            aria-label="Close project details"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="modal-screenshots-area">
          {project.screenshots.length > 0 ? (
            <div
              className="modal-carousel-container"
              style={{ position: "relative", width: "100%", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", padding: "16px", minHeight: "300px", touchAction: "pan-y" }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {!loadedImages[project.screenshots[currentImageIndex]] && (
                <div className="modal-image-skeleton">
                  <div className="skeleton-shimmer" />
                </div>
              )}
              {project.screenshots.map((src, idx) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${project.title} — screenshot ${idx + 1}`}
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 720px"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "65vh",
                    objectFit: "contain",
                    borderRadius: "8px",
                    userSelect: "none",
                    display: idx === currentImageIndex ? "block" : "none",
                    opacity: loadedImages[src] ? 1 : 0,
                    transition: "opacity 0.2s ease",
                  }}
                  unoptimized={true}
                  priority
                  onLoad={() => handleImageLoad(src)}
                />
              ))}
              <button
                className="modal-fullscreen-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsImageFullscreen(true);
                }}
                aria-label="View screenshot full screen"
                title="View full screen"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 3l6 6M21 3l-6 6M3 21l6-6M21 21l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              {project.screenshots.length > 1 && (
                <>
                  {/* Prev Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
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
                      handleNextImage();
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
      {isImageFullscreen && currentScreenshot && (
        <div
          className="fullscreen-image-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screenshot ${currentImageIndex + 1} full screen`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            e.stopPropagation();
            setIsImageFullscreen(false);
          }}
        >
          <button
            className="fullscreen-image-close"
            onClick={(e) => {
              e.stopPropagation();
              setIsImageFullscreen(false);
            }}
            aria-label="Close full screen image"
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {project.screenshots.length > 1 && (
            <>
              <button
                className="fullscreen-image-nav fullscreen-image-nav--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                aria-label="Previous full screen screenshot"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="fullscreen-image-nav fullscreen-image-nav--next"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                aria-label="Next full screen screenshot"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          {project.screenshots.map((src, idx) => (
            <Image
              key={`fullscreen-${src}`}
              className="fullscreen-image"
              src={src}
              alt={`${project.title} screenshot ${idx + 1} full screen`}
              width={1920}
              height={1080}
              sizes="100vw"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                display: idx === currentImageIndex ? "block" : "none",
              }}
              unoptimized={true}
              priority
              onClick={(e) => e.stopPropagation()}
            />
          ))}

          <div className="fullscreen-image-counter">
            {currentImageIndex + 1} / {project.screenshots.length}
          </div>
        </div>
      )}
    </div>
  );
}

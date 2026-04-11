"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────── */
const experience = [
  {
    period: "Nov 2025 – Mar 2026",
    role: "Full-Stack Developer Intern",
    company: "P Pella Company Limited",
    location: "Remote / Hybrid",
    bullets: [
      "Architected and delivered a production-ready aquaculture management platform (Next.js 15, React 19, Node.js/Express) for Betagro, digitizing farm operations and reducing manual data entry by ~80%.",
      "Designed scalable RESTful API using TypeScript and PostgreSQL with Prisma ORM; enforced type safety across all system layers, reducing runtime errors by ~65% through strict typing.",
      "Implemented comprehensive test suite with Jest achieving 95%+ statement coverage; identified and prevented critical bugs before production through rigorous integration testing.",
      "Managed end-to-end production deployment on Ubuntu with Nginx reverse proxy and PM2 process management; maintained 99.9% uptime during operation.",
    ],
    stack: ["Next.js 15", "React 19", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "Jest", "Nginx", "PM2"],
    color: "blue",
  },
  {
    period: "Mar 2025 – Jun 2025",
    role: "IT Developer Intern",
    company: "The Old Phuket Karon Beach Resort",
    location: "Phuket, Thailand",
    bullets: [
      "Developed full-stack Applicant Tracking System (React, TypeScript) streamlining HR recruitment workflows; reduced hiring process duration by 40% and eliminated manual spreadsheet maintenance.",
      "Built real-time event check-in platform using Google Apps Script and Sheets; managed operations for 200+ attendees per event with 98% data accuracy and zero downtime.",
      "Resolved critical network and device issues across hotel systems; maintained ~99.5% operational uptime and reduced IT support tickets by 35% month-over-month.",
    ],
    stack: ["React", "TypeScript", "Google Apps Script", "Google Sheets", "REST API"],
    color: "cyan",
  },
];

const projects = [
  {
    icon: "🐟",
    title: "Smart Catfish Farm Management",
    subtitle: "Aquaculture Operations Platform",
    period: "Nov 2025 – Mar 2026",
    description:
      "Mission-critical full-stack platform for aquaculture operations. Real-time monitoring of feeding schedules, animal health, water quality; comprehensive analytics dashboard. Deployed to production supporting enterprise-scale operations.",
    stack: ["Next.js 15", "React 19", "Node.js", "PostgreSQL", "Prisma", "Jest"],
    color: "blue",
    highlight: true,
  },
  {
    icon: "👥",
    title: "HR Recruitment Workflow System",
    subtitle: "Applicant Tracking System",
    period: "Mar 2025 – Jun 2025",
    description:
      "End-to-end HR workflow automation. Streamlined applicant intake, interview coordination, status tracking, and decision management; eliminated spreadsheet dependencies and improved data consistency.",
    stack: ["React", "TypeScript", "REST API"],
    color: "cyan",
    highlight: false,
  },
  {
    icon: "📋",
    title: "Event Check-In Platform",
    subtitle: "Real-Time Attendance System",
    period: "Mar 2025 – Jun 2025",
    description:
      "Real-time attendance system for hotel events. Google Apps Script backend with live data sync; optimized UX for non-technical staff. Handled 200+ concurrent users per event.",
    stack: ["Google Apps Script", "Google Sheets", "JavaScript"],
    color: "green",
    highlight: false,
  },
  {
    icon: "🛒",
    title: "FurniShop E-Commerce Platform",
    subtitle: "Full-Stack Furniture Store",
    period: "2026",
    description:
      "Production e-commerce platform with complete payment processing, order management, and admin dashboard. Integrated Omise payment gateway with PCI compliance considerations; analytics-driven product discovery.",
    stack: ["Next.js", "TypeScript", "Prisma", "Firebase", "Omise", "PostgreSQL"],
    color: "purple",
    highlight: false,
  },
  {
    icon: "🐄",
    title: "DukeFarm Disease Analyzer",
    subtitle: "AI-Powered Agricultural Tool",
    period: "2025 – 2026",
    description:
      "AI-powered diagnostic system for agricultural disease detection. RESTful API architecture for image processing, FastAPI backend for ML inference, analytics dashboard for farm decision-making.",
    stack: ["Node.js", "Express", "TypeScript", "FastAPI", "PostgreSQL"],
    color: "orange",
    highlight: false,
  },
  {
    icon: "🎓",
    title: "Teaching Assistant — Python Programming",
    subtitle: "Prince of Songkla University",
    period: "2024 – 2025",
    description:
      "Teaching Assistant for foundational programming course (60+ students). Developed debugging methodologies, code review rubrics, and problem-solving frameworks. Mentored on software engineering best practices.",
    stack: ["Python", "Algorithm", "Mentoring", "Code Review"],
    color: "yellow",
    highlight: false,
  },
];

const skillGroups = [
  {
    icon: "⚛️",
    title: "Frontend",
    color: "#60a5fa",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    skills: ["React", "Next.js", "Vite", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: "📱",
    title: "Mobile Development",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
    skills: ["Flutter", "Dart", "React Native", "Riverpod", "Android Development", "Mobile UI/UX"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    color: "#34d399",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    skills: ["Node.js", "Express", "NestJS", "PHP", "FastAPI", "Strapi", "Firebase", "Google Apps Script"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    color: "#a78bfa",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Firestore", "Redis", "Prisma ORM"],
  },
  {
    icon: "🚀",
    title: "DevOps & Cloud",
    color: "#fb923c",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Nginx", "Apache", "PM2", "AWS", "GCP", "Ubuntu/Linux"],
  },
  {
    icon: "🧠",
    title: "AI / ML & Data",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
    skills: ["Machine Learning", "Data Analytics", "Python", "Statistical Analysis", "Data Visualization"],
  },
  {
    icon: "✅",
    title: "Testing & QA",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    skills: ["Jest", "Pytest", "Swagger", "ReDoc", "Playwright", "Locust", "Postman", "Supertest"],
  },
  {
    icon: "⚡",
    title: "High-Performance Computing",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
    skills: ["HPC", "Performance Optimization", "Distributed Systems", "Scalability", "Load Testing"],
  },
  {
    icon: "🔒",
    title: "Systems & Security",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.2)",
    skills: ["Networking", "Cybersecurity", "Software Architecture", "REST API", "System Design"],
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* Scroll progress bar */
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const percent = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollProgress(percent);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Intersection observer for fade-up animations */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background */}
      <div className="bg-mesh" />

      {/* Navbar */}
      <nav className="navbar" aria-label="Main navigation">
        <a href="#hero" className="nav-link">Home</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#contact" className="nav-cta">Hire Me ↗</a>
      </nav>

      <div className="page-wrapper">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section id="hero">
          <div className="content-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
              {/* Left */}
              <div>
                <div className="hero-badge">
                  <span className="dot" />
                  Available for Full-Stack Roles
                </div>
                <h1 className="hero-name">
                  Ratchanon<br />
                  <span className="gradient-text">Kulpatrakorn</span>
                </h1>
                <p className="hero-title">
                  <span className="type-text">Full-Stack Developer</span>
                </p>
                <p className="hero-description">
                  Full-stack engineer specializing in production-grade systems. Recent Computer Engineering graduate
                  with proven internship experience architecting, developing, and deploying scalable platforms.
                  Strong foundation in system design, API development, and infrastructure—focused on building
                  solutions that scale and endure.
                </p>
                <div className="hero-ctas">
                  <a href="#contact" className="btn-primary">
                    Get in Touch ✉
                  </a>
                  <a href="#projects" className="btn-secondary">
                    View Projects →
                  </a>
                  <a
                    href="https://github.com/koard"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    GitHub ↗
                  </a>
                </div>
                {/* Stats */}
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-value">10+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                    <div className="stat-item">
                    <div className="stat-value">2</div>
                    <div className="stat-label">Internships</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">3.38</div>
                    <div className="stat-label">GPA · Honors</div>
                  </div>
                </div>
              </div>

              {/* Right — Visual */}
              <div className="hero-visual" style={{ minWidth: "280px" }}>
                <div className="avatar-ring">
                  <div className="avatar-inner">
                    <span>👨‍💻</span>
                  </div>
                </div>
                <div className="floating-chip chip-1">⚛️ React · Next.js</div>
                <div className="floating-chip chip-2">🟢 Node.js · Express</div>
                <div className="floating-chip chip-3">🐘 PostgreSQL</div>
                <div className="floating-chip chip-4">🐳 Docker · K8s</div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── EXPERIENCE ────────────────────────────────────────── */}
        <section id="experience">
          <div className="content-container">
            <div className="fade-up">
              <div className="section-eyebrow">Work Experience</div>
              <h2 className="section-title">
                Professional Experience
              </h2>
              <p style={{ marginTop: "0.75rem", color: "var(--text-secondary)", maxWidth: "520px" }}>
                Production engineering internships at established companies, delivering measurable impact through scalable systems and robust architecture.
              </p>
            </div>
            <div className="timeline-grid" style={{ marginTop: "2.5rem" }}>
              {experience.map((job, i) => (
                <div key={i} className="timeline-item fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="timeline-connector">
                    <div className="timeline-dot" />
                    {i < experience.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-period">▸ {job.period}</div>
                    <div className="timeline-role">{job.role}</div>
                    <div className="timeline-company">{job.company} · {job.location}</div>
                    <ul className="timeline-bullets">
                      {job.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "1.25rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {job.stack.map((s) => (
                        <span key={s} className="tech-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── PROJECTS ──────────────────────────────────────────── */}
        <section id="projects">
          <div className="content-container">
            <div className="fade-up">
              <div className="section-eyebrow">Selected Projects</div>
              <h2 className="section-title">Featured Projects</h2>
              <p style={{ marginTop: "0.75rem", color: "var(--text-secondary)", maxWidth: "520px" }}>
                Production systems and full-stack applications demonstrating architecture, engineering discipline, and end-to-end ownership.
              </p>
            </div>
            <div className="projects-grid" style={{ marginTop: "2.5rem" }}>
              {projects.map((p, i) => (
                <article
                  key={i}
                  className="project-card fade-up"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="project-card-header">
                    <div className="project-icon">{p.icon}</div>
                    <span className="project-arrow">↗</span>
                  </div>
                  <div className="project-period">{p.period}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span key={s} className="tech-tag">{s}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── SKILLS ────────────────────────────────────────────── */}
        <section id="skills">
          <div className="content-container">
            <div className="fade-up">
              <div className="section-eyebrow">Technical Skills</div>
              <h2 className="section-title">Technical Expertise</h2>
              <p style={{ marginTop: "0.75rem", color: "var(--text-secondary)", maxWidth: "520px" }}>
                Comprehensive capability across the full technology stack — from modern frontend frameworks through backend systems and infrastructure.
              </p>
            </div>
            <div className="skills-grid" style={{ marginTop: "2.5rem" }}>
              {skillGroups.map((group, i) => (
                <div
                  key={i}
                  className="skill-card fade-up"
                  style={{
                    transitionDelay: `${i * 0.07}s`,
                    borderColor: group.border,
                  }}
                >
                  <div className="skill-card-header">
                    <div
                      className="skill-icon"
                      style={{ background: group.bg, border: `1px solid ${group.border}` }}
                    >
                      {group.icon}
                    </div>
                    <span className="skill-card-title" style={{ color: group.color }}>
                      {group.title}
                    </span>
                  </div>
                  <div className="skill-tags">
                    {group.skills.map((s) => (
                      <span key={s} className="skill-badge">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div
              className="fade-up"
              style={{
                marginTop: "1.5rem",
                padding: "1.25rem 1.5rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Languages
              </span>
              <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                <span className="achievement-chip" style={{ background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.25)", color: "#fbbf24" }}>
                  Thai — Native
                </span>
                <span className="achievement-chip" style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.25)", color: "#60a5fa" }}>
                  English — Working Proficiency (TOEIC Mock ~800)
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── EDUCATION ─────────────────────────────────────────── */}
        <section id="education">
          <div className="content-container">
            <div className="fade-up">
              <div className="section-eyebrow">Education</div>
              <h2 className="section-title">Academic Background</h2>
            </div>
            <div className="edu-grid" style={{ marginTop: "2.5rem" }}>
              <div className="edu-card fade-up glass-card" style={{ padding: "1.75rem" }}>
                <div
                  style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.4rem", marginBottom: "1rem",
                  }}
                >
                  🎓
                </div>
                <div className="edu-degree">Bachelor of Engineering<br />in Computer Engineering</div>
                <div className="edu-institution">Prince of Songkla University</div>
                <div className="edu-period">2022 – 2026</div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="edu-gpa">★ GPA 3.38</span>
                  <span
                    className="achievement-chip"
                    style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.25)", color: "#60a5fa" }}
                  >
                    Second Class Honors
                  </span>
                </div>
                <div style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "0.83rem", lineHeight: 1.65 }}>
                  Studied full-stack engineering foundations, operating systems, databases, networking, algorithms, and applied AI/ML. Served as Teaching Assistant for 60+ students.
                </div>
              </div>

              <div className="edu-card fade-up glass-card" style={{ padding: "1.75rem", transitionDelay: "0.1s" }}>
                <div
                  style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    background: "rgba(250,191,36,0.1)", border: "1px solid rgba(250,191,36,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.4rem", marginBottom: "1rem",
                  }}
                >
                  🏆
                </div>
                <div className="edu-degree">High School Diploma<br />(SMTE Program)</div>
                <div className="edu-institution">Sadao Khanchai School</div>
                <div className="edu-period">2019 – 2022</div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="edu-gpa">★ GPA 3.96</span>
                  <span
                    className="achievement-chip"
                    style={{ background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.25)", color: "#fbbf24" }}
                  >
                    🥇 Ranked 1st
                  </span>
                </div>
                <div style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "0.83rem", lineHeight: 1.65 }}>
                  Science, Mathematics, Technology & Environment program. Graduated top of class with highest GPA in the graduating cohort.
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── CONTACT ───────────────────────────────────────────── */}
        <section id="contact" style={{ paddingBottom: "6rem" }}>
          <div className="content-container">
            <div className="cta-box fade-up">
              <div className="section-eyebrow" style={{ justifyContent: "center" }}>
                Contact
              </div>
              <h2 className="cta-title">Get in Touch</h2>
              <p className="cta-subtitle">
                Seeking full-stack and backend engineering roles where I can design robust systems and deliver measurable impact. Let&apos;s discuss how my experience aligns with your team&apos;s needs.
              </p>
              <div className="contact-row" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
                <a href="mailto:r.kulpatrakorn@gmail.com" className="btn-primary">
                  ✉ Send Email
                </a>
                <a
                  href="https://github.com/koard"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  GitHub ↗
                </a>
              </div>
              <div className="contact-row" style={{ justifyContent: "center" }}>
                <a href="mailto:r.kulpatrakorn@gmail.com" className="contact-chip">
                  <span className="icon">✉</span>
                  r.kulpatrakorn@gmail.com
                </a>
                <a href="tel:0950869626" className="contact-chip">
                  <span className="icon">📞</span>
                  095-086-9626
                </a>
                <a
                  href="https://www.linkedin.com/in/kulpatrakorn/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-chip"
                >
                  <span className="icon">💼</span>
                  linkedin.com/in/kulpatrakorn
                </a>
              </div>
            </div>

            {/* Footer */}
            <p
              style={{
                textAlign: "center",
                marginTop: "3rem",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-fira-code)",
              }}
            >
              Built with Next.js · Designed & coded by Ratchanon Kulpatrakorn · {new Date().getFullYear()}
            </p>
          </div>
        </section>

      </div>
    </>
  );
}

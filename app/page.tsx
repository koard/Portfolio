"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ProjectModal, { type ProjectDetail } from "./components/ProjectModal";

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
    stack: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "Jest", "Nginx", "PM2"],
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

const projects: ProjectDetail[] = [
  {
    icon: "🐟",
    title: "Smart Catfish Farm Management",
    subtitle: "Aquaculture Operations Platform",
    period: "Nov 2025 – Mar 2026",
    description:
      "Mission-critical production platform for aquaculture operations. Real-time monitoring, automated scheduling, and enterprise-grade deployment.",
    longDescription:
      "A production-deployed aquaculture management system commissioned for Betagro, one of Thailand\u2019s largest agribusiness conglomerates. The platform replaces manual paper-based operations with a centralized digital system covering real-time pond monitoring, automated feeding schedule management, water quality tracking, health incident logging, and staff task assignment. Built with a TypeScript-first architecture across a Next.js 15 frontend and Node.js/Express backend, with comprehensive automated testing and enterprise-grade Ubuntu/Nginx/PM2 deployment.",
    role: "Full-Stack Developer (Lead)",
    status: "Production",
    highlights: [
      { label: "Data Entry Reduction", value: "~80%" },
      { label: "Test Coverage", value: "95%+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Runtime Errors \u2193", value: "~65%" },
    ],
    achievements: [
      "Architected and delivered a production-ready platform within a 5-month internship timeline, deployed live for an enterprise client (Betagro).",
      "Designed a scalable RESTful API with TypeScript and PostgreSQL/Prisma ORM, enforcing strict type safety across all system layers to reduce runtime errors by ~65%.",
      "Implemented a comprehensive Jest test suite achieving 95%+ statement coverage, catching critical bugs before production release.",
      "Managed end-to-end Ubuntu production deployment with Nginx reverse proxy and PM2 process management, maintaining 99.9% uptime throughout operations.",
    ],
    stack: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "Jest", "Nginx", "PM2"],
    color: "blue",
    github: null,
    demo: null,
    screenshots: [],
    highlight: true,
  },
  {
    icon: "👥",
    title: "HR Recruitment Workflow System",
    subtitle: "Applicant Tracking System",
    period: "Mar 2025 – Jun 2025",
    description:
      "End-to-end ATS replacing spreadsheet-based HR workflows. Multi-stage pipeline with role-based access and real-time status tracking.",
    longDescription:
      "A full-stack Applicant Tracking System (ATS) developed for The Old Phuket Karon Beach Resort, transforming a spreadsheet-based recruitment process into a structured digital workflow. The system covers the entire hiring lifecycle \u2014 from initial applicant submission and document collection through multi-stage interview scheduling, evaluation scoring, and final hiring decisions. Role-based access control ensures HR staff, interviewers, and managers each see relevant data, eliminating information overload and reducing coordination overhead.",
    role: "Full-Stack Developer",
    status: "Production",
    highlights: [
      { label: "Hiring Time Reduction", value: "40%" },
      { label: "Spreadsheets Eliminated", value: "100%" },
      { label: "Recruitment Stages", value: "Multi-stage" },
    ],
    achievements: [
      "Reduced total hiring process duration by 40% through automated candidate status tracking and instant notifications at each pipeline stage.",
      "Fully eliminated spreadsheet-based HR workflows, replacing them with a purpose-built digital platform with full audit trails.",
      "Implemented role-based access control (RBAC) with distinct HR, interviewer, and manager views, improving both data security and workflow clarity.",
    ],
    stack: ["React", "TypeScript", "Node.js", "REST API"],
    color: "cyan",
    github: null,
    demo: null,
    screenshots: [],
    highlight: false,
  },
  {
    icon: "📋",
    title: "Event Check-In Platform",
    subtitle: "Real-Time Attendance System",
    period: "Mar 2025 – Jun 2025",
    description:
      "Serverless real-time check-in for large hotel events. 200+ concurrent users, zero infrastructure cost, 98% data accuracy.",
    longDescription:
      "A real-time event check-in and attendance management platform built for The Old Phuket Karon Beach Resort, handling large-scale hotel events with 200+ concurrent attendees per session. Built on Google Apps Script as a serverless backend with Google Sheets as a live database, the system provides instant check-in validation, real-time attendance dashboards, and post-event reporting \u2014 all with zero infrastructure cost. The UX was purpose-designed for non-technical hotel staff, prioritising speed and error prevention.",
    role: "Developer",
    status: "Production",
    highlights: [
      { label: "Concurrent Users", value: "200+" },
      { label: "Data Accuracy", value: "98%" },
      { label: "Infra Cost", value: "\u00120" },
      { label: "Downtime", value: "Zero" },
    ],
    achievements: [
      "Built a serverless real-time check-in system handling 200+ concurrent attendees with zero infrastructure cost using Google Apps Script.",
      "Achieved 98% data accuracy through input validation and duplicate-check logic built directly into the check-in flow.",
      "Optimised UX for non-technical hotel staff, reducing average check-in time per attendee to under 3 seconds.",
      "Delivered zero downtime across all hotel events during the 4-month internship period.",
    ],
    stack: ["Google Apps Script", "Google Sheets", "JavaScript", "HTML/CSS"],
    color: "green",
    github: null,
    demo: null,
    screenshots: [],
    highlight: false,
  },
  {
    icon: "🛍️",
    title: "FurniShop E-Commerce Platform",
    subtitle: "Full-Stack Furniture Store",
    period: "2026",
    description:
      "Full-featured e-commerce platform with Omise payment integration, admin dashboard, and Firebase Auth.",
    longDescription:
      "A full-featured e-commerce platform for a furniture retail business, built with a focus on production readiness and payment security. The customer-facing storefront includes product catalog, advanced search and filtering, cart management, and a complete Omise-integrated checkout flow. An admin dashboard covers inventory management, order fulfillment tracking, revenue analytics, and customer management. Authentication is handled through Firebase with persistent sessions and role-based access separating customer and admin portals.",
    role: "Full-Stack Developer",
    status: "In Development",
    highlights: [
      { label: "Payment Gateway", value: "Omise" },
      { label: "Auth Provider", value: "Firebase" },
      { label: "Admin Dashboard", value: "Full" },
      { label: "PCI Consideration", value: "\u2713" },
    ],
    achievements: [
      "Integrated Omise payment gateway with server-side charge processing and PCI compliance considerations for real card transactions.",
      "Built a full admin dashboard for inventory management, order fulfillment tracking, and revenue analytics.",
      "Implemented Firebase Authentication with persistent sessions and role-based access for both customer and admin portals.",
      "Designed a normalised PostgreSQL schema with Prisma ORM supporting complex product filtering, inventory tracking, and full order history.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Firebase", "Omise", "PostgreSQL"],
    color: "purple",
    github: "https://github.com/koard",
    demo: null,
    screenshots: [],
    highlight: false,
  },
  {
    icon: "🐄",
    title: "DukeFarm Disease Analyzer",
    subtitle: "AI-Powered Agricultural Tool",
    period: "2025 – 2026",
    description:
      "AI-powered livestock disease diagnostic platform with microservice architecture and ML inference via FastAPI.",
    longDescription:
      "An AI-powered disease diagnostic platform for agricultural use, designed to assist farm operators in early-stage livestock disease identification through image analysis and symptom reporting. The system uses a microservice architecture: a Node.js/Express REST API handles business logic and data management, while a FastAPI Python service runs ML model inference independently \u2014 enabling the compute-heavy ML workload to scale without affecting the core API. An analytics dashboard provides farm-level decision support with historical trend analysis.",
    role: "Backend Developer",
    status: "In Development",
    highlights: [
      { label: "Architecture", value: "Microservice" },
      { label: "ML Runtime", value: "FastAPI" },
      { label: "Input Types", value: "Image + Symptoms" },
    ],
    achievements: [
      "Designed a microservice architecture decoupling business logic (Node.js/Express) from ML inference (FastAPI/Python) for independent scaling.",
      "Built RESTful API endpoints for disease analysis requests with image upload handling, full CRUD, and historical trend aggregation.",
      "Implemented analytics endpoints supporting farm-level dashboards with disease frequency and seasonal pattern analysis.",
    ],
    stack: ["Node.js", "Express", "TypeScript", "FastAPI", "Python", "PostgreSQL"],
    color: "orange",
    github: "https://github.com/koard",
    demo: null,
    screenshots: [],
    highlight: false,
  },
  {
    icon: "🎓",
    title: "Teaching Assistant — Python Programming",
    subtitle: "Prince of Songkla University",
    period: "2024 – 2025",
    description:
      "TA for 60+ undergraduate engineering students. Led lab sessions, code reviews, and mentoring on software engineering fundamentals.",
    longDescription:
      "Served as Teaching Assistant for a foundational Python programming course at Prince of Songkla University, supporting a class of 60+ undergraduate Computer Engineering students across two semesters. Responsibilities included facilitation of weekly lab sessions, code review and grading, one-on-one debugging support, and creation of supplementary learning materials. The focus was on building strong computational thinking, clean code habits, and professional development foundations from the earliest stage of students\u2019 engineering careers.",
    role: "Teaching Assistant",
    status: "Academic",
    highlights: [
      { label: "Students", value: "60+" },
      { label: "Semesters", value: "2" },
      { label: "Course Level", value: "Foundational" },
    ],
    achievements: [
      "Led weekly lab sessions for 60+ students, providing hands-on Python programming guidance and real-time debugging support.",
      "Developed debugging methodologies and code review rubrics to standardise assessment and improve the quality of student feedback.",
      "Created supplementary learning materials including worked examples and problem sets aligned with software engineering best practices.",
      "Mentored students on algorithmic thinking, code readability, and professional habits that carry beyond the course.",
    ],
    stack: ["Python", "Algorithm Design", "Mentoring", "Code Review", "Technical Writing"],
    color: "yellow",
    github: null,
    demo: null,
    screenshots: [],
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
    skills: ["Node.js", "Express", "NestJS", "FastAPI", "Strapi", "Firebase", "Google Apps Script", "PHP"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    color: "#a78bfa",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Firestore", "Redis", "Prisma ORM", "Google Sheets"],
  },
  {
    icon: "🚀",
    title: "DevOps & Cloud",
    color: "#fb923c",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Vercel", "Render", "AWS", "GCP", "Ubuntu/Linux"],
  },
  {
    icon: "🧠",
    title: "AI / ML & Data",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
    skills: ["Python", "R", "PyTorch", "TensorFlow", "OpenCV", "Pandas", "NumPy", "Scikit-Learn", "ML Inference"],
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
    skills: ["C / C++", "CUDA", "OpenMP", "MPI", "Apache Spark", "Hadoop", "Ansible", "Slurm", "Cluster Computing"],
  },
  {
    icon: "🔒",
    title: "Systems & Security",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.2)",
    skills: ["Linux (Ubuntu)", "Nginx Reverse Proxy", "JWT Authentication", "OAuth2", "RBAC", "Microservices", "Docker Security"],
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const onCloseModal = useCallback(() => setSelectedProject(null), []);

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
                  I’m a Full-Stack Developer experienced in building web applications, backend services, and production deployments. My background includes API design, scalable backend development, testing, and maintaining reliable systems in real-world environments. I’m particularly interested in building maintainable systems that balance technical quality with practical business impact.
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
                    <div className="stat-label">GPA</div>
                  </div>
                </div>
              </div>

              {/* Right — Visual */}
              <div className="hero-visual" style={{ minWidth: "280px" }}>
                <div className="avatar-ring">
                  <div className="avatar-inner">
                    <span>👨🏻‍💻</span>
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
              <div className="section-eyebrow">Career Path</div>
              <h2 className="section-title">
                Professional Experience
              </h2>
            </div>
            <div className="timeline-grid" style={{ marginTop: "2.5rem" }}>
              {experience.map((job, i) => (
                <div key={i} className="timeline-item fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="timeline-connector">
                    <div className="timeline-dot" />
                    {i < experience.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-period">{job.period}</div>
                    <div className="timeline-header" style={{ marginBottom: "1.1rem" }}>
                      <h3 className="timeline-role">{job.role}</h3>
                      <div className="timeline-company">{job.company}</div>
                    </div>
                    <ul className="timeline-bullets">
                      {job.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
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
              <div className="section-eyebrow">Portfolio</div>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <div className="projects-grid" style={{ marginTop: "2.5rem" }}>
              {projects.map((p, i) => (
                <article
                  key={i}
                  className="project-card fade-up"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${p.title}`}
                  onClick={() => setSelectedProject(p)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedProject(p)}
                >

                  {/* Title */}
                  <h3 className="project-title">{p.title}</h3>

                  {/* Description */}
                  <p className="project-desc">{p.description}</p>

                  {/* Persistent CTA button */}
                  <div className="project-cta-btn" aria-hidden="true">
                    <span>View Case Study</span>
                    <span className="project-cta-arrow">↗</span>
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
              <div className="section-eyebrow">Capabilities</div>
              <h2 className="section-title">Technical Expertise</h2>
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
              <div className="section-eyebrow">Qualifications</div>
              <h2 className="section-title">Academic Background</h2>
            </div>
            <div className="timeline-grid" style={{ marginTop: "2.5rem" }}>
              {/* University */}
              <div className="timeline-item fade-up">
                <div className="timeline-connector">
                  <div className="timeline-dot" />
                  <div className="timeline-line" />
                </div>
                <div className="timeline-card">
                  <div className="timeline-period">2022 – 2026</div>
                  <div className="timeline-header" style={{ marginBottom: "1.1rem" }}>
                    <h3 className="timeline-role">Bachelor of Engineering in Computer Engineering</h3>
                    <div className="timeline-company">Prince of Songkla University</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    <span className="edu-gpa">GPA 3.38</span>
                    <span
                      className="achievement-chip"
                      style={{ background: "rgba(251, 191, 36, 0.08)", borderColor: "rgba(251, 191, 36, 0.25)", color: "#fbbf24" }}
                    >
                      Second Class Honors
                    </span>
                  </div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                    <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Web Development, Software Development & Database Technologies, Mobile Application Development, Artificial Intelligence & Machine Learning, Data Analytics & Data Science, Statistics for Data Analysis, High-Performance Computing, Network Administration, Software Architecture, Embedded Systems and IoT.
                  </div>
                </div>
              </div>

              {/* High School */}
              <div className="timeline-item fade-up" style={{ transitionDelay: "0.1s" }}>
                <div className="timeline-connector">
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-card">
                  <div className="timeline-period">2019 – 2022</div>
                  <div className="timeline-header" style={{ marginBottom: "1.1rem" }}>
                    <h3 className="timeline-role">High School Diploma in SMTE Program</h3>
                    <div className="timeline-company">Sadao Khanchai School</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    <span className="edu-gpa">GPA 3.96</span>
                    <span
                      className="achievement-chip"
                      style={{ background: "rgba(251, 191, 36, 0.08)", borderColor: "rgba(251, 191, 36, 0.25)", color: "#fbbf24" }}
                    >
                      Ranked 1st in the graduating class
                    </span>
                  </div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                    Built a strong analytical foundation through an intensive Science, Mathematics, and Technology curriculum. Developed early interests in programming and logical problem-solving that led to pursuing Computer Engineering.
                  </div>
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
              <p className="cta-subtitle" style={{ marginBottom: "2.5rem" }}>
                I&apos;m currently seeking full-stack and backend engineering roles where I can architect robust systems and deliver meaningful impact. Whether you have an opportunity or just want to connect, my inbox is always open.
              </p>

              {/* Creative Contact Email Card */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
                <a
                  href="mailto:r.kulpatrakorn@gmail.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1.2rem",
                    padding: "0.5rem 1.5rem 0.5rem 0.5rem",
                    background: "rgba(59, 130, 246, 0.05)",
                    border: "1px solid rgba(59, 130, 246, 0.15)",
                    borderRadius: "999px",
                    textDecoration: "none",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(59, 130, 246, 0.15)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(59, 130, 246, 0.05)";
                    e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.15)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(59, 130, 246, 0)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                    color: "white",
                    fontSize: "1.4rem",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                  }}>
                    <span style={{ WebkitTextFillColor: "initial" }}>✉</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700, marginBottom: "0.1rem" }}>
                      Email Me At
                    </span>
                    <span style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      r.kulpatrakorn@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Clean social/contact buttons row */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
                <a
                  href="tel:0950869626"
                  className="btn-secondary"
                  style={{ padding: "0.75rem 1.5rem" }}
                >
                  <span style={{ marginRight: "0.5rem", WebkitTextFillColor: "initial" }}>📞</span> 095-086-9626
                </a>
                <a
                  href="https://github.com/koard"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: "0.75rem 1.5rem" }}
                >
                  <span style={{ marginRight: "0.5rem", WebkitTextFillColor: "initial" }}>💻</span> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kulpatrakorn/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: "0.75rem 1.5rem" }}
                >
                  <span style={{ marginRight: "0.5rem", WebkitTextFillColor: "initial" }}>💼</span> LinkedIn
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

      {/* ── Project Detail Modal ─────────────────────────────── */}
      <ProjectModal project={selectedProject} onClose={onCloseModal} />
    </>
  );
}

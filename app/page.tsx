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
      "Owned the end-to-end development of an aquaculture management platform for a Betagro–Kasetsart University research initiative, transforming fragmented manual workflows into a unified system for farm tracking, weather-driven feeding, and survey management.",
      "Engineered a scalable backend architecture with Node.js, TypeScript, PostgreSQL, and Prisma, improving type integrity and API reliability across the system while reducing runtime failures by approximately 65%.",
      "Established a robust automated testing strategy with Jest, driving coverage beyond 95% and improving software quality through earlier identification of critical defects prior to production rollout.",
      "Oversaw production deployment and runtime operations on Ubuntu infrastructure with Nginx reverse proxy and PM2 process management, maintaining 99.9% uptime and dependable service continuity.",
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
      "Developed a serverless event operations platform using Google Apps Script for an annual hospitality IT seminar with approximately 300 attendees from leading hotels across Southern Thailand, replacing manual registration with a QR-based self-service workflow that improved attendee throughput and reduced front-desk dependency.",
      "Implemented a React and Firebase Applicant Tracking System that centralized applicant data and job posting workflows, providing HR with a more structured and manageable recruitment process.",
      "Provided rapid-response technical support for critical local networking and device infrastructure, troubleshooting software and connectivity issues across internal and guest-facing services in a hospitality environment.",
    ],
    stack: ["React", "TypeScript", "Google Apps Script", "Google Sheets", "REST API"],
    color: "cyan",
  },
];

const projects: ProjectDetail[] = [
  {
    icon: "🐟",
    badge: "Web App",
    title: "Smart Catfish Farm Management",
    period: "Nov 2025 – Mar 2026",
    description:
      "Mission-critical production platform for aquaculture operations. Real-time monitoring, automated scheduling, and enterprise-grade deployment.",
    longDescription:
      "A production-deployed aquaculture management platform developed for a joint Betagro–Kasetsart University research initiative. The platform replaces fragmented manual workflows with a unified digital system covering real-time pond monitoring, weather-driven feeding schedules, water quality tracking, and survey management. Engineered with a scalable Node.js/TypeScript and PostgreSQL backend, and a Next.js 15 frontend, ensuring strict type safety and reliable API performance. The system includes comprehensive automated testing and enterprise-grade Ubuntu/Nginx/PM2 deployment.",
    role: "Full-Stack Developer Intern",
    status: "Production",
    achievements: [
      "Owned the end-to-end development of the platform within a 5-month internship, transforming manual workflows into a unified system.",
      "Engineered a scalable backend architecture with Node.js, TypeScript, PostgreSQL, and Prisma, reducing runtime failures by approximately 65%.",
      "Established a robust automated testing strategy with Jest, driving coverage beyond 95% prior to production rollout.",
      "Oversaw production deployment and runtime operations on Ubuntu infrastructure with Nginx reverse proxy and PM2 process management, maintaining 99.9% uptime.",
    ],
    stack: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "Jest", "Nginx", "PM2"],
    color: "blue",
    github: "https://github.com/koard/DukeFarm-Frontend",
    demo: "https://dukefarm.ku.ac.th/",
    screenshots: [
      "/dukefarm/1.png",
      "/dukefarm/2.png",
      "/dukefarm/3.png",
      "/dukefarm/4.png",
      "/dukefarm/5.png",
      "/dukefarm/6.png",
      "/dukefarm/7.png"
    ],
    highlight: false,
  },
  {
    icon: "📅",
    badge: "Web App",
    title: "Event Operations Platform",
    period: "Mar 2025 – Jun 2025",
    description:
      "Serverless real-time check-in and operations system for large hotel events. 300+ concurrent users with zero infrastructure cost.",
    longDescription:
      "A real-time event check-in and attendance management platform built during my internship at The Old Phuket Karon Beach Resort. Designed for an annual hospitality IT seminar with approximately 300 attendees from leading hotels across Southern Thailand. Built on Google Apps Script as a serverless backend with Google Sheets as a live database, the system replaces manual registration with a QR-based self-service workflow that improves attendee throughput and reduces front-desk dependency. It provides instant check-in validation, live attendance dashboards, and post-event reporting — all with zero infrastructure cost.",
    role: "IT Developer Intern",
    status: "Production",
    achievements: [
      "Developed a serverless event operations platform using Google Apps Script to manage approximately 300 attendees.",
      "Replaced manual registration with a QR-based self-service workflow, drastically improving attendee throughput and reducing front-desk dependency."
    ],
    stack: ["Google Apps Script", "Google Sheets", "JavaScript", "HTML/CSS"],
    color: "green",
    github: null,
    demo: null,
    screenshots: [
      "/event/1.png",
      "/event/2.png"
    ],
    highlight: false,
  },
  {
    icon: "🛍️",
    badge: "Web App",
    title: "Furniture Shop Online",
    period: "2025",
    description:
      "Full-featured e-commerce platform with Omise payment integration, admin dashboard, and Firebase Auth.",
    longDescription:
      "A full-featured e-commerce platform for a furniture retail business, built with a focus on production readiness and payment security. The customer-facing storefront includes a dynamic product catalog, advanced search and filtering, cart management, and a complete Omise-integrated checkout flow. An admin dashboard covers inventory management, order fulfillment tracking, revenue analytics, and customer management. Authentication is handled through Firebase with persistent sessions and role-based access separating customer and admin portals.",
    role: "Full-Stack Developer",
    status: "Completed",
    achievements: [
      "Integrated Omise payment gateway with server-side charge processing and PCI compliance considerations for real card transactions.",
      "Built a full admin dashboard for inventory management, order fulfillment tracking, and revenue analytics.",
      "Implemented Firebase Authentication with persistent sessions and role-based access for both customer and admin portals.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Firebase", "Omise", "PostgreSQL"],
    color: "purple",
    github: "https://github.com/koard/FurniShop",
    demo: "https://gofurnishop.vercel.app/",
    screenshots: [
      "/furnishop/1.png",
      "/furnishop/2.png",
      "/furnishop/3.png",
      "/furnishop/4.png",
      "/furnishop/5.png",
      "/furnishop/6.png",
      "/furnishop/7.png",
      "/furnishop/8.png",
      "/furnishop/9.png"
    ],
    highlight: false,
  },
  {
    icon: "🎮",
    badge: "Web App",
    title: "Game Store",
    period: "2024",
    description:
      "Responsive digital game storefront featuring user libraries, reviews, and a robust search engine.",
    longDescription:
      "A web-based digital game distribution platform allowing users to browse, purchase, and manage their game libraries. The platform features an intuitive UI inspired by modern gaming storefronts, complete with advanced search, genre filtering, user reviews, and promotional banners. The backend securely handles user accounts, wishlists, and transaction mockups. A rich media integration allows trailers and screenshots to be rendered smoothly within the product details.",
    role: "Frontend Developer",
    status: "Completed",
    achievements: [
      "Developed a highly responsive and animated frontend using React and Tailwind CSS.",
      "Implemented complex state management for shopping carts and user wishlists.",
      "Created a robust search and filtering system for finding games by genre, price, and rating.",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express"],
    color: "red",
    github: "https://github.com/koard",
    demo: null,
    screenshots: [
      "/game/1.png",
      "/game/2.png",
      "/game/3.png",
      "/game/4.png"
    ],
    highlight: false,
  },
  {
    icon: "🏃‍♂️",
    badge: "Mobile App",
    title: "Personal Wellness Tracker",
    period: "2025",
    description:
      "Mobile application for tracking fitness activities, nutrition, and daily habits with rich data visualization.",
    longDescription:
      "A cross-platform mobile application developed with Flutter that helps users maintain healthy lifestyles by tracking their daily activities. The app includes features for logging workouts, recording meals, and tracking water intake and sleep. It visualizes personal health trends over time using interactive charts and graphs. By leveraging local storage and background processing, the app remains responsive and functional even without an internet connection.",
    role: "Mobile App Developer",
    status: "Completed",
    achievements: [
      "Built a highly performant cross-platform application capable of 60 FPS rendering using Flutter and Dart.",
      "Integrated health data visualization using custom charting libraries tailored for a clean, minimalist UI.",
      "Implemented local data persistence and offline-first capabilities using SQLite.",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Riverpod", "Gemini API"],
    color: "pink",
    github: "https://github.com/koard/Personal-Wellness-Tracker",
    demo: null,
    screenshots: [
      "/wellness/1.png",
      "/wellness/2.png",
      "/wellness/3.png"
    ],
    highlight: false,
  },
  {
    icon: "🏫",
    badge: "Mobile App",
    title: "Smart Campus",
    period: "2024",
    description:
      "Mobile ecosystem application integrating campus maps, facility booking, and academic schedules.",
    longDescription:
      "An integrated mobile application designed to simplify campus life for university students. The application combines interactive campus maps with real-time facility availability, allowing students to seamlessly find open study rooms or book sports facilities. It securely integrates with the university's academic portal to fetch class schedules, grades, and important announcements, sending timely push notifications to keep students informed and organized.",
    role: "Mobile App Developer",
    status: "Completed",
    achievements: [
      "Integrated mapping libraries to provide interactive, indoor-outdoor campus navigation.",
      "Developed a reliable backend service (NestJS) to proxy and cache data from legacy university APIs.",
      "Implemented a real-time booking system for university facilities to prevent double-booking.",
    ],
    stack: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "Riverpod", "Google Maps API"],
    color: "blue",
    github: "https://github.com/koard/frontend_camhub",
    demo: null,
    screenshots: [
      "/campus/1.png",
      "/campus/2.png",
      "/campus/3.png",
      "/campus/4.png",
      "/campus/5.png",
      "/campus/6.png",
      "/campus/7.png",
      "/campus/8.png",
      "/campus/9.png",
      "/campus/10.png",
      "/campus/11.png",
      "/campus/12.png",
      "/campus/13.png",
      "/campus/14.png"
    ],
    highlight: false,
  },
  {
    icon: "🕵️‍♂️",
    badge: "AI/ML",
    title: "Fake News Detection",
    period: "2025",
    description:
      "Web application powered by an NLP machine learning model to verify the authenticity of news articles.",
    longDescription:
      "A machine learning project wrapped in a lightweight web application that allows users to analyze news articles for misinformation. The core model employs Natural Language Processing (NLP) techniques, trained on a massive dataset of verified and false news. A clean web interface accepts URLs or text blobs, forwarding them to a Python FastAPI backend where the model processes the text, performs sentiment analysis, and returns a probability score of authenticity alongside flagged linguistic patterns.",
    role: "Machine Learning Engineer",
    status: "Completed",
    achievements: [
      "Trained and fine-tuned a transformer-based NLP model achieving 92% validation accuracy on a dataset of 50,000+ articles.",
      "Deployed the model inference engine using FastAPI to ensure low latency for incoming classification requests.",
      "Built a user-friendly frontend to visualize model confidence scores and highlight potentially suspicious text sections.",
    ],
    stack: ["Python", "PyTorch", "Kaggle", "Flask", "Tailwind CSS"],
    color: "orange",
    github: "https://github.com/koard",
    demo: null,
    screenshots: [],
    highlight: false,
  },
  {
    icon: "🛡️",
    badge: "Embedded",
    title: "Automated Access Fee Collection",
    period: "2024",
    description:
      "Embedded hardware system for automated ticketing and fee collection using RFID and microcontroller integration.",
    longDescription:
      "An embedded systems project designed to automate the entry tracking and fee collection for restricted areas or parking facilities. The hardware utilizes RFID readers, an Arduino/ESP32 microcontroller, and servo motors to physically control access barriers. When a valid card is scanned, the device interfaces with a local database via Wi-Fi to verify account balances, deduct the required fee, and actuate the barrier—all within milliseconds. An onboard LCD provides instant feedback to users.",
    role: "Embedded Systems Engineer",
    status: "Completed",
    achievements: [
      "Programmed memory-constrained microcontrollers in C++ to handle sensor interrupts, hardware constraints, and network communications.",
      "Designed and soldered custom circuitry integrating motor drivers, RFID modules, and status displays.",
      "Implemented a secure API communication layer to validate credentials against a remote server.",
    ],
    stack: ["C++", "Python", "Odroid", "Arduino", "IoT", "SPI", "UART"],
    color: "yellow",
    github: null,
    demo: null,
    screenshots: [
      "/embedded/1.png",
      "/embedded/2.png",
      "/embedded/3.png"
    ],
    highlight: false,
  },
  {
    icon: "🖥️",
    badge: "HPC",
    title: "Raspberry Pi Spark Cluster",
    period: "2024",
    description:
      "A high-performance computing cluster built entirely from Raspberry Pi nodes running Apache Spark.",
    longDescription:
      "A High-Performance Computing (HPC) research project involving the construction and configuration of a distributed cluster using multiple Raspberry Pi single-board computers. The cluster is configured with Apache Hadoop and Apache Spark to process large datasets in parallel across the nodes. This project served as a physical sandbox for understanding distributed systems, cluster resource management, network topologies, and optimizing code for multi-node execution environments.",
    role: "Systems Administrator / Data Engineer",
    status: "Completed",
    achievements: [
      "Configured a physical Linux cluster with networked file systems (NFS) and passwordless SSH for seamless node integration.",
      "Deployed Apache Hadoop (HDFS) and Apache Spark to enable distributed storage and parallel processing.",
      "Successfully executed big data processing jobs, benchmarking performance scaling compared to single-node setups.",
    ],
    stack: ["Raspberry Pi", "Linux", "Apache Spark", "Hadoop (HDFS)", "Bash Scripting"],
    color: "purple",
    github: "https://github.com/koard",
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
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      <div className="page-wrapper">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section id="hero">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
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
                    Get in Touch
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
              <div className="hero-visual hidden lg:flex" style={{ minWidth: "280px" }}>
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
              <h2 className="section-title">Selected Projects</h2>
            </div>

            <div className="projects-grid" style={{ marginTop: "2.5rem" }}>
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className="project-card fade-up"
                  style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${p.title}`}
                  onClick={() => setSelectedProject(p)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedProject(p)}
                >
                  {/* Badge + icon row */}
                  <div className="project-card-top">
                    <span className="project-icon" aria-hidden="true">{p.icon}</span>
                    {p.badge && (
                      <span className={`project-badge project-badge--${p.badge.replace(/[^a-z]/gi, "").toLowerCase()}`}>
                        {p.badge}
                      </span>
                    )}
                  </div>

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

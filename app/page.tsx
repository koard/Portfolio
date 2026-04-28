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
      "Owned the end-to-end development of an aquaculture management platform for a Betagro-Kasetsart University research initiative, transforming fragmented manual workflows into a unified system, through responsive interfaces and dashboard workflows using Next.js.",
      "Engineered a scalable backend architecture with Node.js, TypeScript, PostgreSQL, and Prisma, improving type integrity and API reliability across the system while reducing runtime failures by approximately 65%.",
      "Established a robust automated testing strategy with Jest, driving coverage beyond 95% and improving software quality through earlier identification of critical defects prior to production rollout.",
      "Oversaw production deployment and runtime operations on Ubuntu infrastructure with Nginx reverse proxy and PM2 process management, maintaining 99.9% uptime and dependable service continuity.",
    ],
    stack: ["Next.js", "Express", "PostgreSQL", "TypeScript", "Prisma", "Jest", "Nginx", "PM2"],
    color: "blue",
  },
  {
    period: "Jun 2025 – Nov 2025",
    role: "Teaching Assistant - Basic Engineering Programming",
    company: "Prince of Songkla University",
    location: "Songkhla, Thailand",
    bullets: [
      "Mentored 60+ first-year students in Python programming labs, translating fundamental concepts into practical guidance for debugging, code structure, and problem-solving.",
      "Evaluated lab assignments with a focus on functional correctness, code quality, and solution logic, providing actionable feedback to help students improve their programming discipline.",
    ],
    stack: ["Python"],
    color: "purple",
  },
  {
    period: "Mar 2025 – Jun 2025",
    role: "IT Developer Intern",
    company: "The Old Phuket Karon Beach Resort",
    location: "Phuket, Thailand",
    bullets: [
      "Developed a serverless event operations platform using Google Apps Script for an annual hospitality IT seminar with approximately 300 attendees from leading hotels across Southern Thailand, replacing manual registration with a QR-based self-service workflow that improved attendee throughput and reduced front-desk dependency.",
      "Implemented an Applicant Tracking System using Next.js and NestJS to centralize applicant data and job posting workflows, enabling HR to manage recruitment processes more efficiently and systematically.",
      "Provided rapid-response technical support for critical local networking and device infrastructure, troubleshooting software and connectivity issues across internal and guest-facing services in a hospitality environment.",
    ],
    stack: ["React", "Google Apps Script", "Google Sheets", "JavaScript", "HTML/CSS"],
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
      "Production aquaculture platform with real-time pond monitoring, automated feeding schedules, and enterprise-grade Nginx/PM2 deployment on Ubuntu.",
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
    stack: ["Next.js", "Express.js", "PostgreSQL", "TypeScript", "Prisma", "Jest", "Nginx", "PM2"],
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
      "Serverless QR-based check-in platform for a 300-attendee hospitality seminar, with live attendance dashboards and zero infrastructure cost.",
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
    icon: "🏫",
    badge: "Mobile App",
    title: "Campus Life Hub",
    period: "2024",
    description:
      "Flutter app that unifies campus services (course enrollment, announcements, events, schedules, and turn-by-turn Google Maps navigation).",
    longDescription:
      "Campus Life Hub is an academic mobile application developed to simplify student life by centralizing essential campus services in a single Android app. The application allows users to browse announcements, bookmark important posts, enroll in courses, view class schedules, explore university events, manage profiles, and navigate campus locations more conveniently. The frontend was built with Flutter and connected to a FastAPI backend via REST APIs, with PostgreSQL used to store system data such as users, announcements, courses, enrollments, events, locations, and rooms. The system also supports JWT-based authentication, basic offline access for selected saved information, event registration and cancellation, and turn-by-turn campus navigation through Google Maps Navigation SDK.",
    role: "Mobile App Developer",
    status: "Academic",
    achievements: [
      "Developed an Android application with Flutter that unified announcements, bookmarks, course enrollment, schedules, events, user profiles, and campus maps in one student platform.",
      "Implemented event management features including event listing, date filtering, enrollment and cancellation flows, and shareable event links for easier access.",
      "Built campus navigation features with place search, current location support, and turn-by-turn guidance using Google Maps Navigation SDK.",
      "Worked with a FastAPI and PostgreSQL backend that supports JWT authentication, API-based data access, and core student service workflows.",
      "Applied software engineering practices with Jenkins for CI/CD, Locust for load testing, and Docker for containerized development and deployment."
    ],
    stack: [
      "Flutter",
      "FastAPI",
      "PostgreSQL",
      "Dart",
      "Riverpod",
      "JWT",
      "Google Maps Navigation SDK",
      "SonarQube",
      "Jenkins",
      "Locust",
      "Docker"
    ],
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
      "/campus/14.png",
      "/campus/15.png"
    ],
    highlight: false,
  },
  {
    icon: "🛍️",
    badge: "Web App",
    title: "Furniture Store",
    period: "2025",
    description:
      "Full e-commerce prototype covering a customer storefront, catalog, cart, checkout UI, and admin dashboard, built with Next.js and TypeScript.",
    longDescription:
      "FurniShop is an academic e-commerce web application project designed for an online furniture business, covering both customer-facing storefront features and back-office administration. The project was planned with a hybrid rendering architecture using Next.js and TypeScript, combining SSR, SSG, and ISR to balance SEO, performance, and data freshness. The current prototype includes key user flows such as Home, Catalog with search/filter/sort, Product Detail, Sign In/Sign Up, Cart, Checkout UI, and an Admin Dashboard, initially implemented with realistic mock data to validate the user experience before connecting real services. The proposed full system architecture also includes GraphQL as a central API layer, MongoDB for flexible product and order data, JWT-based authentication with RBAC, and a server-side payment flow with webhook handling for Omise Sandbox. The project was deployed on Vercel and connected with GitHub to support production builds and preview deployments.",
    role: "Full-Stack Developer",
    status: "Academic",
    achievements: [
      "Designed a hybrid-rendered e-commerce architecture with Next.js using SSR, SSG, and ISR to improve SEO, performance, and content freshness.",
      "Built core storefront prototypes including Home, Catalog, Product Detail, Sign In/Sign Up, Cart, and Checkout pages based on a complete Figma design system.",
      "Developed an Admin Dashboard prototype for managing products, orders, promotions, and business overview metrics.",
      "Planned a backend architecture centered on GraphQL, MongoDB, JWT-based authentication, RBAC, and server-side payment/webhook workflows.",
      "Deployed the project on Vercel with GitHub integration to support automatic production and preview deployments."
    ],
    stack: [
      "Next.js",
      "Firebase",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "JWT",
      "Omise",
      "Vercel"
    ],
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
    title: "Games Store",
    period: "2024",
    description:
      "Web game store with point top-up, game purchasing, purchase history, and token-based downloads. Deployed on Google Cloud with Docker and Nginx.",
    longDescription:
      "Games Store is an academic web application project developed as a digital game purchasing platform focused on convenience and secure transaction flows. The system allows users to browse available games, register and sign in, top up points, purchase games using their balance, review purchase history, and receive download tokens after completing purchases. The frontend was built with React using a component-based architecture, while the backend was developed with Strapi to manage content, users, transactions, and role-based access control. The project also included cloud deployment and infrastructure setup on Google Cloud Platform, covering App Engine, Cloud SQL, Cloud Storage, Compute Engine, Docker, Nginx, DNS, HTTPS configuration, and snapshot-based backup workflows.",
    role: "Full-Stack Developer",
    status: "Academic",
    achievements: [
      "Built the frontend of a game store web application with React, covering user flows such as browsing games, registration, login, profile, point top-up, and purchase history.",
      "Integrated the frontend with a Strapi backend through RESTful APIs for retrieving game data, user information, and transaction-related records.",
      "Worked with a backend architecture that uses Strapi RBAC to manage user roles, permissions, point transactions, and purchase workflows.",
      "Supported deployment on Google Cloud Platform using App Engine, Cloud SQL, Cloud Storage, Compute Engine, Docker, and Nginx.",
      "Configured production infrastructure features including static IP, DNS, HTTPS via Certbot, and scheduled snapshot-based backup for recovery readiness."
    ],
    stack: [
      "React",
      "Strapi",
      "PostgreSQL",
      "REST API",
      "TypeScript",
      "Google Cloud Platform",
      "App Engine",
      "Cloud SQL",
      "Compute Engine",
      "Cloud Storage",
      "Docker",
      "Nginx"
    ],
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
      "Flutter wellness app powered by Gemini AI, generating personalized daily meal plans, activity recommendations, and habit reminders from your profile.",
    longDescription:
      "A Flutter-based personal wellness application designed to combine health tracking with AI-generated daily guidance. Users sign in with Firebase Authentication and complete a multi-step profile setup covering personal information, lifestyle, goals, fitness preferences, sleep, nutrition, and health conditions. Based on this profile, the app uses Gemini to generate personalized daily wellness content, including meal suggestions, activity recommendations, and habit reminders. The experience centers around an AI wellness dashboard and meal suggestion flow, with one-click meal logging, content regeneration, Firestore-based persistence, and improved loading, retry, and fallback handling for a smoother user experience. The app also supports both English and Thai through a localization system managed with Riverpod and persisted language preferences.",
    role: "Mobile App Developer",
    status: "Academic",
    achievements: [
      "Built a Flutter wellness app with Firebase Authentication and Cloud Firestore for user profiles and daily AI-generated content.",
      "Implemented an 8-step onboarding and profile analysis flow that generates personalized wellness plans after setup completion.",
      "Developed an AI wellness dashboard with daily meal suggestions, activity recommendations, habit reminders, and one-click meal logging.",
      "Improved user experience with loading animations, retry and fallback handling for Gemini API errors, and English/Thai localization."
    ],
    stack: [
      "Flutter",
      "Firebase",
      "SQLite",
      "Gemini API",
      "Dart",
      "Riverpod"
    ],
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
    icon: "🕵️‍♂️",
    badge: "AI/ML",
    title: "Fake News Detection",
    period: "2025",
    description:
      "ML-powered web app that predicts news authenticity and classifies articles into POLITICS, EDUCATION, CRIME, and WELLNESS using NLP and scikit-learn.",
    longDescription:
      "An academic machine learning project developed as a web application for detecting whether a news article is real or fake, while also classifying it into categories including POLITICS, EDUCATION, CRIME, and WELLNESS. The project began by comparing Logistic Regression, Decision Tree Classifier, and Random Forest Classifier on the same fake news dataset, where Decision Tree achieved the best accuracy and was selected for the final fake news detection model. Text preprocessing and TF-IDF vectorization were applied before training the models. A separate Multinomial Naive Bayes model was also trained on a news category dataset to predict article categories. Both trained models and vectorizers were integrated into a Flask-based web application, allowing users to input news text and receive both authenticity and category predictions in a simple interface.",
    role: "Machine Learning Developer",
    status: "Academic",
    achievements: [
      "Compared Logistic Regression, Decision Tree Classifier, and Random Forest Classifier for fake news detection, and selected Decision Tree as the final model after achieving the highest accuracy of 0.996.",
      "Built a news category classification model using Multinomial Naive Bayes to classify articles into POLITICS, EDUCATION, CRIME, and WELLNESS.",
      "Developed a Flask web application that accepts news text input and returns both fake/real prediction results and news category classification.",
    ],
    stack: ["Python", "Flask", "Kaggle", "scikit-learn", "Pandas", "TF-IDF"],
    color: "orange",
    github: null,
    demo: null,
    screenshots: [
      "/fakenews/1.png",
      "/fakenews/2.png",
      "/fakenews/3.png",
      "/fakenews/4.png",
    ],
    highlight: false,
  },
  {
    icon: "🛡️",
    badge: "Embedded",
    title: "Automated Access Fee Collection",
    period: "2024",
    description:
      "Embedded facility access system with barcode check-in, automatic usage-time fee calculation, and Arduino-driven coin payment detection via UART.",
    longDescription:
      "Automated Access Fee Collection is an academic embedded systems project designed to automate user check-in, usage tracking, fee calculation, and coin-based payment for time-limited facility access. The system uses an Odroid-C4 as the main processing unit and an Arduino Uno for coin input detection. Users check in and check out by scanning a barcode on their student card through a webcam connected to the Odroid, which records entry and exit times, calculates usage duration, and computes the service fee automatically. During payment, the Arduino detects 1, 5, and 10 baht coins using speed sensor optocouplers and sends the detected values to the Odroid over UART. The system displays status, time, user count, and payment progress on a 16x2 LCD, uses a DS1307 RTC module for timekeeping, logs transaction data to CSV, and sends usage data to ThingSpeak for online monitoring and analysis.",
    role: "Embedded Systems Developer",
    status: "Academic",
    achievements: [
      "Built a hybrid embedded system using Odroid-C4 and Arduino Uno to coordinate barcode-based check-in/check-out, fee calculation, and coin payment workflows.",
      "Implemented automatic duration and cost calculation from recorded check-in and check-out times using RTC-based time tracking.",
      "Developed coin detection logic for 1, 5, and 10 baht inputs with interrupt-driven Arduino programming and UART communication to the main processing unit.",
      "Integrated LCD and LED status indicators to show readiness, user count, payment progress, and payment completion in real time.",
      "Logged usage records to CSV and pushed occupancy data to ThingSpeak for online monitoring and later analysis."
    ],
    stack: [
      "Arduino Uno",
      "Odroid-C4",
      "C/C++",
      "Python",
      "UART",
      "I2C",
      "OpenCV",
      "ThingSpeak",
      "LCD 16x2",
      "DS1307 RTC"
    ],
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
      "Physical HPC cluster of networked Raspberry Pi nodes running Apache Hadoop and Spark to process large datasets across a distributed multi-node.",
    longDescription:
      "A High-Performance Computing (HPC) research project involving the construction and configuration of a distributed cluster using multiple Raspberry Pi single-board computers. The cluster is configured with Apache Hadoop and Apache Spark to process large datasets in parallel across the nodes. This project served as a physical sandbox for understanding distributed systems, cluster resource management, network topologies, and optimizing code for multi-node execution environments.",
    role: "Systems Administrator / Data Engineer",
    status: "Academic",
    achievements: [
      "Configured a physical Linux cluster with networked file systems (NFS) and passwordless SSH for seamless node integration.",
      "Deployed Apache Hadoop (HDFS) and Apache Spark to enable distributed storage and parallel processing.",
      "Successfully executed big data processing jobs, benchmarking performance scaling compared to single-node setups.",
    ],
    stack: ["Raspberry Pi", "Ubuntu", "Apache Spark", "Hadoop HDFS", "Bash", "Scala", "Java", "Python"],
    color: "purple",
    github: null,
    demo: null,
    screenshots: [
      "/hpc/1.png",
      "/hpc/2.png",
      "/hpc/3.png"
    ],
    highlight: false,
  },
];

const skillGroups = [
  {
    icon: "💻",
    title: "Programming Languages",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.2)",
    skills: ["TypeScript", "JavaScript", "Dart", "Python", "R", "PHP", "C/C++"],
  },
  {
    icon: "⚛️",
    title: "Frontend",
    color: "#60a5fa",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: "📱",
    title: "Mobile Development",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
    skills: ["Flutter", "React Native", "Riverpod", "Android Development", "Mobile UI/UX"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    color: "#34d399",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    skills: ["Node.js", "Express", "NestJS", "FastAPI", "Strapi", "Firebase", "Google Apps Script"],
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
    skills: ["PyTorch", "TensorFlow", "OpenCV", "Pandas", "NumPy", "Scikit-Learn", "NLP", "ML Inference"],
  },
  {
    icon: "✅",
    title: "Testing & QA",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    skills: ["Jest", "Pytest", "Playwright", "SonarQube", "Locust", "Postman", "Supertest", "Swagger", "ReDoc"],
  },
  {
    icon: "⚡",
    title: "High-Performance Computing",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
    skills: ["CUDA", "OpenMP", "MPI", "Slurm", "Apache Spark", "Hadoop", "Ansible", "Cluster Computing"],
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
                  I am a Full-Stack Developer with hands-on experience building real-world web applications across frontend, backend, database, testing, deployment, and system operations. I adapt quickly to new technologies, tools, and project requirements, with a strong focus on writing maintainable code, designing reliable APIs, and delivering practical software solutions that can be used and maintained in real environments.
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

                  {/* Tech stack chips – top 5 */}
                  <div className="project-stack-chips">
                    {p.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="project-stack-chip">{tech}</span>
                    ))}
                    {p.stack.length > 5 && (
                      <span className="project-stack-chip project-stack-chip--more">+{p.stack.length - 5}</span>
                    )}
                  </div>

                  {/* Persistent CTA button */}
                  <div className="project-cta-btn" aria-hidden="true">
                    <span>See Details</span>
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

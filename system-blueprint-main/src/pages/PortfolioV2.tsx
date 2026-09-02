import "./PortfolioV2.css";
import profilePhoto from "../assets/projects/IMG_20260903_022634.jpg";

const experiences = [
  { company: "Osfin.ai", role: "Software Development Engineer I", period: "Feb 2026 — Present", location: "Bengaluru, India", points: ["Built backend workflows for dispute and chargeback processing across UPI, IMPS, AEPS, and CBDC, enforcing payment-network rules, permissions, deadlines, and auditable state transitions.", "Automated bulk complaint creation from CSV files with row-level validation, configurable reason mapping, and fault isolation.", "Prevented duplicate financial operations under concurrent and stale requests using application-level pre-validation and database uniqueness constraints.", "Improved batch-platform resilience with retry paths, safe recovery for stuck executions, health probes, and backward-compatible Liquibase migrations.", "Integrated IDFC Bank CBS Hold APIs for balance enquiry, hold placement, recovery, and removal, including validation and downstream failure handling.", "Resolved production incidents across payment, batch, and external integrations through log correlation, database investigation, and Kubernetes diagnostics."] },
  { company: "E-Ring Inc.", role: "Software Engineer I", period: "Jul 2025 — Nov 2025", location: "Hyderabad, India", points: ["Re-architected a county-wide ETL workflow using BCP-driven pipelines, reducing processing time for 1M+ records from 8 hours to 45 minutes.", "Developed T-SQL monitoring and reconciliation scripts for billing workflows, reducing manual validation effort and improving audit readiness."] }
];

const projects = [
  { name: "PokerNight", subtitle: "Real-Time Multiplayer Poker", stack: "Java 21 · Spring Boot · WebSockets/STOMP", href: "https://github.com/Ukriyte/PokerNight", description: "A server-authoritative Texas Hold’em platform designed around correctness under concurrency, reconnects, duplicate delivery, and private game state.", points: ["Multi-room architecture with framework-free game engine, application, persistence, and transport modules connected through explicit ports and immutable contracts.", "Complete Hold’em lifecycle including forced blinds, betting streets, folds, raises, all-ins, side pots, showdown evaluation, dealer rotation, and chip-conservation invariants.", "Per-room command serialization, 24-hour idempotency receipts, and reconnect snapshots for concurrent actions and browser refreshes.", "Authenticated REST and WebSocket/STOMP boundaries with public room topics and private player queues to prevent state leakage.", "Bots use immutable turn contexts and submit decisions through the same validated command path as human players."] },
  { name: "Scalable URL Shortener", subtitle: "Low-latency redirect service", stack: "TypeScript · Node.js · Redis · REST APIs", href: "https://github.com/Ukriyte/URL-Shortener", description: "A stateless URL-shortening service separating the latency-sensitive redirect path from URL creation and persistence.", points: ["Redis-backed caching for fast redirect resolution.", "Token-bucket rate limiting protecting public APIs while retaining stateless request handling.", "Collision-safe short-code generation, input validation, and secure redirect flows."] }
];

const skills = ["Java", "Spring Boot", "Spring Batch", "WebSockets", "TypeScript", "Node.js", "React", "REST APIs", "MySQL", "Oracle", "Redis", "Kubernetes", "Docker", "Liquibase"];
const resumeUrl = "https://drive.google.com/file/d/1O3Tl17Mydwd0BBU1Q8k9J4-diUGeesnx/view?usp=sharing";

export function PortfolioV2() {
  return <div className="portfolio-v2">
    <header className="portfolio-nav">
      <a className="brand" href="#top">AC.</a>
      <nav><a href="#about">About</a><a href="#work">Experience</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a><a href={resumeUrl} target="_blank" rel="noreferrer">Resume ↗</a></nav>
    </header>
    <main id="top">
      <section className="hero-v2">
        <div className="hero-copy-block">
          <p className="eyebrow">SOFTWARE ENGINEER · BENGALURU</p>
          <h1>Hi, I’m Anurag. <span className="wave">👋</span></h1>
          <p className="hero-copy">I build reliable backend systems that handle real-world scale with correctness, performance and clarity.</p>
          <div className="hero-links"><a href="mailto:nrgchugh@gmail.com">✉ Email ↗</a><a href="https://github.com/Ukriyte" target="_blank" rel="noreferrer">◉ GitHub ↗</a><a href="https://linkedin.com/in/AnuragChugh404" target="_blank" rel="noreferrer">▣ LinkedIn ↗</a><a href={resumeUrl} target="_blank" rel="noreferrer">▱ Resume ↗</a></div>
        </div>
        <div className="hero-photo-wrap"><img src={profilePhoto} alt="Anurag Chugh" className="hero-photo" /></div>
      </section>

      <section className="intro-grid" id="about"><p className="section-label">01 — ABOUT</p><div><p className="large-copy">Software engineer with a B.Tech in Mechanical Engineering from IIT Roorkee. I enjoy turning messy, high-volume workflows into explicit systems with strong invariants and predictable failure modes.</p><p className="muted-copy">Outside work, I like building systems from first principles — from multiplayer game engines to infrastructure and AI tooling.</p></div></section>

      <section className="content-section" id="work"><div className="section-heading"><p className="section-label">02 — EXPERIENCE</p><p className="section-note">Production systems</p></div><div className="timeline">{experiences.map(item => <article className="timeline-item" key={item.company}><div className="timeline-meta"><span>{item.period}</span><span>{item.location}</span></div><div><h2>{item.role}</h2><p className="company">{item.company}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>

      <section className="content-section" id="projects"><div className="section-heading"><p className="section-label">03 — SELECTED PROJECTS</p><p className="section-note">Things I built</p></div><div className="project-list">{projects.map((project, index) => <article className="project-card" key={project.name}><div className="project-number">0{index + 1}</div><div className="project-main"><div className="project-title-row"><div><h2>{project.name}</h2><p className="company">{project.subtitle}</p></div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>↗</a></div><p className="project-description">{project.description}</p><p className="stack">{project.stack}</p><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>

      <section className="skills-section"><p className="section-label">04 — TOOLKIT</p><div className="skill-grid">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>

      <section className="education-section" id="education"><p className="section-label">05 — EDUCATION</p><div><h2>B.Tech in Mechanical Engineering</h2><p className="company">Indian Institute of Technology, Roorkee · 2021 — 2025</p></div></section>

      <section className="closing-section" id="contact"><p className="section-label">06 — SAY HELLO</p><h2>Have an interesting problem?</h2><div className="contact-stack"><a className="email-link" href="mailto:nrgchugh@gmail.com">nrgchugh@gmail.com <span>↗</span></a><a className="resume-link" href={resumeUrl} target="_blank" rel="noreferrer">View resume <span>↗</span></a></div><div className="closing-links"><a href="https://github.com/Ukriyte" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/AnuragChugh404" target="_blank" rel="noreferrer">LinkedIn</a></div></section>
    </main>
    <footer className="portfolio-footer"><span>© {new Date().getFullYear()} Anurag Chugh</span><span>Built with React · Kept deliberately simple.</span></footer>
  </div>;
}

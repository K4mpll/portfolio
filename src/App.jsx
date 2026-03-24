import { useState, useEffect } from "react";

const T = {
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      role: "Automation & Robotics Engineer",
      tagline: "I design robots and build software that solves real-world problems.",
      cta: "View Projects",
      cv: "Download CV",
    },
    about: {
      label: "About",
      bio: "23-year-old automation and robotics engineering graduate with hands-on experience in autonomous mobile systems, embedded hardware, and full-stack development. I design robots that solve real problems — and build software tools people actually use.",
      open: "Open to roles in mobile robotics, IT infrastructure, and robotics R&D.",
    },
    projects: {
      label: "Selected Projects",
      items: [
        {
          id: "01",
          name: "Autonomous mobile robot",
          tag: "Robotics / Autonomous Navigation",
          desc: "Autonomous indoor mobile robot built to assist students navigating a university campus. Full Nav2 navigation stack with RTAB-Map SLAM, A* global planner, DWB local planner, and RGB-D perception. Includes a custom control panel and patrol loop. Engineering thesis project.",
          tech: ["ROS2", "Nav2", "RTAB-Map", "Gazebo", "Python", "URDF"],
        },
        {
          id: "02",
          name: "FiveM Tablet",
          tag: "Game Dev / UI",
          desc: "Advanced interactive tablet script for a civil registry office community in the FiveM (GTA V) environment. Built from scratch using Lua with custom UI design and in-game mechanics integration.",
          tech: ["Lua", "FiveM", "JavaScript", "HTML", "CSS", "UX/UI"],
        },
        // {
        //   id: "03",
        //   name: "VaultKey",
        //   tag: "Web / Security",
        //   desc: "Full-featured password manager with AES-256-GCM encryption, PBKDF2 key derivation, and WebAuthn biometric support. Chrome Manifest V3 extension with autofill via Shadow DOM injection.",
        //   tech: ["JavaScript", "WebCrypto API", "Chrome MV3", "Shadow DOM", "PBKDF2"],
        // },
        // {
        //   id: "04",
        //   name: "WiFi Robot",
        //   tag: "Embedded / Control",
        //   desc: "Wheeled robot controlled over WiFi. Xbox controller input processed through a UDP/Python bridge, driving an ESP8266 + L298N + N20 stack. Military-aesthetic chassis designed for 3D printing.",
        //   tech: ["ESP8266", "L298N", "N20", "Python", "UDP", "3D Print"],
        // },
      ],
    },
    contact: {
      label: "Contact",
      headline: "Open to work —",
      sub: "let's build something.",
      email: "Get in Touch",
      cv: "Download CV",
      location: "Białystok, Poland",
    },
    achievements: {
      label: "Achievements",
      items: [
        { year: "2025", text: "RoboQuest 2025 — Competition Organizer" },
        { year: "2022", text: "First Lego League — International Judge" },
        { year: "2021", text: "Mayor of Białystok Scholarship — Innovative Technical Thought" },
      ],
    },
    footer: "Automation & Robotics Engineer",
    form: {
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      success: "Message sent! I'll get back to you soon.",
      namePh: "Your name",
      emailPh: "your@email.com",
      messagePh: "Your message...",
    },
  },
  pl: {
    nav: { about: "O mnie", projects: "Projekty", contact: "Kontakt" },
    hero: {
      role: "Inżynier Automatyki i Robotyki",
      tagline: "Projektuję roboty i tworzę oprogramowanie, które rozwiązuje realne problemy.",
      cta: "Zobacz projekty",
      cv: "Pobierz CV",
    },
    about: {
      label: "O mnie",
      bio: "23-letni absolwent automatyki i robotyki z praktycznym doświadczeniem w autonomicznych systemach mobilnych, sprzęcie wbudowanym i fullstack developmencie. Projektuję roboty rozwiązujące realne problemy — i buduję narzędzia, z których ludzie naprawdę korzystają.",
      open: "Poszukuję pracy w robotyce mobilnej, infrastrukturze IT i R&D robotyki.",
    },
    projects: {
      label: "Wybrane projekty",
      items: [
        {
          id: "01",
          name: "Autonomiczny robot mobilny",
          tag: "Robotyka / Nawigacja autonomiczna",
          desc: "Autonomiczny robot mobilny wewnątrzbudynkowy wspomagający studentów w poruszaniu się po uczelni. Kompletny stos nawigacyjny Nav2 z RTAB-Map SLAM, planerem globalnym A*, lokalnym DWB i percepcją RGB-D. Autorski panel sterowania i pętla patrolowa. Projekt pracy inżynierskiej.",
          tech: ["ROS2", "Nav2", "RTAB-Map", "Gazebo", "Python", "URDF"],
        },
        {
          id: "02",
          name: "Tablet FiveM",
          tag: "Game Dev / UI",
          desc: "Zaawansowany interaktywny skrypt tabletu dla społeczności urzędu stanu cywilnego w środowisku FiveM (GTA V). Stworzony od podstaw w Lua z autorskim projektem UI i integracją mechanik w grze.",
          tech: ["Lua", "FiveM", "JavaScript", "HTML", "CSS", "UX/UI"],
        },
        // {
        //   id: "03",
        //   name: "VaultKey",
        //   tag: "Web / Bezpieczeństwo",
        //   desc: "Zaawansowany menedżer haseł z szyfrowaniem AES-256-GCM, derywacją klucza PBKDF2 i obsługą WebAuthn. Rozszerzenie Chrome MV3 z autouzupełnianiem przez Shadow DOM.",
        //   tech: ["JavaScript", "WebCrypto API", "Chrome MV3", "Shadow DOM", "PBKDF2"],
        // },
        // {
        //   id: "04",
        //   name: "Robot WiFi",
        //   tag: "Embedded / Sterowanie",
        //   desc: "Robot kołowy sterowany przez WiFi. Wejście z kontrolera Xbox przetwarzane przez mostek UDP/Python, napędzający układ ESP8266 + L298N + N20. Obudowa o militarnej estetyce do druku 3D.",
        //   tech: ["ESP8266", "L298N", "N20", "Python", "UDP", "Druk 3D"],
        // },
      ],
    },
    contact: {
      label: "Kontakt",
      headline: "Szukam pracy —",
      sub: "zbudujmy coś razem.",
      email: "Napisz do mnie",
      cv: "Pobierz CV",
      location: "Białystok, Polska",
    },
    achievements: {
      label: "Osiągnięcia",
      items: [
        { year: "2025", text: "RoboQuest 2025 — Organizator konkursu" },
        { year: "2022", text: "First Lego League — Sędzia międzynarodowy" },
        { year: "2021", text: "Stypendium Prezydenta Miasta Białegostoku — Innowacyjna myśl techniczna" },
      ],
    },
    footer: "Inżynier Automatyki i Robotyki",
    form: {
      title: "Napisz do mnie",
      name: "Imię",
      email: "Email",
      message: "Wiadomość",
      send: "Wyślij wiadomość",
      success: "Wiadomość wysłana! Odezwę się wkrótce.",
      namePh: "Twoje imię",
      emailPh: "twoj@email.com",
      messagePh: "Twoja wiadomość...",
    },
  },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #F7F7F5;
    --card: #FFFFFF;
    --ink: #111111;
    --muted: #767672;
    --rule: #E0E0DC;
    --accent: #0B3D91;
    --accent-bg: #EDF1FB;
    --font-display: 'Syne', sans-serif;
    --font-mono: 'DM Mono', monospace;
  }

  html { scroll-behavior: smooth; font-size: 16px; }
  body { background: var(--bg); color: var(--ink); font-family: var(--font-display); -webkit-font-smoothing: antialiased; }

  /* — NAV — */
  .pf-nav {
    position: fixed; inset: 0 0 auto 0; z-index: 200;
    height: 58px;
    background: rgba(247,247,245,0.88);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--rule);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(24px, 5vw, 64px);
  }

  .pf-logo {
    font-family: var(--font-mono); font-size: 14px; font-weight: 500;
    letter-spacing: 0.06em; color: var(--ink);
  }
  .pf-logo span { color: var(--accent); }

  .pf-nav-links { display: flex; gap: 28px; align-items: center; }
  .pf-nav-link {
    font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--muted);
    cursor: pointer; border: none; background: none; padding: 4px 0;
    transition: color 0.15s;
  }
  .pf-nav-link:hover { color: var(--ink); }

  .pf-lang { display: flex; gap: 2px; }
  .pf-lang-btn {
    font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em;
    border: none; cursor: pointer; padding: 4px 9px; border-radius: 3px;
    transition: background 0.15s, color 0.15s;
  }
  .pf-lang-btn.active { background: var(--ink); color: var(--bg); }
  .pf-lang-btn:not(.active) { background: none; color: var(--muted); }
  .pf-lang-btn:not(.active):hover { color: var(--ink); }

  /* — HERO — */
  .pf-hero {
    min-height: 100vh;
    padding: 112px clamp(24px, 5vw, 64px) 72px;
    display: flex; flex-direction: column; justify-content: center;
    max-width: 1200px; margin: 0 auto;
  }

  .pf-eyebrow {
    display: flex; align-items: center; gap: 20px;
    margin-bottom: 52px;
  }
  .pf-eyebrow-text {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--muted); white-space: nowrap;
  }
  .pf-rule { flex: 1; height: 1px; background: var(--rule); }

  .pf-name {
    font-size: clamp(44px, 7vw, 88px);
    font-weight: 800; line-height: 0.92;
    letter-spacing: -0.045em;
    margin-bottom: 40px;
  }
  .pf-name-accent { color: var(--accent); display: block; }

  .pf-hero-bottom {
    display: flex; flex-wrap: wrap; gap: 40px;
    align-items: flex-end; justify-content: space-between;
  }
  .pf-role {
    font-family: var(--font-mono); font-size: 13px; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--muted); margin-bottom: 14px;
  }
  .pf-tagline {
    font-family: var(--font-mono); font-size: clamp(14px, 2vw, 17px); font-weight: 400;
    line-height: 1.7; color: var(--muted); max-width: 500px;
  }
  .pf-ctas { display: flex; gap: 12px; flex-wrap: wrap; }

  /* — STATS GRID — */
  .pf-stats {
    display: grid; grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid var(--rule); border-left: 1px solid var(--rule);
    margin-top: 80px;
  }
  .pf-stat {
    border-right: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
    padding: clamp(20px, 3vw, 32px) clamp(20px, 3vw, 36px);
  }
  .pf-stat-num {
    font-family: var(--font-mono); font-size: clamp(22px, 3vw, 32px);
    font-weight: 500; letter-spacing: -0.02em; color: var(--accent);
  }
  .pf-stat-label {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--muted); margin-top: 4px;
  }

  /* — ABOUT BAND — */
  .pf-about {
    background: var(--ink); color: var(--bg);
    padding: clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px);
  }
  .pf-about-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; gap: clamp(32px, 6vw, 80px); flex-wrap: wrap; align-items: center;
  }
  .pf-about-label {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em;
    text-transform: uppercase; color: #666; min-width: 72px;
  }
  .pf-about-body { flex: 1; min-width: 280px; }
  .pf-about-bio {
    font-size: clamp(15px, 2vw, 19px); line-height: 1.72; margin-bottom: 18px;
  }
  .pf-about-open {
    font-family: var(--font-mono); font-size: 13px;
    color: #888; letter-spacing: 0.04em;
  }
  .pf-about-open::before { content: "→  "; }

  /* — PROJECTS — */
  .pf-projects {
    padding: clamp(64px, 8vw, 108px) clamp(24px, 5vw, 64px);
    max-width: 1200px; margin: 0 auto;
  }

  .pf-section-head {
    display: flex; align-items: center; gap: 24px; margin-bottom: 52px;
  }
  .pf-section-label {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--muted); white-space: nowrap;
  }
  .pf-section-rule { flex: 1; height: 1px; background: var(--rule); }

  .pf-project-list { display: flex; flex-direction: column; gap: 20px; }

  .pf-card {
    background: var(--card);
    border: 1px solid var(--rule);
    padding: clamp(24px, 4vw, 40px);
    display: grid;
    grid-template-columns: 52px 1fr;
    gap: clamp(20px, 3vw, 36px);
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
    cursor: default;
  }
  .pf-card:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 24px rgba(11,61,145,0.08);
    transform: translateY(-2px);
  }

  .pf-card-id {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em;
    color: var(--muted); padding-top: 5px;
  }
  .pf-card-title-row {
    display: flex; align-items: center; gap: 12px;
    flex-wrap: wrap; margin-bottom: 14px;
  }
  .pf-card-name {
    font-size: clamp(18px, 2.5vw, 24px); font-weight: 700;
    letter-spacing: -0.02em;
  }
  .pf-tag {
    font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--accent); background: var(--accent-bg);
    padding: 3px 10px; border-radius: 2px;
  }
  .pf-card-desc {
    font-size: 15px; line-height: 1.7; color: var(--muted);
    margin-bottom: 22px; max-width: 640px;
  }
  .pf-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .pf-chip {
    font-family: var(--font-mono); font-size: 11px; color: var(--muted);
    border: 1px solid var(--rule); padding: 3px 10px; border-radius: 2px;
  }

  /* — ACHIEVEMENTS — */
  .pf-achievements {
    padding: clamp(64px, 8vw, 108px) clamp(24px, 5vw, 64px);
    max-width: 1200px; margin: 0 auto;
  }
  .pf-ach-list { display: flex; flex-direction: column; }
  .pf-ach {
    display: flex; align-items: baseline; gap: clamp(16px, 3vw, 32px);
    padding: 18px 0;
    border-bottom: 1px solid var(--rule);
  }
  .pf-ach:first-child { border-top: 1px solid var(--rule); }
  .pf-ach-year {
    font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em;
    color: var(--accent); min-width: 48px;
  }
  .pf-ach-text {
    font-size: clamp(15px, 2vw, 18px); line-height: 1.5; color: var(--ink);
  }

  /* — SOCIAL — */
  .pf-social {
    display: flex; align-items: center; gap: 16px;
    margin-top: 18px;
  }
  .pf-social-link {
    font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.08em;
    color: var(--muted); text-decoration: none;
    display: flex; align-items: center; gap: 6px;
    transition: color 0.15s;
  }
  .pf-social-link:hover { color: var(--accent); }
  .pf-social-link svg { width: 16px; height: 16px; fill: currentColor; }

  /* — CONTACT — */
  .pf-contact {
    padding: clamp(64px, 8vw, 108px) clamp(24px, 5vw, 64px);
    border-top: 1px solid var(--rule);
    max-width: 1200px; margin: 0 auto;
  }
  .pf-contact-body {
    display: flex; justify-content: space-between;
    align-items: flex-end; flex-wrap: wrap; gap: 48px;
  }
  .pf-contact-headline {
    font-size: clamp(30px, 5.5vw, 64px);
    font-weight: 800; letter-spacing: -0.03em; line-height: 1.08;
    margin-bottom: 18px;
  }
  .pf-contact-headline em { color: var(--accent); font-style: normal; }
  .pf-contact-loc {
    font-family: var(--font-mono); font-size: 13px; color: var(--muted);
    letter-spacing: 0.06em;
  }
  .pf-contact-actions { display: flex; flex-direction: column; gap: 12px; }

  /* — BUTTONS — */
  .btn-fill {
    font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em;
    text-transform: uppercase; border: none; cursor: pointer;
    padding: 14px 32px; background: var(--ink); color: var(--bg);
    transition: background 0.15s, transform 0.15s;
  }
  .btn-fill:hover { background: var(--accent); transform: translateY(-1px); }
  a.btn-fill, a.btn-outline { text-decoration: none; display: inline-block; text-align: center; }
  .btn-outline {
    font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em;
    text-transform: uppercase; cursor: pointer;
    padding: 13px 32px; background: transparent;
    color: var(--ink); border: 1px solid var(--rule);
    transition: border-color 0.15s, color 0.15s;
  }
  .btn-outline:hover { border-color: var(--ink); }

  /* — FOOTER — */
  .pf-footer {
    border-top: 1px solid var(--rule);
    padding: 24px clamp(24px, 5vw, 64px);
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 8px;
  }
  .pf-footer span {
    font-family: var(--font-mono); font-size: 12px; color: var(--muted);
    letter-spacing: 0.06em;
  }

  /* — ANIMATIONS — */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.16,1,.3,1) forwards; }
  .d1 { animation-delay: 0.05s; }
  .d2 { animation-delay: 0.15s; }
  .d3 { animation-delay: 0.25s; }
  .d4 { animation-delay: 0.38s; }
  .d5 { animation-delay: 0.50s; }

  /* — MODAL — */
  .pf-overlay {
    position: fixed; inset: 0; z-index: 300;
    background: rgba(0,0,0,0.45); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    padding: 24px;
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .pf-modal {
    background: var(--card); border: 1px solid var(--rule);
    width: 100%; max-width: 480px;
    padding: clamp(28px, 4vw, 44px);
    position: relative;
    animation: slideUp 0.3s cubic-bezier(.16,1,.3,1);
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .pf-modal-close {
    position: absolute; top: 16px; right: 16px;
    background: none; border: none; cursor: pointer;
    font-size: 20px; color: var(--muted); line-height: 1;
    transition: color 0.15s;
  }
  .pf-modal-close:hover { color: var(--ink); }

  .pf-modal-title {
    font-size: clamp(20px, 3vw, 26px); font-weight: 700;
    letter-spacing: -0.02em; margin-bottom: 28px;
  }

  .pf-form { display: flex; flex-direction: column; gap: 16px; }
  .pf-field { display: flex; flex-direction: column; gap: 6px; }
  .pf-label {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--muted);
  }
  .pf-input, .pf-textarea {
    font-family: var(--font-mono); font-size: 14px;
    padding: 12px 14px; border: 1px solid var(--rule);
    background: var(--bg); color: var(--ink);
    outline: none; transition: border-color 0.15s;
  }
  .pf-input:focus, .pf-textarea:focus { border-color: var(--accent); }
  .pf-textarea { resize: vertical; min-height: 120px; }

  .pf-form .btn-fill { width: 100%; margin-top: 4px; }

  .pf-success {
    text-align: center; padding: 32px 0;
    font-family: var(--font-mono); font-size: 14px;
    color: var(--accent); line-height: 1.6;
  }

  @media (max-width: 600px) {
    .pf-nav-links { display: none; }
    .pf-stats { grid-template-columns: 1fr 1fr; }
    .pf-card { grid-template-columns: 1fr; }
    .pf-card-id { display: none; }
  }
`;

export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const [showForm, setShowForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const t = T[lang];

  const projectCount = t.projects.items.length;
  const techCount = new Set(t.projects.items.flatMap(p => p.tech)).size;
  const stats = [
    { num: `${projectCount}+`, label: lang === "en" ? "Projects" : "Projekty" },
    { num: `${techCount}+`, label: lang === "en" ? "Technologies" : "Technologii" },
    { num: "ROS2", label: lang === "en" ? "Navigation stack" : "Stos nawigacji" },
  ];

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className="pf-nav">
        <div className="pf-logo">KJ<span>.</span></div>

        <div className="pf-nav-links">
          <button className="pf-nav-link" onClick={() => scrollTo("hero")}>{t.nav.about}</button>
          <button className="pf-nav-link" onClick={() => scrollTo("projects")}>{t.nav.projects}</button>
          <button className="pf-nav-link" onClick={() => scrollTo("contact")}>{t.nav.contact}</button>
        </div>

        <div className="pf-lang">
          {["en","pl"].map(l => (
            <button
              key={l}
              className={`pf-lang-btn${lang === l ? " active" : ""}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="pf-hero">
          <div className="pf-eyebrow fade-up d1">
            <span className="pf-eyebrow-text">Portfolio · 2026</span>
            <div className="pf-rule" />
            <span className="pf-eyebrow-text">Białystok, PL</span>
          </div>

          <h1 className="pf-name fade-up d2">
            Krzysztof
            <span className="pf-name-accent">Jakimowicz</span>
          </h1>

          <div className="pf-hero-bottom fade-up d3">
            <div>
              <p className="pf-role">{t.hero.role}</p>
              <p className="pf-tagline">{t.hero.tagline}</p>
              <div className="pf-social">
                <a className="pf-social-link" href="https://github.com/K4mpll" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="pf-ctas">
              <button className="btn-fill" onClick={() => scrollTo("projects")}>{t.hero.cta}</button>
              <a className="btn-outline" href={import.meta.env.BASE_URL + "Krzysztof_Jakimowicz_CV.pdf"} download>{t.hero.cv}</a>
            </div>
          </div>

          <div className="pf-stats fade-up d4">
            {stats.map(({ num, label }) => (
              <div className="pf-stat" key={label}>
                <div className="pf-stat-num">{num}</div>
                <div className="pf-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT BAND */}
      <section className="pf-about">
        <div className="pf-about-inner">
          <span className="pf-about-label">{t.about.label}</span>
          <div className="pf-about-body">
            <p className="pf-about-bio">{t.about.bio}</p>
            <p className="pf-about-open">{t.about.open}</p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <div className="pf-achievements">
          <div className="pf-section-head">
            <span className="pf-section-label">{t.achievements.label}</span>
            <div className="pf-section-rule" />
          </div>
          <div className="pf-ach-list">
            {t.achievements.items.map((a) => (
              <div className="pf-ach" key={a.year + a.text}>
                <span className="pf-ach-year">{a.year}</span>
                <span className="pf-ach-text">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="pf-projects">
          <div className="pf-section-head">
            <span className="pf-section-label">{t.projects.label}</span>
            <div className="pf-section-rule" />
          </div>

          <div className="pf-project-list">
            {t.projects.items.map((p, i) => (
              <div className="pf-card" key={p.id}>
                <div className="pf-card-id">{p.id}</div>
                <div>
                  <div className="pf-card-title-row">
                    <span className="pf-card-name">{p.name}</span>
                    <span className="pf-tag">{p.tag}</span>
                  </div>
                  <p className="pf-card-desc">{p.desc}</p>
                  <div className="pf-chips">
                    {p.tech.map(chip => (
                      <span className="pf-chip" key={chip}>{chip}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="pf-contact">
          <div className="pf-section-head">
            <span className="pf-section-label">{t.contact.label}</span>
            <div className="pf-section-rule" />
          </div>

          <div className="pf-contact-body">
            <div>
              <h2 className="pf-contact-headline">
                {t.contact.headline}<br />
                <em>{t.contact.sub}</em>
              </h2>
              <p className="pf-contact-loc">📍 {t.contact.location}</p>
            </div>
            <div className="pf-contact-actions">
              <button className="btn-fill" onClick={() => { setFormSent(false); setShowForm(true); }}>✉ {t.contact.email}</button>
              <a className="btn-outline" href={import.meta.env.BASE_URL + "Krzysztof_Jakimowicz_CV.pdf"} download>↓ {t.contact.cv}</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM MODAL */}
      {showForm && (
        <div className="pf-overlay" onClick={(e) => e.target === e.currentTarget && setShowForm(false)}>
          <div className="pf-modal">
            <button className="pf-modal-close" onClick={() => setShowForm(false)}>✕</button>
            <h3 className="pf-modal-title">{t.form.title}</h3>

            {formSent ? (
              <p className="pf-success">✓ {t.form.success}</p>
            ) : (
              <form
                className="pf-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const d = new FormData(e.target);
                  d.append("access_key", "a1b3674d-e0fa-48d8-93db-cb67bbd6da14");
                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: d,
                  });
                  if (res.ok) setFormSent(true);
                }}
              >
                <input type="hidden" name="subject" value="Nowa wiadomość z portfolio" />
                <div className="pf-field">
                  <label className="pf-label">{t.form.name}</label>
                  <input className="pf-input" name="name" required placeholder={t.form.namePh} />
                </div>
                <div className="pf-field">
                  <label className="pf-label">{t.form.email}</label>
                  <input className="pf-input" name="email" type="email" required placeholder={t.form.emailPh} />
                </div>
                <div className="pf-field">
                  <label className="pf-label">{t.form.message}</label>
                  <textarea className="pf-textarea" name="message" required placeholder={t.form.messagePh} />
                </div>
                <button className="btn-fill" type="submit">{t.form.send}</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="pf-footer">
        <span>© 2026 Krzysztof Jakimowicz</span>
        <a className="pf-social-link" href="https://github.com/K4mpll" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" style={{width:14,height:14}}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
        <span>{t.footer.toUpperCase()}</span>
      </footer>
    </>
  );
}
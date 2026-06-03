import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_i904n2x";
const EMAILJS_TEMPLATE_ID = "template_1toy1h3";
const EMAILJS_PUBLIC_KEY = "a0vuTeUKUurfi7jAU";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => { // eslint-disable-line react-hooks/exhaustive-deps
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(40px)", right: "translateX(-40px)", none: "none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[direction],
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
    }}>{children}</div>
  );
};

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const skills = {
  "Languages": ["Python", "Java", "C", "JavaScript"],
  "Frontend": ["HTML", "CSS", "React.js"],
  "Mobile": ["Flutter", "React Native"],
  "Backend": ["Node.js", "Spring Boot"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
  "Cloud & Services": ["Firebase", "Cloudinary"],
  "Auth & Security": ["Keycloak"],
  "Tools & Platforms": ["Git", "Postman", "VMware", "Figma", "Blender", "Jira", "Asana"],
};

const projects = [
  {
    title: "Online Learning Platform (CyberEduShare+)",
    tag: "Cross-Platform · LMS",
    desc: "Cross-platform learning management system for cybersecurity students. Integrated Moodle content and implemented a Python recommendation engine for learning material prioritization.",
    stack: ["Flutter", "React.js", "Node.js", "Python", "Moodle API"],
    status: "Completed",
    color: "#22d3a5",
    repo: "https://github.com/Fernandoezz/CyberEduShare"
  },
  {
    title: "LinkBridge",
    tag: "Cross-Platform · File Sharing",
    desc: "Cross-platform file and resource sharing platform connecting desktop and Android devices. Features secure file transfer, clipboard sync, device discovery, and real-time communication.",
    stack: ["Android", "Electron.js", "Node.js", "WebSockets", "SQLite"],
    status: "Completed",
    color: "#22d3a5",
    repo: "https://github.com/Fernandoezz/LinkBridge"
  },
  {
    title: "VelvetVeda",
    tag: "Web · Spa Booking",
    desc: "Full-stack spa booking platform with Angular frontend, Spring Boot backend, JWT authentication, and Docker containerization for seamless deployment.",
    stack: ["Angular", "TypeScript", "SCSS", "Spring Boot", "JWT", "Docker"],
    status: "Completed",
    color: "#22d3a5",
    repo: "https://github.com/Fernandoezz/SpaBooking"
  },
  {
    title: "VariantX",
    tag: "Research · Final Year Project",
    desc: "Machine learning framework for disease-causing variant prioritization in rare genetic disorders. Integrates phenotype-based analysis and explainable AI for clinical decision support.",
    stack: ["Python", "LightGBM", "SHAP", "Bioinformatics", "Machine Learning"],
    status: "Ongoing",
    color: "#a78bfa",
    repo: null
  },
  {
    title: "Health Management System",
    tag: "Internship · LoonsLab",
    desc: "Full-stack healthcare platform with a patient mobile app and a doctor/clinic web portal, featuring authentication via Keycloak.",
    stack: ["Flutter", "React.js", "Node.js", "PostgreSQL", "Keycloak"],
    status: "Completed",
    color: "#22d3a5",
    repo: null
  },
  {
    title: "RideResQ — Auto Care Platform",
    tag: "Mobile · Ongoing",
    desc: "Location-based vehicle service booking app with scalable Spring Boot backend and real-time service requests.",
    stack: ["React Native", "Spring Boot"],
    status: "Ongoing",
    color: "#f59e0b",
    repo: "https://github.com/Fernandoezz/RideResQ"
  },
  {
    title: "Spotify Clone",
    tag: "Mobile · Ongoing",
    desc: "Full-featured music streaming app with playback, playlist management, and cloud service integrations.",
    stack: ["React Native", "Spring Boot"],
    status: "Ongoing",
    color: "#f59e0b",
    repo: "https://github.com/Fernandoezz/Spotify_clone"
  },
  {
    title: "Online Shopping Platform",
    tag: "Web",
    desc: "Full-stack e-commerce app with product management, shopping cart, and end-to-end Cypress testing.",
    stack: ["React.js", "Spring Boot", "Cypress"],
    status: "Completed",
    color: "#22d3a5",
    repo: null
  },
  {
    title: "Student Management System",
    tag: "Web",
    desc: "Centralized system managing students, lecturers, departments and courses with CRUD and role-based access.",
    stack: ["React.js", "Spring Boot"],
    status: "Completed",
    color: "#22d3a5",
    repo: null
  },
  {
    title: "Lab Supportive System",
    tag: "Hardware",
    desc: "Arduino-based laboratory assistant measuring temperature, pH levels, and mass with improved accuracy.",
    stack: ["Arduino", "C"],
    status: "Completed",
    color: "#22d3a5",
    repo: null
  },
];

const achievements = [
  { title: "Chathurmana", role: "Finalist", org: "University of Sri Jayewardenepura" },
  { title: "HackMoral 2024", role: "Participant", org: "University of Moratuwa" },
  { title: "Duothan 3.0 2023", role: "Participant", org: "NSBM" },
  { title: "Code Rush 2023", role: "Participant", org: "INTECS" },
];

const NavLink = ({ href, children, active, onClick }) => (
  <a href={href} onClick={onClick} style={{
    color: active ? "#22d3a5" : "rgba(255,255,255,0.55)",
    textDecoration: "none",
    fontSize: "13px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontWeight: 500,
    padding: "6px 0",
    borderBottom: active ? "1px solid #22d3a5" : "1px solid transparent",
    transition: "color 0.2s, border-color 0.2s",
    cursor: "pointer"
  }}>{children}</a>
);

const ProjectCard = ({ p, styles }) => {
  const [hovered, setHovered] = useState(false);
  const statusColors = {
    "Completed": { bg: "rgba(34,211,165,0.1)", color: "#22d3a5" },
    "Ongoing":   { bg: "rgba(245,158,11,0.12)", color: "#f59e0b" },
  };
  const sc = statusColors[p.status] || statusColors["Completed"];

  return (
    <div
      style={{
        ...styles.card,
        display: "flex", flexDirection: "column", height: "100%",
        position: "relative", overflow: "hidden",
        borderColor: hovered ? "rgba(34,211,165,0.3)" : "rgba(255,255,255,0.07)",
        transform: hovered ? "translateY(-6px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

      {/* header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", gap: "8px" }}>
        <div style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.3 }}>{p.title}</div>
        <span style={{ ...styles.tag, background: sc.bg, color: sc.color, whiteSpace: "nowrap", flexShrink: 0 }}>{p.status}</span>
      </div>

      {/* tag */}
      <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "14px", fontWeight: 500, letterSpacing: "0.04em" }}>{p.tag}</div>

      {/* description */}
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.75, flex: 1, marginBottom: "20px" }}>{p.desc}</p>

      {/* stack chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: p.repo ? "16px" : "0" }}>
        {p.stack.map(s => (
          <span key={s} style={{ padding: "3px 10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", fontSize: "11px", color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>{s}</span>
        ))}
      </div>

      {/* github button */}
      {p.repo && (
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            padding: "8px 14px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            color: "#e2e8f0",
            fontSize: "12px", fontWeight: 500,
            textDecoration: "none",
            transition: "background 0.2s, border-color 0.2s, color 0.2s",
            alignSelf: "flex-start",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(34,211,165,0.08)";
            e.currentTarget.style.borderColor = "rgba(34,211,165,0.4)";
            e.currentTarget.style.color = "#22d3a5";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.color = "#e2e8f0";
          }}
        >
          <GitHubIcon /> View on GitHub
        </a>
      )}
    </div>
  );
};

const ContactForm = ({ styles }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("empty");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, to_name: "Pramesh" },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px", padding: "12px 16px", color: "#e2e8f0", fontSize: "14px",
    outline: "none", width: "100%", boxSizing: "border-box",
    fontFamily: "'DM Sans', sans-serif", transition: "border-color 0.2s",
  };

  return (
    <FadeIn direction="left" delay={0.2}>
      <div style={{ ...styles.card, padding: "40px" }}>
        <div style={{ fontSize: "13px", color: "#64748b", fontFamily: "'JetBrains Mono', monospace", marginBottom: "24px" }}>
          {"// send a message"}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} style={inputStyle}
            onFocus={e => e.target.style.borderColor = "rgba(34,211,165,0.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle}
            onFocus={e => e.target.style.borderColor = "rgba(34,211,165,0.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
          <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={handleChange}
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={e => e.target.style.borderColor = "rgba(34,211,165,0.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />

          {status === "success" && (
            <div style={{ padding: "12px 16px", background: "rgba(34,211,165,0.1)", border: "1px solid rgba(34,211,165,0.25)", borderRadius: "8px", color: "#22d3a5", fontSize: "14px" }}>
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === "empty" && (
            <div style={{ padding: "12px 16px", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "8px", color: "#f59e0b", fontSize: "14px" }}>
              ⚠ Please fill in all fields.
            </div>
          )}
          {status === "error" && (
            <div style={{ padding: "12px 16px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: "8px", color: "#f87171", fontSize: "14px" }}>
              ✕ Something went wrong. Try emailing me directly at fernandomps.21@uom.lk
            </div>
          )}

          <button onClick={handleSubmit} disabled={status === "sending"}
            style={{
              padding: "13px 24px", background: status === "sending" ? "rgba(34,211,165,0.5)" : "#22d3a5",
              color: "#080c14", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 700,
              cursor: status === "sending" ? "not-allowed" : "pointer", transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { if (status !== "sending") { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(34,211,165,0.3)"; }}}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}>
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>
        </div>
      </div>
    </FadeIn>
  );
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const roles = useRef(["Software Engineer", "Full-Stack Developer", "Mobile App Developer", "IT Undergraduate"]);
  const roleRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "achievements", "contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.4 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => { // eslint-disable-line react-hooks/exhaustive-deps
    const type = () => {
      const role = roles.current[roleRef.current];
      if (!deletingRef.current) {
        if (charRef.current < role.length) {
          setTypedText(role.slice(0, ++charRef.current));
          setTimeout(type, 80);
        } else {
          deletingRef.current = true;
          setTimeout(type, 1800);
        }
      } else {
        if (charRef.current > 0) {
          setTypedText(role.slice(0, --charRef.current));
          setTimeout(type, 40);
        } else {
          deletingRef.current = false;
          roleRef.current = (roleRef.current + 1) % roles.current.length;
          setTimeout(type, 300);
        }
      }
    };
    const t = setTimeout(type, 800);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: "Home" }, { id: "about", label: "About" },
    { id: "skills", label: "Skills" }, { id: "projects", label: "Projects" },
    { id: "achievements", label: "Awards" }, { id: "contact", label: "Contact" }
  ];

  const styles = {
    root: { background: "#080c14", color: "#e2e8f0", fontFamily: "'DM Sans', 'Segoe UI', sans-serif", minHeight: "100vh", overflowX: "hidden" },
    nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrollY > 60 ? "rgba(8,12,20,0.95)" : "transparent", borderBottom: scrollY > 60 ? "1px solid rgba(34,211,165,0.1)" : "1px solid transparent", backdropFilter: scrollY > 60 ? "blur(16px)" : "none", transition: "all 0.4s ease", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" },
    logo: { fontFamily: "'Space Grotesk', monospace", fontSize: "20px", fontWeight: 700, color: "#22d3a5", letterSpacing: "-0.02em", textDecoration: "none" },
    navLinks: { display: "flex", gap: "36px", alignItems: "center" },
    hero: { minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 40px 80px", position: "relative", overflow: "hidden" },
    heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,165,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,165,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" },
    heroGlow: { position: "absolute", top: "20%", right: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,165,0.06) 0%, transparent 70%)", pointerEvents: "none" },
    section: { padding: "100px 40px", maxWidth: "1100px", margin: "0 auto" },
    sectionLabel: { fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#22d3a5", fontWeight: 600, marginBottom: "12px" },
    sectionTitle: { fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#f1f5f9", marginBottom: "60px", lineHeight: 1.1 },
    card: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px", transition: "border-color 0.3s, transform 0.3s", cursor: "default" },
    tag: { display: "inline-block", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" },
    chip: { display: "inline-block", padding: "4px 12px", background: "rgba(34,211,165,0.08)", color: "#22d3a5", borderRadius: "20px", fontSize: "12px", fontWeight: 500, margin: "3px", border: "1px solid rgba(34,211,165,0.15)" },
    divider: { width: "48px", height: "3px", background: "linear-gradient(90deg, #22d3a5, transparent)", marginBottom: "40px", borderRadius: "2px" }
  };

  return (
    <div style={styles.root}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.logo}>PF</span>
        <div style={styles.navLinks}>
          {navLinks.map(n => (
            <NavLink key={n.id} href={`#${n.id}`} active={activeSection === n.id} onClick={(e) => { e.preventDefault(); scrollTo(n.id); }}>
              {n.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroGrid} />
        <div style={styles.heroGlow} />
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#22d3a5", fontSize: "14px", marginBottom: "20px", opacity: 0.8, animation: "fadeInUp 0.6s ease 0.2s both" }}>
            {"// hello, world"}
          </div>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 700, lineHeight: 1.0, margin: "0 0 16px", color: "#f1f5f9", fontFamily: "'Space Grotesk', sans-serif", animation: "fadeInUp 0.6s ease 0.4s both" }}>
            Pramesh<br />
            <span style={{ color: "#22d3a5" }}>Fernando</span>
          </h1>
          <div style={{ fontSize: "clamp(18px, 3vw, 26px)", color: "rgba(255,255,255,0.5)", fontWeight: 400, marginBottom: "40px", minHeight: "40px", animation: "fadeInUp 0.6s ease 0.6s both" }}>
            <span style={{ color: "#94a3b8" }}>{typedText}</span>
            <span style={{ color: "#22d3a5", animation: "blink 1s infinite" }}>|</span>
          </div>
          <p style={{ maxWidth: "520px", lineHeight: 1.8, color: "rgba(255,255,255,0.45)", fontSize: "16px", marginBottom: "48px", animation: "fadeInUp 0.6s ease 0.8s both" }}>
            IT undergraduate at University of Moratuwa building modern web & mobile applications. Passionate about clean code, scalable architecture, and great user experiences.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", animation: "fadeInUp 0.6s ease 1s both" }}>
            <button onClick={() => scrollTo("projects")} style={{ padding: "14px 32px", background: "#22d3a5", color: "#080c14", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.02em", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 0 24px rgba(34,211,165,0.25)" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 32px rgba(34,211,165,0.35)"; }}
              onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 0 24px rgba(34,211,165,0.25)"; }}>
              View Projects
            </button>
            <button onClick={() => scrollTo("contact")} style={{ padding: "14px 32px", background: "transparent", color: "#22d3a5", border: "1px solid rgba(34,211,165,0.4)", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.target.style.background = "rgba(34,211,165,0.05)"; e.target.style.borderColor = "#22d3a5"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(34,211,165,0.4)"; }}>
              Get in Touch
            </button>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.4 }}>
          <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, transparent, #22d3a5)", animation: "scrollPulse 2s ease infinite" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#22d3a5" }}>scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ ...styles.section, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <FadeIn>
          <div style={styles.sectionLabel}>01 — About</div>
          <div style={styles.divider} />
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <FadeIn direction="right">
            <h2 style={{ ...styles.sectionTitle, marginBottom: "24px" }}>Turning ideas into<br /><span style={{ color: "#22d3a5" }}>elegant code</span></h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, fontSize: "15px", marginBottom: "20px" }}>
              Ambitious IT undergraduate at <span style={{ color: "#e2e8f0", fontWeight: 600 }}>University of Moratuwa</span>, expected to graduate in 2026. I specialize in building full-stack web and mobile applications that solve real-world problems.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, fontSize: "15px" }}>
              I thrive in fast-paced environments and bring strong problem-solving abilities, an eye for detail, and a passion for delivering production-quality software. Currently building an on-demand auto-care platform and a Spotify clone.
            </p>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { label: "Degree", value: "B.Sc. (Hons) IT", sub: "Uni. of Moratuwa" },
                { label: "Graduation", value: "2026", sub: "Expected" },
                { label: "A/L Results", value: "A A B", sub: "Maths · Chem · Phys" },
                { label: "Z-Score", value: "1.6915", sub: "G.C.E A/L 2020" },
              ].map((s, i) => (
                <div key={i} style={{ ...styles.card, textAlign: "center" }}>
                  <div style={{ fontSize: "22px", fontWeight: 700, color: "#22d3a5", fontFamily: "'Space Grotesk', sans-serif", marginBottom: "4px" }}>{s.value}</div>
                  <div style={{ fontSize: "12px", color: "#e2e8f0", fontWeight: 600, marginBottom: "2px" }}>{s.label}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ ...styles.section, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <FadeIn>
          <div style={styles.sectionLabel}>02 — Skills</div>
          <div style={styles.divider} />
          <h2 style={styles.sectionTitle}>Technical<br /><span style={{ color: "#22d3a5" }}>Expertise</span></h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {Object.entries(skills).map(([cat, items], i) => (
            <FadeIn key={cat} delay={i * 0.08}>
              <div style={{ ...styles.card, height: "100%" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(34,211,165,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#22d3a5", fontWeight: 600, marginBottom: "16px" }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {items.map(s => <span key={s} style={styles.chip}>{s}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ ...styles.section, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <FadeIn>
          <div style={styles.sectionLabel}>03 — Projects</div>
          <div style={styles.divider} />
          <h2 style={styles.sectionTitle}>What I've<br /><span style={{ color: "#22d3a5" }}>Built</span></h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.07}>
              <ProjectCard p={p} styles={styles} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" style={{ ...styles.section, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <FadeIn>
          <div style={styles.sectionLabel}>04 — Recognition</div>
          <div style={styles.divider} />
          <h2 style={styles.sectionTitle}>Achievements &<br /><span style={{ color: "#22d3a5" }}>Participations</span></h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px", marginBottom: "60px" }}>
          {achievements.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.08}>
              <div style={{ ...styles.card, display: "flex", flexDirection: "column", gap: "8px" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(34,211,165,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}>
                <div style={{ ...styles.tag, background: a.role === "Finalist" ? "rgba(34,211,165,0.12)" : "rgba(255,255,255,0.05)", color: a.role === "Finalist" ? "#22d3a5" : "#94a3b8", marginBottom: "4px" }}>{a.role}</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9" }}>{a.title}</div>
                <div style={{ fontSize: "12px", color: "#64748b" }}>{a.org}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 600, marginBottom: "20px" }}>Extracurricular</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {["IEEE Student Branch Member", "CMS Member (2022–Present)", "Triple G Choir (2023–Present)", "Fit Moments (2022)"].map(a => (
              <span key={a} style={{ ...styles.chip, fontSize: "13px" }}>{a}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...styles.section, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <FadeIn>
          <div style={styles.sectionLabel}>05 — Contact</div>
          <div style={styles.divider} />
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <FadeIn direction="right">
            <h2 style={{ ...styles.sectionTitle, marginBottom: "20px" }}>Let's work<br /><span style={{ color: "#22d3a5" }}>together</span></h2>
            <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.9, fontSize: "15px", marginBottom: "40px" }}>
              I'm open to internships, freelance opportunities, and collaborative projects. Feel free to reach out!
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Email", value: "fernandomps.21@uom.lk", href: "mailto:fernandomps.21@uom.lk" },
                { label: "Phone", value: "(+94) 70 674 7745", href: "tel:+94706747745" },
                { label: "LinkedIn", value: "prameshfernando", href: "https://linkedin.com/in/prameshfernando" },
                { label: "Location", value: "Panadura, Sri Lanka", href: null },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "11px", color: "#22d3a5", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{c.label}</span>
                  {c.href ? (
                    <a href={c.href} style={{ color: "#e2e8f0", fontSize: "15px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#22d3a5"}
                      onMouseLeave={e => e.target.style.color = "#e2e8f0"}>
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ color: "#e2e8f0", fontSize: "15px" }}>{c.value}</span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          <ContactForm styles={styles} />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "30px 40px", textAlign: "center" }}>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>
          Designed & built by <span style={{ color: "#22d3a5" }}>Pramesh Fernando</span> · {new Date().getFullYear()}
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes scrollPulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.9; } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #080c14; } ::-webkit-scrollbar-thumb { background: rgba(34,211,165,0.3); border-radius: 3px; }
        ::selection { background: rgba(34,211,165,0.25); color: #f1f5f9; }
      `}</style>
    </div>
  );
}
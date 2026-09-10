"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowRight, FaBars, FaChevronDown, FaDatabase, FaExternalLinkAlt, FaGithub, FaLinkedinIn, FaSlack, FaTimes } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdDownload, MdEmail, MdOpenInNew } from "react-icons/md";
import { SiGmail, SiGooglechat } from "react-icons/si";
import LoadingIntro from "./loading-intro";

type PortfolioData = typeof import("@/data/portfolio.json");
type Project = PortfolioData["projects"][number];
const iconMap = { linkedin: FaLinkedinIn, github: FaGithub, mail: MdEmail };
const sectionIds = ["home", "about", "projects", "experience", "contact"];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SocialIcon({ icon }: { icon: string }) {
  const Icon = iconMap[icon as keyof typeof iconMap];
  return Icon ? <Icon aria-hidden="true" /> : null;
}

function Monogram({ compact = false }: { compact?: boolean }) {
  return <span className={`monogram${compact ? " compact" : ""}`} aria-label="Monish P N monogram"><span>M</span><i /><span>PN</span></span>;
}

function ProjectGraphic({ title }: { title: string }) {
  const key = title.toLowerCase();
  if (key.includes("database")) return <div className="project-graphic database-graphic" aria-hidden="true"><div className="graphic-caption"><span>DATABASE-LEVEL ATTRIBUTION</span><i>SHARED RDS INSTANCE</i></div><div className="rds-bill"><span><FaDatabase/>RDS INSTANCE BILL</span><strong>$2,000</strong><small>AWS REPORTS ONE TOTAL</small></div><div className="allocation-bus"><i/><span>ALLOCATE BY USAGE</span><i/></div><div className="db-cost-grid"><div className="db-cost-card db-alpha"><header><FaDatabase/><span><b>DB-01</b><small>TEAM ALPHA</small></span><strong>$840</strong></header><div className="usage-metrics"><span><b>CPU</b><i/></span><span><b>MEM</b><i/></span><span><b>STORAGE</b><i/></span></div><footer>42% OF INSTANCE COST</footer></div><div className="db-cost-card db-beta"><header><FaDatabase/><span><b>DB-02</b><small>TEAM BETA</small></span><strong>$700</strong></header><div className="usage-metrics"><span><b>CPU</b><i/></span><span><b>MEM</b><i/></span><span><b>STORAGE</b><i/></span></div><footer>35% OF INSTANCE COST</footer></div><div className="db-cost-card db-gamma"><header><FaDatabase/><span><b>DB-03</b><small>TEAM GAMMA</small></span><strong>$460</strong></header><div className="usage-metrics"><span><b>CPU</b><i/></span><span><b>MEM</b><i/></span><span><b>STORAGE</b><i/></span></div><footer>23% OF INSTANCE COST</footer></div></div><div className="cost-output"><span>DATABASE COSTS RECONCILED TO INSTANCE BILL</span><strong>100%</strong><i/></div></div>;
  if (key.includes("transition")) return <div className="project-graphic worker-graphic" aria-hidden="true"><div className="graphic-caption"><span>SEQUENTIAL TRANSITION</span><i>REDIS COORDINATED</i></div><div className="sequence-simulator"><div className="worker-origin"><b>REDIS</b><span>GROUP-42</span><i/><i/><i/></div><div className="poll-lane"><i/><i/><i/><small>POLL · REQUEUE · ADVANCE</small></div><div className="resource-sequence"><b>RESOURCE GROUP 42</b><div className="resource-unit resource-one"><span>01</span><strong>DATABASE</strong><i/></div><em>↓</em><div className="resource-unit resource-two"><span>02</span><strong>API SERVICE</strong><i/></div><em>↓</em><div className="resource-unit resource-three"><span>03</span><strong>WORKER NODE</strong><i/></div></div><span className="worker-agent"><b/><small/></span><div className="group-complete">✓ GROUP COMPLETE</div></div><div className="sequence-status"><span><i/>CHECKING</span><span><i/>STILL PROCESSING</span><span><i/>START NEXT</span></div></div>;
  if (key.includes("notification")) return <div className="project-graphic notification-graphic" aria-hidden="true"><div className="graphic-caption"><span>NOTIFICATION ROUTER</span><i>25K / MONTH</i></div><div className="notification-map"><div className="event-queue"><span>EVENT</span><i/><i/><i/></div><div className="notify-hub">API<small>QUEUE + RETRY</small><b className="incoming-message">•••</b></div><div className="channel-grid"><span className="slack"><FaSlack/><small>Slack</small></span><span className="gmail"><SiGmail/><small>Gmail</small></span><span className="chat"><SiGooglechat/><small>Google Chat</small></span><span className="teams"><BsMicrosoftTeams/><small>Teams</small></span></div></div><div className="delivery-line"><i/><span>MESSAGE ROUTED · DELIVERED</span></div></div>;
  if (key.includes("scholarship")) return <div className="project-graphic rag-graphic" aria-hidden="true"><div className="graphic-caption"><span>SCHOLARSHIP ASSISTANT</span><i>GROUNDED IN EVIDENCE</i></div><div className="chatbot-shell"><div className="chatbot-bar"><span><i/>SCHOLARSHIP BOT</span><small>ONLINE</small></div><div className="chat-thread"><div className="chat-message user-message"><small>YOU</small><p>Am I eligible for a postgraduate scholarship?</p></div><div className="retrieval-status"><i/><span>Searching scholarship guide</span><b/><b/><b/></div><div className="chat-message bot-message"><small>ASSISTANT</small><p>Yes—eligible postgraduate applicants can apply if they meet the academic and enrolment requirements.</p><span>Source: Scholarship guide · p. 12</span></div></div><div className="chat-input"><span>Ask about scholarships…</span><b>↑</b></div></div><div className="confidence-meter"><span>ANSWER GROUNDED IN RETRIEVED EVIDENCE</span><i><b/></i><strong>92</strong></div></div>;
  if (key.includes("jd lens")) return <div className="project-graphic lens-graphic" aria-hidden="true"><div className="graphic-caption"><span>JOB PAGE ADAPTER</span><i>MANIFEST V3</i></div><div className="browser-frame"><div className="browser-bar"><i/><i/><i/><span>linkedin.com/jobs/view</span></div><div className="job-copy"><b/><b/><b/><b/><b/></div><div className="floating-lens"><strong>JD LENS</strong><span><b>EXP</b> 2–4 YEARS</span><span><b>SKILLS</b> GO / AWS</span><span><b>MODE</b> HYBRID</span></div></div></div>;
  return <div className="project-graphic price-graphic" aria-hidden="true"><div className="graphic-caption"><span>LIVE PRICE COMPARISON</span><i>3 SOURCES</i></div><div className="product-preview"><div className="headphones"><i/><i/><b/></div><div className="product-copy"><strong>WIRELESS HEADPHONES</strong><span>SKU · AUDIO-042</span><i/></div></div><div className="price-grid"><div className="price-card"><small>SITE A</small><b>₹4,999</b><i>+6%</i></div><div className="price-card best"><small>SITE B</small><b>₹4,699</b><i>BEST</i></div><div className="price-card"><small>SITE C</small><b>₹5,299</b><i>+13%</i></div></div><div className="price-scan"><i/><span>CHECKING CURRENT PRICES</span></div></div>;
}

function ResumeMenu({ onlineUrl }: { onlineUrl: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const outside = (event: PointerEvent) => { if (!ref.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", outside); document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, []);
  return <div className="resume-control" ref={ref}><button type="button" className="resume-toggle" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-haspopup="menu">Résumé <FaChevronDown aria-hidden="true" /></button><AnimatePresence>{open ? <motion.div className="resume-popover" role="menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
    {onlineUrl ? <a role="menuitem" href={onlineUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}><MdOpenInNew /><span>View online<small>Open in a new tab</small></span></a> : null}<a role="menuitem" href="/resume.pdf" download="Monish_P_N_Resume.pdf" onClick={() => setOpen(false)}><MdDownload /><span>Download PDF<small>Save a local copy</small></span></a>
  </motion.div> : null}</AnimatePresence></div>;
}

function ProjectDialog({ project, close }: { project: Project | null; close: () => void }) {
  useEffect(() => {
    if (!project) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.body.classList.add("modal-open"); document.addEventListener("keydown", escape);
    return () => { document.body.classList.remove("modal-open"); document.removeEventListener("keydown", escape); };
  }, [project, close]);
  return <AnimatePresence>{project ? <motion.div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" onMouseDown={event => { if (event.target === event.currentTarget) close(); }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.article initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: .3 }}>
    <button className="modal-close" type="button" onClick={close} aria-label="Close project details"><FaTimes /></button><p className="kicker">{project.type}</p><h2 id="case-title">{project.title}</h2><p className="modal-summary">{project.description}</p><div className="modal-meta"><span><small>Role</small>{project.role}</span><span><small>Year</small>{project.year}</span></div><h3>Inside the build</h3><ul>{project.details.map((detail, index) => <li key={`${project.title}-${index}`}>{detail}</li>)}</ul><div className="tech-row">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><div className="modal-actions">{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a> : null}{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live demo</a> : null}</div>
  </motion.article></motion.div> : null}</AnimatePresence>;
}

export default function PortfolioClient({ data }: { data: PortfolioData }) {
  const { profile, socials, about, experiences, projects, achievements } = data;
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [focusedProject, setFocusedProject] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: .25 });
  const closeProject = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    const observers = sectionIds.map(id => { const element = document.getElementById(id); if (!element) return null; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActive(id); }, { rootMargin: "-38% 0px -52%", threshold: 0 }); observer.observe(element); return observer; });
    return () => observers.forEach(observer => observer?.disconnect());
  }, []);

  function moveGrid(event: React.PointerEvent<HTMLElement>) {
    if (reduced || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect(); heroRef.current.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`); heroRef.current.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  }

  const navItems = [{ id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "projects", label: "Projects" }, { id: "experience", label: "Experience" }, { id: "contact", label: "Contact" }];
  return <main><LoadingIntro /><motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} />
    <header className="kinetic-nav"><a href="#home" className="brand-link"><Monogram compact /></a><nav className={mobileOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">{navItems.map((item, index) => <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} onClick={() => setMobileOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}</nav><div className="nav-actions"><ResumeMenu onlineUrl={profile.resumeLink} /><button type="button" className="menu-toggle" onClick={() => setMobileOpen(value => !value)} aria-expanded={mobileOpen} aria-label="Toggle navigation">{mobileOpen ? <FaTimes /> : <FaBars />}</button></div></header>

    <section className="kinetic-hero command-hero" id="home" ref={heroRef} onPointerMove={moveGrid}>
      <div className="hero-grid" aria-hidden="true"/><div className="pointer-field" aria-hidden="true"/>
      <motion.div className="hero-scene" initial={reduced ? false : { opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .72, ease: [0.22, 1, 0.36, 1] }}>
        <Image className="hero-scene-image" src={profile.photo} alt={profile.photoAlt} width={1672} height={941} priority/>
        <motion.div className="command-intro" initial={reduced ? false : "hidden"} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .09, delayChildren: .16 } } }}>
          <motion.p className="hero-label" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}><span>01 / SYSTEM PROFILE</span>{profile.location}</motion.p>
          <h1 aria-label={profile.name}>{profile.name.split(" ").map((part, index) => <motion.span key={`${part}-${index}`} variants={{ hidden: { y: "110%" }, show: { y: 0 } }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>{part}</motion.span>)}</h1>
          <motion.div className="hero-role" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}><p>{profile.title}</p><i/><p>Cloud &amp; production systems</p></motion.div>
          <motion.p className="hero-intro" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>I build dependable backend services, intelligent tooling, and systems that remain clear when production gets complicated.</motion.p>
          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><a className="button primary" href="#projects">Explore systems <FaArrowRight/></a><a className="button secondary" href="#contact">Start a conversation</a></motion.div>
        </motion.div>
        <div className="portrait-status"><i/>AVAILABLE / 2026</div><div className="portrait-scan" aria-hidden="true"/>
      </motion.div>
      <motion.div className="command-card platform-card" initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48 }}><div className="card-heading"><small>CONNECT / PLATFORMS</small><span>02</span></div><div className="platform-links">{socials.map(social => <a key={social.name} href={social.url} target={social.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><SocialIcon icon={social.icon}/><span>{social.name}</span><FaArrowRight/></a>)}</div></motion.div>
      <div className="hero-ticker" aria-label="Core technologies"><div className="ticker-track"><span>GO / REDIS / MYSQL / AWS / KUBERNETES / OBSERVABILITY</span><i aria-hidden="true">SYSTEM LOOP • 2026</i><span aria-hidden="true">GO / REDIS / MYSQL / AWS / KUBERNETES / OBSERVABILITY</span><i aria-hidden="true">SYSTEM LOOP • 2026</i></div></div>
      <a href="#about" className="hero-scroll">Scroll to explore <FaArrowDown/></a>
    </section>

    <section className="editorial-section about-section" id="about"><div className="section-index">02 / ABOUT</div><Reveal className="section-title"><p>Profile / Current focus</p><h2>Backend thinking.<br/><em>Production discipline.</em></h2></Reveal><div className="about-layout"><Reveal className="about-lead"><p>{about.headline}</p><span>Based in {profile.location}<br/>Open to remote, hybrid &amp; on-site</span></Reveal><Reveal className="about-body">{about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="status-line"><i/>{profile.availability}</div></Reveal></div><Reveal className="skill-system"><div className="skill-header"><p>Technology index</p><span>Swipe / scroll →</span></div><div className="skill-track">{about.skillGroups.map((group, index) => <article key={group.category}><span className="skill-number">0{index + 1}</span><h3>{group.category}</h3><div>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></Reveal></section>

    <section className="editorial-section projects-section" id="projects">
      <div className="section-index">03 / SELECTED WORK</div>
      <Reveal className="section-title"><p>Systems / Research / Tools</p><h2>Choose a system.<br/><em>Inspect the build.</em></h2></Reveal>
      <div className="project-console">
        <div className="project-monitor">
          <AnimatePresence mode="wait">
            <motion.div key={projects[focusedProject].title} initial={reduced ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: .3 }}>
              <div className="monitor-head"><span>ARCHITECTURE VIEW</span><span><i/>OPERATIONAL</span></div>
              <div className="monitor-stage"><ProjectGraphic title={projects[focusedProject].title}/></div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="project-index">
          {projects.map((project, index) => <article key={project.title} className={focusedProject === index ? "active" : ""} onMouseEnter={() => setFocusedProject(index)} onFocus={() => setFocusedProject(index)}>
            <button className="project-select" type="button" onClick={() => setFocusedProject(index)} aria-label={`Preview ${project.title}`}><span>{String(index + 1).padStart(2, "0")}</span><div><small>{project.type}</small><h3>{project.title}</h3><p>{project.description}</p></div><FaArrowRight/></button>
            <div className="project-index-actions"><button type="button" onClick={() => setSelectedProject(project)}>Case study</button>{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><FaGithub/> GitHub</a> : <span>Private build</span>}</div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="editorial-section experience-section" id="experience"><div className="section-index">04 / EXPERIENCE</div><Reveal className="section-title"><p>Work / Education / Recognition</p><h2>Shipping software.<br/><em>Learning in production.</em></h2></Reveal><div className="experience-timeline">{experiences.map((experience, index) => <Reveal className="experience-entry" key={experience.company}><span className="timeline-dot">0{index + 1}</span><div className="experience-logo"><Image src={experience.logo} alt={experience.logoAlt} width={160} height={160}/></div><div className="experience-heading"><p>{experience.dates}<br/>{experience.location}</p><h3>{experience.role}</h3><h4>{experience.company}</h4></div><ul>{experience.highlights.map((highlight, item) => <li key={`${experience.company}-${item}`}>{highlight}</li>)}</ul></Reveal>)}</div><Reveal className="achievement-heading"><p>Achievements &amp; recognitions</p><h2>Work recognized.<br/><em>Impact remembered.</em></h2></Reveal><Reveal className="achievement-strip">{achievements.map((achievement, index) => <article key={achievement.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{achievement.title}</h3><p>{achievement.description}</p></article>)}</Reveal></section>

    <footer id="contact" className="contact-section"><div className="contact-grid" aria-hidden="true"/><Reveal><p className="section-index">05 / CONTACT</p><h2>LET&apos;S BUILD<br/><em>SOMETHING USEFUL.</em></h2></Reveal><div className="contact-row"><div><p>Available for backend engineering opportunities and conversations about production-ready software.</p><a className="contact-email" href={`mailto:${profile.email}`}><MdEmail/>{profile.email}</a></div><div className="contact-links">{socials.map(social => <a key={social.name} href={social.url} target={social.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><SocialIcon icon={social.icon}/><span>{social.name}</span><FaArrowRight/></a>)}<a href={profile.resumeLink || "/resume.pdf"} target={profile.resumeLink ? "_blank" : undefined} rel="noreferrer"><MdDownload/><span>Résumé</span><FaArrowRight/></a></div></div><div className="contact-bottom"><Monogram compact/><p>© 2026 {profile.name}</p><a href="#home">Back to top ↑</a></div></footer>
    <ProjectDialog project={selectedProject} close={closeProject}/>
  </main>;
}

import type { Metadata } from "next";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import portfolio from "@/data/portfolio.json";
import ProjectSection from "./project-section";
import ResumeMenu from "./resume-menu";

export const metadata: Metadata = {
  title: `${portfolio.profile.name} — ${portfolio.profile.title}`,
  description: `Portfolio of ${portfolio.profile.name}, a backend software engineer working with Go, cloud infrastructure, and production systems.`,
};

const socialIcons = { linkedin: FaLinkedinIn, github: FaGithub, mail: MdEmail };

function SocialIcon({ name }: { name: string }) {
  const Icon = socialIcons[name as keyof typeof socialIcons];
  return Icon ? <Icon aria-hidden="true" size={15} /> : null;
}

export default function Home() {
  const { profile, socials, sectionHeadings, footer, about, experiences, projects, achievements } = portfolio;
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Go to top">{profile.initials}<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#achievements">Achievements</a></nav>
      <ResumeMenu resumeLink={profile.resumeLink} />
    </header>

    <section className="profile" id="top">
      <div className="portrait-frame"><Image src={profile.photo} alt={profile.photoAlt} width={800} height={800} priority /></div>
      <p className="status"><i /> {profile.availability}</p><h1>{profile.name}</h1><p className="role">{profile.title} · {profile.location}</p>
      <div className="socials" aria-label="Social links">{socials.map(social => <a key={social.name} href={social.url} target={social.url.startsWith("http") ? "_blank" : undefined} rel={social.url.startsWith("http") ? "noreferrer" : undefined} aria-label={social.ariaLabel}><b><SocialIcon name={social.icon} /></b><span>{social.name}</span></a>)}</div>
      <a className="scroll-link" href="#about">Explore my work <span>↓</span></a>
    </section>

    <section className="about section" id="about">
      <div className="section-heading"><p className="eyebrow">About me</p><h2>{about.headline}</h2></div>
      <div className="about-content">
        <div className="about-copy">{about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="skills-box" aria-label="Technical skills by category">
          <div className="skills-box-header"><h3>Technical skills</h3><span>Scroll to explore →</span></div>
          <div className="skill-groups">
            {about.skillGroups.map(group => <section className="skill-group" key={group.category}><h4>{group.category}</h4><div>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>)}
          </div>
        </div>
      </div>
    </section>

    <section className="experience section alt" id="experience">
      <div className="section-heading compact"><p className="eyebrow">Experience</p><h2>{sectionHeadings.experience}</h2></div>
      <div className="timeline">{experiences.map(experience => <article key={`${experience.company}-${experience.dates}`}><div className="company-logo"><Image src={experience.logo} alt={experience.logoAlt} width={200} height={200} /></div><div className="timeline-content"><div className="company-heading"><h3>{experience.role}</h3><h4>{experience.company}</h4><p>{experience.dates} · {experience.location}</p></div><ul>{experience.highlights.map((highlight, index) => <li key={`${experience.company}-highlight-${index}`}>{highlight}</li>)}</ul></div></article>)}</div>
    </section>

    <section className="projects section" id="projects">
      <div className="section-heading compact"><p className="eyebrow">Projects</p><h2>{sectionHeadings.projects}</h2></div>
      <ProjectSection projects={projects} />
    </section>

    <section className="achievements section alt" id="achievements">
      <div className="section-heading compact"><p className="eyebrow">Achievements</p><h2>{sectionHeadings.achievements}</h2></div>
      <div className="achievement-list">{achievements.map((achievement,index) => <article key={achievement.title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{achievement.title}</h3><p>{achievement.description}</p></div></article>)}</div>
    </section>

    <footer>
      <div className="footer-main">
        <div className="footer-intro"><p className="eyebrow">Let&apos;s connect</p><h2>{footer.headline}</h2><p>{footer.message}</p></div>
        <div className="footer-contact"><p className="footer-label">Start a conversation</p><div className="footer-action-row"><a className="email-action" href={`mailto:${profile.email}`}><SocialIcon name="mail" /><span><small>Email me</small>{profile.email}</span></a><div className="footer-socials">{socials.filter(social => social.url.startsWith("http")).map(social => <a key={social.name} href={social.url} target="_blank" rel="noreferrer"><SocialIcon name={social.icon} />{social.name}</a>)}</div></div></div>
      </div>
      <div className="footer-bottom"><p>© 2026 {profile.name} · {profile.location}</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
    </footer>
  </main>;
}

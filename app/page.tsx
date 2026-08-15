import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Monish P N — Backend Software Engineer",
  description: "Portfolio of Monish P N, a backend software engineer working with Go, cloud infrastructure, and production systems.",
};

const External = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Go to top">MPN<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
        </nav>
        <span className="resume-button" aria-label="Resume link coming soon" title="Add your Google Drive link to enable this">Resume soon</span>
      </header>

      <section className="profile" id="top">
        <div className="portrait-frame">
          <Image src="/monish-profile.jpeg" alt="Portrait of Monish P N" width={800} height={800} priority />
        </div>
        <p className="status"><i /> Open to backend engineering opportunities</p>
        <h1>Monish P N</h1>
        <p className="role">Backend Software Engineer · Bengaluru, India</p>
        <div className="socials" aria-label="Social links">
          <a href="https://linkedin.com/in/monish-pn" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><b>in</b><span>LinkedIn</span></a>
          <a href="mailto:pnmonish187@gmail.com" aria-label="Send Monish an email"><b>@</b><span>Email</span></a>
        </div>
        <a className="scroll-link" href="#about">Explore my work <span>↓</span></a>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <p className="eyebrow">About me</p>
          <h2>I build reliable backend systems that are clear to operate and ready for production.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>I&apos;m an early-career backend engineer with production experience building <strong>Go microservices, asynchronous processing systems, cloud integrations, and operational tooling.</strong></p>
            <p>My work has taken me from API and database design to weekly releases, monitoring, on-call support, and incident investigation. I care about performance, recovery, observability, and the small engineering decisions that make services dependable.</p>
          </div>
          <div className="skill-list" aria-label="Core skills">
            <span>Go / Golang</span><span>Microservices</span><span>Redis</span><span>MySQL</span><span>AWS</span><span>Kubernetes</span><span>Docker</span><span>Grafana</span><span>Prometheus</span><span>Python</span>
          </div>
        </div>
      </section>

      <section className="experience section alt" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow">Experience</p>
          <h2>Where I&apos;ve worked</h2>
        </div>
        <div className="timeline">
          <article>
            <div className="timeline-meta"><span>June 2025 — April 2026</span><p>Bengaluru · On-site</p></div>
            <div className="timeline-content"><h3>Software Development Engineer</h3><h4>ZopDev</h4><ul><li>Developed production Go microservices across cloud-resource management, FinOps, notifications, and observability.</li><li>Built Redis-backed asynchronous workers, REST APIs, MySQL workflows, and AWS integrations.</li><li>Executed weekly releases, joined 24-hour on-call rotations, and investigated 30+ production issues.</li><li>Improved API performance through pagination, SQL optimization, indexing, and batched retrieval.</li></ul></div>
          </article>
          <article>
            <div className="timeline-meta"><span>May 2024 — July 2024</span><p>Remote / Bengaluru</p></div>
            <div className="timeline-content"><h3>Security Software Developer Intern</h3><h4>Data Security Council of India / CID Karnataka</h4><ul><li>Contributed to an authorized internal OSINT platform for police stakeholders.</li><li>Evaluated and integrated 37 public OSINT APIs across heterogeneous intelligence data.</li><li>Received an Appreciation Certificate from the Superintendent of Police, Cybercrime Department, Karnataka.</li></ul></div>
          </article>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading compact">
          <p className="eyebrow">Projects</p>
          <h2>Selected engineering work</h2>
        </div>
        <div className="project-grid">
          <article className="project-card">
            <div className="project-number">01</div>
            <p className="project-type">FinOps · AWS RDS</p>
            <h3>Database-level cost attribution</h3>
            <p>Built a scheduled system that estimated each database&apos;s share of a common RDS bill using storage, CPU, and memory weights. It helped a client identify unused databases and contributed to an approximately 70% month-over-month cost reduction.</p>
            <div className="tags"><span>Go</span><span>AWS SDK</span><span>CloudWatch</span><span>MySQL</span></div>
          </article>
          <article className="project-card">
            <div className="project-number">02</div>
            <p className="project-type">Asynchronous processing</p>
            <h3>Sequential transition engine</h3>
            <p>Created restart-resilient Redis workers that preserved one-at-a-time ordering within 100+ resource groups while allowing five workers to process different groups concurrently.</p>
            <div className="tags"><span>Go</span><span>Redis</span><span>Workers</span><span>Recovery</span></div>
          </article>
          <article className="project-card">
            <div className="project-number">03</div>
            <p className="project-type">Platform communications</p>
            <h3>Multi-channel notification service</h3>
            <p>Built an end-to-end service for Slack, email, Google Chat, and Microsoft Teams with queued dispatch, templates, throttling, actionable messages, and delayed failure retry.</p>
            <div className="tags"><span>REST API</span><span>Redis</span><span>MySQL</span><span>Slack API</span></div>
          </article>
          <article className="project-card">
            <div className="project-number">04</div>
            <p className="project-type">Applied machine learning</p>
            <h3>Text-to-SQL with T5</h3>
            <p>Fine-tuned a T5 model to translate natural-language questions into basic to moderately complex SQL queries. The research was later published as a technical book chapter.</p>
            <div className="tags"><span>Python</span><span>T5</span><span>Transformers</span><span>SQL</span></div>
          </article>
        </div>
      </section>

      <section className="achievements section alt" id="achievements">
        <div className="section-heading compact">
          <p className="eyebrow">Achievements</p>
          <h2>Milestones I&apos;m proud of</h2>
        </div>
        <div className="achievement-list">
          <article><span>01</span><div><h3>CIDECODE Hackathon 2024 — First Place</h3><p>Won a national-level, 24-hour OSINT hackathon at PES University as part of a three-person team. The result led to my internship with DSCI / CID Karnataka.</p></div></article>
          <article><span>02</span><div><h3>Published Text-to-SQL Research</h3><p>Published as a book chapter by CRC Press / Taylor &amp; Francis in <em>Emerging Technologies in AI, Computation, Communication, and Cybersecurity</em> (2025).</p></div></article>
          <article><span>03</span><div><h3>B.Tech in Computer Science Engineering</h3><p>Graduated from BNM Institute of Technology with a GPA of 9.20 / 10.0.</p></div></article>
        </div>
      </section>

      <footer>
        <div><p className="eyebrow">Get in touch</p><h2>Let&apos;s build something dependable.</h2></div>
        <div className="footer-actions"><a href="mailto:pnmonish187@gmail.com">pnmonish187@gmail.com <External /></a><a href="https://linkedin.com/in/monish-pn" target="_blank" rel="noreferrer">LinkedIn <External /></a></div>
        <p className="copyright">© 2026 Monish P N · Bengaluru, India</p>
      </footer>
    </main>
  );
}

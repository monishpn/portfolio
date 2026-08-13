import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monish P N — Backend Software Engineer",
  description:
    "Backend software engineer building reliable Go services, cloud integrations, asynchronous systems, and production tooling.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Monish P N, home">
          <span>MPN</span>
          <i />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="contact-link" href="mailto:pnmonish187@gmail.com">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Backend engineer · Bengaluru, India</p>
          <h1>
            I build the systems
            <br />behind <em>the product.</em>
          </h1>
          <p className="hero-intro">
            I&apos;m Monish—a backend software engineer focused on <strong>Go microservices, asynchronous processing, cloud infrastructure</strong>, and the operational details that keep production reliable.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore selected work <span>↓</span></a>
            <a className="button ghost" href="mailto:pnmonish187@gmail.com">pnmonish187@gmail.com <Arrow /></a>
          </div>
        </div>

        <div className="system-card" aria-label="A simplified backend service architecture">
          <div className="window-bar"><i/><i/><i/><span>service-architecture.go</span></div>
          <div className="architecture">
            <div className="arch-label">REQUEST FLOW</div>
            <div className="arch-row"><span>01</span><b>REST API</b><i>validated input</i></div>
            <div className="arch-line" />
            <div className="arch-row"><span>02</span><b>GO SERVICE</b><i>business logic</i></div>
            <div className="arch-line" />
            <div className="arch-split"><div><span>03A</span><b>REDIS</b><i>async queue</i></div><div><span>03B</span><b>MYSQL</b><i>durable state</i></div></div>
            <div className="arch-footer"><span className="pulse"/> observable · recoverable · production-ready</div>
          </div>
        </div>
        <div className="scroll-note">SCROLL TO TRACE THE SYSTEM <span>↓</span></div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div><strong>100+</strong><span>resource groups<br/>orchestrated</span></div>
        <div><strong>~25K</strong><span>monthly notifications<br/>supported</span></div>
        <div><strong>30+</strong><span>production issues<br/>investigated</span></div>
        <div><strong>9.20</strong><span>computer science<br/>GPA / 10</span></div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span /> Selected engineering work</p>
          <h2>Systems that moved<br/>the needle.</h2>
          <p>Production problems, unpacked through architecture, decisions, and measurable outcomes.</p>
        </div>

        <article className="case featured">
          <div className="case-number">01 / 03</div>
          <div className="case-copy">
            <p className="case-kicker">FINOPS · AWS RDS · GO</p>
            <h3>Making shared cloud costs<br/>legible, database by database.</h3>
            <p>Built a scheduled cost-attribution engine that modeled storage, CPU, and memory weights for each database on shared RDS instances—turning one opaque bill into actionable allocation data.</p>
            <div className="tags"><span>Go</span><span>AWS SDK</span><span>CloudWatch</span><span>MySQL</span></div>
          </div>
          <div className="impact-card blue">
            <span className="impact-label">CLIENT OUTCOME</span>
            <strong>~70%</strong>
            <p>month-over-month infrastructure cost reduction after the system helped identify unused databases.</p>
            <div className="mini-bars"><i/><i/><i/><i/><i/><i/></div>
          </div>
        </article>

        <div className="case-grid">
          <article className="case compact">
            <div className="case-number">02 / 03</div>
            <p className="case-kicker">DISTRIBUTED PROCESSING</p>
            <h3>Order within groups.<br/>Concurrency across them.</h3>
            <p>Created a restart-resilient Redis workflow that enforced sequential state transitions per resource group while five workers processed multiple groups concurrently.</p>
            <div className="flow" aria-hidden="true"><b>QUEUE</b><i>→</i><b>5× WORKERS</b><i>→</i><b>STATE</b></div>
            <div className="tags"><span>Redis</span><span>Go workers</span><span>Recovery</span></div>
          </article>
          <article className="case compact dark-card">
            <div className="case-number">03 / 03</div>
            <p className="case-kicker">PLATFORM COMMUNICATIONS</p>
            <h3>One service.<br/>Four delivery channels.</h3>
            <p>Built the platform&apos;s first end-to-end notification service with queued dispatch, throttling, templates, actionable messages, and delayed failure retry.</p>
            <div className="channel-grid" aria-label="Notification channels"><span>SLACK</span><span>EMAIL</span><span>G·CHAT</span><span>TEAMS</span></div>
            <div className="tags"><span>REST API</span><span>Redis</span><span>MySQL</span></div>
          </article>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading horizontal">
          <div><p className="eyebrow"><span /> Experience</p><h2>Built in production.</h2></div>
          <p>Early in my career, but already comfortable where systems become real: releases, monitoring, incidents, and customer impact.</p>
        </div>
        <div className="timeline">
          <article>
            <div className="time">2025—2026</div>
            <div><h3>Software Development Engineer</h3><a href="https://www.zopdev.com" target="_blank" rel="noreferrer">ZopDev <Arrow /></a></div>
            <ul><li>Developed Go microservices across cloud-resource management, FinOps, notifications, and observability.</li><li>Executed weekly production releases and validated Kubernetes rollouts on GCP-hosted workloads.</li><li>Improved API performance through pagination, SQL optimization, indexing, and batched retrieval.</li><li>Participated in 24-hour on-call rotations and investigated 30+ production issues.</li></ul>
          </article>
          <article>
            <div className="time">2024</div>
            <div><h3>Security Software Developer Intern</h3><span>DSCI / CID Karnataka</span></div>
            <ul><li>Contributed to an authorized internal OSINT platform for police stakeholders.</li><li>Evaluated and integrated 37 public intelligence APIs against a large, heterogeneous data repository.</li><li>Received an Appreciation Certificate from the Superintendent of Police, Cybercrime Department, Karnataka.</li></ul>
          </article>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-lead">
          <p className="eyebrow"><span /> Beyond the service boundary</p>
          <h2>Curious by default.<br/><em>Operational by instinct.</em></h2>
        </div>
        <div className="about-body">
          <p>I like backend work because the best systems feel almost invisible: predictable under load, understandable when they fail, and considerate of the engineers who operate them.</p>
          <p>My path into engineering also runs through cybersecurity and applied ML. I won the national-level <strong>CIDECODE Hackathon 2024</strong> with a three-person team, and my Text-to-SQL research was published as a book chapter by CRC Press / Taylor &amp; Francis.</p>
          <div className="skill-cloud"><span>GO / GOLANG</span><span>MICROSERVICES</span><span>REDIS</span><span>MYSQL</span><span>AWS</span><span>AZURE</span><span>KUBERNETES</span><span>DOCKER</span><span>GRAFANA</span><span>PROMETHEUS</span><span>PYTHON</span><span>OPENOBSERVE</span></div>
        </div>
      </section>

      <section className="credentials section">
        <article><span>01</span><p>National-level achievement</p><h3>CIDECODE Hackathon<br/>First-place winner</h3><small>PES University · 2024</small></article>
        <article><span>02</span><p>Published research</p><h3>Fine-Tuning T5 for Robust<br/>Text-to-SQL Translation</h3><small>CRC Press / Taylor &amp; Francis · 2025</small></article>
        <article><span>03</span><p>Education</p><h3>B.Tech, Computer Science<br/>GPA 9.20 / 10.0</h3><small>BNM Institute of Technology · 2025</small></article>
      </section>

      <footer>
        <p className="eyebrow"><span /> Available for the right opportunity</p>
        <h2>Have a hard backend<br/>problem? <em>Let&apos;s talk.</em></h2>
        <div className="footer-links">
          <a className="button primary" href="mailto:pnmonish187@gmail.com">Start a conversation <Arrow /></a>
          <a href="https://linkedin.com/in/monish-pn" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="tel:+919513779292">+91 95137 79292</a>
        </div>
        <div className="footer-bottom"><span>© 2026 MONISH P N</span><span>BENGALURU, INDIA · 12.9716° N</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}

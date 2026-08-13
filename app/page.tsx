import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monish P N — Backend Software Engineer",
  description: "Backend engineer building dependable Go services and cloud systems.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return <main>
    <header>
      <a className="logo" href="#top">Monish P N<span>.</span></a>
      <nav><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></nav>
      <a className="say-hi" href="mailto:pnmonish187@gmail.com">Say hello <Arrow /></a>
    </header>

    <section className="hero" id="top">
      <div className="available"><i/> Available for opportunities</div>
      <h1>Backend engineer.<br/><em>Systems thinker.</em></h1>
      <div className="hero-bottom">
        <p>I build dependable <strong>Go services, asynchronous systems, and cloud integrations</strong>—with a focus on performance, observability, and production reliability.</p>
        <div><a className="btn" href="#work">See my work <span>↓</span></a><a className="text-link" href="https://linkedin.com/in/monish-pn" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
      </div>
      <div className="hero-tag">Based in Bengaluru, India</div>
    </section>

    <section className="intro section" id="about">
      <p className="label">01 — About</p>
      <div><h2>I turn complex backend problems into systems that are easier to run, understand, and trust.</h2><p>My work spans Go microservices, Redis-backed job processing, cloud cost attribution, notifications, monitoring, and production operations. I enjoy the space where thoughtful engineering meets measurable business impact.</p></div>
    </section>

    <section className="work section" id="work">
      <div className="section-title"><p className="label">02 — Selected work</p><h2>A few things I&apos;ve built.</h2></div>
      <div className="project-grid">
        <article className="project project-main">
          <div className="project-top"><span>FinOps · AWS RDS</span><b>01</b></div>
          <div className="project-copy"><h3>Database-level cloud cost attribution</h3><p>Built a Go system that estimated each database&apos;s share of a common RDS bill using storage, CPU, and memory weights.</p><div className="pills"><i>Go</i><i>AWS SDK</i><i>MySQL</i></div></div>
          <div className="result"><strong>~70%</strong><span>month-over-month cost reduction after the system helped identify unused databases.</span></div>
        </article>
        <article className="project">
          <div className="project-top"><span>Concurrent processing</span><b>02</b></div>
          <div className="project-copy"><h3>Sequential state-transition engine</h3><p>Designed restart-resilient Redis workers that preserved ordering within 100+ resource groups while processing groups concurrently.</p><div className="pills"><i>Redis</i><i>Go workers</i><i>Recovery</i></div></div>
        </article>
        <article className="project">
          <div className="project-top"><span>Platform service</span><b>03</b></div>
          <div className="project-copy"><h3>Multi-channel notifications</h3><p>Built an end-to-end service for Slack, email, Google Chat, and Teams with queues, throttling, templates, and failure retry.</p><div className="pills"><i>REST API</i><i>Redis</i><i>MySQL</i></div></div>
        </article>
      </div>
    </section>

    <section className="experience section" id="experience">
      <p className="label">03 — Experience</p>
      <div className="roles">
        <article><div><span>2025 — 2026</span><h3>Software Development Engineer</h3><p>ZopDev · Bengaluru</p></div><p>Built production Go microservices across FinOps, cloud resource management, notifications, and observability. Shipped weekly releases, supported on-call rotations, and investigated 30+ production issues.</p></article>
        <article><div><span>2024</span><h3>Security Software Developer Intern</h3><p>DSCI / CID Karnataka</p></div><p>Contributed to an authorized internal OSINT platform, evaluating and integrating 37 public intelligence APIs. Received an Appreciation Certificate from the Superintendent of Police.</p></article>
      </div>
    </section>

    <section className="extras section">
      <div><strong>9.20</strong><span>B.Tech CSE<br/>GPA / 10</span></div><div><strong>1st</strong><span>CIDECODE<br/>Hackathon 2024</span></div><div><strong>Published</strong><span>Text-to-SQL<br/>book chapter</span></div>
    </section>

    <footer>
      <p className="label">Let&apos;s build something solid.</p>
      <h2>Have a backend problem<br/>worth solving?</h2>
      <a className="email" href="mailto:pnmonish187@gmail.com">pnmonish187@gmail.com <Arrow /></a>
      <div className="footer-bottom"><span>© 2026 Monish P N</span><a href="tel:+919513779292">+91 95137 79292</a><a href="#top">Back to top ↑</a></div>
    </footer>
  </main>;
}

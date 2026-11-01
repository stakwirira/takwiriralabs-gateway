const projects = [
  {
    name: "FinanceGPT",
    kind: "Personal finance, reimagined",
    description:
      "A clear-headed financial command center that turns transactions, savings goals, portfolios, and planning into a quieter kind of confidence.",
    href: "/FinanceGPT",
    status: "Live now",
    visual: "finance",
    details: ["Clarity over clutter", "Built for real decisions"],
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <path d="M19 2.5v33M2.5 19h33" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 7.5 30.5 30.5M30.5 7.5 7.5 30.5" stroke="currentColor" strokeWidth="1" opacity=".55" />
      <circle cx="19" cy="19" r="5.25" fill="currentColor" />
    </svg>
  );
}

function FinanceAbstract() {
  return (
    <div className="project-abstract finance-abstract" aria-hidden="true">
      <div className="finance-orbit finance-orbit-one" />
      <div className="finance-orbit finance-orbit-two" />
      <div className="finance-sun" />
      <div className="finance-panel finance-panel-one">
        <span />
        <span />
        <span />
      </div>
      <div className="finance-panel finance-panel-two" />
      <div className="finance-curve" />
      <div className="abstract-caption">ORDER / POSSIBILITY</div>
    </div>
  );
}

function ProjectCard({ project }) {
  const isLive = project.status === "Live now";
  const body = (
    <>
      <FinanceAbstract />
      <div className="project-card-content">
        <div className="project-card-topline">
          <p>{project.kind}</p>
          <span className={isLive ? "project-status project-status-live" : "project-status"}>
            <i />
            {project.status}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-bottom-row">
          <ul className="project-details" aria-label={`${project.name} qualities`}>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <span className="project-link-label">
            {isLive ? "Open project" : "Launching soon"} <Arrow />
          </span>
        </div>
      </div>
    </>
  );

  if (isLive) {
    return (
      <a className={`project-card project-card-${project.visual}`} href={project.href}>
        {body}
      </a>
    );
  }

  return <article className={`project-card project-card-${project.visual}`}>{body}</article>;
}

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Takwirira Labs home">
          <BrandMark />
          <span>Takwirira <em>Labs</em></span>
        </a>
        <a className="header-link" href="#work">
          Our work <Arrow diagonal />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent product studio</p>
          <h1 id="hero-title">Tools for the work that <i>cannot</i> be sloppy.</h1>
          <p className="hero-intro">
            Takwirira Labs designs considered software for complex, consequential work—where a little more clarity changes everything.
          </p>
          <a className="hero-cta" href="#work">
            Explore our work <Arrow />
          </a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-ring ring-one" />
          <div className="hero-art-ring ring-two" />
          <div className="hero-art-line line-one" />
          <div className="hero-art-line line-two" />
          <div className="hero-art-orb" />
          <div className="hero-art-index">TL / 01</div>
          <div className="hero-art-word">intent<br />made<br /><b>tangible</b></div>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Selected work</p>
            <h2 id="work-title">Small in number.<br /><i>Deliberate</i> by nature.</h2>
          </div>
          <p>
            We stay close to the problem, then build the calmest possible way through it.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      </section>

      <section className="principle-section" aria-labelledby="principle-title">
        <p className="eyebrow"><span /> Our approach</p>
        <div className="principle-row">
          <h2 id="principle-title">The details are the product.</h2>
          <p>
            We make ambitious systems feel legible: purposeful interfaces, trustworthy data, and just enough technology to remove friction—not add to it.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Back to top">
          <BrandMark />
          <span>Takwirira <em>Labs</em></span>
        </a>
        <p>Independent software, made with care.</p>
        <p>© {new Date().getFullYear()} Takwirira Labs</p>
      </footer>
    </main>
  );
}

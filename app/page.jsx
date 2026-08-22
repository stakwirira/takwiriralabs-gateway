const INK = "#141613";
const MUTED = "#39423B";
const FAINT = "#6B736D";
const BG = "#F7F8F7";
const SURFACE = "#FFFFFF";
const LINE = "#E3E7E3";
const GREEN = "#2E9E3A";
const GREEN_DIM = "#E6F4E7";
const AMBER = "#B8791A";
const AMBER_DIM = "#FBF1E1";

const CONTENT_WIDTH = 1040;

const projects = [
  {
    name: "FinanceGPT",
    tag: "Personal finance",
    description: "An instrument-grade personal finance command center — transactions, savings-first budgets, portfolio, and AI planning.",
    href: "/FinanceGPT",
    status: "live",
    accent: GREEN,
    accentDim: GREEN_DIM,
  },
  {
    name: "Beamline",
    tag: "Radiation oncology physics",
    description: "A vendor-neutral linac downtime, SLA-breach, and penalty-estimate dashboard for radiation oncology physics departments.",
    href: null,
    status: "In development",
    accent: AMBER,
    accentDim: AMBER_DIM,
  },
];

function ProjectCard({ project }) {
  const isLive = project.status === "live";
  const Tag = isLive ? "a" : "div";
  return (
    <Tag
      href={isLive ? project.href : undefined}
      className="project-card"
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        background: SURFACE,
        border: `1px solid ${LINE}`,
        borderRadius: 18,
        padding: "28px 28px 26px",
        boxShadow: "0 1px 2px rgba(20,22,19,0.04)",
        cursor: isLive ? "pointer" : "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div
          style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
            color: project.accent, background: project.accentDim, borderRadius: 20, padding: "4px 10px",
          }}
        >
          {project.tag}
        </div>
        {!isLive && (
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.04em", color: FAINT }}>
            {project.status}
          </div>
        )}
      </div>

      <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", marginTop: 16 }}>{project.name}</div>
      <div style={{ fontSize: 14, color: MUTED, marginTop: 8, lineHeight: 1.6, maxWidth: 440 }}>{project.description}</div>

      <div style={{ marginTop: 22, fontSize: 13, fontWeight: 700, color: isLive ? project.accent : FAINT }}>
        {isLive ? <>Open <span aria-hidden="true">&rarr;</span></> : "Coming soon"}
      </div>
    </Tag>
  );
}

export default function Home() {
  return (
    // App-shell layout: header and footer are non-scrolling flex children,
    // so they can never move — only the middle section (its own overflow-y
    // region) scrolls. html/body are locked in layout.jsx so the page itself
    // never scrolls either; without that, a tall inner region could still
    // drag html/body along with it. Header/footer padding is deliberately
    // minimal — every pixel not spent on them is a pixel back for the
    // scrollable content.
    <div style={{ height: "100dvh", display: "flex", flexDirection: "column", background: BG, color: INK }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .project-card { transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease; }
            .project-card:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(20,22,19,0.08); border-color: #D7DCD7; }
          `,
        }}
      />

      <header style={{ flexShrink: 0, borderBottom: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: CONTENT_WIDTH, margin: "0 auto", padding: "12px 24px", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textAlign: "center" }}>
          Takwirira Labs
        </div>
      </header>

      <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
        <div style={{ maxWidth: CONTENT_WIDTH, margin: "0 auto", padding: "clamp(32px, 6vw, 64px) 24px 48px" }}>
          <div style={{ marginBottom: "clamp(32px, 5vw, 56px)" }}>
            <h1
              style={{
                fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: 700, letterSpacing: "-0.02em",
                lineHeight: 1.1, margin: 0, maxWidth: 720,
              }}
            >
              Software built with intent, one deliberate product at a time.
            </h1>
            <p style={{ fontSize: 16, color: MUTED, marginTop: 16, maxWidth: 560, lineHeight: 1.6 }}>
              A small collection of instrument-grade tools — each one built for a real
              problem, not a demo.
            </p>
          </div>

          <section>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: FAINT, marginBottom: 18 }}>
              Projects
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 20,
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <footer style={{ flexShrink: 0, borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: CONTENT_WIDTH, margin: "0 auto", padding: "10px 24px", fontSize: 11.5, color: FAINT, textAlign: "center" }}>
          Takwirira Labs &middot; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

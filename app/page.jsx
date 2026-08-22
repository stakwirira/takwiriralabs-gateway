const INK = "#141613";
const MUTED = "#39423B";
const FAINT = "#6B736D";
const BG = "#F7F8F7";
const SURFACE = "#FFFFFF";
const LINE = "#E3E7E3";
const GREEN = "#2E9E3A";

const projects = [
  {
    name: "FinanceGPT",
    description: "An instrument-grade personal finance command center — transactions, savings-first budgets, portfolio, and AI planning.",
    href: "/FinanceGPT",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: BG,
        color: INK,
        padding: "24px 20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: 480 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em" }}>Takwirira Labs</div>
          <div style={{ fontSize: 14, color: MUTED, marginTop: 6 }}>Projects and services.</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {projects.map((project) => (
            <a
              key={project.href}
              href={project.href}
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                background: SURFACE,
                border: `1px solid ${LINE}`,
                borderRadius: 14,
                padding: "18px 20px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700 }}>{project.name}</div>
              <div style={{ fontSize: 13, color: MUTED, marginTop: 6, lineHeight: 1.5 }}>{project.description}</div>
              <div style={{ fontSize: 12, color: GREEN, fontWeight: 700, marginTop: 10 }}>Open &rarr;</div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", fontSize: 12, color: FAINT, marginTop: 28 }}>
          More on the way.
        </div>
      </div>
    </main>
  );
}

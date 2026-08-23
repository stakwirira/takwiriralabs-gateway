# Takwirira Labs Gateway

The public gateway for [takwiriralabs.com](https://takwiriralabs.com). It is a
Next.js site that presents Takwirira Labs projects and uses Vercel rewrites to
serve independently deployed products under their own path prefixes.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

FinanceGPT is configured as an external multi-zone route. To turn on the
real Beamline web and API routes locally or on Vercel, set both
`BEAMLINE_ORIGIN` and `BEAMLINE_API_ORIGIN` to their stable Vercel URLs
(without trailing slashes), then restart or redeploy.

```bash
cp .env.example .env.local
```

## Deploy Beamline independently

See [the Beamline Vercel deployment guide](docs/beamline-vercel-deployment.md).
It covers the gateway rewrite, Beamline's `/Beamline` base-path setup, the
Vite/Express/Postgres production requirements, and the release checklist.

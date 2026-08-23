# Beamline launch: remaining actions

All application and gateway code is already prepared and verified. The Beamline
repository is committed locally at `aaaa202` (`Prepare Beamline for Vercel
multi-zone deployment`). Complete only these account-side actions, in order.

1. Create an empty private GitHub repository named `beamline`. Do not add a
   README, `.gitignore`, or license.

2. In Terminal, publish the prepared commit to that repository:

   ```bash
   cd /Users/takwirira/Projects/Beamline
   git remote add origin https://github.com/<your-account>/beamline.git
   git push -u origin main
   ```

3. In Vercel, click **Add New → Project**, import `beamline`, name it
   `beamline-api`, and set **Root Directory** to `apps/api`. Deploy it once;
   the initial deployment can fail before the database exists—that is expected.

4. In the `beamline-api` Vercel project, go to **Storage → Browse Marketplace**,
   install **Neon**, and create a production Postgres database connected to this
   project. This adds the database connection variable to the API project.

5. In `beamline-api` → **Settings → Environment Variables**, add these two
   Production variables:

   ```text
   JWT_SECRET=<run: openssl rand -base64 48>
   WEB_ORIGIN=https://takwiriralabs.com
   ```

   Then redeploy `beamline-api`.

6. Pull the production database URL locally and apply Beamline's committed
   migrations:

   ```bash
   cd /Users/takwirira/Projects/Beamline/apps/api
   npx vercel login
   npx vercel link
   npx vercel env pull .env.production.local --environment=production
   cd ../..
   set -a
   source apps/api/.env.production.local
   set +a
   pnpm --filter @beamline/db exec prisma migrate deploy
   ```

7. In Vercel, create a second project from the same `beamline` repository.
   Name it `beamline-web`, set **Root Directory** to `apps/web`, select the
   Vite framework preset, and add these Production variables:

   ```text
   VITE_BASE_PATH=/Beamline/
   VITE_ROUTER_BASENAME=/Beamline
   VITE_API_BASE_URL=/Beamline/api
   ```

   Deploy it.

8. Copy the two production `.vercel.app` URLs. In the existing **Takwirira Labs
   Gateway** Vercel project, add these Production variables—without trailing
   slashes—and redeploy the gateway:

   ```text
   BEAMLINE_ORIGIN=https://<beamline-web>.vercel.app
   BEAMLINE_API_ORIGIN=https://<beamline-api>.vercel.app
   ```

9. Open these three URLs and complete one real login, one saved record, and the
   CSV/PDF exports:

   ```text
   https://takwiriralabs.com/Beamline
   https://takwiriralabs.com/Beamline/login
   https://takwiriralabs.com/Beamline/api/health
   ```

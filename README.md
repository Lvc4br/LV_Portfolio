# Luca Toniolo — 3D × Code Portfolio

My portfolio brings together 3D modeling, front-end development, and digital
design. It presents selected work, project details, skills, background, and
contact information.

**Live website:** [luca-toniolo.vercel.app](https://luca-toniolo.vercel.app)

![Portfolio preview](./public/og-image.jpg)

## About the project

The site is a responsive single-page application built with React and Vite. React
Router powers the work index, 3D and programming galleries, and individual
project pages. A loading screen introduces the site; the home page includes
selected work, skills, an about section, and a contact form.

Project pages can include a description, status, tools, case-study notes, image
galleries with thumbnail and previous/next controls, videos, source repositories,
or an interactive prototype. Gallery images are displayed in the page and do not
open a zoom viewer.

The contact form uses Getform. Vercel Web Analytics is included for the deployed
site. A [downloadable resume](./public/curriculo-luca-toniolo.pdf) and LinkedIn
profile are also linked from the portfolio.

## Projects

### 3D

- **Completed:** ATEM Mini Pro, Playdate Console, Coca-Cola Bottle, Planetary
  Scene, and Laser Interaction Study.
- **In progress:** Colosseum architectural reconstruction and Constelação Floral jewelry concept.

### Programming and UX/UI

- **Complete:** Ice Cream Panda, a responsive storefront-style front-end project.
- **In progress:** Pizzeria Website, a low-fidelity UX/UI prototype. It includes
  six page flows in desktop and mobile sizes (12 wireframes total), a reusable
  Figma component library, and an [interactive preview](./public/pizzeria-wireframes.html).
  Ordering and database features are not implemented yet.
- **Archive:** Java Fundamentals (ETEC), a repository of Java console exercises.
  Lists D and F are challenges solved using only `if` statements.
  [Open the Java repository](https://github.com/Lvc4br/ETEC-Desenvolvimento-de-Sistemas).
- **Planned:** TCC ETEC graduation project. Scope and technology choices are not final.

Project metadata and gallery references are maintained in
[`src/data/projects.js`](./src/data/projects.js). Project image assets are
grouped under [`src/assets`](./src/assets).

## Tech stack

- React 19 and Vite 8
- React Router 7
- JavaScript and CSS
- Vercel Web Analytics
- Getform contact form
- Vitest, Testing Library, and ESLint
- Sharp for image optimization

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

The portfolio runs at http://localhost:4173. Vite keeps this port fixed so the
browser origin matches the Nexo API's local CORS allow-list. The API must allow
`http://localhost:4173` in `PORTFOLIO_ALLOWED_ORIGINS`.

The ignored `.env.local` file configures the Nexo collector for local development.
It must not be committed. Start the Nexo backend on the same computer at
http://127.0.0.1:8000 and confirm its local `.env` allows the portfolio origin
`http://localhost:4173` in `PORTFOLIO_ALLOWED_ORIGINS`:

```env
VITE_NEXO_COLLECT_URL=http://127.0.0.1:8000/api/v1/collect
VITE_NEXO_SITE_ID=lvc4br-lv-portfolio
```

Vite prints the local development URL in the terminal. Run the automated tests
and linter with:

```bash
npm test
npm run lint
```

Create and preview a production build with:

```bash
npm run build
npm run preview
```

## Images

Run `npm run optimize:images` to regenerate WebP project assets from their source
images and rebuild the social preview at `public/og-image.jpg` (1200 x 630). The
script checks that the preview remains below 300 KB.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home, selected work, skills, about, and contact |
| `/work` | Work categories |
| `/work/3d` | 3D project gallery |
| `/work/3d/:id` | 3D project details |
| `/work/code` | Programming project gallery |
| `/work/code/:id` | Programming project details |

Compatibility redirects are provided for `/work/ux-ui`, `/work/ux-ui/:id`, `/3d`, and `/programacao`.

## Deploy on Vercel

The project deploys from the repository root. `vercel.json` rewrites client-side
routes to `index.html`, allowing direct visits to project pages.

Set `VITE_SITE_URL` in the Vercel project environment variables to the public
HTTPS origin without a trailing slash. For local builds, set it in the ignored
`.env.local` file alongside the Nexo variables. Redeploy after changing the
domain so canonical and social sharing metadata use the updated URL.

Vercel Web Analytics is integrated and enabled in the Vercel project. Its data
is available in the Vercel dashboard; it does not require an additional
environment variable.

## Nexo Analytics

The Nexo tracker sends `POST /api/v1/collect` JSON events for SPA page views,
project opens, contact clicks, resume opens, successful contact form
submissions, prototype opens, source link clicks, and social clicks using
fixed names such as `github_click` and `linkedin_click`. Its payload contains
`event_id`, `site_id`, a random per-tab `session_id` required by the Nexo API,
a short `event_name`, and the current pathname. The session ID is kept in
`sessionStorage` to group events in one tab; it is not derived from visitor
details. Only known portfolio routes and project slugs are sent; legacy routes
are mapped to their destinations and unknown paths become `/404`. The payload
omits query strings, URL fragments, referrers, form values, IP fields, and
free-form properties. Collection is disabled when Do Not Track is enabled or
either required environment variable is missing. Outside development, the
tracker also requires an HTTPS collector URL and rejects loopback hosts.
Request failures are ignored so the portfolio continues to work.

Each event also sends only broad `device_type`, `browser_name`, and `os_name`
categories derived in the browser; the raw user agent is not sent. The tracker
sends a `page_duration` event when the visitor changes route or the page is
unloaded. `duration_ms` counts visible time, pauses while the tab is hidden, is
capped at 24 hours, and uses the same allow-listed path normalization as page
views. The Nexo dashboard uses these duration events to calculate average,
minimum, and maximum time on a page.

For local development, run the Nexo API at http://127.0.0.1:8000 and the
portfolio at http://localhost:4173. Set `VITE_NEXO_COLLECT_URL` to
`http://127.0.0.1:8000/api/v1/collect` and `VITE_NEXO_SITE_ID` to
`lvc4br-lv-portfolio` in `.env.local`. The API must include
`http://localhost:4173` in `PORTFOLIO_ALLOWED_ORIGINS`. This local test only
works while the Nexo backend is running on the same computer; it does not make
the published site call a local address.

The published portfolio currently has no Nexo production variables configured,
so its Nexo tracker remains inactive. Do not add local URLs to Vercel. No Vercel
environment variables or deployments are part of the local integration setup.

After the Nexo API is published over HTTPS, configure these public variables in
the **LV_Portfolio** project's Vercel **Settings > Environment Variables** and
make a new portfolio deployment:

```text
VITE_NEXO_COLLECT_URL=https://URL-PUBLICA-DA-API-NEXO/api/v1/collect
VITE_NEXO_SITE_ID=lvc4br-lv-portfolio
```

Replace `URL-PUBLICA-DA-API-NEXO` with the Nexo API's public HTTPS host, and
allow `https://luca-toniolo.vercel.app` in the backend's
`PORTFOLIO_ALLOWED_ORIGINS`. These variables are included in the frontend
bundle. Never put `VERCEL_ACCESS_TOKEN`, the Nexo password, or `SESSION_SECRET`
in a `VITE_` variable or this repository; the Vercel API token belongs only in
the Nexo backend. If the portfolio changes domain or hosting, update the
allowed origin in Nexo. Collection continues to work as long as the tracker
points to the public Nexo API.

For production collection, the Nexo API must be publicly reachable over HTTPS
and use persistent PostgreSQL storage. The portfolio cannot send data to a
backend running at `localhost` or `127.0.0.1` on the visitor's computer.

Vercel Web Analytics is already integrated and enabled for the portfolio. If
the Nexo backend should also query Vercel analytics data, configure
`VERCEL_ACCESS_TOKEN` and `VERCEL_PROJECT_ID` only in the Nexo backend's own
environment, then ensure Web Analytics is enabled in the Vercel project. These
backend settings are separate from the portfolio's `VITE_NEXO_*` variables.

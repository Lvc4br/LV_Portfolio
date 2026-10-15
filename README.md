# Luca Toniolo — 3D × Code Portfolio

This is my current and only portfolio website. It brings together my work in 3D
and programming and presents my background, skills, selected projects, and contact
information.

[Visit the live portfolio](https://luca-toniolo.vercel.app)

![Portfolio preview](./public/og-image.jpg)

## About the portfolio

The site is built with React and Vite, with React Router handling its pages. The
home page introduces my 3D × Code focus and includes selected work, 3D and
programming highlights, skills, an about section, and a contact form.

Visitors can browse the complete work by discipline and open individual project
pages with each project's description, tools, status, and available imagery. The
project list and metadata are maintained in `src/data/projects.js`.

### Projects currently featured

- **3D:** ATEM Mini Pro and Handheld (complete); Colosseum and Jewelry (in progress).
- **Programming:** Ice Cream Panda (complete); a responsive pizzeria website
  concept (name undecided) in progress. Its current UX/UI stage includes the brief, information
  architecture, 12 low-fidelity desktop and mobile wireframes across six pages,
  and a reusable Figma component library. An interactive HTML preview of the
  wireframes is available from the project detail page; TCC Etec is a planned
  graduation project.

The portfolio also includes a downloadable résumé, a LinkedIn link, responsive
layouts, optimized WebP project images, and a contact form powered by Getform.
Vercel Web Analytics is integrated to measure site visits after deployment.

## Tech stack

- React 19 and Vite
- React Router
- JavaScript and CSS
- Vercel Web Analytics
- Sharp for image optimization

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

To create a production build or preview it locally:

```bash
npm run build
npm run preview
```

Run the linter with:

```bash
npm run lint
```

## Images

Run `npm run optimize:images` to regenerate the WebP project assets and the
1200 × 630 social preview image at `public/og-image.jpg`. The preview is generated
at JPEG quality 85 and the script checks that it stays below 300 KB.

## Deploy on Vercel

The app is configured to deploy from the site root. `vercel.json` rewrites
client-side routes to `index.html`, so direct visits to portfolio pages work on
Vercel.

Set `VITE_SITE_URL` in the Vercel project environment variables to the public
HTTPS origin without a trailing slash. It is used for the canonical URL and
social sharing metadata. If the domain changes, update the variable and redeploy.
For local builds, copy `.env.example` to `.env` and set the appropriate URL.

Vercel Web Analytics is included in the app and enabled in the Vercel project.
Analytics data is available from the Vercel dashboard after deployment; no
additional environment variable is needed.

## Main routes

| Route | Page |
| --- | --- |
| `/` | Home, selected projects, skills, about, and contact |
| `/work` | Work categories |
| `/work/3d` | 3D projects |
| `/work/3d/:id` | 3D project details |
| `/work/code` | Programming projects |
| `/work/code/:id` | Programming project details |

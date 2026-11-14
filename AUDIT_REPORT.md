# Technical Audit Report

**Date:** 2026-11-14  
**Repository:** `Lvc4br/LV_Portfolio`  
**Working branch:** `feature/multipage-portfolio-foundation`  
**Scope:** multipage foundation, navigation, accessibility, tests, contact flow, analytics, metadata, dependencies, and release readiness.

## Executive summary

The multipage foundation is implemented on the feature branch. GitHub Actions CI run [#68](https://github.com/Lvc4br/LV_Portfolio/actions/runs/43616292012) passed dependency installation, ESLint, Vitest, and the production build for commit `7551b09fa3ad9d271973d41aae5a94931a32a9de`.

The dependency installation reported **5 vulnerabilities (3 moderate, 2 high)**. The exact advisories and dependency paths have not yet been retrieved, so no package should be upgraded or removed based only on this summary.

## Findings and actions

| Priority | Area | Finding | Action / status |
|---|---|---|---|
| P1 | Footer navigation | Footer Contact previously navigated to Home with unused scroll state. | Fixed: footer now routes directly to `/contact`. |
| P1 | Mobile navigation | The mobile menu had no explicit Escape behavior. | Fixed: Escape closes the menu and restores focus to the menu button. |
| P2 | Interactive Lab | Preview lacked a semantic name and sliders relied on implicit labels. | Fixed: preview exposes a dynamic accessible description; sliders have explicit IDs and labels. |
| P2 | Automated tests | New pages and keyboard behavior lacked route-level coverage. | Added route tests for Academic, TCC, Experience, Lab, About, Contact, Escape dismissal, and footer navigation. CI #68 passed. |
| P1 | Dependency security | CI #72 identified five vulnerable development dependencies: `vite` 8.3.1 (high, direct), `zod` 4.6.5 (high, via `eslint-plugin-react-hooks`), `minimatch` (moderate, transitive), `eslint` 10.11.0 (moderate, direct), and `@eslint/config-array` (moderate, transitive). All five report `fixAvailable: true`. | In progress: CI #77 passed and the non-mutating `npm audit fix --dry-run` preview proposed `eslint` 10.15.0, `minimatch` 11.0.8, and `@eslint/config-array` 0.23.6, plus supporting dependency updates. The preview did not modify the lockfile; the five audit findings remain until a real update is applied and re-audited. The Vite and Zod fixes still need explicit confirmation in the updated dependency graph. |
| P1 | Contact form | The Getform request has no explicit timeout or cancellation path. There is no visible privacy disclosure explaining the data submitted to the external provider. Provider-side spam controls have not been verified. | Open: verify provider configuration, add resilient timeout/error handling, and add a concise data-use disclosure before production. |
| P2 | Language | The HTML document declares `lang="en"`, while some content is Portuguese and other content is English. | Open: decide the site's primary language and make the document language, copy, and metadata consistent. |
| P2 | Metadata | The app uses build-time site URL metadata. Production Vercel environment values and rendered social preview have not been verified. | Open: verify production environment, canonical URL, Open Graph, and Twitter preview. |
| P2 | Loading experience | LoadingScreen uses a timed progress animation rather than actual asset readiness. | Open: assess whether the delay benefits the experience; shorten or remove it if it only delays content. |
| P2 | Legacy routes | Redirects exist, but historic inbound URLs have not been inventoried. | Open: compare against old routes and test each redirect. |
| P2 | Analytics and privacy | The tracker checks Do Not Track and avoids blocking the UI. It still creates a tab-scoped identifier and collects path, device type, browser, and OS when enabled. Consent/legal basis and retention are not verified by source review. | Open: document the data collected, confirm endpoint configuration and retention, and determine whether a consent mechanism is required for the intended deployment. |

## Verified implementation details

- Stack: React 19, Vite 8, React Router 7, Vitest, Testing Library, and ESLint.
- CI workflow runs `npm ci`, a non-blocking dependency advisory report (`npm audit --json`), a non-mutating remediation preview (`npm audit fix --dry-run`), `npm run lint`, `npm test`, and `npm run build`.
- CI #68 and corrected CI #77 passed install, lint, Vitest, and production build. CI #77 also completed the audit and dry-run preview steps.
- The Interactive Lab is a CSS parameter playground. It is not a real 3D model viewer or visitor code editor.
- No real-time 3D viewer is published yet; GLB/glTF support remains future work.
- TCC is accurately described as not started, with topic and scope undefined.
- EGT Engenharia is listed with the confirmed start date of 16/11/2026; role, responsibilities, and tools are not invented.
- The academic project links to the Estufa Inteligente README, TCC README, and team README were checked and resolve to existing files in `Lab-Tecnico-Etec/lab-central`.
- The contact form posts to a public Getform endpoint. No secret should be placed in client-side code.

## Release gates

Before merging or deploying:

1. Resolve or explicitly accept the dependency advisories after reviewing the full audit output.
2. Confirm CI passes on the latest branch head.
3. Test every new route and legacy redirect.
4. Test keyboard navigation, focus visibility, and screen-reader behavior.
5. Test contact success, provider rejection, offline/network failure, timeout, and spam handling.
6. Add a clear privacy disclosure for contact and analytics data flows.
7. Verify production metadata and social preview using production environment values.
8. Inspect mobile, tablet, and desktop layouts in a real browser.
9. Check browser console/network errors and confirm assets load.
10. Review published project content and permissions.
11. Obtain explicit approval before merging or deploying.

## Audit limitations

This review is based on repository source files and GitHub Actions metadata. It is not a substitute for a full dependency advisory report, manual browser QA, screen-reader testing, provider-side configuration review, privacy/legal review, or verification of the production Vercel environment.

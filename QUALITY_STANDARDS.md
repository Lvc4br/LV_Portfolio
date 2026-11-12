# Portfolio Quality Standards

This document is the acceptance baseline for the portfolio redesign. It is intentionally practical: every new page, component, interaction, and project entry should follow these rules.

## 1. Product and content principles

- Every route must have one clear user purpose and a meaningful amount of original content.
- Do not create routes solely to increase the page count. Combine pages when their purpose and content overlap.
- The home page is an overview and a gateway, not a duplicate of every inner page.
- Project claims must be verifiable. Distinguish personal contribution from team work and label work-in-progress, planned, and completed work accurately.
- Never invent tools, responsibilities, results, client approvals, academic decisions, or professional duties.
- Do not publish confidential employer, school, or team material without permission.
- Every project case study should explain the objective, contribution, process, tools actually used, decisions, outcome, limitations, and links or evidence where available.

## 2. Information architecture and navigation

- Keep the primary navigation short; place secondary destinations inside relevant section pages.
- Use descriptive route names and preserve useful legacy redirects.
- Every route must render a meaningful page, a deliberate redirect, or a helpful 404.
- Internal links must use router links; external links must clearly identify their destination and use safe target/rel attributes when opened in a new tab.
- Mobile navigation must support keyboard operation, expose expanded/collapsed state, close after navigation, and not trap focus unnecessarily.
- Current navigation state must be visually and programmatically identifiable.

## 3. Visual design system

- Define design tokens for color, typography, spacing, radii, borders, shadows, motion, and content widths.
- Use a consistent spacing scale and responsive type scale rather than arbitrary values.
- Maintain readable line lengths, clear hierarchy, and sufficient contrast.
- Use animation to communicate state, hierarchy, or spatial relationships; remove decorative motion that delays or obscures content.
- Keep parallax subtle, disable or simplify it for reduced-motion preferences, and avoid scroll-jacking.
- Design mobile layouts intentionally; do not treat them as compressed desktop layouts.
- Ensure focus states, hover states, disabled states, loading states, empty states, and error states are designed.

## 4. Front-end architecture

- Keep content/data separate from presentation and interaction logic.
- Build reusable components only when reuse improves consistency; avoid premature abstraction.
- Give components one clear responsibility and use semantic HTML before custom ARIA.
- Keep route-level pages composed from shared components and focused page sections.
- Avoid duplicated CSS, overly broad selectors, unexplained magic numbers, and style rules that depend on import order.
- Avoid adding dependencies for effects that can be implemented simply with existing browser capabilities.
- Keep secrets and private keys out of client code. Use environment variables only for public configuration; sensitive operations belong on a trusted server/service.

## 5. Accessibility

- All interactive controls must work with a keyboard and have visible focus.
- Use semantic headings in a logical hierarchy, landmarks, labels, and descriptive link text.
- Provide useful alt text for meaningful images; decorative images should have empty alt text.
- Provide captions or text alternatives for meaningful video/audio content.
- Respect `prefers-reduced-motion` across all motion, not only the loading screen.
- Do not communicate status by color alone.
- Ensure forms provide labels, clear validation, announced success/error states, and understandable recovery instructions.
- Test at browser zoom and narrow viewport widths.

## 6. Performance

- Optimize images and use modern formats where supported; provide appropriate dimensions to reduce layout shift.
- Lazy-load offscreen media; do not lazy-load the primary above-the-fold image without reason.
- Use video posters and deliberate preload settings.
- Load 3D assets only when needed; compress GLB/glTF assets and provide a static fallback.
- Avoid expensive continuous animation and unnecessary main-thread work.
- Use route-level or component-level lazy loading when bundle analysis shows a meaningful benefit.
- Measure performance on mobile and a production build instead of assuming it is fast.

## 7. Interactive code and 3D safety

- Never execute arbitrary visitor-provided JavaScript in the portfolio's main page context.
- Any code playground must use a constrained execution model, such as a sandboxed iframe with a restrictive policy, and must not expose secrets or privileged application state.
- 3D viewers must include accessible controls, sensible camera limits, loading/error states, and a non-WebGL fallback.
- Provide a static image or explanatory fallback when a model cannot load or the device cannot render it.
- Respect reduced motion and avoid unexpected camera movement.

## 8. Forms, privacy, and analytics

- Validate form input in the browser and rely on the receiving service for server-side validation and spam protection.
- Never claim a message was sent until the service confirms success.
- Handle offline, timeout, and service errors without losing the user's message when practical.
- Collect only analytics needed to improve the site; avoid sending personal form contents or sensitive information to analytics.
- Verify privacy disclosures, consent requirements, and provider configuration before production.
- Analytics failures must never break navigation or content rendering.

## 9. SEO and metadata

- Set the correct document language for the page's primary content.
- Provide unique page titles and descriptions for important routes.
- Verify canonical, Open Graph, and social preview URLs against the production domain.
- Use meaningful heading structure, descriptive URLs, and useful internal links.
- Do not publish placeholder metadata, unresolved environment tokens, or duplicate descriptions.
- Provide a useful 404 page and ensure redirects point to existing destinations.

## 10. Testing and release gates

Before a change is considered ready:

1. Run `npm run lint`.
2. Run `npm test`.
3. Run `npm run build`.
4. Test the changed route and its primary user journey.
5. Test keyboard navigation and reduced-motion behavior.
6. Check mobile, tablet, and desktop layouts.
7. Check console/network errors and failed external requests.
8. Verify all links, images, downloads, and embeds.
9. Review the production preview before merging or deploying.

A passing build is necessary but does not replace visual, accessibility, content, and interaction review.

## 11. Current known review items

These are review tasks, not claims that the issue has already been fixed:

- Verify the new route pages and legacy redirects through automated tests.
- Review the primary navigation density and mobile menu behavior with keyboard and screen reader testing.
- Verify analytics calls are non-blocking and that the intended tracking behavior is consistent.
- Review the contact form's provider-side validation, spam protection, timeout handling, and privacy disclosure.
- Check whether the loading screen's fixed delay adds value; consider removing it if it delays useful content without representing real loading work.
- Audit language consistency across English and Portuguese content and align page/document language metadata with the actual content.
- Verify production values for `VITE_SITE_URL`, canonical URLs, social image, and Vercel deployment settings.
- Revisit project claims and image rights before publishing each case study.

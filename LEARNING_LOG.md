# Learning Log

This log records meaningful implementation problems, their causes, fixes, and prevention rules.

## 2026-11-14 — Footer Contact navigation

- **Symptom:** Footer Contact navigated to Home but did not reliably move to the contact section.
- **Cause:** The footer passed scroll state that Home did not consume.
- **Fix:** The footer now links directly to the dedicated `/contact` route.
- **Verification:** Route navigation test passes in CI #68.
- **Prevention:** A navigation action must target a real route or a section with an implemented scroll/focus handler.

## 2026-11-14 — Mobile navigation keyboard dismissal

- **Symptom:** The mobile navigation had no explicit Escape behavior.
- **Cause:** Menu state was connected only to the toggle button and link navigation.
- **Fix:** Escape closes the menu and restores focus to the menu button; the button exposes a descriptive accessible name and expanded state.
- **Verification:** Keyboard interaction test passes in CI #68.
- **Prevention:** Menus and dialogs must define keyboard dismissal and focus behavior.

## 2026-11-14 — Interactive Lab semantics

- **Symptom:** The live preview had no useful semantic name, and range controls relied on implicit labels.
- **Cause:** The preview was a generic container and controls lacked explicit label/input associations.
- **Fix:** Added an image role with a dynamic accessible description and explicit IDs/labels for sliders.
- **Verification:** Source change and automated suite validated by CI #68.
- **Prevention:** Every interactive control needs an accessible name; non-text visual output needs a semantic alternative.

## 2026-11-14 — Accessible heading names in route tests

- **Symptom:** Route tests failed because accessible heading names differed from visual spacing around line breaks.
- **Cause:** Testing Library normalizes accessible names; the original expressions assumed spaces around explicit `<br>` elements.
- **Fix:** Updated regular expressions to tolerate the normalized whitespace.
- **Verification:** The corrected tests pass in CI #68.
- **Prevention:** Assert against accessible names exposed by the rendered DOM, not visual spacing assumptions.

## 2026-11-14 — Dependency audit follow-up

- **Observation:** CI #68 completed, but dependency installation reported five advisories (three moderate, two high).
- **Cause:** The install summary does not identify advisory IDs or dependency paths.
- **Next action:** Run `npm audit --json`, inspect direct and transitive dependency paths, and choose compatible updates deliberately. Do not use blind `npm audit fix`.
- **Prevention:** Treat dependency installation warnings as investigation signals; record the affected package, advisory, path, fix version, and regression-test result.

## Verification record

- **CI #68:** [Successful GitHub Actions run](https://github.com/Lvc4br/LV_Portfolio/actions/runs/43616292012).
- **Validated commit at the time of the run:** `7551b09fa3ad9d271973d41aae5a94931a32a9de`.
- **Passed steps:** `npm ci`, ESLint, Vitest, and production build.
- **Important:** Later documentation-only commits trigger a new CI run; this record does not claim those later commits have already been validated.

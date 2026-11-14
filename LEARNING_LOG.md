# Learning Log

This log records meaningful implementation problems, their causes, fixes, and the rule learned from each change.

## 2026-11-14 — Footer Contact navigation

- **Symptom:** Selecting Contact in the footer navigated to the home route, but did not reliably move the visitor to the contact section.
- **Cause:** The footer passed a `scrollTo` location state, but the Home page did not consume that state.
- **Fix:** The footer now links directly to the dedicated `/contact` route using React Router.
- **Verification:** A navigation test was added. Awaiting CI on the updated branch.
- **Prevention rule:** A navigation action must target a real route or a section with an implemented scroll/focus handler. Do not pass unused router state.

## 2026-11-14 — Mobile navigation keyboard dismissal

- **Symptom:** The mobile navigation could be opened and closed with its button, but Escape had no explicit close behavior.
- **Cause:** The menu state was only connected to the toggle button and link navigation.
- **Fix:** Added a keydown listener while the menu is open and close it on Escape. Added a descriptive accessible name to the toggle.
- **Verification:** Added a keyboard interaction test. Awaiting CI on the updated branch.
- **Prevention rule:** Menus and dialogs must define keyboard dismissal and expose their expanded state to assistive technology.

## 2026-11-14 — Interactive Lab semantics

- **Symptom:** The live preview did not expose a useful semantic role/name, and the range controls depended on implicit label nesting.
- **Cause:** The preview was a generic container and controls did not have explicit label/input associations.
- **Fix:** Added an image role with a dynamic description and explicit IDs/labels for each range control.
- **Verification:** Source review completed; CI pending.
- **Prevention rule:** Every interactive control needs an explicit accessible name, and non-text visual output needs an appropriate semantic alternative.

## Verification record

- A previous GitHub Actions CI run for commit `2b7cfbf25c3453a9c4ef5996fb22bcbdbbcf9cb5` completed successfully, including lint, tests, and production build.
- That successful run predates the changes above. Do not treat it as validation of the latest branch head.

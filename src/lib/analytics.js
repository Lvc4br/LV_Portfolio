import { createNexoTracker } from "./nexo-tracker.js";

const tracker = createNexoTracker({
  endpoint: import.meta.env.VITE_NEXO_COLLECT_URL,
  siteId: import.meta.env.VITE_NEXO_SITE_ID,
  trackDevelopment: import.meta.env.DEV,
});

export default tracker;

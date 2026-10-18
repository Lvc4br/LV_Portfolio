import { projects } from "../data/projects.js";

const STATIC_PATHS = new Set(["/", "/work", "/work/3d", "/work/code"]);
const PROJECT_PATHS = new Set(
  projects.map((project) => `/work/${project.area}/${project.id}`)
);

const LEGACY_PATHS = new Map([
  ["/3d", "/work/3d"],
  ["/programacao", "/work/code"],
  ["/work/ux-ui", "/work/code"],
]);

export function normalizeAnalyticsPath(path) {
  if (typeof path !== "string" || !path.startsWith("/")) return "/404";

  const pathname = path.split(/[?#]/, 1)[0];
  const normalizedPath = pathname.toLowerCase().replace(/\/+$/, "") || "/";

  if (LEGACY_PATHS.has(normalizedPath)) return LEGACY_PATHS.get(normalizedPath);
  if (/^\/work\/ux-ui\/[^/]+$/.test(normalizedPath)) {
    return "/work/code/pizzeria-site";
  }
  if (STATIC_PATHS.has(normalizedPath) || PROJECT_PATHS.has(normalizedPath)) {
    return normalizedPath;
  }

  return "/404";
}

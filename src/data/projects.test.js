import { describe, expect, it } from "vitest";
import { projects, projectStatusOrder, sortProjects } from "./projects.js";

describe("project catalogue integrity", () => {
  it("uses unique, URL-safe project identifiers", () => {
    const ids = projects.map(({ id }) => id);

    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);

    ids.forEach((id) => {
      expect(id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    });
  });

  it("provides the minimum metadata needed to present each project honestly", () => {
    projects.forEach((project) => {
      expect(project.title, project.id).toBeTruthy();
      expect(project.description, project.id).toBeTruthy();
      expect(project.tools, project.id).toEqual(expect.arrayContaining([expect.any(String)]));
      expect(projectStatusOrder, project.id).toHaveProperty(project.status);
      if (project.image) {
        expect(project.imageAlt?.trim(), project.id).toBeTruthy();
      } else {
        expect(project.prototypeFile, project.id).toBeTruthy();
      }
    });
  });

  it("provides meaningful alternative text for every gallery image", () => {
    projects.forEach((project) => {
      if (!project.gallery) return;

      expect(project.gallery.length, project.id).toBeGreaterThan(0);
      project.gallery.forEach((item, index) => {
        expect(item.src, `${project.id} gallery item ${index + 1}`).toBeTruthy();
        expect(
          item.alt?.trim(),
          `${project.id} gallery item ${index + 1} needs alternative text`
        ).toBeTruthy();
      });
    });
  });

  it("sorts projects by status without mutating the original catalogue", () => {
    const originalOrder = projects.map(({ id }) => id);
    const sorted = sortProjects(projects);

    expect(projects.map(({ id }) => id)).toEqual(originalOrder);
    expect(sorted).toHaveLength(projects.length);

    for (let index = 1; index < sorted.length; index += 1) {
      expect(projectStatusOrder[sorted[index - 1].status]).toBeLessThanOrEqual(
        projectStatusOrder[sorted[index].status]
      );
    }
  });
});

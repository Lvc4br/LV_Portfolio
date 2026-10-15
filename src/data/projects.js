import atemImage from "../assets/atem_mini_pro.webp";
import handheldImage from "../assets/Front.webp";
import iceCreamImage from "../assets/pw_project (1).webp";
import jewelryImage from "../assets/constelacao-floral.png";

export const projectStatusOrder = {
  Complete: 1,
  "In progress": 2,
  Planned: 3,
};

export function sortProjects(projectList) {
  return [...projectList].sort(
    (a, b) =>
      (projectStatusOrder[a.status] ?? 99) - (projectStatusOrder[b.status] ?? 99)
  );
}

export const projects = [
  {
    id: "atem-mini-pro",
    number: "01",
    title: "ATEM Mini Pro",
    category: "3D",
    area: "3d",
    status: "Complete",
    tools: ["Blender"],
    description:
      "A product-focused 3D study of the ATEM Mini Pro, built to communicate industrial form, proportion, and presentation with clarity and restraint.",
    image: atemImage,
    imageAlt: "3D render of an ATEM Mini Pro video switcher",
    visual: "visual--product",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Translate a real hardware object into a precise 3D presentation, emphasizing silhouette, material behavior, and the visual language of a compact professional device.",
      },
      {
        title: "Modeling and production",
        description:
          "The project focuses on clean geometry, controlled lighting, and disciplined product presentation. The goal was to communicate the object clearly without visual excess, highlighting the design language rather than decoration.",
      },
      {
        title: "What this project shows",
        description:
          "This work demonstrates strong Blender control, a product-design mindset, and the ability to present industrial objects in a polished, commercially convincing way.",
      },
    ],
  },
  {
    id: "handheld-console",
    number: "02",
    title: "Handheld",
    category: "3D",
    area: "3d",
    status: "Complete",
    tools: ["Blender"],
    description:
      "A concept-driven handheld console render that explores industrial identity, material readability, and the balance between function and visual character.",
    image: handheldImage,
    imageAlt: "Yellow handheld console 3D render",
    visual: "visual--product",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Develop a believable compact device concept and present it as a premium product render, with emphasis on silhouette, surface clarity, and spatial identity.",
      },
      {
        title: "Visual direction",
        description:
          "The composition uses contrast, material separation, and a strong silhouette to communicate a confident product language. The final image aims to feel tactile, intentional, and commercially polished.",
      },
      {
        title: "What this project shows",
        description:
          "This render demonstrates the ability to transform an idea into a coherent 3D product concept using Blender, lighting, and thoughtful presentation choices.",
      },
    ],
  },
  {
    id: "colosseum",
    number: "03",
    title: "Colosseum",
    category: "3D",
    area: "3d",
    status: "In progress",
    tools: ["Blender", "Architecture study", "Historical references"],
    description:
      "A historically grounded 3D reconstruction project focused on the Colosseum's volumetry, architectural logic, and the organization of circulation and seating levels. The research is based on archaeological references, a documented methodology, and a transparent reconstruction process.",
    visualLabel: "Research in progress",
    visual: "visual--colosseum",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Reconstruct the Colosseum digitally with a focus on historical fidelity, architectural precision, and a coherent reading of the building's original spatial logic.",
      },
      {
        title: "Method and sources",
        description:
          "The project is grounded in historical references, archaeological studies, and architectural analysis, with emphasis on elements such as the elliptical plan, circulation routes, vaults, and the sequence of levels across the facade.",
      },
      {
        title: "Current stage",
        description:
          "The work includes documentation, initial drawing sheets, architectural studies, and model development for the orders, circulation system, and the main structure. The project is still in progress, but the methodology is clearly defined and documented.",
      },
      {
        title: "What this project shows",
        description:
          "It demonstrates the ability to work with complex historical geometry, define research-based assumptions, and translate them into a technically structured 3D model without treating reconstruction as pure aesthetic interpretation.",
      },
    ],
  },
  {
    id: "jewelry",
    number: "04",
    title: "Constelação Floral",
    category: "3D",
    area: "3d",
    status: "In progress",
    tools: ["Blender", "Concept design", "AI-assisted briefing"],
    description:
      "A jewelry design concept for a floral ring trilogy inspired by the evolution of love: Namoro, Noivado and Casamento. The visual briefing was built from handmade reference material, concept images, and an AI-assisted presentation process instead of a Photoshop-only workflow, keeping the design honest and structured.",
    image: jewelryImage,
    imageAlt: "Constelação Floral jewelry concept presentation board",
    visualLabel: "Concept in progress",
    visual: "visual--jewelry",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Develop a romantic high-jewelry concept that translates the idea of a star becoming a flower, then becoming a lasting commitment, through organic forms, narrative composition, and detailed material choices.",
      },
      {
        title: "Concept and visual direction",
        description:
          "The collection is organized in three moments: Namoro, Noivado and Casamento. Each ring uses organic stems, floral details, and a star-like diamond arrangement to represent stages of emotional growth, while balancing rose gold, white gold, morganite, and diamonds in a refined luxury aesthetic.",
      },
      {
        title: "Production process",
        description:
          "The presentation was created using reference sketches, visual references, and an AI-assisted briefing workflow to structure the concept board, materials, and composition before finalizing the product narrative. The result preserves the original design logic while allowing faster iteration and clearer communication.",
      },
      {
        title: "Current scope",
        description:
          "This is a conceptual project in active development. The collection is established as an artistic and design direction, with material and jewelry details already documented, but still without the final production stage or full real-world manufacturing validation.",
      },
    ],
  },
  {
    id: "ice-cream-panda",
    number: "05",
    title: "Ice Cream Panda",
    category: "Code",
    area: "code",
    status: "Complete",
    tools: ["HTML", "JavaScript", "CSS"],
    description:
      "A completed front-end concept for a fictional ice cream brand, designed as a responsive landing experience with a clear commercial identity and a strong product-first presentation.",
    image: iceCreamImage,
    imageAlt: "Ice Cream Panda website screenshot",
    visual: "visual--code",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Create a responsive storefront-style landing page with a memorable visual identity, strong hierarchy, and a smooth user journey for a fictional brand in the food and lifestyle space.",
      },
      {
        title: "What I designed and built",
        description:
          "The project focuses on product storytelling, accessible content structure, and a clean front-end layout that feels light, friendly, and easy to explore on mobile and desktop.",
      },
      {
        title: "Implementation choices",
        description:
          "The interface is built with semantic HTML, lightweight JavaScript interactions, and CSS-driven styling to deliver a polished visual rhythm, readable content, and consistent layout behavior.",
      },
      {
        title: "Academic context",
        description:
          "This project belongs to the academic work developed during ETEC front-end and web programming activities, where the focus was on applying HTML, CSS, JavaScript, GitHub collaboration, and structured project organization in a realistic coursework context.",
      },
      {
        title: "Current scope",
        description:
          "This is a complete front-end concept and not a full e-commerce system. It demonstrates interface quality, responsive thinking, and the ability to translate a commercial idea into a clean, consistent web experience.",
      },
    ],
  },
  {
    id: "pizzeria-site",
    number: "06",
    title: "Pizzeria Website",
    category: "Web / UX/UI",
    area: "code",
    status: "In progress",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    description:
      "An ETEC project for a fictional neighborhood pizzeria. The current stage includes the brief, information architecture, six page wireframes in desktop and mobile sizes (12 frames total), and a reusable Figma component library. This is not a working ordering system yet; the next step is to turn the validated UX decisions into a responsive front-end implementation and, later, add database-backed flow.",
    prototypeFile: "pizzeria-wireframes.html",
    visualLabel: "Pizzeria · UX/UI",
    visual: "visual--code",
    caseStudy: [
      {
        title: "Goal",
        description:
          "Help customers choose a pizza and proceed with fewer steps and less uncertainty, whether they want dine-in, delivery, or pickup.",
      },
      {
        title: "UX decision",
        description:
          "Keep dine-in locations and reservations on a separate path from the order flow, so table bookings are not confused with delivery or pickup.",
      },
      {
        title: "Current deliverables",
        description:
          "A project brief, information architecture, six page designs in desktop and mobile sizes (12 wireframes total), and a reusable Figma component library.",
      },
      {
        title: "Current scope and next step",
        description:
          "This is the low-fidelity stage of an end-to-end design-to-code project, not a working ordering service. The next phase is to define the visual identity, implement a responsive front-end, and then connect the flow to a database-backed system.",
      },
    ],
  },
  {
    id: "tcc-etec",
    number: "07",
    title: "TCC Etec",
    category: "Code",
    area: "code",
    status: "Planned",
    tools: [],
    description:
      "A planned ETEC graduation project. Its scope and technology choices are not final; details will be added as the project develops.",
    visualLabel: "Future ETEC project",
    visual: "visual--tool",
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}

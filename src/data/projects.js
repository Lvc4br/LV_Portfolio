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
      "A 3D study of the ATEM Mini Pro focused on product visualization, form accuracy, and presentation of a compact hardware object.",
    image: atemImage,
    imageAlt: "3D render of an ATEM Mini Pro video switcher",
    visual: "visual--product",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Study a real device and transform its physical features into a clean 3D presentation that highlights design, proportions, and industrial character.",
      },
      {
        title: "Modeling and production",
        description:
          "The model focuses on accurate silhouette, material behavior, and product presentation. The goal was to communicate the object clearly without unnecessary visual noise.",
      },
      {
        title: "What this project shows",
        description:
          "This piece demonstrates control over Blender, product-based 3D thinking, and the ability to present objects in a polished commercial manner.",
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
      "A 3D handheld console concept presented as a product render, with emphasis on material, volume, and industrial form.",
    image: handheldImage,
    imageAlt: "Yellow handheld console 3D render",
    visual: "visual--product",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Explore a compact device concept and present it as a believable product render, emphasizing shape language and physical design cues.",
      },
      {
        title: "Visual direction",
        description:
          "The composition was built around strong contrast, defined silhouette, and material readability so the form feels intentional and premium.",
      },
      {
        title: "What this project shows",
        description:
          "This render reflects the ability to translate an idea into a visually coherent product concept using Blender, lighting, and presentation choices.",
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
      "A completed front-end project for a fictional ice cream shop, built as a responsive website with a clear visual identity and product-oriented layout. It is a finished front-end presentation, not a full e-commerce platform or a backend-connected system.",
    image: iceCreamImage,
    imageAlt: "Ice Cream Panda website screenshot",
    visual: "visual--code",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Create a responsive landing experience for a fictional ice cream brand with strong visual identity, accessible information hierarchy, and easier decision-making for the customer.",
      },
      {
        title: "What I designed and built",
        description:
          "A structured front-end page focused on product presentation, clear sections, and simple browsing flow. The experience was designed to feel light, friendly, and mobile-friendly without overloading the user with unnecessary options.",
      },
      {
        title: "Implementation choices",
        description:
          "The project uses semantic HTML, simple JavaScript interactions, and CSS styling to create a balanced layout with readability, spacing, and consistent visual rhythm.",
      },
      {
        title: "Academic context",
        description:
          "This project sits within the broader academic practice developed in the ETEC Front-End and Web Programming work, where the focus is on applying HTML, CSS, JavaScript, GitHub collaboration, and structured project organization in real coursework.",
      },
      {
        title: "Current scope",
        description:
          "This is a complete front-end concept, but it does not include a real checkout flow, user authentication, or backend integration. The value here is the interface quality, responsive structure, and front-end thinking applied to a commercial brand concept.",
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

import atemImage from "../assets/atem_mini_pro.webp";
import handheldImage from "../assets/Front.webp";
import iceCreamImage from "../assets/pw_project (1).webp";

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
      "A 3D study of the ATEM Mini Pro, focused on modeling and presenting its compact hardware form.",
    image: atemImage,
    imageAlt: "3D render of an ATEM Mini Pro video switcher",
    visual: "visual--product",
  },
  {
    id: "handheld-console",
    number: "02",
    title: "Handheld",
    category: "3D",
    area: "3d",
    status: "Complete",
    tools: ["Blender"],
    description: "A 3D handheld console model presented as a product render.",
    image: handheldImage,
    imageAlt: "Yellow handheld console 3D render",
    visual: "visual--product",
  },
  {
    id: "colosseum",
    number: "03",
    title: "Colosseum",
    category: "3D",
    area: "3d",
    status: "In progress",
    tools: ["Blender"],
    description: "An ongoing 3D study of the Colosseum.",
    visualLabel: "Work in progress",
    visual: "visual--colosseum",
  },
  {
    id: "jewelry",
    number: "04",
    title: "Jewelry",
    category: "3D",
    area: "3d",
    status: "In progress",
    tools: ["Blender"],
    description:
      "A 3D jewelry project in progress. Construction process documentation will be added in a future update.",
    visualLabel: "Work in progress",
    visual: "visual--jewelry",
  },
  {
    id: "pizzeria-site",
    number: "05",
    title: "Pizzeria Website",
    category: "Web / UX/UI",
    area: "code",
    status: "In progress",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    description:
      "An ETEC project to design and build a responsive website for a fictional neighborhood pizzeria; the brand name is still undecided. The project will progress from UX/UI design through front-end implementation and database-backed functionality. Its current stage covers the brief, information architecture, 12 desktop and mobile low-fidelity wireframes across six pages, and a reusable Figma component library. Explore the wireframes in the interactive preview; it is not a working ordering service. Dine-in reservations have a separate path from delivery and pickup orders.",
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
        title: "Scope and next step",
        description:
          "This is the low-fidelity stage of an end-to-end design-to-code project, not a working ordering service. Next: define the visual identity, build the responsive front end, then implement the database-backed features.",
      },
    ],
  },
  {
    id: "tcc-etec",
    number: "06",
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
  {
    id: "ice-cream-panda",
    number: "07",
    title: "Ice Cream Panda",
    category: "Code",
    area: "code",
    status: "Complete",
    tools: ["HTML", "JavaScript", "CSS"],
    description: "A responsive website for an ice cream shop.",
    image: iceCreamImage,
    imageAlt: "Ice Cream Panda website screenshot",
    visual: "visual--code",
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}

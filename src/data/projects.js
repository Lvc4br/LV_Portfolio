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
    category: "UX/UI",
    area: "code",
    status: "In progress",
    tools: ["Figma", "UX/UI"],
    description:
      "A responsive website concept for a fictional neighborhood pizzeria, created for an ETEC UX/UI project. The current stage includes the project brief, information architecture, low-fidelity desktop and mobile wireframes for six pages, and a reusable Figma component library. The planned experience supports dine-in, delivery, and pickup, with database integration reserved for a future development phase.",
    visualLabel: "UX/UI · Figma",
    visual: "visual--code",
  },
  {
    id: "tcc-etec",
    number: "06",
    title: "TCC Etec",
    category: "Code",
    area: "code",
    status: "Graduation project",
    featured: true,
    tools: ["React", "Node.js", "FastAPI"],
    description:
      "A future ETEC graduation project. Details and the development process will be shared as the project takes shape.",
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

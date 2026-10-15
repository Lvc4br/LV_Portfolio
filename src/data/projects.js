import atemImage from "../assets/atem_mini_pro.webp";
import handheldImage from "../assets/Front.webp";
import iceCreamImage from "../assets/pw_project (1).webp";

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
    tools: ["Blender"],
    description:
      "An ongoing 3D study of the Colosseum focused on structure, historical reference, and architectural interpretation in a real-world form.",
    visualLabel: "Work in progress",
    visual: "visual--colosseum",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Interpret an iconic architectural form through 3D modeling and study the relationship between volume, rhythm, and historical mass.",
      },
      {
        title: "Current stage",
        description:
          "The project is still under development. The focus is on refining the structure and evaluating how the model communicates its architectural logic.",
      },
      {
        title: "What this project shows",
        description:
          "It demonstrates a willingness to work with complex geometry and translate historical references into a digital sculptural study.",
      },
    ],
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
      "A jewelry-focused 3D study exploring material, object detailing, and presentation in a more refined product context.",
    visualLabel: "Work in progress",
    visual: "visual--jewelry",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Develop a decorative object study with attention to form, finish, and value perception in a close-up presentation context.",
      },
      {
        title: "Current stage",
        description:
          "This project is still in progress and is being revisited in terms of object detail, composition, and final presentation quality.",
      },
      {
        title: "What this project shows",
        description:
          "It highlights an interest in surface precision, material mood, and object presentation beyond pure hard-surface modeling.",
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

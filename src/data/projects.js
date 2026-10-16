import atemImage from "../assets/atem-mini-pro/atem_mini_pro.webp";
import atemAngleTwo from "../assets/atem-mini-pro/angle-02.webp";
import atemAngleThree from "../assets/atem-mini-pro/angle-03.webp";
import atemTopView from "../assets/atem-mini-pro/top-view.webp";
import atemRearPorts from "../assets/atem-mini-pro/rear-ports.webp";
import handheldImage from "../assets/playdate-console/Front.webp";
import handheldBack from "../assets/playdate-console/back.webp";
import handheldCenter from "../assets/playdate-console/center.webp";
import handheldLeft from "../assets/playdate-console/left.webp";
import handheldUp from "../assets/playdate-console/up.webp";
import iceCreamImage from "../assets/ice-cream-panda/pw_project (1).webp";
import iceCreamModal from "../assets/ice-cream-panda/Modal.webp";
import cocaColaDark from "../assets/coca-cola/bottle-render-dark.webp";
import cocaColaWarm from "../assets/coca-cola/bottle-render-warm.webp";
import planetMaterial from "../assets/planet/material-study.webp";
import planetCloseup from "../assets/planet/planet-closeup.webp";
import planetOrbitClose from "../assets/planet/planet-orbit-close.webp";
import planetMoonWide from "../assets/planet/planet-and-moon-wide.webp";
import planetMoonTall from "../assets/planet/planet-and-moon-tall.webp";
import planetarySystem from "../assets/planet/planetary-system.webp";
import planetMoonDark from "../assets/planet/planet-and-moon-dark.webp";
import planetWireframe from "../assets/planet/wireframe-study.webp";
import laserCube from "../assets/laser/laser-cube-study.webp";
import laserImpact from "../assets/laser/laser-impact-closeup.webp";
import laserForms from "../assets/laser/laser-multiple-forms.webp";
import laserBeam from "../assets/laser/laser-beam-detail.webp";

import colosseumPlan from "../assets/colosseum/01-plano-geral.webp";
import colosseumFacade from "../assets/colosseum/02-elevacao-fachada.webp";
import colosseumSection from "../assets/colosseum/03-corte-geral.webp";
import colosseumDetail from "../assets/colosseum/04-elevacao-corte-detalhe.webp";
import colosseumGround from "../assets/colosseum/05-nivel-solo.webp";
import colosseumGroundFloor from "../assets/colosseum/06-terreo.webp";
import colosseumLevelOne from "../assets/colosseum/07-chegada-1-andar.webp";
import colosseumFirstFloor from "../assets/colosseum/08-primeiro-andar.webp";
import colosseumLevelTwo from "../assets/colosseum/09-chegada-2-andar.webp";
import colosseumSecond from "../assets/colosseum/10-segundo-andar.webp";
import colosseumThird from "../assets/colosseum/11-terceiro-andar.webp";
import colosseumAxonometric from "../assets/colosseum/12-conjunto-axonometrico.webp";

import jewelryBoard from "../assets/jewelry/constelacao-floral-board.webp";
import jewelryMoodboardOne from "../assets/jewelry/moodboard-1.webp";
import jewelryMoodboardTwo from "../assets/jewelry/moodboard-2.webp";
import jewelryMoodboardThree from "../assets/jewelry/moodboard-3.webp";

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
      "A product visualization study focused on industrial form, material clarity, and disciplined composition for a real hardware object.",
    image: atemImage,
    imageAlt: "3D render of an ATEM Mini Pro video switcher",
    gallery: [
      { src: atemImage, alt: "Three-quarter render of an ATEM Mini Pro video switcher" },
      { src: atemAngleTwo, alt: "Alternative angled render of the ATEM Mini Pro" },
      { src: atemAngleThree, alt: "Low-angle render of the ATEM Mini Pro" },
      { src: atemTopView, alt: "Top view of the ATEM Mini Pro controls" },
      { src: atemRearPorts, alt: "Rear ports and connections on the ATEM Mini Pro" },
    ],
    visual: "visual--product",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Re-create the ATEM Mini Pro as a clear product visualization. The portfolio documents the exterior form and visible controls and connections; it does not claim manufacturing tolerances or a production-ready CAD model.",
      },
      {
        title: "3D process and decisions",
        description:
          "The model is presented with a restrained dark housing, contrasting buttons, and soft studio lighting. Camera choices balance a three-quarter product view with direct evidence of the top controls and rear I/O, so the silhouette and functional layout remain legible.",
      },
      {
        title: "Verifiable result",
        description:
          "The gallery contains five views: the main product angle, two alternate angles, a top view of the controls, and a rear view of the connections. Together they document both the overall form and details hidden from a single hero render.",
      },
    ],
  },
  {
    id: "handheld-console",
    number: "02",
    title: "Playdate Console",
    category: "3D",
    area: "3d",
    status: "Complete",
    tools: ["Blender"],
    description:
      "A compact crank-powered handheld console concept, presented through a set of product renders that highlight its yellow enclosure, controls, screen, and distinctive silhouette.",
    image: handheldImage,
    imageAlt: "Front view of a yellow crank-powered handheld console",
    video: {
      src: "videos/playdate-360.mp4",
      title: "Playdate 360-degree render",
    },
    gallery: [
      { src: handheldImage, alt: "Front view of the yellow handheld console" },
      { src: handheldBack, alt: "Back panel of the handheld console" },
      { src: handheldCenter, alt: "Three-quarter view of the handheld console" },
      { src: handheldLeft, alt: "Side view of the handheld console" },
      { src: handheldUp, alt: "Front detail of the handheld console screen and controls" },
    ],
    visual: "visual--product",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Develop a compact crank-powered handheld console concept and present it through clear product views that communicate its proportions, controls, and screen.",
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
      "A historically grounded 3D reconstruction study of the Colosseum, developed from architectural plans and archaeological references to understand its geometry, circulation system, and vertical organization. The project is treated as a research-based modeling process grounded in evidence, not as a final historical restoration.",
    image: colosseumPlan,
    imageAlt: "Colosseum plan-by-level study and architectural reconstruction sheets",
    galleryLabel: "Historical reference",
    galleryNotice:
      "The 3D reconstruction is still in progress. This gallery contains source plates used for research; it does not show the current model.",
    gallery: [
      { src: colosseumPlan, alt: "General plan by levels of the Colosseum" },
      { src: colosseumFacade, alt: "Main elevation and façade study of the Colosseum" },
      { src: colosseumSection, alt: "General cross-section of the Colosseum" },
      { src: colosseumDetail, alt: "Detailed elevation and cross-section of the façade" },
      { src: colosseumGround, alt: "Ground level reconstruction study" },
      { src: colosseumGroundFloor, alt: "Ground floor plan and circulation analysis" },
      { src: colosseumLevelOne, alt: "First access level analysis" },
      { src: colosseumFirstFloor, alt: "First floor reconstruction study" },
      { src: colosseumLevelTwo, alt: "Second-floor access and arrival study" },
      { src: colosseumSecond, alt: "Second floor architectural study" },
      { src: colosseumThird, alt: "Third floor reconstruction study" },
      { src: colosseumAxonometric, alt: "Axonometric view of the Colosseum ensemble" },
    ],
    visualLabel: "Research in progress",
    visual: "visual--colosseum",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "The goal is to reconstruct the Colosseum digitally through a careful reading of its footprint, seating distribution, circulation paths, and vertical sequencing, using architectural reference plates and historical analysis to guide the work.",
      },
      {
        title: "Method and sources",
        description:
          "The project is built from a set of architectural plates showing the general plan by levels, facade elevations, sectional cuts, access routes, and axonometric studies. These references were used to decode the elliptical geometry, concentric seating rings, service circulation, and layered organization of the amphitheatre.",
      },
      {
        title: "Production and interpretation",
        description:
          "The 3D reconstruction is under construction. The architectural plates guide the modeling of the elliptical form, seating rings, circulation, and vertical levels; interpretations will be identified as the model develops.",
      },
      {
        title: "Evidence in the project",
        description:
          "The current gallery contains 12 historical reference plates covering plans, elevations, sections, circulation, and an axonometric view. They document the research stage; the axonometric image is a source reference, not a render of the model. The 3D result will be added as the reconstruction progresses.",
      },
      {
        title: "What this project shows",
        description:
          "At this stage, the published work shows the reference gathering and architectural analysis behind the project. The modeling is still in progress, so the finished 3D structure is not presented yet.",
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
      "A jewelry concept developed around a floral ring trilogy inspired by the progression of love: Namoro, Noivado and Casamento. The project uses moodboards, design references, and a structured concept presentation to connect emotional storytelling with material decisions, form language, and luxury-oriented composition.",
    image: jewelryBoard,
    imageAlt: "Constelação Floral jewelry concept board with moodboards and design references",
    gallery: [
      { src: jewelryBoard, alt: "Constelação Floral concept board" },
      { src: jewelryMoodboardOne, alt: "Jewelry moodboard with concept references" },
      { src: jewelryMoodboardTwo, alt: "Second jewelry moodboard with material references" },
      { src: jewelryMoodboardThree, alt: "Third jewelry moodboard with design references" },
    ],
    visualLabel: "Concept in progress",
    visual: "visual--jewelry",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Translate a romantic narrative into a luxury jewelry concept where the metaphor of a star becoming a flower becomes a symbolic progression toward long-term commitment, expressed through organic forms, materials, and refined composition.",
      },
      {
        title: "Concept and visual direction",
        description:
          "The collection is structured in three stages: Namoro, Noivado and Casamento. Each ring combines floral stems, star-like sparkle, and sculptural balance to represent emotional growth, while materials such as rose gold, white gold, morganite, and diamonds reinforce the sense of elegance and symbolism.",
      },
      {
        title: "Research and production process",
        description:
          "The concept was developed from reference images, visual moodboards, and a briefing workflow that helped organize the form language, composition, and material story before final refinement. This kept the project honest and structured: more like a design development process than a purely decorative presentation.",
      },
      {
        title: "Project evidence",
        description:
          "The work combines the central concept board with supporting references, moodboards, and design studies that show the evolution of the collection's storytelling. The project remains in progress, but the narrative and design direction are already clearly defined.",
      },
      {
        title: "Current scope",
        description:
          "This is a concept-stage jewelry project, not a finalized production set. The design language is coherent and documented, but the collection still requires further material refinement, final renders, and a more complete manufacturing-oriented validation process.",
      },
    ],
  },
  {
    id: "coca-cola-bottle",
    number: "05",
    title: "Coca-Cola Bottle",
    category: "3D",
    area: "3d",
    status: "Complete",
    tools: ["Blender"],
    description:
      "A product-rendering study of a classic glass soda bottle, using reflections, condensation, and controlled studio lighting to emphasize the material and silhouette.",
    image: cocaColaDark,
    imageAlt: "Glass Coca-Cola bottle render against a dark studio background",
    gallery: [
      { src: cocaColaDark, alt: "Glass bottle with condensation in a dark studio scene" },
      { src: cocaColaWarm, alt: "Warm-lit glass bottle render with reflective droplets" },
    ],
    visual: "visual--product",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Create a focused product visualization that communicates the shape and glass material of a bottled soft drink through a restrained studio composition.",
      },
      {
        title: "Visual direction",
        description:
          "Dark backgrounds, controlled highlights, and condensation details bring attention to the bottle surface while creating two distinct lighting moods.",
      },
    ],
  },
  {
    id: "planetary-scene",
    number: "06",
    title: "Planetary Scene",
    category: "3D",
    area: "3d",
    status: "Complete",
    tools: ["Blender"],
    description:
      "A collection of planetary scene renders exploring scale, atmospheric lighting, surface detail, and composition, accompanied by a wireframe study of the scene.",
    image: planetarySystem,
    imageAlt: "Planet and smaller moon composed against a dark space background",
    gallery: [
      { src: planetarySystem, alt: "Planetary system composition with a large planet and smaller moon" },
      { src: planetMoonWide, alt: "Wide view of a planet and its moon in space" },
      { src: planetMoonTall, alt: "Tall composition of a planet and moon" },
      { src: planetMoonDark, alt: "Dark planetary composition with a backlit moon" },
      { src: planetCloseup, alt: "Close view of a textured planet in shadow" },
      { src: planetOrbitClose, alt: "Close planetary view with a nearby orbiting body" },
      { src: planetMaterial, alt: "Abstract gray planetary material and sphere study" },
      { src: planetWireframe, alt: "Orange wireframe sphere study against a black background" },
    ],
    visual: "visual--colosseum",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Explore planetary forms and their relationship to light, scale, and negative space across a series of scene compositions.",
      },
      {
        title: "Process and presentation",
        description:
          "The collection brings together finished space scenes, close-up studies, a material exploration, and a wireframe view to show both the rendered result and the underlying form.",
      },
    ],
  },
  {
    id: "laser-study",
    number: "07",
    title: "Laser Interaction Study",
    category: "3D",
    area: "3d",
    status: "Complete",
    tools: ["Blender"],
    description:
      "A set of studio renders studying a bright laser beam as it meets and passes through simple geometric forms, with emphasis on glow, sparks, and dramatic lighting.",
    image: laserCube,
    imageAlt: "Glowing laser beam striking a geometric block in a studio scene",
    video: {
      src: "videos/laser-study.mp4",
      title: "Laser animation render",
    },
    gallery: [
      { src: laserCube, alt: "Laser beam striking a geometric block" },
      { src: laserImpact, alt: "Close-up of sparks at the laser impact point" },
      { src: laserForms, alt: "Laser beam passing through multiple geometric forms" },
      { src: laserBeam, alt: "Close detail of a bright laser beam" },
    ],
    visual: "visual--product",
    caseStudy: [
      {
        title: "Project objective",
        description:
          "Study how a concentrated light source can become the focal point of a minimal scene through glow, sparks, and interaction with geometric surfaces.",
      },
      {
        title: "Visual direction",
        description:
          "The images move between a wider composition and close details, balancing the bright beam against restrained studio backgrounds and simple forms.",
      },
    ],
  },
  {
    id: "ice-cream-panda",
    number: "08",
    title: "Ice Cream Panda",
    category: "Code",
    area: "code",
    status: "Complete",
    tools: ["HTML", "JavaScript", "CSS"],
    description:
      "A responsive storefront-style landing page for a fictional ice cream brand, designed to communicate product identity, visual hierarchy, and a polished commercial experience.",
    image: iceCreamImage,
    imageAlt: "Ice Cream Panda website screenshot",
    repositoryUrl: "https://github.com/Lvc4br/Projetos-PW-ETEC",
    gallery: [
      { src: iceCreamImage, alt: "Ice Cream Panda website screenshot" },
      { src: iceCreamModal, alt: "Ice Cream Panda project modal design" },
    ],
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
          "This project was developed as part of ETEC web programming coursework with Bianca and Fred. The group repository README identifies the team and links to the project files.",
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
    number: "09",
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
        title: "Goal and user flow",
        description:
          "Help customers discover a pizza and understand how to order, while keeping dine-in reservations separate from delivery and pickup. The clickable prototype covers Home, Menu, Product, My Order, About, and Locations.",
      },
      {
        title: "Wireframes and responsive decisions",
        description:
          "Each of the six pages has a desktop frame at 1440 px and a mobile frame at 390 px, for 12 wireframes total. The mobile mode uses a compact menu and sticky order action; the menu keeps filters touch-scrollable, while product and order screens separate choices and totals into readable steps.",
      },
      {
        title: "Technical and scope decisions",
        description:
          "The wireframes use shared layout patterns and a reusable component library to make page structure consistent. Prices, addresses, contact information, and order actions are explicitly placeholders: this is an interactive low-fidelity UX prototype, not a connected ordering system.",
      },
      {
        title: "Verifiable deliverables and next step",
        description:
          "The preview lets visitors switch among all six page flows and compare desktop with mobile layouts. The next measurable step is to replace placeholders with validated brand and business content, then implement and test the responsive front end before integrating real order data.",
      },
    ],
  },
  {
    id: "tcc-etec",
    number: "10",
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

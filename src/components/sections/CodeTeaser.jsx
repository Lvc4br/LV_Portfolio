import { useTypewriter } from "../../data/useTypewriter";
import tracker from "../../lib/analytics.js";

const CODE_SNIPPETS = [
`export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}`,
`const work = projects.filter(
  (project) => project.area === "3d"
);`,
];

export default function Code() {
    const displayed = useTypewriter(CODE_SNIPPETS, {
        typeSpeed: 25,
        deleteSpeed: 15,
        pauseAfterType: 2000,
        pauseAfterDelete: 400,
    });

    return <section id="code" className="section">
        <style>{`
            .code-cursor {
            display: inline-block;
            width: .5ch;
            height: 1em;
            background: var(--accent1);
            margin-left: 3px;
            vertical-align: -2px;
            animation: blink 1s step-end infinite;
        }

        @keyframes blink {
            0%, 100% {
                opacity: 1;
            }

            50% {
                opacity: 0;
            }
        }
        `}</style>
        <div className="container">
            <div className="section-head">
                <span className="eyebrow">03 / Code</span>
                <div>
                    <h2 className="section-title">Code is how I make creative work repeatable, interactive and useful.</h2>
                    <p className="section-copy">I build web interfaces and bring my 3D and programming projects together through practical work.</p>
                </div>
            </div>
            <div className="code__layout">
                <div className="code-window">
                    <div className="code-window__top">
                        <span>projects.js</span>
                        <span>01 — 03</span>
                    </div>
                    <pre>
                        <code>{displayed}<span className="code-cursor"></span></code>
                    </pre>
                </div>
                <div className="code__facts">
                    <div>
                        <span>01</span>
                        <strong>Python</strong>
                        <p>Automation, tools and Blender workflows.</p>
                    </div>
                    <div>
                        <span>02</span>
                        <strong>JavaScript / React</strong>
                        <p>Interfaces, components and interactive web experiences.</p>
                    </div>
                    <div>
                        <span>03</span>
                        <strong>HTML / CSS / JavaScript</strong>
                        <p>Responsive web interfaces, including a website for an ice cream shop.</p>
                    </div>
                    <a className="button" href="https://github.com/Lvc4br" onClick={() => tracker.track("github_click")} target="_blank" rel="noreferrer">View GitHub ↗</a>
                </div>
            </div>
        </div>
    </section>
}

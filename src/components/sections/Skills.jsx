const groups=[
    ['3D','Blender','Geometry Nodes'],
    ['Programming','Python','JavaScript'],
    ['Web','React','Flask','HTML','CSS'],
    ['Data & workflow','Neon','Git','GitHub','VS Code']
];
export default function Skills(){
    return <section className="section dark-section">
        <div className="container">
            <div className="section-head">
                <span className="eyebrow">05 / Skills</span>
                <div>
                    <h2 className="section-title">Tools are useful. What matters is what I build with them.</h2>
                </div>
            </div>
            <div className="skills-grid">
                {groups.map(([title,...skills])=>
                    <div key={title}>
                        <span>{title}</span>
                        {skills.map(s=><strong key={s}>{s}</strong>)}
                    </div>
                )}
            </div>
        </div>
    </section>}
const items=["Modeling","Materials","Lighting","Environments","Procedural 3D","Visualization"];
export default function ThreeD(){
    return <section id="three-d" className="section dark-section">
        <div className="container">
            <div className="section-head">
                <span className="eyebrow">02 / 3D</span>
                <div>
                    <h2 className="section-title">I use 3D to turn technical ideas into visual systems.</h2>
                    <p className="section-copy">The goal is not only a final render. I want to show the construction behind it: geometry, materials, lighting, composition and iteration.</p>
                </div>
            </div>
            <div className="three-d__layout">
                <div className="three-d__statement">
                    BLENDER
                    <span>AS A CREATIVE + TECHNICAL TOOL.</span>
                </div>
                <div className="three-d__list">
                    {items.map((item,i)=><div key={item}>
                        <span>0{i+1}</span>
                        <strong>{item}</strong>
                        <b>↗</b>
                    </div>)}
                </div>
            </div>
        </div>
    </section>}

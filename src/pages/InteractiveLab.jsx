import { useState } from "react";
import { Link } from "react-router-dom";

export default function InteractiveLab() {
  const [radius, setRadius] = useState(42);
  const [glow, setGlow] = useState(55);
  const [rotation, setRotation] = useState(18);

  return (
    <>
      <section className="section journey-hero">
        <div className="container">
          <p className="eyebrow">Interactive Lab / Experiments</p>
          <h1 className="section-title">Try it.<br />Change it.</h1>
          <p className="section-copy">
            Um espaço para explorar pequenas experiências no navegador.
            Os controles abaixo alteram uma demonstração visual em tempo real.
          </p>
        </div>
      </section>
      <section className="section journey-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">01 / Live playground</span>
            <div>
              <h2 className="section-title">Shape & light.</h2>
              <p className="section-copy">Ajuste os parâmetros e observe a prévia mudar instantaneamente.</p>
            </div>
          </div>
          <div className="playground">
            <div className="playground__preview" role="img" aria-label={`Live visual preview: radius ${radius}px, glow ${glow}%, rotation ${rotation} degrees`}>
              <div
                className="playground__orb"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  transform: `rotate(${rotation}deg)`,
                  boxShadow: `0 0 ${glow * 1.5}px rgba(215,25,50,${glow / 100})`,
                }}
              />
              <span>LIVE PREVIEW</span>
            </div>
            <div className="playground__controls">
              <label htmlFor="lab-radius">Radius <output htmlFor="lab-radius">{radius}px</output>
                <input id="lab-radius" type="range" min="24" max="90" value={radius} onChange={(event) => setRadius(Number(event.target.value))} />
              </label>
              <label htmlFor="lab-glow">Glow <output htmlFor="lab-glow">{glow}%</output>
                <input id="lab-glow" type="range" min="0" max="100" value={glow} onChange={(event) => setGlow(Number(event.target.value))} />
              </label>
              <label htmlFor="lab-rotation">Rotation <output htmlFor="lab-rotation">{rotation}°</output>
                <input id="lab-rotation" type="range" min="0" max="360" value={rotation} onChange={(event) => setRotation(Number(event.target.value))} />
              </label>
              <button className="button" type="button" onClick={() => { setRadius(42); setGlow(55); setRotation(18); }}>Reset parameters</button>
              <pre><code>{`const visual = {
  radius: ${radius},
  glow: ${glow},
  rotation: ${rotation}
};`}</code></pre>
            </div>
          </div>
        </div>
      </section>
      <section className="section journey-section journey-section--compact">
        <div className="container journey-grid">
          <article className="journey-card">
            <span className="eyebrow">02 / Interactive 3D</span>
            <h2>Real-time model viewer</h2>
            <p>
              A próxima etapa é adicionar modelos exportados do Blender em
              formato glTF/GLB, com rotação, zoom e controles de câmera.
              Nenhum modelo 3D interativo está publicado ainda.
            </p>
            <div className="tag-row"><span>Blender</span><span>glTF / GLB</span><span>Web 3D</span></div>
            <Link className="button" to="/work/3d">Explore current 3D work ↗</Link>
          </article>
          <article className="journey-card">
            <span className="eyebrow">03 / Source & experiments</span>
            <h2>Code in context</h2>
            <p>
              Cada experiência poderá incluir código, explicação, controles
              e resultado executável, mantendo as demonstrações isoladas e seguras.
            </p>
            <Link className="button button--solid" to="/work/code">Explore code projects ↗</Link>
          </article>
        </div>
      </section>
    </>
  );
}

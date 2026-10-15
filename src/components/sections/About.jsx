export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="section-head">
          <span className="eyebrow">06 / About</span>
          <div>
            <h2 className="section-title">
              From 3D exploration to digital product thinking and front-end execution.
            </h2>
            <p className="section-copy">
              I began working in Blender in 2018 and gradually expanded my interest beyond
              visual creation into programming, front-end development, and the logic behind
              interfaces that need to be clear, useful, and well structured.
            </p>
          </div>
        </div>

        <div className="timeline">
          <div>
            <span>01 / 3D</span>
            <strong>Blender and visual studies</strong>
            <p>
              Product visualization, material exploration, lighting, and object-focused design work.
            </p>
          </div>
          <div>
            <span>02 / WEB</span>
            <strong>Front-end and interface logic</strong>
            <p>
              HTML, CSS, JavaScript, responsive layouts, and structured web experiences.
            </p>
          </div>
          <div>
            <span>03 / NOW</span>
            <strong>3D × Code</strong>
            <p>
              Combining visual thinking with technical execution to build digital work that is
              creative, organized, and relevant to real product contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

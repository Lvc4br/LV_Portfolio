export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="section-head">
          <span className="eyebrow">06 / About</span>
          <div>
            <h2 className="section-title">
              From 3D studies to digital products and front-end thinking.
            </h2>
            <p className="section-copy">
              I started exploring Blender in 2018 and soon became interested in
              how digital creation works beyond the visual layer. Over time, I
              expanded that interest into programming, especially web development,
              front-end structure, and the logic behind interfaces that people can
              actually use.
            </p>
          </div>
        </div>

        <div className="timeline">
          <div>
            <span>01 / 3D</span>
            <strong>Blender and visual experimentation</strong>
            <p>
              Modeling, materials, lighting, and product-focused visual studies.
            </p>
          </div>
          <div>
            <span>02 / WEB</span>
            <strong>Programming and front-end learning</strong>
            <p>
              JavaScript, HTML, CSS, responsive layouts, and user-focused web
              interfaces.
            </p>
          </div>
          <div>
            <span>03 / NOW</span>
            <strong>3D × Code</strong>
            <p>
              Combining visual thinking and programming to build digital experiences
              that are both creative and technically organized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

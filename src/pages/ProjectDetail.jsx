import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectById, projects } from "../data/projects.js";
import tracker from "../lib/analytics.js";

function ProjectGallery({ title, images, imageLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex];

  function showImage(offset) {
    setSelectedIndex((index) => (index + offset + images.length) % images.length);
  }

  return (
    <section className="project-detail__gallery" aria-label={`${title} image gallery`}>
      <figure className="project-detail__image">
        <img src={selectedImage.src} alt={selectedImage.alt} />
        {images.length > 1 && (
          <div className="project-detail__gallery-controls">
            <button type="button" onClick={() => showImage(-1)} aria-label="Previous image">
              ←
            </button>
            <span aria-live="polite">{selectedIndex + 1} / {images.length}</span>
            <button type="button" onClick={() => showImage(1)} aria-label="Next image">
              →
            </button>
          </div>
        )}
        <figcaption>
          {imageLabel && <span className="project-detail__image-label">{imageLabel}</span>}
          <span>{selectedImage.alt}</span>
        </figcaption>
      </figure>

      {images.length > 1 && (
        <div className="project-detail__thumbnails" aria-label="Choose an image">
          {images.map((image, index) => (
            <button
              key={`${title}-${image.alt}`}
              className={index === selectedIndex ? "is-active" : ""}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Show image ${index + 1}: ${image.alt}`}
              aria-pressed={index === selectedIndex}
            >
              <img src={image.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectVideo({ title, video, poster }) {
  return (
    <section className="project-detail__video" aria-label={`${title} video render`}>
      <h2 className="eyebrow">{video.title}</h2>
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={video.title}
      >
        <source
          src={`${import.meta.env.BASE_URL}${video.src}`}
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </video>
    </section>
  );
}

export default function ProjectDetail({ area }) {
  const { id } = useParams();
  const project = getProjectById(id);
  const projectId = project?.area === area ? project.id : null;
  const lastTrackedProjectId = useRef(null);

  useEffect(() => {
    if (!projectId) {
      lastTrackedProjectId.current = null;
      return;
    }

    if (lastTrackedProjectId.current !== projectId) {
      tracker.track("project_open");
      lastTrackedProjectId.current = projectId;
    }
  }, [projectId]);

  if (!projectId) {
    const routeByArea = {
      "3d": "/work/3d",
      code: "/work/code",
    };
    return <Navigate to={routeByArea[area] ?? "/work"} replace />;
  }

  const route = `/work/${area}`;
  const areaLabel = area === "3d" ? "3D" : "programming";
  const relatedProjects = projects.filter(
    (item) => item.area === area && item.id !== project.id
  );
  const galleryImages = project.gallery?.length
    ? project.gallery
    : project.image
      ? [{ src: project.image, alt: project.imageAlt }]
      : [];

  return (
    <>
      <section className="section project-detail">
        <div className="container">
          <Link className="project-detail__back" to={route}>
            ← All {areaLabel} work
          </Link>
          <header className="project-detail__header">
            <div>
              <p className="eyebrow">{project.category} / {project.status}</p>
              <h1 className="section-title">{project.title}</h1>
            </div>
            <p className="project-detail__summary">{project.description}</p>
          </header>

          {project.galleryNotice && (
            <p className="project-detail__notice">{project.galleryNotice}</p>
          )}

          {(project.prototypeFile || project.repositoryUrl) && (
            <div className="project-detail__actions">
              {project.prototypeFile && (
                <a
                  className="button button--solid"
                  href={`${import.meta.env.BASE_URL}${project.prototypeFile}`}
                  onClick={() => tracker.track("prototype_open")}
                  target="_blank"
                  rel="noreferrer"
                >
                  View interactive wireframes ↗
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  className="button"
                  href={project.repositoryUrl}
                  onClick={() => tracker.track("source_click")}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.repositoryLabel ?? "View source & team credits"} ↗
                </a>
              )}
            </div>
          )}

          {project.caseStudy && (
            <div className="project-detail__case-study">
              {project.caseStudy.map((item) => (
                <section key={item.title}>
                  <span className="eyebrow">{item.title}</span>
                  <p>{item.description}</p>
                </section>
              ))}
            </div>
          )}

          {galleryImages.length > 0 && (
            <ProjectGallery
              key={project.id}
              title={project.title}
              images={galleryImages}
              imageLabel={project.galleryLabel}
            />
          )}

          {project.video && (
            <ProjectVideo
              title={project.title}
              video={project.video}
              poster={project.image}
            />
          )}

          {project.realityCheck && (
            <div className="project-detail__case-study">
              <section>
                <span className="eyebrow">Reality check</span>
                <p>{project.realityCheck}</p>
              </section>
            </div>
          )}

          <div className="project-detail__facts">
            {project.tools.length > 0 && (
              <section>
                <span className="eyebrow">Tools</span>
                <div className="tag-row">
                  {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </section>
            )}
            <section>
              <span className="eyebrow">Status</span>
              <p>{project.status}</p>
            </section>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section project-detail__related">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">More work</span>
              <div>
                <h2 className="section-title">More {areaLabel} projects.</h2>
              </div>
            </div>
            <div className="project-detail__links">
              {relatedProjects.map((item) => (
                <Link key={item.id} to={`/work/${area}/${item.id}`}>
                  <span>{item.number} / {item.status}</span>
                  <strong>{item.title}</strong>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

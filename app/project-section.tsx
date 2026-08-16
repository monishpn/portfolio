"use client";

import { useEffect, useRef, useState } from "react";

type Project = { type: string; title: string; description: string; details?: string[]; technologies: string[]; githubUrl?: string };

export default function ProjectSection({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected && dialog && !dialog.open) dialog.showModal();
  }, [selected]);

  function closeDialog() {
    dialogRef.current?.close();
    setSelected(null);
  }

  return <>
    <div className="project-grid">{projects.map((project, index) =>
      <button className="project-card" key={project.title} type="button" onClick={() => setSelected(project)} aria-label={`View details for ${project.title}`}>
        <div className="project-number">{String(index + 1).padStart(2, "0")}</div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p>
        <div className="tags">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div><span className="project-open">View project <span aria-hidden="true">→</span></span>
      </button>)}</div>
    <dialog ref={dialogRef} className="project-dialog" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) closeDialog(); }}>
      {selected && <div className="project-dialog-panel">
        <button className="dialog-close" type="button" onClick={closeDialog} aria-label="Close project details">×</button><p className="project-type">{selected.type}</p><h2>{selected.title}</h2><p className="project-summary">{selected.description}</p>
        {selected.details?.length ? <div className="project-details"><h3>Project details</h3><ul>{selected.details.map((detail, index) => <li key={`${selected.title}-detail-${index}`}>{detail}</li>)}</ul></div> : null}
        <div className="tags">{selected.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
        {selected.githubUrl ? <div className="github-action"><a className="github-link" href={selected.githubUrl} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a></div> : null}
      </div>}
    </dialog>
  </>;
}

import React from "react";
import ProjectCards from "../Components/ProjectCards";

export default function Projects({projectRef}) {
  let tag = "</>";
  return (
    <main className="projectsMain" ref={projectRef}>
      <div className="projectsTag">{tag}</div>
      <div className="projectsTitle" >Projects</div>
      <ProjectCards />
    </main>
  );
}

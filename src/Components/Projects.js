import React from "react";
import ProjectCards from "../Components/ProjectCards";

export default function Projects() {
  let tag = '</>'
  return (
    <main className="projectsMain">
      <div className="projectsTag">{tag}</div>
      <div className="projectsTitle">Projects</div>
      <ProjectCards />
    </main>
  );
}

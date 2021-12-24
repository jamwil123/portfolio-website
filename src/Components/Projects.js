import React, { useRef } from "react";
import ProjectCards from "../Components/ProjectCards";

export default function Projects() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  let tag = "</>";
  return (
    <main className="projectsMain">
      <div className="projectsTag">{tag}</div>
      <div className="projectsTitle">Projects</div>
      <ProjectCards />
    </main>
  );
}

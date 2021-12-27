import React from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";


export default function Home({projectRef, skillRef, topRef}) {
  return (
    <main className="homeMain" ref={topRef}>
      <Intro />
      <Projects  projectRef={projectRef} />
      <Skills skillRef={skillRef}/>
    </main>
  );
}

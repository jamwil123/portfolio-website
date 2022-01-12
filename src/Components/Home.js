import React from "react";
import Contact from "./Contact";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";


export default function Home({projectRef, skillRef, topRef, contactRef}) {
  return (
    <main className="homeMain" ref={topRef}>
      <Intro />
      <Projects  projectRef={projectRef} />
      <Skills skillRef={skillRef}/>
      <Contact contactRef={contactRef}/>
    </main>
  );
}

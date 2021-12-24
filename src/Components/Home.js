import React from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <main className="homeMain">
      <Intro />
      <Projects  />
      <Skills/>
    </main>
  );
}

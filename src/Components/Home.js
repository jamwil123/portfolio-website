import React from "react";
import Intro from "./Intro";
import Projects from "./Projects";

export default function Home() {
  return (
    <main className="homeMain">
      <Intro/>
      <Projects/>
    </main>
  );
}

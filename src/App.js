import Header from "./Components/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import {useRef} from "react"
import React from "react"


function App() {
  const topRef = useRef(null)
  const projectRef = useRef(null)
  const skillRef = useRef(null)
  const contactRef = useRef(null)

   
   
  return (
    <div className="main">
    <BrowserRouter>
      <Header projectRef={projectRef} skillRef={skillRef} topRef={topRef} contactRef={contactRef} />
      <Routes>
        <Route path="/" element={<Home projectRef={projectRef} skillRef={skillRef} topRef={topRef} contactRef={contactRef} />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

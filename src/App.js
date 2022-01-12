import Header from "./Components/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import {useRef} from "react"


function App() {
  const topRef = useRef(null)
  const projectRef = useRef(null)
  const skillRef = useRef(null)
  const contactRef = useRef(null)

   
   
  return (
    <BrowserRouter>
      <Header projectRef={projectRef} skillRef={skillRef} topRef={topRef} contactRef={contactRef} />
      <Routes>
        <Route path="/" element={<Home projectRef={projectRef} skillRef={skillRef} topRef={topRef} contactRef={contactRef} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

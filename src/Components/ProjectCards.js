import React from "react";
import projectData from "../Data/projects.json";

export default function ProjectCards() {

    const handleClick = (link) => {
        window.open(link);
      };
    
  return (
    <div className="cardsMain">
      {projectData.map((project) => {
        return (
          <main className="mainCard">
            <img
              className={`projectImg`}
              src={project.staticlink}
              alt={project.name}
              onMouseOver={(e)=>{e.target.src=project.giflink}}
              onMouseOut={(e)=>{e.target.src=project.staticlink}}
              onClick={()=> {handleClick(project.link)}}
              
            />
            <div className='projectName' >{project.name}</div>
          </main>
        );
      })}
    </div>
  );
}

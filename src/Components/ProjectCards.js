import React from 'react'
import projectData from '../Data/projects.json'

export default function ProjectCards() {
    return (
        <div className='cardsMain'>
            {projectData.map((project)=> {
                return (
                    <main className='mainCard'>
                    <img className={`${project.name}Img`} src={project.giflink} alt={project.name}/>
                    <div>{project.name}</div>
                    </main>
                )
            })}
        </div>
    )
}

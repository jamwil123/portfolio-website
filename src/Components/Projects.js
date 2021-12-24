import React from 'react'
import ProjectCards from '../Components/ProjectCards'

export default function Projects() {
    let text = '<Projects>'
    return (
        <main className='projectsMain'>
            <div className='projectsTitle'>{text}</div>
            <ProjectCards/>
        </main>
    )
}

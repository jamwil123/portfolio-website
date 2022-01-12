import React from 'react'
import { FaGithub } from 'react-icons/fa'


export default function Header({projectRef, skillRef, topRef, contactRef}) {

    const executeTopScroll = () => topRef.current.scrollIntoView()  
    const executeProjectScroll = () => projectRef.current.scrollIntoView()    
    const executeSkillScroll = () => skillRef.current.scrollIntoView()  
    const executeContactScroll = () => contactRef.current.scrollIntoView()  
   
    return (

        <div className='headerMain'>
        <main className='firstThreeButtons'>
        <div className='headerTextName' onClick={executeTopScroll}>James Wilson </div> 
        <div className='headerTextWork' onClick={executeProjectScroll}>Projects</div>
        <div className='headerTextSkills' onClick={executeSkillScroll}>Skills</div>
        <div className='headerTextContact' onClick={executeContactScroll}>Contact me</div>
        </main>
        
        <FaGithub onClick={()=>{window.open('https://github.com/jamwil123')}} className='gitHubIcon' />
       
        </div>
    )
}

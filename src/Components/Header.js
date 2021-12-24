import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'


export default function Header(myRef) {
    return (
        <div className='headerMain'>
        <main className='firstThreeButtons'>
        <Link to='/' style={{ textDecoration: 'none' }}> 
        <div className='headerTextName'>James Wilson </div>
        </Link>
        <Link to='/work' style={{ textDecoration: 'none' }}> 
        <div className='headerTextWork' onClick={() => myRef.current.scrollIntoView()}>Projects</div>
        </Link>
        <Link to='/skills' style={{ textDecoration: 'none' }}> 
        <div className='headerTextSkills'>Skills</div>
        </Link>
        </main>
        
        <FaGithub onClick={()=>{window.open('https://github.com/jamwil123')}} className='gitHubIcon' />
       
        </div>
    )
}

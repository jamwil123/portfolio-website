import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='headerMain'>
        <main className='firstThreeButtons'>
        <Link to='/' style={{ textDecoration: 'none' }}> 
        <div className='headerTextName'>James Wilson</div>
        </Link>
        <Link to='/work' style={{ textDecoration: 'none' }}> 
        <div className='headerTextWork'>Work</div>
        </Link>
        <Link to='/skills' style={{ textDecoration: 'none' }}> 
        <div className='headerTextSkills'>Skills</div>
        </Link>
        </main>
        <main className='hireMeButton'>
        <Link to='/hireme' style={{ textDecoration: 'none' }}> 
        <div className='headerTextHireMe'>Hire Me!</div>
        </Link>
        </main>
        </div>
    )
}

import React from 'react'
import skillsData from '../Data/skills.json'
import {FaCheckCircle, FaMicrochip} from "react-icons/fa"

export default function Skills({skillRef}) {
    return (
        <main className='skillsMain'>
        <div className='skillsTitle'>
        <div ref={skillRef}>
        <FaMicrochip className='skillsChip' />
        <h2 >Skills</h2>
        </div>
        </div>
        <div className='skillsCards'>
            {skillsData.map((skill)=>{
                return (
                    <div className='individualCard'>
                    <div className='checkBox'>
                    <FaCheckCircle />
                    </div>
                    <h2 >{skill}</h2>
                    </div>
                )
            })}
            </div>
        </main>
    )
}

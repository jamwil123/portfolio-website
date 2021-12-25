import React from 'react'
import skillsData from '../Data/skills.json'
import {FaCheckCircle, FaMicrochip} from "react-icons/fa"

export default function Skills() {
    return (
        <main className='skillsMain'>
        <div className='skillsTitle'>
        <div>
        <FaMicrochip className='skillsChip'/>
        <h2 >Skills</h2>
        </div>
        </div>
        <div className='skillsCards'>
            {skillsData.map((skill)=>{
                return (
                    <div className='individualCard'>
                    <FaCheckCircle className='checkBox'/>
                    <h2 >{skill}</h2>
                    </div>
                )
            })}
            </div>
        </main>
    )
}

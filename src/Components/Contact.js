import React from 'react'
import {FaPhoneAlt} from "react-icons/fa"
import ContactCards from './ContactCards'

export default function Contact({contactRef}) {
    return (
        <div>
        <div className = 'title' ref={contactRef}>
        <FaPhoneAlt className='phoneIcon' />
            <h2 className='contactMe'>Contact me</h2>
            </div>
            <ContactCards/>

        </div>
    )
}

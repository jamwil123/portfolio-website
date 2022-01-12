import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import contactDetails from '../Data/contactDetails.json'

export default function ContactCards() {
    return (
        <div>
           {contactDetails.map((contacts)=> {
               if(contacts.iconName === 'FaPhoneAlt') {
                   return (<div className='mainContact'>
                        <FaPhoneAlt className='contactIcon'/>
                        <div className='contactName'>{contacts.name}</div>
                        {contacts.link ? <div className='linkOrContactDetails'>{contacts.slug}</div> : <div>{contacts.contactDetails}</div>}
                    </div>)
               }
           })} 
        </div>
    )
}

import React from 'react'
import { FaPhoneAlt, FaMailBulk, FaGithub, FaLinkedin} from 'react-icons/fa'
import contactDetails from '../Data/contactDetails.json'

export default function ContactCards() {
    return (
        <div className='mainContacts'>
           {contactDetails.map((contacts)=> {
               if(contacts.iconName === 'FaPhoneAlt') {
                   return (<div className='mainContact'>
                        <FaPhoneAlt className='contactIcon'/>
                        <div className='contactName'>{contacts.name}</div>
                        {contacts.link ? <div className='linkOrContactDetails' style={{cursor: 'pointer'}} onClick={()=>{window.open(contacts.contactDetails)}} >{contacts.slug}</div> : <div>{contacts.contactDetails}</div>}
                    </div>)
               }
               if(contacts.iconName === 'FaMailBulk') {
                return (<div className='mainContact'>
                     <FaMailBulk className='contactIcon'/>
                     <div className='contactName'>{contacts.name}</div>
                     {contacts.link ? <div className='linkOrContactDetails' style={{cursor: 'pointer'}} onClick={()=>{window.open(contacts.contactDetails)}}>{contacts.slug} </div> : <div className='linkOrContactDetails'>{contacts.contactDetails}</div>}
                 </div>)
                 
            }

            if(contacts.iconName === 'FaGithub') {
                return (<div className='mainContact'>
                     <FaGithub className='contactIcon'/>
                     <div className='contactName'>{contacts.name}</div>
                     {contacts.link ? <div className='linkOrContactDetails' style={{cursor: 'pointer'}} onClick={()=>{window.open(contacts.contactDetails)}}>{contacts.slug}</div> : <div className='linkOrContactDetails'>{contacts.contactDetails}</div>}
                 </div>)
                 
            }

            if(contacts.iconName === 'FaLinkedin') {
                return (<div className='mainContact'>
                     <FaLinkedin className='contactIcon'/>
                     <div className='contactName'>{contacts.name}</div>
                     {contacts.link ? <div className='linkOrContactDetails' style={{cursor: 'pointer'}} onClick={()=>{window.open(contacts.contactDetails)}}>{contacts.slug}</div> : <div className='linkOrContactDetails'>{contacts.contactDetails}</div>}
                 </div>)
                 
            }
           })} 
        </div>
    )
}

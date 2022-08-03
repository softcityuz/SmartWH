import React from 'react'
import './ContactCard.scss'

interface ContactCardProps {
    children: React.ReactNode
    title: string
    descriptions: string[]
}

function ContactCard({children, title, descriptions}: ContactCardProps) {
  return (
    <div className='contact-card'>
        {children}
        <h2 className='contact-card-title'>{title}</h2>
        {descriptions.map((description, index) => (
            <p key={index} className='contact-card-info'>{description}</p>
        ))}
    </div>
  )
}

export default ContactCard
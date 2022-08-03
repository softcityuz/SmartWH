import React from 'react'
import ContactCard from '../contactcard/ContactCard'
import './WrappedContacts.scss'
import {GiSmartphone} from 'react-icons/gi'
import {VscLocation} from 'react-icons/vsc'
import {AiOutlineMail} from 'react-icons/ai'


function WrappedContacts() {
  return (
    <div className='wrappped-contact'>
        <ContactCard title='Telefon' descriptions={['Admin +99899 099 99 01', 'Admin +99899 099 99 01']}>
            <GiSmartphone className='contact-card-icon' />
        </ContactCard>
        <div className='wrappped-contact-separator'></div>
        <ContactCard title='Lakatsiya' descriptions={['Яккасарайский район, улица Навоий']}>
            <VscLocation className='contact-card-icon' />
        </ContactCard>
        <div className='wrappped-contact-separator'></div>
        <ContactCard title='Pochta' descriptions={['SoftCity@gmail.com', 'SoftCity@gmail.com']}>
            <AiOutlineMail className='contact-card-icon' />
        </ContactCard>
    </div>
  )
}

export default WrappedContacts
import React from 'react'
import './ContactForm.scss'

function ContactForm() {
  return (
        <form className='contact-form'>
            <label>Name</label>
            <input placeholder='Ism' className='contact-form-input' type='text' />
            <label>Email</label>
            <input placeholder='Familiya' className='contact-form-input' type='email' />
            <label>Phone</label>
            <input placeholder='Telefon nomer' className='contact-form-input' type='text' />
            <label>Message</label>
            <textarea placeholder='Izoh'></textarea>
            <button type='submit'>Send</button>
        </form>
  )
}

export default ContactForm
import React from 'react'
import image from '../../assets/images/contact.png'
import ContactForm from '../../components/contact/contactform/ContactForm'
import WrappedContacts from '../../components/contact/wrappedcontacts/WrappedContacts'
import Introduction from '../../components/sharied/introduction/Introduction'

function Contact() {
  return (
    <div>
        <Introduction title='ALOQA XIZMATI' description={`Smart Warehouse - bu foydasiz onlayn to'lovni chakana biznesni yuritish uchun foydali vositaga aylantiradigan dastur. Siz 24/7 onlayn rejimida smartfon yoki noutbukingiz ekranida xodimlar, savdolar, marjalar, inventar balanslari va boshqa ko'p narsalarni nazorat qilasiz.`} image = {image} />
        <WrappedContacts />
        <ContactForm />
    </div>
  )
}

export default Contact
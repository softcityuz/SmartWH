import React from 'react'
import Introduction from '../../components/sharied/introduction/Introduction'
import './Opportunities.scss'
import image from '../../assets/images/opportunities.png'
import InfoCard from '../../components/opportunities/infocard/InfoCard'
import VedioCarousel from '../../components/opportunities/videocarousel/VedioCarousel'
function Opportunities() {
  return (
    <div className='opportunities'>
        <Introduction image={image} 
        title='Imkoniyatlar'
        description={`Smart Warehouse - bu foydasiz onlayn to'lovni chakana biznesni yuritish uchun foydali vositaga aylantiradigan dastur. Siz 24/7 onlayn rejimida smartfon yoki noutbukingiz ekranida xodimlar, savdolar, marjalar, inventar balanslari va boshqa ko'p narsalarni nazorat qilasiz.`}
        />
        <InfoCard />
        <VedioCarousel />
        <InfoCard isReverse/>
        <VedioCarousel />
        <InfoCard />
        <VedioCarousel />

    </div>
  )
}

export default Opportunities
import React from 'react'
import './InfoCard.scss'
import {GiPlainSquare} from 'react-icons/gi'



function InfoCard({isReverse}:{isReverse?: boolean}) {
  return (
    <div className='info-card' style={{
        flexDirection: isReverse ? 'row-reverse' : 'row',
    }}>
        <div className='info-card-description' style={{
            paddingLeft: isReverse ? '87rem' : '0',
        }}>
            <h1>Xodimlarni online nazorat qilish va smartfon yoki shaxsiy kompyuterda barcha ko`rsatkichlar </h1>

            <div>
                <GiPlainSquare className='item-icon' />
                <p>Ombor, sotish, qaytarish, narxlar va mijozlar nuqtai nazaridan barcha xodimlarning barcha operatsiyalari to'g'risidagi ma'lumotlar;</p>
            </div>
            <div>
                <GiPlainSquare className='item-icon' />
                <p>Kassirlar ishini nazorat qilish, pul mablag'larini hisobga olish va inkassatsiya qilish;</p>
            </div>
            <div>
                <GiPlainSquare className='item-icon' />
                <p>Chakana savdo tarmog'ining har bir savdo nuqtasining alohida va jami butun tarmoq (yoki franchayzing) bo'yicha ishlashi to'g'risidagi ma'lumotlar.</p>
            </div>
            <h1>Xodimlarni online nazorat qilish va smartfon yoki shaxsiy kompyuterda barcha ko`rsatkichlar </h1>

            <div>
                <GiPlainSquare className='item-icon' />
                <p>Grafik yoki jadval ko'rinishidagi har qanday davr uchun savdo dinamikasi, o'rtacha chek, markirovka, aktsiyalarning qoldiqlari to'g'risidagi ma'lumotlar;</p>
            </div>
            <div>
                <GiPlainSquare className='item-icon' />
                <p>Har qanday bo'limda tahlillar (savdo nuqtalari, xodimlar, tovarlar, mijozlar, etkazib beruvchilar va boshqalar bo'yicha);</p>
            </div>
            <div>
                <GiPlainSquare className='item-icon' />
                <p>Sof foyda, pul oqimi va xarajatlar to'g'risidagi ma'lumotlar;</p>
            </div>
        </div>
        <div className='info-card-title'>
            <h1>Nazorat va tahlil</h1>
            <img src={require('../../../assets/images/diagram-1.png')} alt='info-card-image' />
            <div className='absolute'></div>
        </div>
    </div>
  )
}

export default InfoCard
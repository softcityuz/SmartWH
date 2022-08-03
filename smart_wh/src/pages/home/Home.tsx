import React from 'react'
import ContentItem from '../../components/Home/contentItem/ContentItem'
import Mobile from '../../components/Home/mobile/Mobile'
import SolutionsItem from '../../components/Home/solutionsItem/SolutionsItem'
import SwitchSelector from '../../components/Home/SwitchSelector/SwitchSelector'
import UsersComment from '../../components/Home/userscomment/UsersComment'
import Introduction from '../../components/sharied/introduction/Introduction'
import Title from '../../components/sharied/title/Title'
import './Home.scss'
import image from '../../assets/images/home.png'

function Home() {
  return (
    <div
    className='home'
    >
        <Introduction image={image} />
        <main className='content'>
            <Title title='Imkoniyatlar' />
            <div className='opportunities-content'>
                <SwitchSelector />
                <div className='content-items'>
                    <ContentItem />
                    <ContentItem />
                    <ContentItem />
                    <ContentItem />
                    <ContentItem />
                    <ContentItem />
                </div>
            </div>
        </main>
        <main  className='dark'>
            <Title title='Avtomatlashtirish uchun yechimlar' isLight />
            <div className='solutions-items'>
                <SolutionsItem />
                <SolutionsItem />
                <SolutionsItem />
                <SolutionsItem />
            </div>
            <button>Batafsil</button>
        </main>
        <main>
            <Title title='Smart Warehouse da qanday boshlash kerak' />
            <div className='about-items'>
                <div className='div1'>
                    <div className='about-item '>
                        <p>01</p>
                    </div>
                    <p>Изучение вашего сайта</p>
                </div>
                <img src={require('../../assets/images/Vector-13.webp')} alt='home' className='div2' />
                <div className='div3'>
                    <div className='about-item '>
                        <p>01</p>
                    </div>
                    <p>Изучение вашего сайта</p>
                </div>
                <img className='div4' src={require('../../assets/images/Vector-13.webp')} alt='home' />
                <div className='div5'>
                    <div className='about-item '>
                        <p>01</p>
                    </div>
                    <p>Изучение вашего сайта</p>
                </div>

                <img className='div6' src={require('../../assets/images/Vector-15.webp')} alt='home' />
                <div className='div7'>
                    <div className='about-item '>
                        <p>01</p>
                    </div>
                    <p>Изучение вашего сайта</p>
                </div>
                <img className='div8' src={require('../../assets/images/Vector-13.webp')} alt='home' />
                <div className='div9'>
                    <div className='about-item '>
                        <p>01</p>
                    </div>
                    <p>Изучение вашего сайта</p>
                </div>
                 <img className='div10' src={require('../../assets/images/Vector-13.webp')} alt='home' />
                <div className='div11'>
                    <div className='about-item '>
                        <p>01</p>
                    </div>
                    <p>Изучение вашего сайта</p>
                </div>
            </div>
        </main>
        
        <Mobile />
        <UsersComment />
    </div>
  )
}

export default Home
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../sharied/title/Title'
import './UsersComment.scss'
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
function UsersComment() {
   const pagination = {
    clickable: true,
    // dynamicBullets: true,
    renderBullet: function (index:number, className:string) {
      return '<div class="' + className + '">' + "</div>";
    },
  };

  const UserCard = ({isActive}:{isActive: boolean}) => {
    return(
            <div className='user-card'
            style={{
                // scale: isActive ? 1.8 : 1,
                transform: isActive ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.5s',
            }}
            >
                <div className='user-card-img'>
                    <img src={require('../../../assets/images/User.png')} alt='user-card' />
                </div>
                <div className='user-card-content'>
                    <h2>Иванов Иван Иванович</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas blandit nunc urna elit vel pharetra sed. Sollicitudin donec pretium enim eget.</p>
                </div>
            </div>
    )
    }
  return (
    <main 
    style={{
        paddingRight: '0px',
        paddingLeft: '0px',
    }}
    >
        <div style={{
            paddingLeft: '87rem',
        }}>
           <Title title='Foydalanuvchi sharhlari' />
        </div>
        
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="my-swiper"
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        
      >
        <SwiperSlide>
            {({isActive}) => (
                <UserCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <UserCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <UserCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <UserCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <UserCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <UserCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <UserCard isActive = {isActive} />
            )}
        </SwiperSlide>

        
        
      </Swiper>
    </main>
  )
}

export default UsersComment
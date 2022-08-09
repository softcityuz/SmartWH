import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './VedioCarousel.scss'
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import VideoCard from '../videocard/VideoCard';
function VedioCarousel
() {
   const pagination = {
    clickable: true,
    // dynamicBullets: true,
    renderBullet: function (index:number, className:string) {
    //eslint-disable-next-line no-useless-concat
      return '<div class="' + className + '">' + "</div>";
    },
  };
  return (
    <main 
    style={{
        paddingRight: '0px',
        paddingLeft: '0px',
        // paddingTop: '40rem',
        paddingBottom: '80rem',
    }}
    >
        <div style={{
            paddingLeft: '87rem',
        }}>
        </div>
        
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        
      >
        <SwiperSlide>
            {({isActive}) => (
                <VideoCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <VideoCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <VideoCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <VideoCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <VideoCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <VideoCard isActive = {isActive} />
            )}
        </SwiperSlide>
        <SwiperSlide>
            {({isActive}) => (
                <VideoCard isActive = {isActive} />
            )}
        </SwiperSlide>
      </Swiper>
    </main>
  )
}

export default VedioCarousel

import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import VideoCard from '../../opportunities/videocard/VideoCard'
import './CommentCard.scss'
import {BiCommentDetail, BiLike} from 'react-icons/bi'
import Avatar from './avatar/Avatar'

interface ICommentCardProps {
    src?: string
    isReverse?: boolean
}

function CommentCard({isReverse} : ICommentCardProps) {
  return (
    <div className='comment-card' style={{
        flexDirection: isReverse ? 'row-reverse' : 'row'
    }} >
        <div className='comment-card-description'>
            <p>Massa malesuada mus phasellus fermentum pulvinar massa fermentum, ullamcorper risus. Laoreet gravida ornare cursus nunc lorem commodo. Adipiscing sagittis, ultrices vel feugiat.
                <br />
                    <br />
            Massa malesuada mus phasellus fermentum pulvinar massa fermentum, ullamcorper risus. Laoreet gravida ornare cursus nunc lorem commodo. Adipiscing sagittis, ultrices vel feugiat.</p>
            <div className={isReverse?'absolute-reverse':'absolute'}></div>
            
            <div className='swiper-wrapper'>
                <Swiper 
                slidesPerView={3}
                spaceBetween={5}
                centeredSlides={true}
                className='comment-card-swiper'
                >
                    <SwiperSlide>
                        {({isActive}) => (
                            <VideoCard style={{
                                width: '286rem',
                            }} isActive = {isActive} />
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({isActive}) => (
                            <VideoCard style={{
                                width: '286rem',
                            }} isActive = {isActive} />
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({isActive}) => (
                            <VideoCard style={{
                                width: '286rem',
                            }} isActive = {isActive} />
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({isActive}) => (
                            <VideoCard style={{
                                width: '286rem',
                            }} isActive = {isActive} />
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({isActive}) => (
                            <VideoCard style={{
                                width: '286rem',
                            }} isActive = {isActive} />
                        )}
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div className='comment-card-title'>
            <div>
                <h3 style={{
                    textAlign:isReverse? 'left': 'right'
                }}>Mardonov Bekzod</h3>
                <p style={{
                    textAlign:isReverse? 'left': 'right'
                }}>2022.03.25</p>       
            </div>
            <div className='row'>
                <div>
                    <BiCommentDetail className='icon' />
                    <Avatar zIndex={3} />
                    <Avatar zIndex={2} />
                    <Avatar zIndex={1} />
                </div>
                <div>
                    <BiLike className='icon' />
                    <b>112</b>
                </div>
            </div>
        </div>
        <img style={
            isReverse ? {left: '470rem'} : {right: '470rem'}
        } src={require('../../../assets/images/User.png')} alt="" className='comment-card-img'/>
    </div>
  )
}

export default CommentCard
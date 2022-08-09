import React from 'react'
import './NewsCard.scss'

interface NewsCardProps {
    isReverse?: boolean
}

function NewsCard({isReverse} : NewsCardProps) {
  return (
    <div className='news-card' style={{
        flexDirection: isReverse ? 'row-reverse' : 'row'
    }}>
        <div className={`news-card-image ${isReverse?'image-reverse':''}`}>
            <img src={require('../../../assets/images/news-img.png')} alt='news-image1' />
        </div>
        <div className={`news-card-content ${isReverse?'content-reverse':''}`}>
            <div className='news-card-title'>
                <div className='line' />
                <h1>Ramazon muborak bo‘lsin</h1>
                <div className='line' />
            </div>
            <p className='news-card-text'>
                Massa malesuada mus phasellus fermentum pulvinar massa fermentum, ullamcorper risus. Laoreet gravida ornare cursus nunc lorem commodo. Adipiscing sagittis, ultrices vel feugiat at. Gravida risus amet pulvinar elementum, quis maecenas duis facilisis. Morbi pharetra cursus a nullam etiam sed ac. Malesuada integer in tincidunt id nibh. Arcu, sodales feugiat morbi euismod elit tellus ac aliquam ultricies.
            </p>
        </div>
    </div>
  )
}

export default NewsCard
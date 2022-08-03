import React from 'react'
import Introduction from '../../components/sharied/introduction/Introduction'
import image from '../../assets/images/home.png'
import NewsCard from '../../components/news/newscard/NewsCard'

function News() {
  return (
    <div>
        <Introduction image = {image} />
        <NewsCard />
        <NewsCard isReverse />
        <NewsCard />
        <NewsCard isReverse />
        <NewsCard />
        <NewsCard isReverse />
        <NewsCard />
        <NewsCard isReverse />
    </div>
  )
}

export default News
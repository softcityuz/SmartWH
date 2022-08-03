import React from 'react'
import Introduction from '../../components/sharied/introduction/Introduction'
import image from '../../assets/images/comments-bg.png'
import './Comments.scss'
import CommentCard from '../../components/comments/commentscard/CommentCard'

function Comments() {
  return (
    <div className='comments'>
        <Introduction 
        image={image}
        title='SHARHLAR'
        description={`Smart Warehouse - bu foydasiz onlayn to'lovni chakana biznesni yuritish uchun foydali vositaga aylantiradigan dastur. Siz 24/7 onlayn rejimida smartfon yoki noutbukingiz ekranida xodimlar, savdolar, marjalar, inventar balanslari va boshqa ko'p narsalarni nazorat qilasiz.`}
         />
         <CommentCard />
         <CommentCard isReverse />
         <CommentCard />
         <CommentCard isReverse />
         <CommentCard />
         <CommentCard isReverse />
         
    </div>
  )
}

export default Comments
import React from 'react'
import './SolutionsItem.scss'

function SolutionsItem() {
  return (
    <div className='solutions-item'>
        <img className='item-image' src={require('../../../assets/images/solutionsImage.png')} alt='solutions-item' />
        <div className='item-content'>
            <h2>Kiyim do‘konini avtomatlashtirish</h2>
            <p>Tovarlar va guruhlar bo’yicha belgilash , eng yaxshi kassirlar, asosiy mijozlar.</p>
            <button className='item-button'>Batafsil</button>
        </div>
    </div>
  )
}

export default SolutionsItem
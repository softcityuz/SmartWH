import React from 'react'
import './ContentItem.scss'

function ContentItem() {
  return (
    <fieldset className='content-item'>
        <legend className='content-item-title'>
           <b></b>Analitika
        </legend>
        <div className='content-item-content'>
            <img    className='content-item-img' src={require('../../../assets/icons/icon1.webp')} alt='analitika' />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    </fieldset>
  )
}

export default ContentItem
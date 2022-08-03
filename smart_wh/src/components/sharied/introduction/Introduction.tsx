import React from 'react'
import './Introduction.scss'

interface IProps {
    title?: string
    description?: string
    image: string
}


function Introduction({title, description, image}: IProps) {
  return (
    <main
    style={{
        backgroundImage: `url(${image})`,
    }}
    className='introduction'>
        <h1>{title}</h1>
        <p>{description}</p>
    </main>
  )
}

export default Introduction
import React from 'react'
import './Title.scss'

interface TitleProps {
    title: string
    isLight?: boolean
}

function Title( { title, isLight }: TitleProps ) {
  return (
    <div className={isLight?'container-light':'container'}>
        <h1 className='title'>
            {title}
        </h1>
    </div>
  )
}

export default Title
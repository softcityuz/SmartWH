import React from 'react'
import './Avatar.scss'
interface IAvatarProps {
    src?: string
    alt?: string
    zIndex: number
}

function Avatar({zIndex}: IAvatarProps) {
  return (
    <img style={{
        zIndex: zIndex
    }} className='avatar' src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='avatar' />
  )
}

export default Avatar
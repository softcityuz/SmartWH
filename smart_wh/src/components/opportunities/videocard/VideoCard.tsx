import React from 'react'
import './VideoCard.scss'

function VideoCard({isActive, style}:{isActive: boolean, style?: React.CSSProperties}) {
  return (
    <video className={`video-card ${isActive ? 'active' : ''}`} style={style} controls  loop>
        <source src={require('./video.mp4')} type="video/mp4" className='video-card'/>
            Your browser does not support the video tag.
    </video>
  )
}

export default VideoCard
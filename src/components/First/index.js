import React from 'react'
import './index.scss'
import myVideo from '../../assets/video/intro.mp4'

function First() {
  return (
    <div className="first-content">
      <div className="video-wrapper">
        <video autoPlay muted loop id="background-video">
          <source src={myVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  )
}

export default First

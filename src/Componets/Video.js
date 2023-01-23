import React from 'react'
import Yoga from './yoga.mp4'


const Video = () => {
  return (
    <div>
        
        <video  src={Yoga} autoPlay loop muted width='100%' height='75%'/>
        
    </div>
  )
}

export default Video
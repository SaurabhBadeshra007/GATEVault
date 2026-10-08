import React, { useRef } from 'react'
import './VideoPlayer.css'
import About_video from '../../media/About.mp4'

const VideoPlayer = ({playState,setPlayState}) => {
    const player = useRef(null)
    const closePlayer = (e)=>{
        if (e.target === player.current) {
            setPlayState(false)
            
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={About_video} autoPlay controls muted></video>
      
    </div>
  )
}


export default VideoPlayer

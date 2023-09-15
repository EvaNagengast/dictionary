import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Audioplayer.css";
import mouthopen from "./media/mouthopen.png";
import mouthclosed from "./media/mouthclosed.png";
export default function Audioplayer(props) {
if(props.link){  return (
    <div className="Audioplayer ">
      <AudioPlayer
        src={props.link}
        autoPlay={false}
        showJumpControls={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        layout="horizontal-reverse"
        defaultCurrentTime={[]}
        defaultDuration={[]}
    
        customIcons={{
          play: <img src={mouthclosed} alt="Play" />,
          pause: <img src={mouthopen} alt="Play" />,
        }}
        onPlay={(e) => console.log("onPlay")}
      />

          </div>
  );} else {return("")}

}

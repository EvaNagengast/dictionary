import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Audioplayer.css";
export default function Audioplayer(props) {
  return (
    <div className="Audioplayer">
      audiooooooooo {props.link}
      <ReactAudioPlayer src={props.link} controls />
    </div>
  );
}

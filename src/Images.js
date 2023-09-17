import React from "react";
import "./Images.css";

export default function Images(props) {
  console.log(props);
  if (props.image) {
    return (
      <div className="Images m-5 p-2">
        {props.image.map(function (pic, index) {
          return <img src={pic.src.small} className="m-2 img-fluid" key={index}></img>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

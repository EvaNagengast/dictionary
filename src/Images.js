import React from "react";
import "./Images.css";

export default function Images(props) {
  console.log(props);
  if (props.image) {
    return (
      <div className="Images m-1 m-sm-2 p-2">
        {props.image.map(function (pic, index) {
          return (
            <img
              src={pic.src.small}
              className="m-2"
              key={index}
              alt="result of searchword"
            ></img>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";
import "./Results.css";

export default function Results(props) {
console.log(props)
  if (props.word === null) {
    return null;
  } else {
    return <div className="Results">{props.word.word}</div>;
  }
}

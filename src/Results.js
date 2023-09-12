import React from "react";
import Meaningbox from "./Meaningbox";
import "./Results.css";

export default function Results(props) {
  if (props.word === null) {
    return null;
  } else {
    return (
      <div className="Results">
        {" "}
        <p>{props.word.word}</p>
        {props.word.meanings.map(function (meaningscatalogue, index) {
          return (
            <div className="wordmeaning" key={index}>
              <Meaningbox allMeanings={meaningscatalogue} />
            </div>
          );
        })}
      </div>
    );
  }
}

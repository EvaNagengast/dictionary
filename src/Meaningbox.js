import React from "react";
import "./Meaningbox.css";
export default function Meaningbox(props) {
  console.log(props.allMeanings);
  return (
    <div className="Meaningbox">
      <h3>{props.allMeanings.partOfSpeech}</h3>

      {props.allMeanings.definitions.map(function (definitions, index) {
        console.log(definitions);
        return (
          <div key={index}>
            <p>{definitions.definition}</p>
            <p><small><em>{definitions.example}</em></small></p>
          </div>
        );
      })}
    </div>
  );
}

// props.definitions[0].definition;

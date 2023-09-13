import React from "react";

import "./Meaningbox.css";

export default function Meaningbox(props) {
//   console.log(props.allMeanings);
  return (
    <div className="Meaningbox">
      <h3>{props.allMeanings.partOfSpeech}</h3>

      {props.allMeanings.definition}
    </div>
  );
}

// props.definitions[0].definition;

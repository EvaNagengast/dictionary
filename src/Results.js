import React from "react";
import Synonymbox from "./Synonymbox";
import "./Results.css";

export default function Results(props) {

  if (props.wordinfo && props.wordinfo.word) {
    return (
      <div className="Results">
        <div className="wordmeaning">
          {props.wordinfo.meanings.map(function (meaningscatalogue, index) {
          
            return (
              <div key={index} className="Resultbox my-4 p-2">
                <h3 className="px-4">{meaningscatalogue.partOfSpeech}</h3>
                <p>{meaningscatalogue.definition}</p>
                <Synonymbox synonyms={meaningscatalogue} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

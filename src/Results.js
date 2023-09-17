import React from "react";
import Synonymbox from "./Synonymbox";
import "./Results.css";

export default function Results(props) {
  if (props.wordinfo && props.wordinfo.word) {
    return (
      <div className="Results">
        <div className="wordmeaning ">
          {props.wordinfo.meanings.map(function (meaningscatalogue, index) {
            return (
              <div key={index} className="Resultbox my-3 my-sm-4 p-1 p-sm-2">
                <h3 className="px-2 px-sm-3 py-0 p-sm-1 m-0">
                  {meaningscatalogue.partOfSpeech}
                </h3>
                <p className="my-2">{meaningscatalogue.definition}</p>
                <p className="p-0 m-0 m-sm-1 m-md-2">
                  <Synonymbox synonyms={meaningscatalogue} />
                </p>
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

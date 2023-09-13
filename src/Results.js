import React from "react";
import Meaningbox from "./Meaningbox";
import Synonymbox from "./Synonymbox";
import "./Results.css";

export default function Results(props) {
  // console.log(props.wordinfo);
  if (props.wordinfo && props.wordinfo.word) {
    return (
      <div className="Results">
        <div className="wordmeaning">
          {props.wordinfo.meanings.map(function (meaningscatalogue, index) {
            return (
              <div key={index}>
                <Meaningbox allMeanings={meaningscatalogue} />
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

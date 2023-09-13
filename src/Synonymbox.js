import React from "react";
import "./Synonymbox.css";
export default function Synonymbox(props) {

    if (props.synonyms.synonyms) {
      return (



        <div className="Synonymbox">
          {props.synonyms.synonyms.map(function (synonyms, index) {
            return (
              <span key={index}>
                <strong>{synonyms}, </strong>
              </span>
            );
          })}
        </div>
      );





      
    } else {
      return null;
    }
}

import React, { useState, useEffect } from "react";
import Audioplayer from "./Audioplayer";
import axios from "axios";


export default function Phonetics(props) {
  let [phoneticWord, setPhoneticWord] = useState("fingers");
  let [loaded, setLoaded] = useState(false);
  let word = props.wordinfo.word;

  useEffect(() => {
    function handleApi(props) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props}`;
      axios.get(apiUrl).then(handleResponse);
    }

    if (word) {
      handleApi(word);
    }
  }, [word]);

  function handleResponse(response) {
    setPhoneticWord(response);
    setLoaded(true);
  }

  if (loaded && phoneticWord) {
    const displayedTexts = [];
    return (
      <div className="Phonetics">
        {phoneticWord.data.map(function (array, index) {
          return (
            <div key={index}>
              {array.phonetics.map(function (secondarray, index) {
                if (!displayedTexts.includes(secondarray.text)) {
                  displayedTexts.push(secondarray.text);
                  return (
                    <div key={index + 20}>
                      <Audioplayer
                        link={secondarray.audio}
                        text={secondarray.text}
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

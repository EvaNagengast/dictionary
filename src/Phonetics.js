import React, { useState, useEffect } from "react";
import Audioplayer from "./Audioplayer";
import axios from "axios";
import "./Phonetics.css";

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
      <div>
        {phoneticWord.data.map(function (array, index) {
          return (
            <div key={index}>
              {array.phonetics.map(function (secondarray, index) {
                if (!displayedTexts.includes(secondarray.text)) {
                  displayedTexts.push(secondarray.text);
                  return (
                    <div key={index + 20}>
                      {/* <div>{secondarray.audio}</div>{" "} */}
                      <div>{secondarray.text}</div>
                      <Audioplayer link={secondarray.audio} />
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
// return("summer")
// let [phoneticsaudio, setPhoneticsAudio] =useState("")
// <div className="PhoneticAudio"> audiotag src={phoneticsaudio} </div>

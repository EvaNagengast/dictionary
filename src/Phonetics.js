import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Phonetics.css";
export default function Phonetics(props) {
  let [phoneticWord, setPhoneticWord] = useState("fingers");
  let [loaded, setLoaded] = useState(false);
  let word = props.wordinfo.word;
  //
  useEffect(() => {
    function handleApi(props) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props}`;
      axios.get(apiUrl).then(handleResponse);
    }

    if (word) {
      handleApi(word);
    }
  }, [word]);

  //

  function handleResponse(response) {
    setPhoneticWord(response);
    setLoaded(true);
  }

  if (loaded && phoneticWord) {
    // Check if loaded and phoneticWord is truthy
    return (
      <div>
        {phoneticWord.data.map(function (array, index) {
          return (
            <div key={index}>
              {array.phonetics.map(function (secondarray, index) {console.log(secondarray)
                return (
                  <div>
                    <div key={index}>{secondarray.text}</div>
                    <div key={index+9}>{secondarray.audio}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }

  //    console.log("bird");
} // return("summer")
// let [phoneticsaudio, setPhoneticsAudio] =useState("")
// <div className="PhoneticAudio"> audiotag src={phoneticsaudio} </div>

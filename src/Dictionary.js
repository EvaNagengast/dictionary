import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [searchItem, setSearchItem] = useState("");
  let [wordInfo, setWordInfo] = useState("");

  function handleResponse(response) {
    setWordInfo(response.data);
  }
  function handleInput(input) {
    setSearchItem(input.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // documenation: https://www.shecodes.io/learn/apis/dictionary/
    let apiKey = `ef85b2a56a7f4e1tc1e01fdofd0bbc3b`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchItem}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  //   console.log(searchItem);
//   console.log(wordInfo);
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus="on"
          autoComplete="none"
          onChange={handleInput}
        ></input>
      </form>
      <h2>{wordInfo.word}</h2>
      <Results wordinfo={wordInfo} />
    </div>
  );
}

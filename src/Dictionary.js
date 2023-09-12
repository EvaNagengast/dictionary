import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [searchItem, setSearchItem] = useState("");
    let [word, setWord] = useState(null);

  function handleResponse(response) {
    setWord(response.data[0]);
  }
  function handleInput(input) {
    setSearchItem (input.target.value);

  }

  function handleSubmit(event) {
    event.preventDefault();
   // documenation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchItem}`;
    axios.get(apiUrl).then(handleResponse);
  }

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
      <Results word={word}/>
     
    </div>
  );
}

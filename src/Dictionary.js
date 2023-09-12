import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [searchItem, setSearchItem] = useState("");

  function handleResponse(response) {
    console.log(response.data[0].phonetic);
  }
  function handleInput(input) {
    let inputWord = input.target.value;

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchItem("hello");
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
      <p>{searchItem}</p>
    </div>
  );
}

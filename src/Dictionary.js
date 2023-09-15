import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Phonetics from "./Phonetics";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchItem, setSearchItem] = useState("word");
  let [wordInfo, setWordInfo] = useState("");
  let [searched, setSearched] = useState(false);

  function handleResponse(response) {
    setWordInfo(response.data);
  }
  function handleInput(input) {
    setSearchItem(input.target.value);
  }
  function search() {
    getApi();
    setSearched(true);
  }
  function getApi() {
    // documenation: https://www.shecodes.io/learn/apis/dictionary/
    let apiKey = `68c9ef64a34aca6bcd501b08f5caotf8`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchItem}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getApi();
  }
  //
  if (searched) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit} className="mt-3 text-center">
          <label className="d-block m-3">
            what word are you looking for today?
          </label>
          <input
            type="text"
            autoFocus="on"
            autoComplete="none"
            onChange={handleInput}
            placeholder="word"
          />
          <input type="submit" value="go" className="inputButton mx-3" />
        </form>
        <h2>{wordInfo.word}</h2>
        <Phonetics wordinfo={wordInfo} />
        <Results wordinfo={wordInfo} />
      </div>
    );
  } else {
    search();
  }
}

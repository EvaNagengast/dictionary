import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Phonetics from "./Phonetics";
import Images from "./Images";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchItem, setSearchItem] = useState("word");
  let [wordInfo, setWordInfo] = useState("");
  let [searched, setSearched] = useState(false);
  let [images, setImages] = useState(null);
  let [error, setError] = useState(false);

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      setError(true);
    } else {
      setError(false);
      setWordInfo(response.data);
    }
  }
  function handleInput(input) {
    setSearchItem(input.target.value);
  }
  function search() {
    getApi();
    setSearched(true);
  }
  function handleImageResponse(response) {
    setImages(response.data.photos);
  }
  function getApi() {
    // documenation: https://www.shecodes.io/learn/apis/dictionary/
    let apiKey = `68c9ef64a34aca6bcd501b08f5caotf8`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchItem}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    // documentation:
    let imageApiKey = `E0HKlVMVFcl9f4macR9LermS6hSsfevqc8eoPtW2g7KSVO3TfuyLFIYu`;
    let imageApiUrl = `https://api.pexels.com/v1/search?query=${searchItem}&per_page=3`;
    let headers = { Authorization: `${imageApiKey}` };
    axios.get(imageApiUrl, { headers: headers }).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getApi();
  }
  //
  if (searched && !error) {
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
        <Images image={images} />
      </div>
    );
  } else {
    if (searched && error) {
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
          <h2 className="error mt-3">your word wasn't found - try a different word</h2>
        </div>
      );
    } else {
      search();
    }
  }
}

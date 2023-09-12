import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchItem, setSearchItem] = useState("");

  function handleInput(input) {
    console.log(input.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchItem("hello")
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

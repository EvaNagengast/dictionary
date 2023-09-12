import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dictionairy</h1>
        <p>description</p>{" "}
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer>
        coded with ? by <a href="">Eva Nagengast</a>, open sourced on
        <a>GitHub</a>
      </footer>
    </div>
  );
}

export default App;

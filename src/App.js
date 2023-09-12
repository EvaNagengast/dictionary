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
        <Dictionary />
      </main>
      <footer>
        coded with ? by{" "}
        <a
          href="https://linkedin.com/in/eva-nagengast-9b78b220a"
          target="_blank"
          rel="noreferrer"
        >
          Eva Nagengast
        </a>
        , open sourced on
        <a
          href="https://github.com/EvaNagengast/dictionary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;

import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header>
        <div className="headercontent">
          <h1>Dictionary</h1>
          <p>description</p>
        </div>
      </header>
      <main className="container">
        <Dictionary />
      </main>
      <footer>
        <div className="footercontent">
          coded with love by{" "}
          <a
            href="https://linkedin.com/in/eva-nagengast-9b78b220a"
            target="_blank"
            rel="noreferrer"
          >
            Eva Nagengast
          </a>
          , open sourced on{" "}
          <a
            href="https://github.com/EvaNagengast/dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="p-4 text-center">
        <div className="headercontent p-4">
          <h1>Dictionary</h1>
        </div>
      </header>
      <main className="container">
        <Dictionary />
      </main>
      <footer className="p-3">
        <div className="footercontent p-1">
          coded with love by{" "}
          <a
            href="https://linkedin.com/in/eva-nagengast-9b78b220a"
            target="_blank"
            rel="noreferrer"
          >
            Eva Nagengast
          </a>{" "}
          open sourced on{" "}
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

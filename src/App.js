import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="p-4 text-center">
        <div className="headercontent p-3 p-sm-4">
          <h1>Dictionary</h1>
        </div>
      </header>
      <main className="container p-0">
        <Dictionary />
      </main>
      <footer className="p-2 p-sm-3">
        <div className="footercontent p-1 text-center">
          coded with love by{" "}
          <a
            href="https://linkedin.com/in/eva-nagengast-9b78b220a"
            target="_blank"
            rel="noreferrer"
          >
            Eva Nagengast
          </a>{" "}
          <br className="d-block d-sm-none" />
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

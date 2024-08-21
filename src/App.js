//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here's a random quote to brighten your day</h1>
      </header>
      <div className="main">
        <div id="wrapper" className="App-container">
          <div id="quote-box" className="quote-box">
            <div class="quote-text">
              <span id="text"></span>
            </div>
            <div class="quote-author">
              <span id="author"></span>
            </div>
            <div className="share-button">
              <a class="button"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

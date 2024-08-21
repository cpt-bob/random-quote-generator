//import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here is a random quote to brighten your day</h1>
      </header>
      <div className="main">
        <div id="wrapper" className="App-container">
          <div id="quote-box" className="quote-box">
            <div class="quote-text">
              <FontAwesomeIcon className="icon-link" icon={faQuoteLeft} />
              <span id="text">Well done is better than well said</span>
              <FontAwesomeIcon className="icon-link" icon={faQuoteRight} />
            </div>
            <div class="quote-author">
              <span id="author">- Benjamin Franklin</span>
            </div>
            <div className="buttons">
              <div id="tweet-quote" className="share-button">
                <a href="https://twitter.com/intent/tweet">
                  <FontAwesomeIcon
                    className="xButton"
                    icon={faSquareXTwitter}
                    size="2x"
                    color="black"
                  />
                </a>
              </div>
              <button className="button" id="new-quote">
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

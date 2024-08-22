//import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import quotesData from "./data/quotes.json";

function App() {
  const [quote, setquote] = useState(getRandomQuote());

  function getRandomQuote() {
    const RandomNumber = Math.floor(Math.random() * quotesData.length);
    return quotesData[RandomNumber];
  }

  function handleNewQuote() {
    setquote(getRandomQuote());
  }

  const xShareText = `"${quote.quote}" - ${quote.author}`;
  const encodedXText = encodeURIComponent(xShareText);

  useEffect(() => {
    window.quote = quote;
  }, [quote]);

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
              <span id="text">{quote.quote}</span>
              <FontAwesomeIcon className="icon-link" icon={faQuoteRight} />
            </div>
            <div class="quote-author">
              <span id="author">- {quote.author}</span>
            </div>
            <div className="buttons">
              <div className="share-button">
                <a
                  id="tweet-quote"
                  href={`https//twitter.com/intent/tweet?text=${encodedXText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="xButton"
                    icon={faSquareXTwitter}
                    size="2x"
                    color="black"
                  />
                </a>
              </div>
              <button
                className="button"
                id="new-quote"
                onClick={handleNewQuote}
              >
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

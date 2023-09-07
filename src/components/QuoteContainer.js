import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function QuoteContainer({ quotes }) {
  const [randomQuote, setRandomQuote] = useState({});
  const [randomColor, setRandomColor] = useState("#FFFFFF");

  const myColors = [
    "#3498db",
    "#2ecc71",
    "#9b59b6",
    "#e74c3c",
    "#f1c40f",
    "#800080",
    "#FF00FF",
    "#000080",
    "#0000FF",
    "#008080",
    "#00FFFF",
    "#008000",
    "#00FF00",
    "#808000",
    "#FFFF00",
    "#800000",
    "#FF0000",
    "#808080",
    "#C0C0C0",
  ];

  const changeColors = () => {
    const randomNum = Math.floor(Math.random() * myColors.length);
    const newRandomColor = myColors[randomNum];
    setRandomColor(newRandomColor);
  };

  const getNewQuote = () => {
    const newRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    changeColors();

    if (randomQuote.id !== newRandomQuote.id) {
      setRandomQuote((prevRandomQuote) => {
        return {
          ...prevRandomQuote,
          text: newRandomQuote.text,
          author: newRandomQuote.author,
          id: newRandomQuote.id,
        };
      });
    } else {
      getNewQuote();
    }
  };

  // Apply the background color to the body element
  document.body.style.backgroundColor = randomColor;

  return (
    <React.Fragment>
      <div className="quote-container">
        <div className="quote">
          <span
            id="quoteText"
            className="fa fa-quote-left randomTxtColor"
            aria-hidden="true"
          ></span>
          <q> {randomQuote.text} </q>
          <span
            id="quoteAuthor"
            className="fa fa-quote-right randomTxtColor"
            aria-hidden="true"
          ></span>
        </div>
        <div className="source">&mdash; {randomQuote.author}</div>
        <div id="buttonBox">
          <a
            className="twitter"
            href={`https://twitter.com/intent/tweet?text="${randomQuote.quote}" — ${randomQuote.author}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />{" "}
          </a>
          <button
            id="new-quote"
            className="cta randomBgColor"
            onClick={() => getNewQuote()}
          >
            New Quote
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default QuoteContainer;

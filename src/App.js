import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import QuoteContainer from "./components/QuoteContainer";
import "./App.css";
// import quotesData from "./quotes.json";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  function fetchQuotes() {
    fetch("./quotes.json") // Replace 'local-quotes.json' with the actual path to your local JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
        setLoadingStatus(false);
      })
      .catch((error) => {
        console.error(error);
        setQuotes([]);
        setLoadingStatus(false);
      });
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        {loadingStatus && quotes.length === 0 ? (
          <LoadingSpinner />
        ) : quotes.length !== 0 ? (
          <QuoteContainer quotes={quotes} />
        ) : (
          <ErrorMessage />
        )}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import QuoteContainer from "./components/QuoteContainer";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    fetch("./quotes.json")
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
        setQuotes([]);
        setLoadingStatus(false);
      });
  };

  return (
    <React.Fragment>
      <div className="randomBgColor">
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
      </div>
    </React.Fragment>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./quote.css";

function RandomQuoteGenerator() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);

  async function fetchQuote() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.quotable.io/quotes/random",
        {},
        {
          method: "GET",
        }
      );

      const result = await response.json();
      console.log(result);

      if (result && result?.length > 0) {
        setQuote(result[0]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function handleRefresh() {
    fetchQuote();
  }

  if (loading) {
    return <h3>Loading...</h3>
  }  

  return (
    <div className="random-quote-generator">
        <h1>Random Quote Generator</h1>
        <div className="quote-wrapper">
          <p>{quote?.author}</p>
          <p>{quote?.content}</p>
          <button className="refresh-btn" onClick={handleRefresh}>Refresh</button>
        </div>
      </div>
    );
}

export default RandomQuoteGenerator;

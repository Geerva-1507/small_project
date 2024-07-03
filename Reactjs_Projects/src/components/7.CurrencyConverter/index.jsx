import React, { useState, useEffect } from "react";
import './currency.css'

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [tocurrency, setToCurrency] = useState("INR");

  async function fetchExchangeRate() {
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
        { 
            method: "GET", 
        }
    );

    const result = await response.json();
    const calculateRate = result?.rates[tocurrency];
    setExchangeRate(calculateRate);
    setConvertedAmount((amount * calculateRate).toFixed(2));
  }

  useEffect(() => {
    fetchExchangeRate();
  }),
    [fromCurrency, tocurrency, amount];

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleFromCurrencyChange(e) {
    setFromCurrency(e.target.value);
  }

  function handleToCurrencyChange(e) {
    setToCurrency(e.target.value);
  }

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="input-container">
        <input
          value={amount}
          onChange={handleAmountChange}
          type="number"
          name="amount"
          placeholder="Enter Amount"
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <p>To</p>
      <div className="input-container">
        <input type="text" value={convertedAmount} readOnly/>
        <select value={tocurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <p className="exchange-rate">
        Exchange Rate: 1 {fromCurrency} = {exchangeRate} {tocurrency}
      </p>
    </div>
  );
}

export default CurrencyConverter;

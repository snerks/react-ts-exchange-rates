import React from "react";
import "./App.css";
import FetchExchangeRateLatest from "./components/FetchExchangeRateLatest";

function App() {
  return (
    <FetchExchangeRateLatest sourceCurrencyIsoCode="GBP" endDateDaysAgo={1} />
  );
}

export default App;

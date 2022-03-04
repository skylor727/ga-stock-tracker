import React, { Component } from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StockContainer from "./components/StockContainer";
import PortfolioContainer from "./components/PortfolioContainer";
import "./index.css";

export default function App() {
  const [stocks, setStocks] = useState([]);
  const [ownedStocks, setOwnedStocks] = useState([]);

  useEffect(() => {
    const getStocks = async () => {
      const result = await fetch("http://localhost:3001/stocks");
      const stocks = await result.json();
      setStocks(stocks);
    };
    getStocks();
  }, []);

  const handleBuy = (evt) => {
    const stockIdx = parseInt(evt.target.id);
    setOwnedStocks([stocks[stockIdx], ...ownedStocks]);
  };

  const handleSell = (evt) => {
    const stockIdx = parseInt(evt.target.id);
    ownedStocks.splice(stockIdx, 1);
    setOwnedStocks([...ownedStocks]);
  };

  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer
            stocks={stocks}
            ownedStocks={ownedStocks}
            setOwnedStocks={setOwnedStocks}
            handleBuy={handleBuy}
          />
        </div>
        <div className="col-6">
          <PortfolioContainer
            ownedStocks={ownedStocks}
            handleSell={handleSell}
          />
        </div>
      </div>
    </main>
  );
}

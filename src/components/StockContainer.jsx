import React from "react";
import StockCard from "./StockCard";

export default function StockContainer({
  stocks,
  ownedStocks,
  setOwnedStocks,
  handleBuy,
}) {
  const stockCards = stocks.map((stock, idx) => (
    <StockCard
      setOwnedStocks={setOwnedStocks}
      stock={stock}
      key={idx}
      renderedBy="stockContainer"
      handleBuy={handleBuy}
    />
  ));
  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

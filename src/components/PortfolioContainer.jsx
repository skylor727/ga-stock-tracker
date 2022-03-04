import React from "react";
import Stock from "./StockCard";

export default function PortfolioContainer({ ownedStocks, handleSell }) {
  const stockCards = ownedStocks.map((stock, idx) => (
    <Stock
      stock={stock}
      handleSell={handleSell}
      key={idx}
      ownedStockIdx={idx}
      renderedBy="portfolioContainer"
    />
  ));
  let total = 0;
  ownedStocks.forEach((stock) => (total += stock.price));
  return (
    <div>
      <h2>
        My Portfolio -{`$${Math.floor(total)}`}
        {/* render the total value of the stocks in the portfolio here */}
      </h2>
      {stockCards}
    </div>
  );
}

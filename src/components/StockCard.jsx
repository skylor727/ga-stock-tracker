import React from "react";
import { useState } from "react";

export default function StockCard({
  stock,
  handleBuy,
  handleSell,
  renderedBy,
  ownedStockIdx,
}) {
  const [showButton, setShowButton] = useState(true);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">${stock.price}</p>
        {renderedBy === "stockContainer" ? (
          <button id={stock.id - 1} onClick={handleBuy}>
            Buy
          </button>
        ) : (
          <button id={ownedStockIdx} onClick={handleSell}>
            Sell
          </button>
        )}
      </div>
    </div>
  );
}

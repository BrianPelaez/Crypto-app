import React from "react";
import "./CoinDetail.css";

export const CoinDetail = ({ coinSelected }) => {
  return (
    <div className="container fulltop">
      <div className="row">
        <p className="rank">Rank #{coinSelected.market_cap_rank}</p>
      </div>
      <div className="row">
        <span className="row-info">
          <img className="img-fluid crypto-img" alt={coinSelected.name} src={coinSelected.image}></img>
          <p>
            {coinSelected.name} ({coinSelected.symbol.toUpperCase()})
          </p>
        </span>
      </div>
      <div className="row">
        <span className="row-info">
          <p className="price">U$S {coinSelected.current_price}</p>
          <p
            className={
              coinSelected.price_change_percentage_24h > 0
                ? "text-success variation"
                : "text-danger variation"
            }
          >
            {coinSelected.price_change_percentage_24h}%
          </p>
        </span>
      </div>
    </div>
  );
};

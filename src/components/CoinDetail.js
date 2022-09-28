import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export const CoinDetail = ({ coinSelected }) => {
  return (
    <div className="container fulltop">
      <div className="row">
        <p className="rank">Rank #{coinSelected.market_cap_rank}</p>
      </div>
      <div className="row">
        <span className="row-info">
          <img
            className="img-fluid crypto-img"
            alt={coinSelected.name}
            src={coinSelected.image}
          ></img>
          <p>
            {coinSelected.name} ({coinSelected.symbol.toUpperCase()})
          </p>
        </span>
      </div>
      <div className="row">
        <span className="row-info">
          <p className="price">US$ {coinSelected.current_price}</p>
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
      <div className="row">
        <div className="bar"></div>
        <div className="bar-details">
          <span>Low</span>
          <span>24hs</span>
          <span>High</span>
        </div>
      </div>
      <div className="row-container">
        <div className="row-left">
          <span className="row-info-secondary">
            <p>Cap. de mercado <FontAwesomeIcon icon={faQuestionCircle}/></p>
            
            <p className="row-info-secondary-value">
            US${parseInt(coinSelected.market_cap).toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </p>
          </span>
          <span className="row-info-secondary">
          <p>Vol. de comercio en 24 horas <FontAwesomeIcon icon={faQuestionCircle}/></p>
            
            <p className="row-info-secondary-value">
              US$
              {parseInt(coinSelected.total_volume).toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </p>
          </span>
          <span className="row-info-secondary">
          <p>Val. tras la dilución total <FontAwesomeIcon icon={faQuestionCircle}/></p>
            
            <p className="row-info-secondary-value">
              US$
              {parseInt(coinSelected.fully_diluted_valuation).toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </p>
          </span>
        </div>
        <div className="row-right">
          <span className="row-info-secondary">
          <p>Cantidad Circulante <FontAwesomeIcon icon={faQuestionCircle}/></p>
            
            <p className="row-info-secondary-value">
              US${" "}
              {parseInt(coinSelected.circulating_supply).toLocaleString(
                undefined,
                {
                  minimumFractionDigits: 0,
                }
              )}
            </p>
          </span>
          <span className="row-info-secondary">
          <p>Cantidad Total <FontAwesomeIcon icon={faQuestionCircle}/></p>
            
            <p className="row-info-secondary-value">
              US${" "}
              {parseInt(coinSelected.total_supply).toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </p>
          </span>
          <span className="row-info-secondary">
          <p>Cantidad Máx. <FontAwesomeIcon icon={faQuestionCircle}/></p>
            
            <p className="row-info-secondary-value">
              US${" "}
              {parseInt(coinSelected.max_supply).toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

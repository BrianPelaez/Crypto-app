import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";


export const CoinRow = ({ coin, index, setIsShow, isShow, setCoinSelected }) => {

  const round = (value) => {
    return value.toFixed(2);
  };

  const handleClick = (coin) => {
    setIsShow(!isShow)
    setCoinSelected(coin);
    //console.log(coin); // JSON Con moneda seleccionada 
  }

  const uppercase = (str) => {
    return str.toUpperCase();
  };

  return (
    <tr onClick={(e) => handleClick(coin)}>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          className="me-4 img-fluid"
        ></img>
        <span>{uppercase(coin.name)}</span>
        <span className="text-muted ms-3">{uppercase(coin.symbol)}</span>
      </td>
      <td>$ {round(coin.current_price)}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success text-end" : "text-danger text-end"
        }
  
      >
        <span >
          {round(coin.price_change_percentage_24h)} %
        </span>
        {coin.price_change_percentage_24h > 0 ? (
          <FontAwesomeIcon icon={faArrowAltCircleUp} className="ms-2" />
        ) : (
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="ms-2" />
        )}
      </td>
      <td>$ {round(coin.high_24h)}</td>
    </tr>
    

  );
};

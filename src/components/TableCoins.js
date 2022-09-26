import React, { useState } from "react";
import { CoinDetail } from "./CoinDetail";
import { CoinRow } from "./CoinRow";

const titles = ["#", "Coin", "Price", "Price Change", " 24hs Highest"];



export const TableCoins = ({ data, filtro, setIsShow, isShow }) => {

  const [coinSelected, setCoinSelected] = useState({})

  const filterTable = data.filter(
    (el) =>
      el.name.toLowerCase().includes(filtro.toLowerCase()) ||
      el.symbol.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      {isShow && <CoinDetail coinSelected={coinSelected} setCoinSelected={setCoinSelected} ></CoinDetail>}
      <table className="table table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((el, index) => (
              <th key={index}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterTable.map((el, index) => (
            <CoinRow coin={el} key={index} index={index + 1} setIsShow={setIsShow} isShow={isShow} setCoinSelected={setCoinSelected} coinSelected={coinSelected}></CoinRow>
          ))}
        </tbody>
      </table>
    </>
  );
};

import { useEffect, useState } from "react";
import "./App.css";
import { TableCoins } from "./components/TableCoins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState(false);

  // CALL API START 

  const getData = async () => {
    const URL =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    const options = {
      accept: "application/json",
    };
    await fetch(URL, options)
      .then((res) => res.json())
      .then((data) => setCoins(data));
  };

  // CALL API END 

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Crypto Market</h1>
      <div className="row">
        <input
          type="text"
          placeholder="Buscar cripto"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <TableCoins
          data={coins}
          filtro={search}
          setIsShow={setIsShow}
          isShow={isShow}
        ></TableCoins>
      </div>
      <script>
        {window.onclick = (e) => {
          if (e.target.localName === 'html' && isShow) setIsShow(false)     
        }}
      </script>
    </div>
  );
}

export default App;

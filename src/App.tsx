import React from "react";
import { get } from "./modules/remote";
import { CoinDataType } from "./types";
import CoinInfo from "./components/table/CoinInfo";
import CoinName from "./components/table/CoinName";
import Search from "./components/Search";

function App() {
  const [coins, setCoins] = React.useState<CoinDataType[]>();
  const [searchValue, setSearhValue] = React.useState<string>("");

  React.useEffect(() => {
    get().then((v) => {
      console.log("v: ", v);
      setCoins(v);
    });
  }, []);

  const filterCoin = coins?.filter((coin) =>
    coin.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  return (
    <div className="bg-gray-200/50 ">
      <div>
        <Search setSearhValue={setSearhValue} />
      </div>
      <div className="flex justify-center">
        <div className="flex w-full lg:w-2/3 justify-center">
          <CoinName coins={filterCoin} />
          <CoinInfo coins={filterCoin} />
        </div>
      </div>
    </div>
  );
}

export default App;

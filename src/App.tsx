import React from "react";
import { get } from "./modules/remote";
import { CoinDataType } from "./types";
import CoinInfo from "./components/table/CoinInfo";
import CoinName from "./components/table/CoinName";
import Search from "./components/Search";

function App() {
  const [coins, setCoins] = React.useState<CoinDataType[]>();
  const [searchValue, setSearhValue] = React.useState<string>("");
  const [sort, setSort] = React.useState<string>("market_cap_desc");
  const [page, setPage] = React.useState<number>(1);
  // const navigate = useNavigate();

  React.useEffect(() => {
    get({ order: sort, page, per_page: 50 }).then((v) => {
      setCoins(v);
    });
    // navigate(`/${page}`);
  }, [sort, page]);

  const filterCoin = coins?.filter((coin) =>
    coin.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  return (
    <div className="bg-gray-200/50 ">
      <div className="h-44 justify-center flex items-center">
        <h1 className="font-bold text-5xl text-center">
          Cryptocurrency Tracker
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full m-3 lg:w-4/5 p-3">
          <div className="flex space-x-3">
            <div className="flex items-center font-bold">Sort by: </div>
            <select
              className={`border-2 border-gray-300 rounded-md shadow-md`}
              defaultValue={"market_cap_desc"}
              onChange={(v) => setSort(v.target.value)}
            >
              <option value="market_cap_desc">MKP</option>
              <option value={"volume_desc"}>Volume</option>
            </select>
            <Search setSearhValue={setSearhValue} />
          </div>
        </div>
        <div className="flex w-full lg:w-4/5 justify-center">
          <CoinName coins={filterCoin} />
          <CoinInfo coins={filterCoin} />
        </div>
        <div className="flex space-x-4 my-4">
          <Btn
            disabled={page <= 1}
            onClick={() => setPage((v) => v - 1)}
          >{`<`}</Btn>
          {page > 1 && (
            <Btn onClick={() => setPage((v) => v - 1)}>{page - 1}</Btn>
          )}
          <div className="bg-white rounded-md shadow-md py-2 px-6 font-bold opacity-50">
            {page}
          </div>
          {filterCoin?.length === 50 && (
            <Btn onClick={() => setPage((v) => v + 1)}>{page + 1}</Btn>
          )}
          {filterCoin?.length === 50 && (
            <Btn onClick={() => setPage((v) => v + 1)}>{`>`}</Btn>
          )}
        </div>
      </div>
      <footer className="h-32"></footer>
    </div>
  );
}

const Btn: React.FC<JSX.IntrinsicElements["button"]> = (props) => {
  return (
    <button
      {...props}
      className="bg-white rounded-md disabled:opacity-50 shadow-md py-2 px-6 text-xl font-bold"
    >
      {props.children}
    </button>
  );
};

export default App;

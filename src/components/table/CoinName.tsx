import { CoinDataType } from "../../types";
const CoinName: React.FC<{ coins?: CoinDataType[] }> = ({ coins }) => {
  return (
    <div className="w-2/6 lg:w-1/3">
      <table className="overflow-auto block">
        <thead className="pl-14 flex space-x-8 text-left h-8 mb-1">
          <tr>
            <th className="w-20">Coin</th>
          </tr>
        </thead>
        <tbody className="block border-t-2 border-black pt-3">
          {coins &&
            coins.map((item) => (
              <tr
                key={item.id}
                className="flex mb-5 bg-white rounded-l-2xl shadow-sm p-4 items-center h-20 "
              >
                <td className="w-6 mr-3">
                  <img src={item.image} alt={item.name} className="w-6 h-6 " />
                </td>
                <td className="w-32 hidden lg:flex font-bold leading-normal text-lg items-center">
                  {item.name}
                </td>
                <td className="w-20 font-semibold leading-normal text-lg flex items-center">
                  {item.symbol}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinName;

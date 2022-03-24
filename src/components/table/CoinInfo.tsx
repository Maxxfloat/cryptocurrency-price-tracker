import TableText from "./TableText";
import { CoinDataType } from "../../types";

const CoinInfo: React.FC<{
  coins?: CoinDataType[];
}> = ({ coins }) => {
  return (
    <div className="w-2/3">
      <table className="overflow-auto block">
        <thead className="flex w-full space-x-8 text-left h-8 mb-1 ">
          <th className="w-20">Name</th>
          <th className="w-40">Volume</th>
        </thead>
        <tbody className="block w-fit lg:w-full border-t-2 border-black pt-3">
          {coins &&
            coins.map((item) => (
              <tr className="flex mb-5 w-fit lg:w-full bg-white rounded-r-2xl shadow-sm space-x-8 items-center h-20 ">
                <TableText>{item.current_price}</TableText>
                <td
                  className={`${
                    item.market_cap_change_24h < 0
                      ? "text-red-500"
                      : "text-green-500"
                  } w-40  leading-normal text-lg text-left flex items-center`}
                >
                  {item.market_cap_change_24h.toFixed(2)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinInfo;

import TableText from "./TableText";
import { CoinDataType } from "../../types";

const CoinInfo: React.FC<{
  coins?: CoinDataType[];
}> = ({ coins }) => {
  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className="w-4/6 lg:w-2/3">
      <table className="overflow-auto block">
        <thead className="flex w-full h-8 mb-1 ">
          <tr className="flex space-x-8 w-full text-left">
            <th className="min-w-[5rem]">Price</th>
            <th className="min-w-[5rem]">24h</th>
            <th className="min-w-[5rem]">24h%</th>
            <th className="min-w-[10rem]">Volume</th>
          </tr>
        </thead>
        <tbody className="block w-fit sm:w-full border-t-2 border-black pt-3">
          {coins &&
            coins.map((item) => (
              <tr
                key={item.id}
                className="flex mb-5 min-w-fit w-full bg-white rounded-r-2xl shadow-sm space-x-8 items-center h-20 "
              >
                <TableText>
                  ${numberFormat.format(item.current_price)}
                </TableText>
                <td
                  className={`${
                    item.market_cap_change_24h < 0
                      ? "text-red-500"
                      : "text-green-500"
                  } w-20  leading-normal text-lg text-left flex items-center`}
                >
                  {numberFormat.format(item.price_change_24h)}
                </td>
                <td
                  className={`${
                    item.market_cap_change_24h < 0
                      ? "text-red-500"
                      : "text-green-500"
                  } w-20  leading-normal text-lg text-left flex items-center`}
                >
                  {numberFormat.format(item.price_change_percentage_24h)}%
                </td>
                <td
                  className={`${
                    item.market_cap_change_24h < 0
                      ? "text-red-500"
                      : "text-green-500"
                  } w-40  leading-normal text-lg text-left flex items-center`}
                >
                  ${numberFormat.format(item.market_cap_change_24h)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinInfo;

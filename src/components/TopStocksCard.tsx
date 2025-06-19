import { topStocks } from "@/utils/trendDummyData";

export default function TopStocksCard() {
  return (
    <div className="bg-white rounded shadow p-4 mt-4">
      <h2 className="font-semibold mb-2">Top 5 종목(더미)</h2>
      <ul>
        {topStocks.map(stock => (
          <li key={stock.name} className="flex justify-between py-1 border-b last:border-b-0">
            <span>{stock.name}</span>
            <span>
              {stock.price.toLocaleString()}원
              <span className={stock.change >= 0 ? "text-green-600 ml-2" : "text-red-600 ml-2"}>
                {stock.change >= 0 ? "▲" : "▼"} {Math.abs(stock.change)}%
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

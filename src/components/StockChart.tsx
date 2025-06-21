"use client";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface StockChartProps {
  symbol: string;
}

export default function StockChart({ symbol }: StockChartProps) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("StockChart: Fetching data for symbol:", symbol);
      try {
        const response = await fetch(`/api/stock-data?symbol=${encodeURIComponent(symbol)}`);
        const result = await response.json();
        
        console.log("StockChart: API response:", result);
        
        if (result.chartData) {
          setData(result.chartData);
          console.log("StockChart: Chart data set:", result.chartData);
          console.log("StockChart: First data point:", result.chartData[0]);
          console.log("StockChart: Last data point:", result.chartData[result.chartData.length - 1]);
        } else {
          setError(`데이터를 불러올 수 없습니다. (${result.error || '알 수 없는 오류'})`);
        }
      } catch {
        setError("차트 로딩 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (symbol) {
      fetchData();
    }
  }, [symbol]);

  if (loading) return <div className="text-center py-4">차트 로딩 중... (심볼: {symbol})</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  return (
    <div className="w-full h-64 bg-white rounded shadow p-4">
      <h2 className="font-semibold mb-2">{symbol} 주가 추이</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const dummyData = [
  { date: "2024-05-01", price: 100 },
  { date: "2024-05-02", price: 102 },
  { date: "2024-05-03", price: 98 },
  { date: "2024-05-04", price: 105 },
  { date: "2024-05-05", price: 110 },
];

export default function DummyChart() {
  return (
    <div className="w-full h-64 bg-white rounded shadow p-4">
      <h2 className="font-semibold mb-2">주가 추이(더미)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={dummyData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { topIndustries } from "@/utils/trendDummyData";

export default function IndustryBarChart() {
  return (
    <div className="w-full h-64 bg-white rounded shadow p-4">
      <h2 className="font-semibold mb-2">산업별 성장률(더미)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={topIndustries}>
          <XAxis dataKey="name" />
          <YAxis unit="%" />
          <Tooltip />
          <Bar dataKey="growth" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

"use client";
import { useState } from "react";
import StockChart from "@/components/StockChart";

export default function ReportPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    try {
      const response = await fetch("/api/ai-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      if (data.summary) {
        setResult(data.summary);
      } else if (data.error) {
        setResult("에러: " + data.error);
      } else {
        setResult("알 수 없는 에러가 발생했습니다.");
      }
    } catch {
      setResult("네트워크 에러가 발생했습니다.");
    }
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI 투자 리포트</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2"
          placeholder="예: 삼성전자, 반도체 ETF, 전기차 산업 등"
          value={query}
          onChange={e => setQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "분석 중..." : "AI 리포트 생성"}
        </button>
      </form>
      {result && (
        <div className="bg-gray-50 border rounded p-4 mt-2 whitespace-pre-line">
          {result}
          <div className="mt-6">
            <StockChart symbol={query} />
          </div>
        </div>
      )}
    </main>
  );
}

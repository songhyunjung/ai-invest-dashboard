"use client";
import { useState } from "react";
import DummyChart from "@/components/DummyChart";

export default function ReportPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    // 실제 API 호출 대신 더미 데이터 사용
    setTimeout(() => {
      setResult(
        `"${query}"에 대한 AI 투자 리포트 예시입니다.\n\n- 산업 동향: 최근 ${query} 관련 시장이 빠르게 성장 중입니다.\n- 주요 이슈: 글로벌 공급망, 기술 혁신, 정책 변화 등\n- 투자 포인트: 성장성, 수익성, 리스크 요인 분석\n- 결론: 중장기적으로 긍정적 전망이나, 단기 변동성 주의 필요`
      );
      setLoading(false);
    }, 1000);
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
            <DummyChart />
          </div>
        </div>
      )}
    </main>
  );
}

import IndustryBarChart from "@/components/IndustryBarChart";
import TopStocksCard from "@/components/TopStocksCard";

export default function TrendPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">트렌드 분석</h1>
      <IndustryBarChart />
      <TopStocksCard />
    </main>
  );
}

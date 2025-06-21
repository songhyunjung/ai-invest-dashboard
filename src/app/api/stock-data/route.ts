import { NextRequest, NextResponse } from 'next/server';

// 한국 주식 심볼을 Yahoo Finance 형식으로 변환
function convertToYahooSymbol(symbol: string): string {
  const koreanStocks: { [key: string]: string } = {
    '삼성전자': '005930.KS',
    'SK하이닉스': '000660.KS',
    'LG에너지솔루션': '373220.KS',
    'NAVER': '035420.KS',
    '카카오': '035720.KS',
    '현대차': '005380.KS',
    '기아': '000270.KS',
    'POSCO홀딩스': '005490.KS',
    'LG화학': '051910.KS',
    '삼성바이오로직스': '207940.KS',
  };

  // 정확히 일치하는 경우
  if (koreanStocks[symbol]) {
    return koreanStocks[symbol];
  }

  // 이미 .KS로 끝나는 경우 그대로 사용
  if (symbol.endsWith('.KS')) {
    return symbol;
  }

  // 미국 주식인 경우 그대로 사용
  if (symbol.match(/^[A-Z]{1,5}$/)) {
    return symbol;
  }

  // 기본값으로 삼성전자 사용
  return '005930.KS';
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get('symbol');

  if (!symbol) {
    return NextResponse.json({ error: 'Symbol is required' }, { status: 400 });
  }

  const yahooSymbol = convertToYahooSymbol(symbol);

  try {
    // Yahoo Finance API 호출 (무료)
    const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}?interval=1d&range=1mo`);
    const data = await response.json();
    
    if (data.chart?.result?.[0]) {
      const result = data.chart.result[0];
      const timestamps = result.timestamp;
      const prices = result.indicators.quote[0].close;
      
      const chartData = timestamps.map((time: number, index: number) => ({
        date: new Date(time * 1000).toLocaleDateString(),
        price: prices[index] || 0
      })).filter((item: { date: string; price: number }) => item.price > 0);

      return NextResponse.json({ chartData, symbol: yahooSymbol });
    } else {
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

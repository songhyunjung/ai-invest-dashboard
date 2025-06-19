import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'OpenAI API Key not set.' }, { status: 500 });
  }
  if (!query) {
    return NextResponse.json({ error: 'No query provided.' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: '당신은 금융 전문가입니다. 사용자가 입력한 산업, 기업, ETF에 대해 투자 관점에서 요약 리포트를 작성해 주세요. 너무 길지 않게 핵심만 정리해 주세요.',
          },
          {
            role: 'user',
            content: query,
          },
        ],
        max_tokens: 600,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error }, { status: response.status });
    }
    const data = await response.json();
    const summary = data.choices?.[0]?.message?.content || 'AI 리포트 생성에 실패했습니다.';
    return NextResponse.json({ summary });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

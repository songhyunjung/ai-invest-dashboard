# AI 기반 투자 리포트 대시보드

AI가 요약해주는 투자 리포트와 금융 데이터 시각화 대시보드

## 주요 기능
- 관심 산업/기업/ETF에 대한 AI 투자 리포트 요약
- 주가, PER, PBR 등 금융 데이터 차트 시각화
- 트렌드 분석 및 Top 5 종목 추천
- 반응형 카드 UI, SSR/SSG 기반 SEO 최적화

## 기술 스택
- Next.js (App Router), React, Tailwind CSS
- Recharts, SWR
- OpenAI API (더미 데이터로 대체 가능)
- Vercel 배포

## 실행 방법
```bash
git clone https://github.com/본인계정/ai-invest-dashboard.git
cd ai-invest-dashboard
npm install
npm run dev
```

## 배포 주소
- https://ai-invest-dashboard.vercel.app

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

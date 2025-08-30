export type TabKey = "top10" | "marketcap" | "up" | "down" | "volume" | "dividend";

export const TAB_LABELS: { key: TabKey; label: string }[] = [
  { key: "top10",     label: "TOP 10" },
  { key: "marketcap", label: "시가총액" },
  { key: "up",        label: "상승" },
  { key: "down",      label: "하락" },
  { key: "volume",    label: "거래량" },
  { key: "dividend",  label: "배당" },
];

// 카드 아이템 타입
export type Top10Item = { rank: number; name: string; price: number; changePct: number };

// 가라데이터 (API 연동 전)
export const MOCK_TOP10: Record<TabKey, Top10Item[]> = {
  top10: [
    { rank: 1, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
    { rank: 2, name: "삼성전자",         price:   54000, changePct: +11.11 },
    { rank: 3, name: "달바글로벌",       price:  112000, changePct: -9.23 },
    { rank: 4, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
    { rank: 5, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
    { rank: 6, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
    { rank: 7, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
   ],
  marketcap: [
    { rank: 1, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
    { rank: 2, name: "삼성전자",         price:   54000, changePct: +11.11 },
    { rank: 3, name: "달바글로벌",       price:  112000, changePct: -9.23 },
    { rank: 4, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
    { rank: 5, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
    { rank: 6, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
    { rank: 7, name: "삼성바이오로직스", price: 1200000, changePct: +7.11 },
  ],
  up: [
    { rank: 1, name: "A기업", price: 35200, changePct: +12.32 },
    { rank: 2, name: "B기업", price: 12800, changePct: +9.14 },
    { rank: 3, name: "C기업", price:  8200, changePct: +8.02 },
  ],
  down: [
    { rank: 1, name: "D기업", price:  7200, changePct: -6.41 },
    { rank: 2, name: "E기업", price: 15200, changePct: -5.22 },
  ],
  volume: [
    { rank: 1, name: "F기업", price:  9100, changePct: +1.02 },
    { rank: 2, name: "G기업", price:  3200, changePct: -0.52 },
  ],
  dividend: [
    { rank: 1, name: "H기업", price: 50200, changePct: +0.41 },
    { rank: 2, name: "I기업", price: 31200, changePct: +0.12 },
  ],
} as const;

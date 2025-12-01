import { QuizItem } from "../types";

export const LV2_FOUR_WITCHES_DAY: QuizItem[] = [
  {
    id: "lv2-fourwitch-1",
    level: "lv-2",
    topic: "네마녀의 날",
    topicIndex: 11,
    type: "OX",
    question:
      "네 마녀의 날은 주식 및 파생상품의 만기가 한꺼번에 도래하는 날을 말한다.",
    answer: "O",
    explanation:
      "네 마녀의 날에는 선물, 옵션 등 파생상품 만기가 동시에 겹쳐 시장 변동성이 커진다.",
  },
  {
    id: "lv2-fourwitch-2",
    level: "lv-2",
    topic: "네마녀의 날",
    topicIndex: 11,
    type: "MULTI",
    question: "네 마녀의 날은 언제 발생할까?",
    options: ["매월 마지막 금요일", "분기마다 셋째 주 금요일", "연말 마지막 거래일"],
    answer: "분기마다 셋째 주 금요일",
    explanation:
      "네 마녀의 날은 매 분기 3월, 6월, 9월, 12월 셋째 주 금요일에 온다.",
  },
  {
    id: "lv2-fourwitch-3",
    level: "lv-2",
    topic: "네마녀의 날",
    topicIndex: 11,
    type: "OX",
    question:
      "네 마녀의 날에는 파생상품 만기 청산으로 인해 시장이 평소보다 큰 폭으로 움직일 수 있다.",
    answer: "O",
    explanation:
      "투자자들이 대량으로 청산·재투자를 하면서 주가 변동성이 확대된다.",
  },
  {
    id: "lv2-fourwitch-4",
    level: "lv-2",
    topic: "네마녀의 날",
    topicIndex: 11,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["선물", "옵션", "네 마녀의 날"],
    rightItems: [
      "미래 일정 시점에 거래하기로 한 계약",
      "특정 가격에 사고팔 권리",
      "파생상품 만기가 동시에 도래하는 날",
    ],
    answer: {
      선물: "미래 일정 시점에 거래하기로 한 계약",
      옵션: "특정 가격에 사고팔 권리",
      "네 마녀의 날": "파생상품 만기가 동시에 도래하는 날",
    },
    explanation:
      "네 마녀의 날은 파생상품 시장 구조를 이해해야 제대로 파악할 수 있다.",
  },
  {
    id: "lv2-fourwitch-5",
    level: "lv-2",
    topic: "네마녀의 날",
    topicIndex: 11,
    type: "MULTI",
    question: "네 마녀의 날에 흔히 나타나는 현상은 무엇일까?",
    options: ["거래량 급증", "배당 확대", "신주 발행"],
    answer: "거래량 급증",
    explanation:
      "투자자들의 대규모 청산·재투자 거래가 몰려 거래량이 평소보다 크게 늘어난다.",
  },
  {
    id: "lv2-fourwitch-6",
    level: "lv-2",
    topic: "네마녀의 날",
    topicIndex: 11,
    type: "OX",
    question: "네 마녀의 날은 단기 투자자에게 기회가 될 수도 있다.",
    answer: "O",
    explanation:
      "급격한 변동성은 리스크이지만 단기 매매자에게는 차익 기회의 장이 되기도 한다.",
  },
];

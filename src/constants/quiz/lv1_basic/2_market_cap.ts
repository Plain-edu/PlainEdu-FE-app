import { QuizItem } from "../types";

export const LV1_MARKET_CAP: QuizItem[] = [
  {
    id: "lv1-marketcap-1",
    level: "lv-1",
    topic: "시가총액",
    topicIndex: 1,
    type: "MULTI",
    question: "시가총액을 계산하는 올바른 공식은 무엇일까요?",
    options: [
      "주식 수 × 주식 가격",
      "회사 매출 × 주식 가격",
      "회사 순이익 × 주식 수",
    ],
    answer: "주식 수 × 주식 가격",
    explanation:
      "시가총액은 상장된 모든 주식의 가격을 합친 값으로, “주식 수 × 주식 가격”으로 계산합니다.",
  },
  {
    id: "lv1-marketcap-2",
    level: "lv-1",
    topic: "시가총액",
    topicIndex: 1,
    type: "OX",
    question: "시가총액이 크다는 것은 해당 회사의 현재 가치가 크다는 뜻이다.",
    answer: "O",
    explanation:
      "시가총액은 회사의 ‘덩치’를 나타내는 지표로, 금액이 클수록 현재 가치가 높다는 의미입니다.",
  },
  {
    id: "lv1-marketcap-3",
    level: "lv-1",
    topic: "시가총액",
    topicIndex: 1,
    type: "MULTI",
    question: "시가총액이 높더라도 주가가 오르지 않을 수 있는 이유는 무엇일까요?",
    options: [
      "성장 여지가 부족할 수 있어서",
      "주식 수가 너무 적어서",
      "회사의 업종이 인기가 없어서",
    ],
    answer: "성장 여지가 부족할 수 있어서",
    explanation:
      "시가총액은 현재 가치를 나타내지만, 주가 상승은 미래 성장성에 달려있습니다.",
  },
  {
    id: "lv1-marketcap-4",
    level: "lv-1",
    topic: "시가총액",
    topicIndex: 1,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["시가총액", "시가총액이 크다", "시가총액과 주가"],
    rightItems: [
      "주식 수 × 주식 가격",
      "회사의 현재 가치가 크다",
      "별개의 개념으로, 성장성에 따라 주가가 달라짐",
    ],
    answer: {
      시가총액: "주식 수 × 주식 가격",
      "시가총액이 크다": "회사의 현재 가치가 크다",
      "시가총액과 주가": "별개의 개념으로, 성장성에 따라 주가가 달라짐",
    },
    explanation:
      "시가총액은 회사 가치를 나타내지만, 미래 전망은 별도로 고려해야 합니다.",
  },
  {
    id: "lv1-marketcap-5",
    level: "lv-1",
    topic: "시가총액",
    topicIndex: 1,
    type: "OX",
    question: "시가총액이 높으면 주가가 반드시 오른다.",
    answer: "X",
    explanation:
      "시가총액은 현재 가치를 보여줄 뿐, 주가 상승은 미래 성장 가능성에 좌우됩니다.",
  },
  {
    id: "lv1-marketcap-6",
    level: "lv-1",
    topic: "시가총액",
    topicIndex: 1,
    type: "MULTI",
    question: "시가총액을 비유적으로 표현한 설명으로 가장 적절한 것은?",
    options: ["회사의 체중", "회사의 덩치", "회사의 나이"],
    answer: "회사의 덩치",
    explanation:
      "시가총액은 기업 규모를 나타내므로 ‘덩치’에 비유됩니다.",
  },
];

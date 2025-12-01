import { QuizItem } from "../types";

export const LV1_DIVIDEND: QuizItem[] = [
  {
    id: "lv1-dividend-1",
    level: "lv-1",
    topic: "배당금",
    topicIndex: 13,
    type: "OX",
    question: "배당금은 회사의 이익 중 일부를 주주에게 나누어 주는 돈이다.",
    answer: "O",
    explanation:
      "배당금은 주식 보유자에게 주어지는 회사의 이익 배분금으로, 주식만 가지고 있어도 받을 수 있어요!",
  },
  {
    id: "lv1-dividend-2",
    level: "lv-1",
    topic: "배당금",
    topicIndex: 13,
    type: "MULTI",
    question:
      "주당 1,000원 배당을 하는 회사의 주식을 20주 가지고 있다면, 받을 수 있는 배당금은 얼마일까요?",
    options: ["10,000원", "20,000원", "2,000원"],
    answer: "20,000원",
    explanation: "1주당 1,000원 × 20주 = 20,000원이에요!",
  },
  {
    id: "lv1-dividend-3",
    level: "lv-1",
    topic: "배당금",
    topicIndex: 13,
    type: "OX",
    question: "배당기준일 하루 전에 주식을 사도 배당금을 받을 수 있다.",
    answer: "X",
    explanation:
      "실제 주식 입고에는 매수일 기준 +2일이 걸리므로, 기준일 2일 전까지 주식을 매수해야 배당금을 받을 수 있어요!",
  },
  {
    id: "lv1-dividend-4",
    level: "lv-1",
    topic: "배당금",
    topicIndex: 13,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["배당금", "기준일", "주당 배당금"],
    rightItems: [
      "회사 이익의 일부를 주주에게 분배하는 돈",
      "배당금을 받을 수 있는 주주 명부가 확정되는 날",
      "주식 1주당 지급되는 배당금액",
    ],
    answer: {
      배당금: "회사 이익의 일부를 주주에게 분배하는 돈",
      기준일: "배당금을 받을 수 있는 주주 명부가 확정되는 날",
      "주당 배당금": "주식 1주당 지급되는 배당금액",
    },
    explanation:
      "배당과 관련된 기본 용어를 이해하면 지급 시기와 금액을 쉽게 계산할 수 있어요!",
  },
  {
    id: "lv1-dividend-5",
    level: "lv-1",
    topic: "배당금",
    topicIndex: 13,
    type: "MULTI",
    question: "배당주 투자 시 가장 주의해야 할 점은 무엇일까요?",
    options: [
      "배당금이 많을수록 주가가 무조건 오른다",
      "기준일 전에 주식을 매수해야 배당금을 받을 수 있다",
      "배당은 매년 동일하게 지급된다",
    ],
    answer: "기준일 전에 주식을 매수해야 배당금을 받을 수 있다",
    explanation:
      "배당금을 받기 위해서는 반드시 기준일 2일 전까지 주식을 매수해야 해요!",
  },
  {
    id: "lv1-dividend-6",
    level: "lv-1",
    topic: "배당금",
    topicIndex: 13,
    type: "OX",
    question: "배당금은 주가 변동과 상관없이 받을 수 있는 현금 수익이다.",
    answer: "O",
    explanation:
      "배당금은 주식 가격과 무관하게 지급되므로, 안정적인 현금 흐름을 원하는 투자자에게 매력적이에요!",
  },
];

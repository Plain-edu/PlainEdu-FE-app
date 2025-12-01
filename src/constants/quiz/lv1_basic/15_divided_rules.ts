import { QuizItem } from "../types";

export const LV1_DIVIDEND_RULES: QuizItem[] = [
  {
    id: "lv1-dividend-rules-1",
    level: "lv-1",
    topic: "배당락과 결제일",
    topicIndex: 14,
    type: "OX",
    question: "배당기준일은 배당금을 받을 주주를 정하는 날이다.",
    answer: "O",
    explanation:
      "배당기준일에 주주명부에 이름이 있어야 배당금을 받을 수 있는 거예요.",
  },
  {
    id: "lv1-dividend-rules-2",
    level: "lv-1",
    topic: "배당락과 결제일",
    topicIndex: 14,
    type: "MULTI",
    question: "주식 매수 후 며칠 뒤에 내 계좌에 주식이 들어올까요?",
    options: ["당일", "+1일", "+2일"],
    answer: "+2일",
    explanation:
      "우리나라 주식 결제는 T+2 방식이라 매수일로부터 2영업일 후에 계좌에 들어와요.",
  },
  {
    id: "lv1-dividend-rules-3",
    level: "lv-1",
    topic: "배당락과 결제일",
    topicIndex: 14,
    type: "OX",
    question: "배당락일 이후에 주식을 사면 이번 배당금을 받을 수 있다.",
    answer: "X",
    explanation:
      "배당락일은 기준일 다음 날이라, 이날 이후 매수하면 이번 배당금은 못 받아요.",
  },
  {
    id: "lv1-dividend-rules-4",
    level: "lv-1",
    topic: "배당락과 결제일",
    topicIndex: 14,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["배당기준일", "배당락일", "결제일(T+2)"],
    rightItems: [
      "배당금을 받을 주주를 확정하는 날",
      "기준일 다음 날, 배당금이 반영되지 않는 거래 시작일",
      "매수일로부터 2영업일 뒤에 주식이 계좌에 들어오는 날",
    ],
    answer: {
      배당기준일: "배당금을 받을 주주를 확정하는 날",
      배당락일: "기준일 다음 날, 배당금이 반영되지 않는 거래 시작일",
      "결제일(T+2)": "매수일로부터 2영업일 뒤에 주식이 계좌에 들어오는 날",
    },
    explanation:
      "세 가지 용어를 알면 배당금 지급 조건을 쉽게 이해할 수 있어요.",
  },
  {
    id: "lv1-dividend-rules-5",
    level: "lv-1",
    topic: "배당락과 결제일",
    topicIndex: 14,
    type: "MULTI",
    question: "배당락일에 주가가 떨어지는 주된 이유는?",
    options: ["회사 실적 부진", "배당금만큼 주가에서 차감되기 때문", "매도 물량 급증"],
    answer: "배당금만큼 주가에서 차감되기 때문",
    explanation:
      "배당락일에는 배당금 가치가 빠지면서 주가가 그만큼 하락하는 게 일반적이에요.",
  },
  {
    id: "lv1-dividend-rules-6",
    level: "lv-1",
    topic: "배당락과 결제일",
    topicIndex: 14,
    type: "OX",
    question: "배당금을 받으려면 기준일 1영업일 전에 주식을 사면 된다.",
    answer: "X",
    explanation:
      "결제일 규칙(T+2) 때문에 기준일 2영업일 전에 매수해야 배당금을 받을 수 있어요.",
  },
];

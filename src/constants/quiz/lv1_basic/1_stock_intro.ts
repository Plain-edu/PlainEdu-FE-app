import { QuizItem } from "../types";

export const LV1_STOCK_INTRO: QuizItem[] = [
  {
    id: "lv1-stockintro-1",
    level: "lv-1",
    topic: "주식이란?",
    topicIndex: 0,
    type: "MULTI",
    question: "다음 중 주식을 가장 정확하게 설명한 것은 무엇일까요?",
    options: [
      "회사의 빚을 나누어 파는 것",
      "회사의 소유권을 나누어 파는 것",
      "회사의 매출액을 나누어 계산하는 것",
    ],
    answer: "회사의 소유권을 나누어 파는 것",
    explanation:
      "주식은 회사의 소유권을 조각낸 것으로, 이를 매수하면 해당 회사의 일부를 소유하게 됩니다.",
  },
  {
    id: "lv1-stockintro-2",
    level: "lv-1",
    topic: "주식이란?",
    topicIndex: 0,
    type: "OX",
    question: "주식을 산다는 것은 회사의 일부를 소유한다는 뜻이다.",
    answer: "O",
    explanation:
      "주식 1주는 회사 소유권의 한 조각입니다. 주식을 사면 회사의 지분을 보유하게 됩니다.",
  },
  {
    id: "lv1-stockintro-3",
    level: "lv-1",
    topic: "주식이란?",
    topicIndex: 0,
    type: "MULTI",
    question: "주식 가격이 변하는 가장 큰 이유는 무엇일까요?",
    options: ["회사의 가치 변화", "주식 보유자 수 변화", "회사 직원 수 변화"],
    answer: "회사의 가치 변화",
    explanation:
      "회사 가치가 높아지면 주식 가격이 오르고, 가치가 떨어지면 주식 가격도 내려갑니다.",
  },
  {
    id: "lv1-stockintro-4",
    level: "lv-1",
    topic: "주식이란?",
    topicIndex: 0,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["주식", "주식을 산다", "주식 가격 변동"],
    rightItems: [
      "회사의 소유권을 조각낸 것",
      "회사의 일부를 소유한다",
      "회사 가치 변화에 따라 달라짐",
    ],
    answer: {
      주식: "회사의 소유권을 조각낸 것",
      "주식을 산다": "회사의 일부를 소유한다",
      "주식 가격 변동": "회사 가치 변화에 따라 달라짐",
    },
    explanation:
      "주식의 개념, 매수 의미, 가격 변동 원리를 함께 이해하면 기초 투자 지식이 탄탄해집니다.",
  },
  {
    id: "lv1-stockintro-5",
    level: "lv-1",
    topic: "주식이란?",
    topicIndex: 0,
    type: "OX",
    question: "주식 가격이 오르면 무조건 회사의 실적이 좋아졌다는 뜻이다.",
    answer: "X",
    explanation:
      "실적뿐 아니라 시장 분위기, 투자자 기대감 등 다양한 요인으로도 주가가 오를 수 있습니다.",
  },
  {
    id: "lv1-stockintro-6",
    level: "lv-1",
    topic: "주식이란?",
    topicIndex: 0,
    type: "MULTI",
    question:
      "“이 회사 잘하네!”라는 시장 평가가 늘어날 경우, 주식 가격은 보통 어떻게 될까요?",
    options: ["하락한다", "변함없다", "상승한다"],
    answer: "상승한다",
    explanation:
      "시장에서 긍정적인 평가를 받으면 회사 가치가 올라가고, 주식 가격도 상승하는 경향이 있습니다.",
  },
];

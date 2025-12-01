import { QuizItem } from "../types";

export const LV1_ORDERBOOK: QuizItem[] = [
  {
    id: "lv1-orderbook-1",
    level: "lv-1",
    topic: "호가창의 이해",
    topicIndex: 10,
    type: "OX",
    question:
      "호가창은 매수·매도 가격과 수량을 한눈에 보여주는 화면이다.",
    answer: "O",
    explanation:
      "호가창은 현재 시장의 주문 상황을 실시간으로 볼 수 있는 핵심 도구다.",
  },
  {
    id: "lv1-orderbook-2",
    level: "lv-1",
    topic: "호가창의 이해",
    topicIndex: 10,
    type: "OX",
    question:
      "호가창에서 매수 호가는 보통 화면의 위쪽, 매도 호가는 아래쪽에 표시된다.",
    answer: "X",
    explanation:
      "대부분의 HTS/MTS에서 매수 호가는 아래쪽, 매도 호가는 위쪽에 배치된다.",
  },
  {
    id: "lv1-orderbook-3",
    level: "lv-1",
    topic: "호가창의 이해",
    topicIndex: 10,
    type: "MULTI",
    question: "호가창에서 ‘매도호가’가 의미하는 것은?",
    options: ["주식을 팔고자 하는 가격", "주식을 사고자 하는 가격", "당일 최고가"],
    answer: "주식을 팔고자 하는 가격",
    explanation:
      "매도호가는 현재 주식을 팔고자 하는 투자자들이 제시한 가격이다.",
  },
  {
    id: "lv1-orderbook-4",
    level: "lv-1",
    topic: "호가창의 이해",
    topicIndex: 10,
    type: "MULTI",
    question: "주가가 5,000원일 때 1호가 단위가 1원인 이유는?",
    options: [
      "모든 종목의 호가 단위가 동일해서",
      "가격 구간별로 호가 단위가 다르게 정해져 있어서",
      "매수세가 강해서",
    ],
    answer: "가격 구간별로 호가 단위가 다르게 정해져 있어서",
    explanation:
      "거래소 규정에 따라 주가 구간별로 호가 단위가 다르게 적용된다.",
  },
  {
    id: "lv1-orderbook-5",
    level: "lv-1",
    topic: "호가창의 이해",
    topicIndex: 10,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["매도호가", "매수호가", "체결가"],
    rightItems: [
      "팔고자 하는 가격",
      "사고자 하는 가격",
      "실제로 거래가 성사된 가격",
    ],
    answer: {
      매도호가: "팔고자 하는 가격",
      매수호가: "사고자 하는 가격",
      체결가: "실제로 거래가 성사된 가격",
    },
    explanation:
      "호가창에서는 매수·매도 의사와 실제 거래 가격을 모두 확인할 수 있다.",
  },
  {
    id: "lv1-orderbook-6",
    level: "lv-1",
    topic: "호가창의 이해",
    topicIndex: 10,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["최우선 매수호가", "최우선 매도호가", "잔량"],
    rightItems: [
      "가장 높은 매수 가격",
      "가장 낮은 매도 가격",
      "각 가격대에 남아 있는 주문 수량",
    ],
    answer: {
      "최우선 매수호가": "가장 높은 매수 가격",
      "최우선 매도호가": "가장 낮은 매도 가격",
      잔량: "각 가격대에 남아 있는 주문 수량",
    },
    explanation:
      "최우선 호가는 현재 즉시 체결 가능성이 가장 높은 가격대를 의미한다.",
  },
];

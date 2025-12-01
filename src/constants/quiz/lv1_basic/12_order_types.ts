import { QuizItem } from "../types";

export const LV1_ORDER_TYPES: QuizItem[] = [
  {
    id: "lv1-order-types-1",
    level: "lv-1",
    topic: "주식 주문 종류",
    topicIndex: 11,
    type: "OX",
    question:
      "시장가 주문은 현재 시장에서 거래 가능한 최우선 가격에 즉시 체결된다.",
    answer: "O",
    explanation:
      "시장가 주문은 가격보다 체결 속도를 우선시해 즉시 거래된다.",
  },
  {
    id: "lv1-order-types-2",
    level: "lv-1",
    topic: "주식 주문 종류",
    topicIndex: 11,
    type: "OX",
    question: "지정가 주문은 내가 원하는 가격에 무조건 체결된다.",
    answer: "X",
    explanation:
      "지정가 주문은 설정한 가격에 도달해야 체결되므로 반드시 거래되는 것은 아니다.",
  },
  {
    id: "lv1-order-types-3",
    level: "lv-1",
    topic: "주식 주문 종류",
    topicIndex: 11,
    type: "MULTI",
    question: "다음 중 체결 속도가 가장 빠른 주문 방식은?",
    options: ["지정가 주문", "시장가 주문", "예약 주문"],
    answer: "시장가 주문",
    explanation:
      "시장가 주문은 가격을 지정하지 않아 가장 먼저 체결된다.",
  },
  {
    id: "lv1-order-types-4",
    level: "lv-1",
    topic: "주식 주문 종류",
    topicIndex: 11,
    type: "MULTI",
    question: "조건부 지정가 주문의 특징은?",
    options: [
      "장 종료 직전 체결되는 주문",
      "장 시작 시 체결되는 주문",
      "지정가로 시도 후 미체결분은 시장가로 전환",
    ],
    answer: "지정가로 시도 후 미체결분은 시장가로 전환",
    explanation:
      "조건부 지정가는 원하는 가격으로 우선 시도하고, 남은 수량은 시장가로 처리한다.",
  },
  {
    id: "lv1-order-types-5",
    level: "lv-1",
    topic: "주식 주문 종류",
    topicIndex: 11,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["시장가", "지정가", "예약주문"],
    rightItems: [
      "가격보다 속도를 우선시해 즉시 거래",
      "원하는 가격에 도달해야 거래",
      "특정 시간이나 조건에 맞춰 거래",
    ],
    answer: {
      시장가: "가격보다 속도를 우선시해 즉시 거래",
      지정가: "원하는 가격에 도달해야 거래",
      예약주문: "특정 시간이나 조건에 맞춰 거래",
    },
    explanation:
      "주문 방식마다 체결 조건과 속도가 다르므로 투자 목적에 따라 구분해 사용해야 한다.",
  },
  {
    id: "lv1-order-types-6",
    level: "lv-1",
    topic: "주식 주문 종류",
    topicIndex: 11,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["조건부 지정가", "장전 시간외", "장후 시간외"],
    rightItems: [
      "지정가 시도 후 미체결분은 시장가로 처리",
      "장 시작 전 고정된 가격으로 거래",
      "장 마감 후 종가로 거래",
    ],
    answer: {
      조건부지정가: "지정가 시도 후 미체결분은 시장가로 처리",
      "장전 시간외": "장 시작 전 고정된 가격으로 거래",
      "장후 시간외": "장 마감 후 종가로 거래",
    },
    explanation:
      "특수 주문 방식은 거래 시간과 조건이 다양해 상황에 맞게 선택하는 것이 중요하다.",
  },
];

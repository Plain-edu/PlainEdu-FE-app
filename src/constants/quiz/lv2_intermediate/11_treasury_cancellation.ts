import { QuizItem } from "../types";

export const LV2_TREASURY_CANCELLATION: QuizItem[] = [
  {
    id: "lv2-cancel-1",
    level: "lv-2",
    topic: "자사주 소각",
    topicIndex: 10,
    type: "OX",
    question:
      "자사주 소각은 기업이 보유한 자기 주식을 시장에서 없애는 것을 의미한다.",
    answer: "O",
    explanation:
      "자사주 소각은 이미 발행된 주식을 법적으로 소멸시켜 총 주식 수를 줄이는 과정이다.",
  },
  {
    id: "lv2-cancel-2",
    level: "lv-2",
    topic: "자사주 소각",
    topicIndex: 10,
    type: "MULTI",
    question: "기업이 자사주를 소각하는 주된 목적은 무엇일까?",
    options: ["부채를 늘리기 위해", "주식 가치를 높이기 위해", "직원 수를 줄이기 위해"],
    answer: "주식 가치를 높이기 위해",
    explanation:
      "소각은 유통 주식 수를 줄여 희소성을 높이고 기존 주주의 주식 가치를 강화하는 효과가 있다.",
  },
  {
    id: "lv2-cancel-3",
    level: "lv-2",
    topic: "자사주 소각",
    topicIndex: 10,
    type: "OX",
    question: "자사주를 소각하면 해당 주식은 다시 시장에서 거래될 수 있다.",
    answer: "X",
    explanation:
      "소각된 주식은 법적으로 완전히 소멸되므로 재발행이나 거래가 불가능하다.",
  },
  {
    id: "lv2-cancel-4",
    level: "lv-2",
    topic: "자사주 소각",
    topicIndex: 10,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["자사주", "소각", "주주환원"],
    rightItems: [
      "회사가 스스로 보유한 자기 주식",
      "발행된 주식을 법적으로 소멸",
      "기업 이익을 주주에게 되돌려주는 정책",
    ],
    answer: {
      자사주: "회사가 스스로 보유한 자기 주식",
      소각: "발행된 주식을 법적으로 소멸",
      주주환원: "기업 이익을 주주에게 되돌려주는 정책",
    },
    explanation: "자사주 소각은 주주환원 정책의 대표적인 수단이다.",
  },
  {
    id: "lv2-cancel-5",
    level: "lv-2",
    topic: "자사주 소각",
    topicIndex: 10,
    type: "MULTI",
    question: "자사주 소각의 효과로 볼 수 없는 것은 무엇일까?",
    options: ["주식 수 감소", "기존 주주 가치 상승", "신규 자금 조달"],
    answer: "신규 자금 조달",
    explanation:
      "소각은 자본을 줄이는 행위이지 자금을 조달하는 수단이 아니다.",
  },
  {
    id: "lv2-cancel-6",
    level: "lv-2",
    topic: "자사주 소각",
    topicIndex: 10,
    type: "OX",
    question: "자사주 소각은 항상 투자자에게 긍정적인 신호다.",
    answer: "X",
    explanation:
      "보통 호재로 해석되지만 기업이 무리하게 소각을 진행하면 재무 부담이 커질 수 있어 상황별 판단이 필요하다.",
  },
];

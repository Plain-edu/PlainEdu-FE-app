import { QuizItem } from "../types";

export const LV1_COMMON_PREFERRED: QuizItem[] = [
  {
    id: "lv1-common-preferred-1",
    level: "lv-1",
    topic: "보통주 vs 우선주",
    topicIndex: 15,
    type: "OX",
    question:
      "우선주는 보통주보다 배당을 우선해 받을 가능성이 크지만, 의결권은 없는 경우가 많다.",
    answer: "O",
    explanation:
      "우선주는 배당과 청산에서 우선권을 주되 의결권은 제한되는 경우가 많아요.",
  },
  {
    id: "lv1-common-preferred-2",
    level: "lv-1",
    topic: "보통주 vs 우선주",
    topicIndex: 15,
    type: "MULTI",
    question: "회사 경영 의사결정에 참여하고 싶다면 어떤 주식이 더 적합할까요?",
    options: ["보통주", "우선주", "차이가 없다"],
    answer: "보통주",
    explanation:
      "보통주는 의결권이 있어 주총에서 의견을 낼 수 있기 때문에 경영 참여 목적에 더 맞아요.",
  },
  {
    id: "lv1-common-preferred-3",
    level: "lv-1",
    topic: "보통주 vs 우선주",
    topicIndex: 15,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["보통주", "우선주", "의결권"],
    rightItems: [
      "의결권을 가지며 배당은 후순위일 수 있는 주식",
      "배당·청산에서 우선권을 주지만 의결권이 제한될 수 있는 주식",
      "주주총회에서 의사를 표시하고 표결할 수 있는 권리",
    ],
    answer: {
      보통주: "의결권을 가지며 배당은 후순위일 수 있는 주식",
      우선주: "배당·청산에서 우선권을 주지만 의결권이 제한될 수 있는 주식",
      의결권: "주주총회에서 의사를 표시하고 표결할 수 있는 권리",
    },
    explanation:
      "보통주, 우선주, 의결권 세 가지 개념을 구분하면 핵심 차이를 한눈에 이해할 수 있어요.",
  },
  {
    id: "lv1-common-preferred-4",
    level: "lv-1",
    topic: "보통주 vs 우선주",
    topicIndex: 15,
    type: "MULTI",
    question:
      "상대적으로 안정적인 배당 수익을 더 기대하는 투자자에게 일반적으로 더 적합한 선택은 무엇일까요?",
    options: ["보통주", "우선주", "어떤 경우든 차이가 없다"],
    answer: "우선주",
    explanation:
      "우선주는 배당 우선권이 부여되는 구조가 많아 배당 안정성을 선호하는 투자자에게 적합한 경우가 많아요.",
  },
  {
    id: "lv1-common-preferred-5",
    level: "lv-1",
    topic: "보통주 vs 우선주",
    topicIndex: 15,
    type: "OX",
    question:
      "회사が 청산될 때 보통주가 우선주보다 먼저 잔여재산을 배분받는다.",
    answer: "X",
    explanation:
      "일반적으로 우선주가 보통주보다 먼저 배분받는 우선순위를 가져요.",
  },
  {
    id: "lv1-common-preferred-6",
    level: "lv-1",
    topic: "보통주 vs 우선주",
    topicIndex: 15,
    type: "MULTI",
    question: "다음 중 잘못된 설명은 무엇일까요?",
    options: [
      "보통주는 의결권이 있다",
      "우선주는 항상 보통주보다 주식의 가격이 비싸다",
      "우선주는 의결권이 제한될 수 있다",
    ],
    answer: "우선주는 항상 보통주보다 주식의 가격이 비싸다",
    explanation:
      "주가는 시장 상황과 종목 특성에 따라 달라지며 우선주가 더 높다고 볼 수 없어요.",
  },
];

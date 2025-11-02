import { QuizItem } from "../types";

export const LV3_DEBT_RATIO: QuizItem[] = [
  {
    id: "lv3-debt-1",
    level: "lv-3",
    topic: "부채비율",
    topicIndex: 3,
    type: "OX",
    question: "부채비율은 자본 대비 부채의 비율을 나타내는 지표이다.",
    answer: "O",
    explanation: "부채비율은 (부채 ÷ 자본) × 100으로 계산하는 기본적인 재무 안정성 지표예요.",
  },
  {
    id: "lv3-debt-2",
    level: "lv-3",
    topic: "부채비율",
    topicIndex: 3,
    type: "MULTI",
    question:
      "한 기업의 자본이 100억 원이고 부채가 150억 원이라면 부채비율은 몇 %일까요?",
    options: ["150%", "100%", "200%"],
    answer: "150%",
    explanation: "(부채 150 ÷ 자본 100) × 100 = 150%로 계산돼요.",
  },
  {
    id: "lv3-debt-3",
    level: "lv-3",
    topic: "부채비율",
    topicIndex: 3,
    type: "OX",
    question: "일반적으로 부채비율이 100% 이하이면 안정적이라고 평가한다.",
    answer: "O",
    explanation: "자본보다 부채가 적다는 뜻으로, 기업의 재무 안정성이 높다고 볼 수 있어요.",
  },
  {
    id: "lv3-debt-4",
    level: "lv-3",
    topic: "부채비율",
    topicIndex: 3,
    type: "MULTI",
    question: "부채비율이 200%를 넘으면 어떤 의미일까요?",
    options: [
      "재무적으로 매우 안정적임",
      "재무적 위험성이 존재할 수 있음",
      "매출 증가가 보장됨",
    ],
    answer: "재무적 위험성이 존재할 수 있음",
    explanation:
      "부채가 자본보다 훨씬 크면 상환 능력에 대한 불안이 커져요.",
  },
  {
    id: "lv3-debt-5",
    level: "lv-3",
    topic: "부채비율",
    topicIndex: 3,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["부채비율 낮음", "부채비율 높음"],
    rightItems: ["안정적, 장기 지속 가능성 높음", "위험 증가, 상환 부담 큼"],
    answer: {
      "부채비율 낮음": "안정적, 장기 지속 가능성 높음",
      "부채비율 높음": "위험 증가, 상환 부담 큼",
    },
    explanation:
      "투자자는 부채비율을 통해 기업이 얼마나 빚에 의존하는지 확인해요.",
  },
  {
    id: "lv3-debt-6",
    level: "lv-3",
    topic: "부채비율",
    topicIndex: 3,
    type: "OX",
    question: "업종별로 적정 부채비율의 기준은 달라질 수 있다.",
    answer: "O",
    explanation:
      "은행·건설업 등은 높은 부채비율이 일반적이고, IT 기업은 낮은 부채비율이 더 선호돼요.",
  },
];

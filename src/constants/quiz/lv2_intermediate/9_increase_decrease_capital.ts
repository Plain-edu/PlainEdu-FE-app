import { QuizItem } from "../types";

export const LV2_INCREASE_DECREASE_CAPITAL: QuizItem[] = [
  {
    id: "lv2-capital-1",
    level: "lv-2",
    topic: "증자와 감자",
    topicIndex: 8,
    type: "OX",
    question:
      "증자는 기업이 자본금을 늘리기 위해 신주를 발행하는 것을 의미한다.",
    answer: "O",
    explanation:
      "증자는 신주 발행을 통해 자본금을 늘려 재무구조를 강화하거나 사업 자금을 확보하는 과정이다.",
  },
  {
    id: "lv2-capital-2",
    level: "lv-2",
    topic: "증자와 감자",
    topicIndex: 8,
    type: "MULTI",
    question: "기업이 감자를 진행하는 가장 대표적인 이유는 무엇일까?",
    options: [
      "배당금을 확대하기 위해",
      "결손을 보전하거나 재무구조를 개선하기 위해",
      "해외 자회사를 설립하기 위해",
    ],
    answer: "결손을 보전하거나 재무구조를 개선하기 위해",
    explanation:
      "감자는 자본금을 줄여 적자 보전이나 주식 가치 회복을 돕는 방법으로 사용된다.",
  },
  {
    id: "lv2-capital-3",
    level: "lv-2",
    topic: "증자와 감자",
    topicIndex: 8,
    type: "OX",
    question:
      "무상증자는 기존 주주들에게 돈을 받고 신주를 배정하는 방식이다.",
    answer: "X",
    explanation:
      "무상증자는 회사가 보유한 이익잉여금이나 자본잉여금을 활용해 주주들에게 무료로 신주를 배정하는 방식이다.",
  },
  {
    id: "lv2-capital-4",
    level: "lv-2",
    topic: "증자와 감자",
    topicIndex: 8,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["유상증자", "무상증자", "감자"],
    rightItems: [
      "투자자에게 돈을 받고 신주를 발행",
      "기존 주주에게 무료로 신주를 배정",
      "주식 수를 줄여 자본금을 축소",
    ],
    answer: {
      유상증자: "투자자에게 돈을 받고 신주를 발행",
      무상증자: "기존 주주에게 무료로 신주를 배정",
      감자: "주식 수를 줄여 자본금을 축소",
    },
    explanation:
      "증자와 감자의 핵심 개념을 정확히 이해해야 기업의 재무 활동을 해석할 수 있다.",
  },
  {
    id: "lv2-capital-5",
    level: "lv-2",
    topic: "증자와 감자",
    topicIndex: 8,
    type: "MULTI",
    question: "아래 중 증자를 통해 얻을 수 없는 효과는 무엇일까?",
    options: ["신규 자금 조달", "부채 비율 완화", "주식 수 감소"],
    answer: "주식 수 감소",
    explanation:
      "증자는 주식을 새로 발행해 자본금을 늘리는 것이므로 주식 수는 증가하며 감소하지 않는다.",
  },
  {
    id: "lv2-capital-6",
    level: "lv-2",
    topic: "증자와 감자",
    topicIndex: 8,
    type: "OX",
    question: "증자와 감자는 모두 투자자에게 무조건 호재로 작용한다.",
    answer: "X",
    explanation:
      "증자는 희석 효과로 단기 주가 하락 위험이 있고, 감자는 재무개선 의도일 수도 있지만 기업 위기를 반영하기도 한다. 투자자는 맥락을 분석해야 한다.",
  },
];

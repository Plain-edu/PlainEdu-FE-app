import { QuizItem } from "../types";

export const LV3_STOCHASTIC: QuizItem[] = [
  {
    id: "lv3-stc-1",
    level: "lv-3",
    topic: "스토캐스틱",
    topicIndex: 14,
    type: "OX",
    question:
      "스토캐스틱은 일정 기간 주가의 위치를 백분율로 표시해 과매수·과매도 상태를 파악하는 보조지표다.",
    answer: "O",
    explanation:
      "스토캐스틱은 주가가 기간 내 어느 위치에 있는지(0~100%)를 보여주며 과열·침체를 판단하는 데 쓰인다.",
  },
  {
    id: "lv3-stc-2",
    level: "lv-3",
    topic: "스토캐스틱",
    topicIndex: 14,
    type: "MULTI",
    question: "스토캐스틱에서 빠른 신호선과 느린 확인선을 올바르게 짝지은 것은?",
    options: [
      "%K = 빠른 신호선, %D = 느린 확인선",
      "%K = 느린 확인선, %D = 빠른 신호선",
      "%K·%D 모두 속도가 동일",
    ],
    answer: "%K = 빠른 신호선, %D = 느린 확인선",
    explanation: "%K가 먼저 움직이며 이를 확인하기 위해 %D가 뒤따라 움직인다.",
  },
  {
    id: "lv3-stc-3",
    level: "lv-3",
    topic: "스토캐스틱",
    topicIndex: 14,
    type: "OX",
    question:
      "스토캐스틱이 80 이상이면 침체 구간으로, 20 이하이면 과열 구간으로 본다.",
    answer: "X",
    explanation:
      "반대로 80 이상은 과열(매도 경계), 20 이하는 침체(매수 주목) 구간으로 해석한다.",
  },
  {
    id: "lv3-stc-4",
    level: "lv-3",
    topic: "스토캐스틱",
    topicIndex: 14,
    type: "COLOR",
    question: "단어와 뜻을 올바르게 연결하세요!",
    leftItems: ["과열 구간", "침체 구간", "교차 신호"],
    rightItems: [
      "80 이상, 매도 경계",
      "20 이하, 매수 주목",
      "매매 타이밍 힌트",
    ],
    answer: {
      "과열 구간": "80 이상, 매도 경계",
      "침체 구간": "20 이하, 매수 주목",
      "교차 신호": "매매 타이밍 힌트",
    },
    explanation:
      "스토캐스틱 수치와 신호를 정확히 해석하면 보조지표로서 투자 타이밍 판단에 활용할 수 있다.",
  },
  {
    id: "lv3-stc-5",
    level: "lv-3",
    topic: "스토캐스틱",
    topicIndex: 14,
    type: "MULTI",
    question: "스토캐스틱에서 %K와 %D 선이 교차할 때 주는 힌트는?",
    options: [
      "추세가 확정적으로 변한다",
      "매매 타이밍을 가늠할 수 있다",
      "주가가 항상 급등한다",
    ],
    answer: "매매 타이밍을 가늠할 수 있다",
    explanation: "교차 신호는 추세 변화 가능성을 의미하는 보조지표로 활용된다.",
  },
  {
    id: "lv3-stc-6",
    level: "lv-3",
    topic: "스토캐스틱",
    topicIndex: 14,
    type: "MULTI",
    question:
      "스토캐스틱이 20 이하에서 상승 반전을 보인다면 가장 합리적인 해석은?",
    options: [
      "매수 관심이 필요할 수 있다",
      "주가가 반드시 오를 것이 확정",
      "즉시 매도해야 한다",
    ],
    answer: "매수 관심이 필요할 수 있다",
    explanation:
      "20 이하 침체 구간에서 반등 신호가 나타나면 매수 기회 여부를 검토해볼 수 있다.",
  },
];

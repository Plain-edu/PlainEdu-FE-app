import { QuizItem } from "../types";

export const LV3_VOLUME: QuizItem[] = [
  {
    id: "lv3-volume-1",
    level: "lv-3",
    topic: "거래량 분석",
    topicIndex: 9,
    type: "MULTI",
    question: "거래량을 가장 올바르게 설명한 것은?",
    options: [
      "주식 가격이 오르는 속도",
      "얼마만큼 사고팔렸는지를 보여주는 양",
      "기업이익의 변동폭",
    ],
    answer: "얼마만큼 사고팔렸는지를 보여주는 양",
    explanation:
      "거래량은 실제 거래된 수량으로, 가격보다 투자자 관심도를 잘 드러낸다.",
  },
  {
    id: "lv3-volume-2",
    level: "lv-3",
    topic: "거래량 분석",
    topicIndex: 9,
    type: "OX",
    question: "거래량이 많다는 것은 투자자들의 관심이 높다는 것을 의미한다.",
    answer: "O",
    explanation: "거래량은 시장 참여자의 시선이 어디에 모여 있는지를 보여주는 신호다.",
  },
  {
    id: "lv3-volume-3",
    level: "lv-3",
    topic: "거래량 분석",
    topicIndex: 9,
    type: "MULTI",
    question: "거래량이 급증할 때 나타날 수 있는 상황은?",
    options: [
      "상승 시 강세 신호, 하락 시 패닉매도 가능성",
      "항상 주가 급등",
      "시장 관심이 식음",
    ],
    answer: "상승 시 강세 신호, 하락 시 패닉매도 가능성",
    explanation:
      "거래량 증가는 관심 집중 신호이지만, 방향에 따라 해석이 달라진다.",
  },
  {
    id: "lv3-volume-4",
    level: "lv-3",
    topic: "거래량 분석",
    topicIndex: 9,
    type: "OX",
    question:
      "거래량이 줄면 가격 변동의 신뢰도가 낮아지고 시장의 관심이 식었음을 의미할 수 있다.",
    answer: "O",
    explanation:
      "거래량이 적으면 가격 움직임의 신뢰성이 떨어지고 추세 전환 전조일 수 있다.",
  },
  {
    id: "lv3-volume-5",
    level: "lv-3",
    topic: "거래량 분석",
    topicIndex: 9,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["거래량 증가", "거래량 감소", "거래량"],
    rightItems: [
      "투자자 관심 집중",
      "시장 관심 둔화, 추세 전환 가능성",
      "얼마나 사고팔렸는지를 나타내는 양",
    ],
    answer: {
      거래량증가: "투자자 관심 집중",
      거래량감소: "시장 관심 둔화, 추세 전환 가능성",
      거래량: "얼마나 사고팔렸는지를 나타내는 양",
    },
    explanation: "거래량은 투자 심리와 시장 흐름을 읽는 핵심 지표다.",
  },
  {
    id: "lv3-volume-6",
    level: "lv-3",
    topic: "거래량 분석",
    topicIndex: 9,
    type: "OX",
    question:
      "거래량은 주식시장의 ‘심장박동’ 같은 신호로, 가격보다 관심도를 더 잘 보여준다.",
    answer: "O",
    explanation:
      "거래량을 보면 시장의 열기와 투자 심리를 직관적으로 파악할 수 있다.",
  },
];

import { QuizItem } from "../types";

export const LV3_RSI: QuizItem[] = [
  {
    id: "lv3-rsi-1",
    level: "lv-3",
    topic: "RSI",
    topicIndex: 15,
    type: "OX",
    question:
      "RSI(Relative Strength Index)는 주가의 상승·하락 힘의 균형을 측정해 과열·침체 여부를 판단하는 지표다.",
    answer: "O",
    explanation:
      "RSI는 일정 기간 동안 상승폭과 하락폭을 비교해 추세 강도를 백분율로 나타내는 지표다.",
  },
  {
    id: "lv3-rsi-2",
    level: "lv-3",
    topic: "RSI",
    topicIndex: 15,
    type: "MULTI",
    question: "RSI 수치 해석으로 옳은 것은?",
    options: [
      "70 이상 → 침체, 30 이하 → 과열",
      "70 이상 → 과열, 30 이하 → 침체",
      "50 부근 → 확실한 상승 신호",
    ],
    answer: "70 이상 → 과열, 30 이하 → 침체",
    explanation:
      "RSI가 높으면 과매수(과열), 낮으면 과매도(침체)를 의미하며 50 부근은 중립 구간이다.",
  },
  {
    id: "lv3-rsi-3",
    level: "lv-3",
    topic: "RSI",
    topicIndex: 15,
    type: "COLOR",
    question: "RSI 수치와 해석을 올바르게 연결하세요!",
    leftItems: ["70 이상", "30 이하", "50 부근"],
    rightItems: ["과열, 매도 경계", "침체, 매수 주목", "중립, 방향 모호"],
    answer: {
      "70 이상": "과열, 매도 경계",
      "30 이하": "침체, 매수 주목",
      "50 부근": "중립, 방향 모호",
    },
    explanation:
      "RSI 기준을 정확히 이해하면 추세의 강도와 과열·침체 여부를 빠르게 판단할 수 있다.",
  },
  {
    id: "lv3-rsi-4",
    level: "lv-3",
    topic: "RSI",
    topicIndex: 15,
    type: "OX",
    question: "RSI는 항상 단독으로 사용하는 것이 가장 정확하다.",
    answer: "X",
    explanation:
      "RSI는 단독보다는 이동평균선, MACD 등 다른 지표와 함께 사용해야 신뢰도가 높다.",
  },
  {
    id: "lv3-rsi-5",
    level: "lv-3",
    topic: "RSI",
    topicIndex: 15,
    type: "MULTI",
    question:
      "RSI가 하락하는데 주가가 오르고 있다면 보통 어떤 신호일까?",
    options: [
      "강한 상승 지속 신호",
      "추세 전환(하락 가능성) 신호",
      "무조건 매도해야 한다는 확정 신호",
    ],
    answer: "추세 전환(하락 가능성) 신호",
    explanation:
      "가격과 RSI의 방향이 어긋나는 다이버전스는 상승세 약화 및 추세 전환 가능성을 나타낸다.",
  },
  {
    id: "lv3-rsi-6",
    level: "lv-3",
    topic: "RSI",
    topicIndex: 15,
    type: "MULTI",
    question: "RSI가 70 이상일 때 가장 올바른 대응은?",
    options: [
      "무조건 전량 매도",
      "다른 지표와 함께 확인 후 판단",
      "아무런 조치 필요 없음",
    ],
    answer: "다른 지표와 함께 확인 후 판단",
    explanation:
      "RSI는 보조지표일 뿐이며, 과매수 신호는 다른 지표들과 함께 비교해 판단해야 한다.",
  },
];

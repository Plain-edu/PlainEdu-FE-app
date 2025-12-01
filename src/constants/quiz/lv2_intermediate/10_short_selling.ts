import { QuizItem } from "../types";

export const LV2_SHORT_SELLING: QuizItem[] = [
  {
    id: "lv2-short-1",
    level: "lv-2",
    topic: "공매도",
    topicIndex: 9,
    type: "OX",
    question:
      "공매도는 주식이 없는 상태에서 주가 하락을 예상하고 주식을 빌려 먼저 팔고, 나중에 되갚는 투자 방식이다.",
    answer: "O",
    explanation:
      "공매도는 주가 하락에 베팅하는 전략으로, 주식을 빌려 먼저 팔고 나중에 더 낮은 가격에 사서 갚아 차익을 얻는다.",
  },
  {
    id: "lv2-short-2",
    level: "lv-2",
    topic: "공매도",
    topicIndex: 9,
    type: "MULTI",
    question: "투자자가 공매도를 하는 가장 큰 이유는 무엇일까?",
    options: [
      "주가 상승 이익을 얻기 위해",
      "배당금을 받기 위해",
      "주가 하락에서 수익을 얻기 위해",
    ],
    answer: "주가 하락에서 수익을 얻기 위해",
    explanation:
      "공매도는 주가 하락을 예상할 때 차익을 얻기 위한 투자 기법이다.",
  },
  {
    id: "lv2-short-3",
    level: "lv-2",
    topic: "공매도",
    topicIndex: 9,
    type: "OX",
    question:
      "공매도는 이론적으로 손실이 무한대로 커질 수 있는 투자 방식이다.",
    answer: "O",
    explanation:
      "주가는 무한정 상승할 수 있어, 공매도 투자자는 되갚을 때 손실이 무한히 커질 위험이 있다.",
  },
  {
    id: "lv2-short-4",
    level: "lv-2",
    topic: "공매도",
    topicIndex: 9,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["차입 매도", "숏 포지션", "숏 커버링"],
    rightItems: [
      "주식을 빌려서 먼저 파는 것",
      "주가 하락에 베팅하는 투자 포지션",
      "빌린 주식을 다시 사들여 갚는 행위",
    ],
    answer: {
      "차입 매도": "주식을 빌려서 먼저 파는 것",
      "숏 포지션": "주가 하락에 베팅하는 투자 포지션",
      "숏 커버링": "빌린 주식을 다시 사들여 갚는 행위",
    },
    explanation:
      "공매도의 핵심 용어를 이해하면 전체 구조를 쉽게 파악할 수 있다.",
  },
  {
    id: "lv2-short-5",
    level: "lv-2",
    topic: "공매도",
    topicIndex: 9,
    type: "MULTI",
    question: "공매도가 주식시장에 미치는 긍정적 효과는?",
    options: ["주식 유동성 증가", "무조건적인 주가 상승", "기업 배당 확대"],
    answer: "주식 유동성 증가",
    explanation:
      "공매도는 거래량을 늘려 시장 유동성을 높이고 가격 발견 기능에도 기여할 수 있다.",
  },
  {
    id: "lv2-short-6",
    level: "lv-2",
    topic: "공매도",
    topicIndex: 9,
    type: "OX",
    question:
      "공매도는 항상 시장 건전성에 긍정적인 역할만 하므로 규제가 필요하지 않다.",
    answer: "X",
    explanation:
      "공매도는 긍정적 역할도 있지만 과도한 투기나 급락을 유발할 수 있어 규제가 필요하다.",
  },
];

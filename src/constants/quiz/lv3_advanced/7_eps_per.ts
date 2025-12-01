import { QuizItem } from "../types";

export const LV3_EPS_PER: QuizItem[] = [
  {
    id: "lv3-epsper-1",
    level: "lv-3",
    topic: "EPS와 PER",
    topicIndex: 6,
    type: "OX",
    question:
      "EPS는 주당순이익으로 순이익을 발행주식수로 나눈 값이다.",
    answer: "O",
    explanation:
      "EPS는 주주 1주당 벌어들인 이익을 의미하는 기본 수익성 지표다.",
  },
  {
    id: "lv3-epsper-2",
    level: "lv-3",
    topic: "EPS와 PER",
    topicIndex: 6,
    type: "MULTI",
    question: "PER은 무엇을 보여주는 지표일까?",
    options: ["기업의 이익 대비 주가 수준", "기업의 자산가치", "기업의 현금보유량"],
    answer: "기업의 이익 대비 주가 수준",
    explanation:
      "PER은 주가를 EPS로 나눈 배수로, 이익 대비 주가 수준(평가)을 나타낸다.",
  },
  {
    id: "lv3-epsper-3",
    level: "lv-3",
    topic: "EPS와 PER",
    topicIndex: 6,
    type: "OX",
    question:
      "성장성이 높은 기업은 PER이 높아도 합리적일 수 있다.",
    answer: "O",
    explanation:
      "향후 이익 증가 기대가 있으면 현재의 높은 PER이 정당화될 수 있다.",
  },
  {
    id: "lv3-epsper-4",
    level: "lv-3",
    topic: "EPS와 PER",
    topicIndex: 6,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["EPS", "PER", "시가총액"],
    rightItems: [
      "주당순이익(순이익 ÷ 발행주식수)",
      "주가 ÷ EPS(이익 대비 주가 배수)",
      "주가 × 발행주식수",
    ],
    answer: {
      EPS: "주당순이익(순이익 ÷ 발행주식수)",
      PER: "주가 ÷ EPS(이익 대비 주가 배수)",
      시가총액: "주가 × 발행주식수",
    },
    explanation:
      "기본 용어를 알면 기업 가치 비교가 쉬워진다.",
  },
  {
    id: "lv3-epsper-5",
    level: "lv-3",
    topic: "EPS와 PER",
    topicIndex: 6,
    type: "MULTI",
    question: "PER의 한계로 옳지 않은 것은?",
    options: [
      "일시적 이익으로 왜곡될 수 있다",
      "업종별로 적정 범위가 다르다",
      "PER은 기업의 부채 수준을 직접 반영한다",
    ],
    answer: "PER은 기업의 부채 수준을 직접 반영한다",
    explanation:
      "PER은 이익 대비 주가를 보는 지표로 부채 수준은 직접 반영하지 않으므로 다른 지표와 함께 봐야 한다.",
  },
  {
    id: "lv3-epsper-6",
    level: "lv-3",
    topic: "EPS와 PER",
    topicIndex: 6,
    type: "OX",
    question:
      "PER이 낮으면 무조건 '싼 주식'이라고 볼 수 있다.",
    answer: "X",
    explanation:
      "낮은 PER은 문제 있는 이익 수준이나 성장성 부재를 반영할 수 있으므로 추가 분석이 필요하다.",
  },
];

import { QuizItem } from "../types";

export const LV3_BPS_PBR: QuizItem[] = [
  {
    id: "lv3-bpspbr-1",
    level: "lv-3",
    topic: "BPS와 PBR",
    topicIndex: 5,
    type: "OX",
    question: "BPS는 주당순자산가치로 회사의 순자산을 발행주식수로 나눈 값이다.",
    answer: "O",
    explanation:
      "BPS(주당순자산)는 장부상 자기자본을 주식수로 나눈 값으로 자산가치의 기초 지표예요.",
  },
  {
    id: "lv3-bpspbr-2",
    level: "lv-3",
    topic: "BPS와 PBR",
    topicIndex: 5,
    type: "MULTI",
    question: "PBR은 무엇을 나타내는 지표일까?",
    options: ["기업의 수익성 수준", "자산가치 대비 주가 수준", "현금흐름의 안정성"],
    answer: "자산가치 대비 주가 수준",
    explanation:
      "PBR은 주가를 BPS로 나눈 값으로 자산(장부가) 대비 주가 수준을 보여줍니다.",
  },
  {
    id: "lv3-bpspbr-3",
    level: "lv-3",
    topic: "BPS와 PBR",
    topicIndex: 5,
    type: "OX",
    question: "PBR이 1보다 낮으면 무조건 저평가 주식이다.",
    answer: "X",
    explanation:
      "PBR이 낮아도 무형자산이나 자산의 질 문제로 실제 가치와 차이가 날 수 있어 추가 분석이 필요해요.",
  },
  {
    id: "lv3-bpspbr-4",
    level: "lv-3",
    topic: "BPS와 PBR",
    topicIndex: 5,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["BPS", "PBR", "장부가치"],
    rightItems: [
      "주당순자산가치(순자산 ÷ 발행주식수)",
      "주가 ÷ BPS(자산가치 대비 주가)",
      "회계상 자산의 장부 표시 가치",
    ],
    answer: {
      BPS: "주당순자산가치(순자산 ÷ 발행주식수)",
      PBR: "주가 ÷ BPS(자산가치 대비 주가)",
      장부가치: "회계상 자산의 장부 표시 가치",
    },
    explanation: "각 용어 관계를 알면 자산 기반 밸류에이션 이해가 쉬워집니다.",
  },
  {
    id: "lv3-bpspbr-5",
    level: "lv-3",
    topic: "BPS와 PBR",
    topicIndex: 5,
    type: "MULTI",
    question: "PBR로 판단하기 어려운 항목은 무엇일까?",
    options: ["무형자산의 실제 가치", "업종별 적정범위", "장부상 부채 수치"],
    answer: "무형자산의 실제 가치",
    explanation:
      "PBR은 장부가 기준이라 브랜드·지적재산 등 무형자산 가치는 충분히 반영되지 않을 수 있어요.",
  },
  {
    id: "lv3-bpspbr-6",
    level: "lv-3",
    topic: "BPS와 PBR",
    topicIndex: 5,
    type: "OX",
    question: "BPS와 PBR만으로 투자 결론을 내려도 무방하다.",
    answer: "X",
    explanation:
      "자산의 질, 수익성, 업황 등 다른 지표와 함께 종합적으로 판단해야 올바른 투자 결정을 내릴 수 있어요.",
  },
];

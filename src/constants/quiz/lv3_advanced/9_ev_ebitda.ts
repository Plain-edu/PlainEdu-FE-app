import { QuizItem } from "../types";

export const LV3_EV_EBITDA: QuizItem[] = [
  {
    id: "lv3-ev-ebitda-1",
    level: "lv-3",
    topic: "EV/EBITDA",
    topicIndex: 8,
    type: "OX",
    question: "EV는 시가총액에 순부채(총부채−현금)를 더한 기업가치다.",
    answer: "O",
    explanation:
      "EV(Enterprise Value)는 기업의 총가치를 나타내며 시총에 순부채를 더해 계산한다.",
  },
  {
    id: "lv3-ev-ebitda-2",
    level: "lv-3",
    topic: "EV/EBITDA",
    topicIndex: 8,
    type: "MULTI",
    question: "EBITDA는 무엇을 의미할까?",
    options: [
      "이자·세금·감가상각·무형비용 전 영업이익",
      "이자·세금·감가상각 전 영업이익",
      "순이익에서 배당을 더한 값",
    ],
    answer: "이자·세금·감가상각 전 영업이익",
    explanation:
      "EBITDA는 영업현금창출력을 비교할 때 자주 쓰이는 지표다.",
  },
  {
    id: "lv3-ev-ebitda-3",
    level: "lv-3",
    topic: "EV/EBITDA",
    topicIndex: 8,
    type: "OX",
    question:
      "EV/EBITDA 배수가 낮으면 상대적으로 저평가되었을 가능성이 있다.",
    answer: "O",
    explanation:
      "낮은 EV/EBITDA는 기업가치 대비 현금창출력이 높음을 의미할 수 있으나 업종 비교가 필수다.",
  },
  {
    id: "lv3-ev-ebitda-4",
    level: "lv-3",
    topic: "EV/EBITDA",
    topicIndex: 8,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["EV", "EBITDA", "EV/EBITDA"],
    rightItems: [
      "시가총액 + 순부채(기업의 총가치)",
      "이자·세금·감가상각 차감전 영업이익(현금창출력)",
      "기업가치 대비 현금창출력 배수",
    ],
    answer: {
      EV: "시가총액 + 순부채(기업의 총가치)",
      EBITDA: "이자·세금·감가상각 차감전 영업이익(현금창출력)",
      "EV/EBITDA": "기업가치 대비 현금창출력 배수",
    },
    explanation:
      "이 세 가지를 이해하면 밸류에이션 해석이 명확해진다.",
  },
  {
    id: "lv3-ev-ebitda-5",
    level: "lv-3",
    topic: "EV/EBITDA",
    topicIndex: 8,
    type: "MULTI",
    question: "EV/EBITDA 지표의 한계로 옳지 않은 것은?",
    options: [
      "감가상각이 큰 업종은 비교가 어렵다",
      "세금·자본구조 차이를 완전히 반영한다",
      "업종별 적정 배수가 다르다",
    ],
    answer: "세금·자본구조 차이를 완전히 반영한다",
    explanation:
      "EV/EBITDA는 현금창출력 중심이므로 세금·자본구조 차이는 완전히 반영되지 않는다.",
  },
  {
    id: "lv3-ev-ebitda-6",
    level: "lv-3",
    topic: "EV/EBITDA",
    topicIndex: 8,
    type: "OX",
    question: "EV/EBITDA 하나만으로 투자 판단을 내려도 무방하다.",
    answer: "X",
    explanation:
      "EV/EBITDA는 유용하지만 재무구조·성장성·업황 등 다른 지표와 함께 분석해야 한다.",
  },
];

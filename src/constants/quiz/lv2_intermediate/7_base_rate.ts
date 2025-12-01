import { QuizItem } from "../types";

export const LV2_BASE_RATE: QuizItem[] = [
  {
    id: "lv2-base-rate-1",
    level: "lv-2",
    topic: "기준금리",
    topicIndex: 6,
    type: "MULTI",
    question: "기준금리에 대한 설명으로 올바른 것은?",
    options: [
      "시중은행이 자율적으로 정하는 금리",
      "한국은행이 결정하는 대표금리",
      "주식시장이 자동으로 결정하는 금리",
    ],
    answer: "한국은행이 결정하는 대표금리",
    explanation:
      "기준금리는 한국은행이 정하며 시중 모든 금리의 출발점이 된다.",
  },
  {
    id: "lv2-base-rate-2",
    level: "lv-2",
    topic: "기준금리",
    topicIndex: 6,
    type: "OX",
    question: "기준금리가 낮아지면 일반적으로 대출과 투자가 활발해진다.",
    answer: "O",
    explanation:
      "금리가 낮아지면 자금 조달이 쉬워지고 소비·투자가 늘어나 경기 부양 효과가 있다.",
  },
  {
    id: "lv2-base-rate-3",
    level: "lv-2",
    topic: "기준금리",
    topicIndex: 6,
    type: "MULTI",
    question: "투자자가 기준금리를 주목해야 하는 이유는?",
    options: [
      "금리 방향에 따라 자금 흐름이 달라지기 때문",
      "주식 종목명을 정하기 때문",
      "외환시장의 환율을 직접 고정하기 때문",
    ],
    answer: "금리 방향에 따라 자금 흐름이 달라지기 때문",
    explanation:
      "기준금리 변화는 주식·채권 등 자산시장 자금 이동에 큰 영향을 미친다.",
  },
  {
    id: "lv2-base-rate-4",
    level: "lv-2",
    topic: "기준금리",
    topicIndex: 6,
    type: "OX",
    question:
      "기준금리는 ‘경제의 리모컨’이라 불릴 만큼 경기 속도를 조절하는 핵심 역할을 한다.",
    answer: "O",
    explanation:
      "금리를 올리거나 내리며 경기 과열 또는 침체를 조절한다.",
  },
  {
    id: "lv2-base-rate-5",
    level: "lv-2",
    topic: "기준금리",
    topicIndex: 6,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["기준금리", "금리 인하", "금리 인상"],
    rightItems: [
      "한국은행이 정하는 대표금리",
      "소비·투자 확대",
      "대출·소비 억제",
    ],
    answer: {
      기준금리: "한국은행이 정하는 대표금리",
      "금리 인하": "소비·투자 확대",
      "금리 인상": "대출·소비 억제",
    },
    explanation:
      "기준금리는 시장금리의 기준이 되며, 금리 변동 방향에 따라 경기 흐름이 달라진다.",
  },
  {
    id: "lv2-base-rate-6",
    level: "lv-2",
    topic: "기준금리",
    topicIndex: 6,
    type: "OX",
    question:
      "기준금리는 시장의 ‘심장박동수’에 비유되며 주식과 채권 투자 전에 꼭 확인해야 한다.",
    answer: "O",
    explanation:
      "기준금리 방향은 자금의 흐름과 투자심리에 직접적인 영향을 준다.",
  },
];

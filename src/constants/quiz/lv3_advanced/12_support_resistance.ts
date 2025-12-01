import { QuizItem } from "../types";

export const LV3_SUPPORT_RESISTANCE: QuizItem[] = [
  {
    id: "lv3-support-1",
    level: "lv-3",
    topic: "지지선과 저항선",
    topicIndex: 11,
    type: "MULTI",
    question: "지지선과 저항선을 올바르게 설명한 것은?",
    options: [
      "지지선은 주가가 잘 못넘는 천장, 저항선은 주가가 잘 안깨지는 바닥",
      "지지선은 주가가 잘 안깨지는 바닥, 저항선은 주가가 잘 못넘는 천장",
      "지지선과 저항선은 모두 주가의 평균 가격선",
    ],
    answer: "지지선은 주가가 잘 안깨지는 바닥, 저항선은 주가가 잘 못넘는 천장",
    explanation:
      "지지선과 저항선은 각각 바닥과 천장을 의미하며 추세 판단의 기초가 되는 개념이다.",
  },
  {
    id: "lv3-support-2",
    level: "lv-3",
    topic: "지지선과 저항선",
    topicIndex: 11,
    type: "OX",
    question: "주가가 지지선에서 반등한다면 매수세가 유입되고 있다는 신호일 수 있다.",
    answer: "O",
    explanation:
      "지지선 근처에서 반등하면 매수세가 살아있다는 것으로 해석할 수 있다.",
  },
  {
    id: "lv3-support-3",
    level: "lv-3",
    topic: "지지선과 저항선",
    topicIndex: 11,
    type: "OX",
    question: "주가가 저항선을 돌파하지 못하면 상승세가 이어질 가능성이 높아진다.",
    answer: "X",
    explanation:
      "저항선을 돌파하지 못하면 매도세 우위로 상승세가 주춤하거나 하락 전환이 나타날 수 있다.",
  },
  {
    id: "lv3-support-4",
    level: "lv-3",
    topic: "지지선과 저항선",
    topicIndex: 11,
    type: "MULTI",
    question: "지지선이 무너졌을 때 나타날 수 있는 신호는?",
    options: ["기존 상승세 지속", "추세 전환 경고", "변동성 감소"],
    answer: "추세 전환 경고",
    explanation:
      "지지선 붕괴는 매수세 약화를 의미하며 하락 추세로의 전환 가능성을 나타낸다.",
  },
  {
    id: "lv3-support-5",
    level: "lv-3",
    topic: "지지선과 저항선",
    topicIndex: 11,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["지지선", "저항선", "돌파"],
    rightItems: [
      "주가가 잘 안깨지는 바닥",
      "주가가 잘 못넘는 천장",
      "강세 신호 또는 추세 전환",
    ],
    answer: {
      지지선: "주가가 잘 안깨지는 바닥",
      저항선: "주가가 잘 못넘는 천장",
      돌파: "강세 신호 또는 추세 전환",
    },
    explanation:
      "지지·저항은 차트의 핵심 구조이며 돌파는 시장 심리 변화를 가장 명확히 보여주는 신호다.",
  },
  {
    id: "lv3-support-6",
    level: "lv-3",
    topic: "지지선과 저항선",
    topicIndex: 11,
    type: "MULTI",
    question: "주가가 저항선을 강하게 돌파했을 때의 해석으로 가장 적절한 것은?",
    options: [
      "매수세가 약화된 신호",
      "강세 신호로 추가 상승 가능성",
      "즉각적인 하락 반전 가능성",
    ],
    answer: "강세 신호로 추가 상승 가능성",
    explanation:
      "저항선 돌파는 매수세 우위를 나타내며 상승 흐름이 이어질 가능성이 높다.",
  },
];

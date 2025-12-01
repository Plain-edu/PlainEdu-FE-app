import { QuizItem } from "../types";

export const LV3_BOLLINGER: QuizItem[] = [
  {
    id: "lv3-bollinger-1",
    level: "lv-3",
    topic: "볼린저밴드",
    topicIndex: 16,
    type: "OX",
    question:
      "볼린저밴드는 주가 평균선과 변동폭을 표시하고, 상·하단 밴드로 가격 범위를 제시하는 도구다.",
    answer: "O",
    explanation:
      "볼린저밴드는 주가 평균을 중심으로 변동폭을 시각적으로 보여주며 과열·침체 여부를 판단할 수 있다.",
  },
  {
    id: "lv3-bollinger-2",
    level: "lv-3",
    topic: "볼린저밴드",
    topicIndex: 16,
    type: "MULTI",
    question: "볼린저밴드에서 밴드가 좁으면 의미하는 것은?",
    options: ["변동성 감소", "변동성 증가", "가격 상승 확정"],
    answer: "변동성 감소",
    explanation:
      "밴드 폭이 좁으면 가격 변동성이 줄었다는 뜻이며, 폭이 넓어지면 변동성이 커진 것이다.",
  },
  {
    id: "lv3-bollinger-3",
    level: "lv-3",
    topic: "볼린저밴드",
    topicIndex: 16,
    type: "OX",
    question:
      "볼린저밴드의 폭이 변화하면 추세 전환 가능성을 예측할 수 있다.",
    answer: "O",
    explanation:
      "밴드가 좁아지면 변동성 감소 → 새로운 추세 시작 가능성, 밴드가 넓어지면 변동성 증가를 의미한다.",
  },
  {
    id: "lv3-bollinger-4",
    level: "lv-3",
    topic: "볼린저밴드",
    topicIndex: 16,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["상단 터치", "하단 터치", "밴드 폭 좁음"],
    rightItems: ["과열 경계", "침체 주목", "변동성 감소"],
    answer: {
      "상단 터치": "과열 경계",
      "하단 터치": "침체 주목",
      "밴드 폭 좁음": "변동성 감소",
    },
    explanation:
      "가격이 상단·하단 밴드를 터치하는지 여부와 밴드 폭의 변화를 함께 해석하면 시장 상황을 더 정확히 판단할 수 있다.",
  },
  {
    id: "lv3-bollinger-5",
    level: "lv-3",
    topic: "볼린저밴드",
    topicIndex: 16,
    type: "MULTI",
    question: "볼린저밴드를 단독으로만 사용했을 때 나타날 수 있는 한계는?",
    options: [
      "정확도가 떨어질 수 있다",
      "항상 상승·하락 신호가 맞는다",
      "변동성이 0이 된다",
    ],
    answer: "정확도가 떨어질 수 있다",
    explanation:
      "볼린저밴드는 다른 지표와 병행해야 신뢰도가 높다. 단독 사용 시 오신호가 발생할 수 있다.",
  },
  {
    id: "lv3-bollinger-6",
    level: "lv-3",
    topic: "볼린저밴드",
    topicIndex: 16,
    type: "OX",
    question:
      "주가가 상단 밴드를 터치했다고 반드시 즉시 하락한다는 뜻이다.",
    answer: "X",
    explanation:
      "상단 터치는 과열 경계 신호지만 반드시 하락을 의미하는 확정적 신호는 아니다.",
  },
];

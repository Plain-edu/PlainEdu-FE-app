import { QuizItem } from "../types";

export const LV3_GOLDEN_DEAD_CROSS: QuizItem[] = [
  {
    id: "lv3-gdc-1",
    level: "lv-3",
    topic: "골든크로스 vs 데드크로스",
    topicIndex: 13,
    type: "OX",
    question:
      "단기 이동평균선과 장기 이동평균선이 교차하는 지점은 추세 변화의 중요한 신호가 될 수 있다.",
    answer: "O",
    explanation:
      "단기선과 장기선이 교차하면 시장 방향이 바뀔 가능성을 보여주는 핵심 신호다.",
  },
  {
    id: "lv3-gdc-2",
    level: "lv-3",
    topic: "골든크로스 vs 데드크로스",
    topicIndex: 13,
    type: "MULTI",
    question: "골든크로스에 대한 올바른 설명은?",
    options: [
      "장기선이 단기선을 아래로 돌파",
      "단기선이 장기선을 위로 돌파",
      "주가가 횡보하며 교차 없음",
    ],
    answer: "단기선이 장기선을 위로 돌파",
    explanation:
      "골든크로스는 단기선이 장기선을 위로 뚫는 강세 신호로, 상승 전환 가능성을 의미한다.",
  },
  {
    id: "lv3-gdc-3",
    level: "lv-3",
    topic: "골든크로스 vs 데드크로스",
    topicIndex: 13,
    type: "MULTI",
    question: "데드크로스에 대한 올바른 설명은?",
    options: [
      "단기선이 장기선을 아래로 돌파",
      "장기선이 단기선을 위로 돌파",
      "주가가 급등 후 급락",
    ],
    answer: "단기선이 장기선을 아래로 돌파",
    explanation:
      "데드크로스는 단기선이 장기선 아래로 내려가는 약세 신호다.",
  },
  {
    id: "lv3-gdc-4",
    level: "lv-3",
    topic: "골든크로스 vs 데드크로스",
    topicIndex: 13,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["교차 신호", "골든크로스", "데드크로스"],
    rightItems: [
      "추세 변화의 힌트 제공",
      "상승 전환 가능성 높음",
      "하락 전환 위험성 경고",
    ],
    answer: {
      "교차 신호": "추세 변화의 힌트 제공",
      골든크로스: "상승 전환 가능성 높음",
      데드크로스: "하락 전환 위험성 경고",
    },
    explanation:
      "교차 신호는 추세 바뀜의 단서이며, 골든크로스는 강세, 데드크로스는 약세 신호로 해석된다.",
  },
  {
    id: "lv3-gdc-5",
    level: "lv-3",
    topic: "골든크로스 vs 데드크로스",
    topicIndex: 13,
    type: "OX",
    question:
      "골든크로스는 투자자들에게 경계 신호, 데드크로스는 희망 신호를 준다.",
    answer: "X",
    explanation:
      "정반대로 골든크로스는 희망 신호(강세), 데드크로스는 경계 신호(약세)다.",
  },
  {
    id: "lv3-gdc-6",
    level: "lv-3",
    topic: "골든크로스 vs 데드크로스",
    topicIndex: 13,
    type: "MULTI",
    question:
      "단기선이 장기선을 위로 돌파했을 때 가장 합리적인 해석은?",
    options: [
      "주가가 항상 오를 것이 확정",
      "상승 전환 가능성이 높아짐",
      "하락세가 더 강해짐",
    ],
    answer: "상승 전환 가능성이 높아짐",
    explanation:
      "교차 신호는 확정이 아니라 가능성을 의미하며 상승 전환 가능성이 커졌다고 해석한다.",
  },
];

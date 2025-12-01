import { QuizItem } from "../types";

export const LV3_MOVING_AVERAGE: QuizItem[] = [
  {
    id: "lv3-ma-1",
    level: "lv-3",
    topic: "이동평균선",
    topicIndex: 12,
    type: "OX",
    question:
      "이동평균선은 일정 기간의 주가 평균을 선으로 표시하여 가격 변동을 부드럽게 보여준다.",
    answer: "O",
    explanation:
      "이동평균선은 복잡한 주가 변화를 부드럽게 만들어 추세를 보기 쉽게 도와준다.",
  },
  {
    id: "lv3-ma-2",
    level: "lv-3",
    topic: "이동평균선",
    topicIndex: 12,
    type: "MULTI",
    question: "단기 이동평균선의 특징으로 올바른 것은?",
    options: [
      "큰 추세를 확인하는 용도",
      "최근 흐름을 빠르게 반영",
      "가격 변동성을 완전히 제거",
    ],
    answer: "최근 흐름을 빠르게 반영",
    explanation: "단기선은 최신 주가 흐름을 민감하게 반영한다.",
  },
  {
    id: "lv3-ma-3",
    level: "lv-3",
    topic: "이동평균선",
    topicIndex: 12,
    type: "OX",
    question: "주가와 이동평균선이 함께 상승한다면 일반적으로 상승 추세로 본다.",
    answer: "O",
    explanation:
      "주가와 이동평균선이 동시에 상승하면 강세 흐름을 의미하는 전형적인 패턴이다.",
  },
  {
    id: "lv3-ma-4",
    level: "lv-3",
    topic: "이동평균선",
    topicIndex: 12,
    type: "MULTI",
    question: "단기선과 장기선의 교차 지점이 투자자에게 의미하는 것은?",
    options: [
      "거래량이 증가했다는 신호",
      "변곡점이 될 수 있는 추세 전환 신호",
      "주가가 항상 상승한다는 확정 신호",
    ],
    answer: "변곡점이 될 수 있는 추세 전환 신호",
    explanation:
      "단기선이 장기선을 위·아래로 교차하면 추세 변화 가능성을 시사하는 중요한 신호다.",
  },
  {
    id: "lv3-ma-5",
    level: "lv-3",
    topic: "이동평균선",
    topicIndex: 12,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["단기선", "장기선", "골든/데드크로스"],
    rightItems: [
      "최근 흐름을 빠르게 반영",
      "큰 추세 확인 용도",
      "추세 전환 신호",
    ],
    answer: {
      단기선: "최근 흐름을 빠르게 반영",
      장기선: "큰 추세 확인 용도",
      "골든/데드크로스": "추세 전환 신호",
    },
    explanation:
      "단기·장기 이동평균선은 서로 다른 역할을 하며, 교차 지점은 추세 전환 시그널이다.",
  },
  {
    id: "lv3-ma-6",
    level: "lv-3",
    topic: "이동평균선",
    topicIndex: 12,
    type: "MULTI",
    question:
      "주가와 이동평균선이 모두 하락하고 있다면 보통 어떻게 해석할 수 있을까?",
    options: ["상승 추세", "하락 추세", "횡보 추세"],
    answer: "하락 추세",
    explanation:
      "주가와 이동평균선이 동시에 하락하면 매도세 우위의 약세 흐름으로 본다.",
  },
];

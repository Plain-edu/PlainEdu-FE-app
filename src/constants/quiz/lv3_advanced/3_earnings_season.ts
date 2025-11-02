import { QuizItem } from "../types";

export const LV3_EARNINGS_SEASON: QuizItem[] = [
  {
    id: "lv3-earn-1",
    level: "lv-3",
    topic: "어닝 시즌",
    topicIndex: 2,
    type: "OX",
    question: "어닝시즌은 기업이 분기 실적을 공개하는 시기를 뜻한다.",
    answer: "O",
    explanation: "어닝시즌은 기업이 투자자에게 성적표를 보여주는 시기예요.",
  },
  {
    id: "lv3-earn-2",
    level: "lv-3",
    topic: "어닝 시즌",
    topicIndex: 2,
    type: "MULTI",
    question: "보통 어닝시즌이 집중되는 달은 언제일까요?",
    options: [
      "1월, 4월, 7월, 10월",
      "3월, 6월, 9월, 12월",
      "2월, 5월, 8월, 11월",
    ],
    answer: "1월, 4월, 7월, 10월",
    explanation:
      "기업은 분기 실적을 발표하므로 분기 직후 달인 1·4·7·10월에 어닝시즌이 열려요.",
  },
  {
    id: "lv3-earn-3",
    level: "lv-3",
    topic: "어닝 시즌",
    topicIndex: 2,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["실적이 좋을 때", "실적이 나쁠 때"],
    rightItems: ["주가에 훈풍이 불어요", "주가가 흔들려요"],
    answer: {
      "실적이 좋을 때": "주가에 훈풍이 불어요",
      "실적이 나쁠 때": "주가가 흔들려요",
    },
    explanation: "어닝시즌 발표 결과는 기업 주가에 직접적인 영향을 줘요.",
  },
  {
    id: "lv3-earn-4",
    level: "lv-3",
    topic: "어닝 시즌",
    topicIndex: 2,
    type: "OX",
    question: "어닝시즌은 투자 타이밍을 판단하는 핵심 자료로 활용된다.",
    answer: "O",
    explanation: "기업의 성적 발표는 투자 전략을 세우는 중요한 참고 자료예요.",
  },
  {
    id: "lv3-earn-5",
    level: "lv-3",
    topic: "어닝 시즌",
    topicIndex: 2,
    type: "MULTI",
    question: "어닝시즌이 ‘시장 이벤트’라고 불리는 이유는 무엇일까요?",
    options: [
      "많은 기업이 동시에 분기 실적을 발표하기 때문에",
      "새로운 주식이 상장되는 시기이기 때문에",
      "주식 배당금을 지급하는 시기이기 때문에",
    ],
    answer: "많은 기업이 동시에 분기 실적을 발표하기 때문에",
    explanation:
      "어닝시즌은 기업 성적표 발표가 몰려 있어 시장 전체가 크게 출렁일 수 있어요.",
  },
  {
    id: "lv3-earn-6",
    level: "lv-3",
    topic: "어닝 시즌",
    topicIndex: 2,
    type: "OX",
    question:
      "어닝시즌에 실적 발표가 예상보다 좋지 않으면, 주가가 하락할 수도 있다.",
    answer: "O",
    explanation:
      "시장은 기대치에 따라 움직이기 때문에 예상보다 낮은 실적은 주가에 악영향을 줄 수 있어요.",
  },
];

import { QuizItem } from "../types";

export const LV1_INVEST_DANGER: QuizItem[] = [
  {
    id: "lv1-invest-danger-1",
    level: "lv-1",
    topic: "투자 위험",
    topicIndex: 6,
    type: "OX",
    question: "투자의 가장 큰 위험은 원금 손실이다.",
    answer: "O",
    explanation:
      "투자에서 가장 무서운 상황은 투자금 자체를 잃는 것이다.",
  },
  {
    id: "lv1-invest-danger-2",
    level: "lv-1",
    topic: "투자 위험",
    topicIndex: 6,
    type: "MULTI",
    question: "주식에서 손해가 발생하는 가장 직접적인 이유는 무엇인가?",
    options: ["회사의 실적이 나빠져 가치가 떨어질 때", "회사의 임직원 수가 줄어들 때", "주식 거래량이 일시적으로 줄어들 때"],
    answer: "회사의 실적이 나빠져 가치가 떨어질 때",
    explanation: "실적 악화 → 기업 가치 하락 → 주가 하락으로 이어져 손해가 발생한다.",
  },
  {
    id: "lv1-invest-danger-3",
    level: "lv-1",
    topic: "투자 위험",
    topicIndex: 6,
    type: "OX",
    question: "회사 실적이 좋아도 전쟁, 물가 상승 같은 외부 요인으로 손해가 발생할 수 있다.",
    answer: "O",
    explanation:
      "외부 환경 변화는 기업 실적과 무관하게 주가를 끌어내릴 수 있다.",
  },
  {
    id: "lv1-invest-danger-4",
    level: "lv-1",
    topic: "투자 위험",
    topicIndex: 6,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["원금 손실", "외부 요인", "대응"],
    rightItems: [
      "투자금 자체를 잃는 것",
      "전쟁, 물가 상승, 경제 위기 등 주가에 영향을 주는 환경",
      "예상과 다른 상황에 빠르게 판단하고 움직이는 것",
    ],
    answer: {
      채권: "투자금 자체를 잃는 것",
      이자: "전쟁, 물가 상승, 경제 위기 등 주가에 영향을 주는 환경",
      신용도: "예상과 다른 상황에 빠르게 판단하고 움직이는 것",
    },
    explanation:
      "손해를 줄이려면 외부 요인을 고려하고 발빠르게 대응해야 한다.",
  },
  {
    id: "lv1-invest-danger-5",
    level: "lv-1",
    topic: "투자 위험",
    topicIndex: 6,
    type: "MULTI",
    question: "투자에서 손해를 최소화하는 핵심 비결은 무엇인가?",
    options: [
      "예측이 빗나가도 무조건 버티기",
      "예상과 다른 상황에 빠르게 대응하기",
      "외부 요인을 무시하기",
    ],
    answer: "예상과 다른 상황에 빠르게 대응하기",
    explanation: "발빠른 판단과 대처가 손해를 줄이는 핵심이다.",
  },
  {
    id: "lv1-invest-danger-6",
    level: "lv-1",
    topic: "투자 위험",
    topicIndex: 6,
    type: "OX",
    question: "주식에서 손해는 항상 투자자의 잘못 때문만 발생한다.",
    answer: "X",
    explanation:
      "손해는 기업 실적 악화뿐 아니라 전쟁, 물가 상승 같은 외부 요인으로도 생긴다.",
  },
];

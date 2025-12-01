import { QuizItem } from "../types";

export const LV1_BOND_INTRO: QuizItem[] = [
  {
    id: "lv1-bond-1",
    level: "lv-1",
    topic: "채권이란?",
    topicIndex: 5,
    type: "OX",
    question: "채권은 회사나 국가가 돈을 빌리기 위해 발행하는 증서이다.",
    answer: "O",
    explanation:
      "채권은 발행 주체가 자금을 조달하기 위해 개인이나 기관에게 빌리고 그 증거로 발행합니다.",
  },
  {
    id: "lv1-bond-2",
    level: "lv-1",
    topic: "채권이란?",
    topicIndex: 5,
    type: "MULTI",
    question: "채권을 사면 얻게 되는 주요 이익은 무엇인가?",
    options: ["주식 배당금", "약속된 이자 수익", "부동산 임대료"],
    answer: "약속된 이자 수익",
    explanation: "채권 투자자는 정해진 기간 동안 이자를 받고, 만기 시 원금을 돌려받습니다.",
  },
  {
    id: "lv1-bond-3",
    level: "lv-1",
    topic: "채권이란?",
    topicIndex: 5,
    type: "OX",
    question: "회사나 국가가 발행하는 채권은 절대 손실 위험이 없다.",
    answer: "X",
    explanation:
      "규모가 커도 부도 가능성이 있으므로 발행 주체의 신용도를 반드시 확인해야 합니다.",
  },
  {
    id: "lv1-bond-4",
    level: "lv-1",
    topic: "채권이란?",
    topicIndex: 6,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["채권", "이자", "신용도"],
    rightItems: [
      "돈을 빌려주고 받는 증서",
      "돈을 빌린 대가로 지급하는 약속된 수익",
      "발행 주체가 빚을 갚을 수 있는 능력",
    ],
    answer: {
      채권: "돈을 빌려주고 받는 증서",
      이자: "돈을 빌린 대가로 지급하는 약속된 수익",
      신용도: "발행 주체가 빚을 갚을 수 있는 능력",
    },
    explanation:
      "채권은 발행 주체의 신용도를 고려해 투자해야 하며, 이자를 통해 수익을 얻습니다.",
  },
  {
    id: "lv1-bond-5",
    level: "lv-1",
    topic: "채권이란?",
    topicIndex: 5,
    type: "MULTI",
    question: "다음 중 채권에 대한 설명으로 옳은 것은?",
    options: [
      "돈을 빌려주는 증서이며, 만기에 이자를 받는다",
      "주식처럼 기업의 소유권을 의미한다",
      "원금 보장이 100% 확실하다",
    ],
    answer: "돈을 빌려주는 증서이며, 만기에 이자를 받는다",
    explanation: "채권은 소유권이 아닌 채권자와 발행자 간의 ‘돈 빌림 증서’입니다.",
  },
  {
    id: "lv1-bond-6",
    level: "lv-1",
    topic: "채권이란?",
    topicIndex: 5,
    type: "OX",
    question: "채권을 살 때는 발행 주체의 신용도를 꼭 확인해야 한다.",
    answer: "O",
    explanation:
      "부도 시 원금을 회수하지 못할 수 있으므로 신용도가 높은 주체에 투자해야 합니다.",
  },
];

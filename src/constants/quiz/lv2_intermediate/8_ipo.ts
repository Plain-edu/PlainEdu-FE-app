import { QuizItem } from "../types";

export const LV2_IPO: QuizItem[] = [
  {
    id: "lv2-ipo-1",
    level: "lv-2",
    topic: "IPO",
    topicIndex: 7,
    type: "OX",
    question:
      "IPO는 기업이 처음으로 일반 투자자에게 주식을 공개해 자금을 조달하는 것을 의미한다.",
    answer: "O",
    explanation:
      "IPO(Initial Public Offering)는 기업이 자본시장에서 자금을 모으기 위해 주식을 처음으로 공개하는 과정이다.",
  },
  {
    id: "lv2-ipo-2",
    level: "lv-2",
    topic: "IPO",
    topicIndex: 7,
    type: "MULTI",
    question: "기업이 IPO를 하는 가장 큰 이유는 무엇일까?",
    options: [
      "직원 수를 늘리기 위해",
      "자금을 조달하기 위해",
      "회사를 해외로 이전하기 위해",
    ],
    answer: "자금을 조달하기 위해",
    explanation:
      "IPO의 핵심 목적은 사업 확장, 연구개발, 부채 상환 등을 위한 자금 조달이다.",
  },
  {
    id: "lv2-ipo-3",
    level: "lv-2",
    topic: "IPO",
    topicIndex: 7,
    type: "OX",
    question: "IPO 주식은 항상 투자자에게 높은 수익을 보장한다.",
    answer: "X",
    explanation:
      "일부 IPO는 높은 수익을 주기도 하지만, 기대보다 낮은 성과로 주가가 하락하는 경우도 있다.",
  },
  {
    id: "lv2-ipo-4",
    level: "lv-2",
    topic: "IPO",
    topicIndex: 7,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["공모주", "상장", "기업공개"],
    rightItems: [
      "일반 투자자에게 배정된 주식",
      "증권거래소에서 주식 거래 시작",
      "회사가 주식을 시장에 처음 내놓는 것",
    ],
    answer: {
      공모주: "일반 투자자에게 배정된 주식",
      상장: "증권거래소에서 주식 거래 시작",
      기업공개: "회사가 주식을 시장에 처음 내놓는 것",
    },
    explanation:
      "IPO와 관련된 주요 용어를 이해해야 투자 판단이 더 정확해진다.",
  },
  {
    id: "lv2-ipo-5",
    level: "lv-2",
    topic: "IPO",
    topicIndex: 7,
    type: "MULTI",
    question: "IPO 과정에 포함되지 않는 것은 무엇일까?",
    options: ["증권사 선정", "기업 가치 평가", "배당금 지급"],
    answer: "배당금 지급",
    explanation:
      "IPO는 증권사 선정, 기업 가치 평가, 공모가 산정 등의 절차로 이루어지며 배당은 IPO 과정과 직접적 관련이 없다.",
  },
  {
    id: "lv2-ipo-6",
    level: "lv-2",
    topic: "IPO",
    topicIndex: 7,
    type: "OX",
    question:
      "IPO 투자에서 가장 큰 매력은 ‘성장 초기 기업에 투자할 기회’이지만, 동시에 ‘정보 부족에 따른 위험’도 크다.",
    answer: "O",
    explanation:
      "IPO는 투자 기회와 리스크가 공존한다. 특히 상장 전 정보가 제한적이어서 불확실성이 높다.",
  },
];

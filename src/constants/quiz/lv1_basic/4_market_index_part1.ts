import { QuizItem } from "../types";

export const LV1_MARKET_INDEX_PART1: QuizItem[] = [
  {
    id: "lv1-marketindex1-1",
    level: "lv-1",
    topic: "지수의 종류 1편",
    topicIndex: 3,
    type: "OX",
    question: "나스닥, S&P500, 코스피는 모두 특정 국가나 산업을 대표하는 주식 지수이다.",
    answer: "O",
    explanation:
      "각 지수는 국가 또는 산업별 대표 기업을 모아 시장의 흐름을 보여줍니다.",
  },
  {
    id: "lv1-marketindex1-2",
    level: "lv-1",
    topic: "지수의 종류 1편",
    topicIndex: 3,
    type: "MULTI",
    question: "나스닥 지수가 주로 보여주는 것은 무엇인가?",
    options: [
      "미국 내 제조업 흐름",
      "전 세계 기술 산업 성장과 분위기",
      "한국의 대기업 성과",
    ],
    answer: "전 세계 기술 산업 성장과 분위기",
    explanation:
      "나스닥에는 애플, 마이크로소프트, 구글 등 세계적인 기술 기업이 포함됩니다.",
  },
  {
    id: "lv1-marketindex1-3",
    level: "lv-1",
    topic: "지수의 종류 1편",
    topicIndex: 3,
    type: "MULTI",
    question: "S&P500 지수의 특징으로 올바른 것은?",
    options: [
      "미국의 중소기업 위주로 구성된다",
      "미국과 세계 시장 모두에 영향력이 크다",
      "한국 경제의 흐름을 보여준다",
    ],
    answer: "미국과 세계 시장 모두에 영향력이 크다",
    explanation:
      "S&P500은 미국 대표 대기업 500개로 구성되어 있으며 글로벌 영향력이 큽니다.",
  },
  {
    id: "lv1-marketindex1-4",
    level: "lv-1",
    topic: "지수의 종류 1편",
    topicIndex: 3,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["나스닥", "S&P500", "코스피"],
    rightItems: [
      "전 세계 기술 기업 중심 지수",
      "미국 대기업 500개로 구성된 지수",
      "한국 대기업 약 800개로 구성된 지수",
    ],
    answer: {
      나스닥: "전 세계 기술 기업 중심 지수",
      "S&P500": "미국 대기업 500개로 구성된 지수",
      코스피: "한국 대기업 약 800개로 구성된 지수",
    },
    explanation: "각 지수는 대표 기업을 선별해 시장의 흐름을 나타냅니다.",
  },
  {
    id: "lv1-marketindex1-5",
    level: "lv-1",
    topic: "지수의 종류 1편",
    topicIndex: 3,
    type: "OX",
    question: "코스피는 한국 경제 전반의 흐름을 나타내는 지수이다.",
    answer: "O",
    explanation:
      "코스피는 삼성전자, 현대차 등 국내 대기업 약 800개로 구성되어 한국 경제를 대표합니다.",
  },
  {
    id: "lv1-marketindex1-6",
    level: "lv-1",
    topic: "지수의 종류 1편",
    topicIndex: 3,
    type: "MULTI",
    question: "다음 중 잘못 설명된 것은?",
    options: [
      "나스닥은 글로벌 기술 기업 중심이다",
      "S&P500은 미국 대기업으로 구성된다",
      "코스피는 미국의 경제 흐름을 보여준다",
    ],
    answer: "코스피는 미국의 경제 흐름을 보여준다",
    explanation: "코스피는 한국 경제 전반을 보여주는 지수입니다.",
  },
];

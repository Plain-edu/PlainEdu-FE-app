import { QuizItem } from "../types";

export const LV1_MARKET_INDEX: QuizItem[] = [
  {
    id: "lv1-marketindex-1",
    level: "lv-1",
    topic: "지수는 어떻게 만들어질까?",
    topicIndex: 2,
    type: "OX",
    question: "지수가 오르면 특정 회사의 주가만 오른다는 뜻이다.",
    answer: "X",
    explanation:
      "지수는 ‘대표 팀’의 전체 성적표이므로, 특정 회사가 아닌 시장 전반의 흐름을 보여줍니다.",
  },
  {
    id: "lv1-marketindex-2",
    level: "lv-1",
    topic: "지수는 어떻게 만들어질까?",
    topicIndex: 2,
    type: "MULTI",
    question: "주식 시장에서 ‘지수’가 의미하는 것은 무엇인가?",
    options: [
      "개별 회사의 부채 수준",
      "국가·산업별 대표 기업 가치의 평균",
      "증권사별 추천 종목",
    ],
    answer: "국가·산업별 대표 기업 가치의 평균",
    explanation:
      "지수는 국가·산업별 우량 기업을 선별해 평균 가치로 나타낸 수치입니다.",
  },
  {
    id: "lv1-marketindex-3",
    level: "lv-1",
    topic: "지수는 어떻게 만들어질까?",
    topicIndex: 2,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["S&P500", "선발 기준", "지수"],
    rightItems: [
      "미국을 대표하는 500개 기업 지수",
      "국가·산업 대표성, 시가총액 등",
      "주식 시장 대표팀의 성적표",
    ],
    answer: {
      "S&P500": "미국을 대표하는 500개 기업 지수",
      "선발 기준": "국가·산업 대표성, 시가총액 등",
      지수: "주식 시장 대표팀의 성적표",
    },
    explanation:
      "지수는 어떤 기업이 대표성을 갖는지 기준에 따라 선발해 만든 것입니다.",
  },
  {
    id: "lv1-marketindex-4",
    level: "lv-1",
    topic: "지수는 어떻게 만들어질까?",
    topicIndex: 2,
    type: "OX",
    question:
      "지수는 국가·산업별로 ‘좋은 회사’를 뽑아 그 가치를 평균한 숫자이다.",
    answer: "O",
    explanation:
      "지수는 대표 기업들의 성적을 집계해 평균으로 나타낸 지표입니다.",
  },
  {
    id: "lv1-marketindex-5",
    level: "lv-1",
    topic: "지수는 어떻게 만들어질까?",
    topicIndex: 2,
    type: "MULTI",
    question: "지수를 통해 알 수 있는 것은 무엇인가?",
    options: [
      "특정 기업의 향후 배당금",
      "시장 전체의 전반적인 흐름",
      "증권사별 추천 종목 순위",
    ],
    answer: "시장 전체의 전반적인 흐름",
    explanation: "지수는 시장 전반의 온도계 역할을 합니다.",
  },
  {
    id: "lv1-marketindex-6",
    level: "lv-1",
    topic: "지수는 어떻게 만들어질까?",
    topicIndex: 2,
    type: "OX",
    question: "지수가 하락하면 그 시장 전체 분위기가 전반적으로 좋지 않다는 뜻이다.",
    answer: "O",
    explanation:
      "지수는 시장 전반의 성과를 집계한 지표이므로, 하락은 전반적 부진을 의미합니다.",
  },
];

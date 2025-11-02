import { QuizItem } from "../types";

export const LV1_MARKET_INDEX_PART2: QuizItem[] = [
  {
    id: "lv1-marketindex2-1",
    level: "lv-1",
    topic: "지수의 종류 2편",
    topicIndex: 4,
    type: "OX",
    question: "다우존스, 러셀2000, 코스닥은 모두 국가나 기업 규모별 특징이 뚜렷한 지수이다.",
    answer: "O",
    explanation:
      "각 지수는 구성 기업과 성격에 따라 대표성과 의미가 달라집니다.",
  },
  {
    id: "lv1-marketindex2-2",
    level: "lv-1",
    topic: "지수의 종류 2편",
    topicIndex: 4,
    type: "MULTI",
    question: "다우존스 지수의 특징으로 올바른 것은?",
    options: [
      "미국의 대형 우량기업 30개로 구성된다",
      "미국의 시가총액 1001~3000위 기업으로 구성된다",
      "한국의 기술 중소기업 위주로 구성된다",
    ],
    answer: "미국의 대형 우량기업 30개로 구성된다",
    explanation:
      "다우존스 지수는 소수 정예의 안정적 대형 우량기업으로 구성됩니다.",
  },
  {
    id: "lv1-marketindex2-3",
    level: "lv-1",
    topic: "지수의 종류 2편",
    topicIndex: 4,
    type: "MULTI",
    question: "러셀2000 지수는 어떤 특징을 가진 기업들로 구성되는가?",
    options: [
      "미국 대형 우량기업",
      "미국의 성장 잠재력이 높은 중소형주",
      "한국의 중견기업",
    ],
    answer: "미국의 성장 잠재력이 높은 중소형주",
    explanation:
      "러셀2000 지수는 시가총액 1001~3000위의 기업으로 구성되어 성장성이 높습니다.",
  },
  {
    id: "lv1-marketindex2-4",
    level: "lv-1",
    topic: "지수의 종류 2편",
    topicIndex: 4,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["다우존스", "러셀2000", "코스닥"],
    rightItems: [
      "미국의 대형 우량기업 30개로 구성된 안정 지수",
      "성장 잠재력이 큰 미국 중소형주 중심 지수",
      "기술력과 성장성이 높은 한국 중소·중견기업 중심 지수",
    ],
    answer: {
      다우존스: "미국의 대형 우량기업 30개로 구성된 안정 지수",
      러셀2000: "성장 잠재력이 큰 미국 중소형주 중심 지수",
      코스닥: "기술력과 성장성이 높은 한국 중소·중견기업 중심 지수",
    },
    explanation:
      "각 지수는 대표 기업 성격과 시장 규모에 따라 다른 의미를 가집니다.",
  },
  {
    id: "lv1-marketindex2-5",
    level: "lv-1",
    topic: "지수의 종류 2편",
    topicIndex: 4,
    type: "OX",
    question: "코스닥은 한국의 유망 중소·중견기업을 중심으로 구성된 성장 지수이다.",
    answer: "O",
    explanation:
      "코스닥은 셀트리온, 카카오게임즈 등 성장성이 높은 기업이 포함된 지수입니다.",
  },
  {
    id: "lv1-marketindex2-6",
    level: "lv-1",
    topic: "지수의 종류 2편",
    topicIndex: 4,
    type: "MULTI",
    question: "다음 중 설명이 잘못된 것은?",
    options: [
      "다우존스는 안정성이 큰 미국 대형 우량기업 지수다",
      "러셀2000은 미국의 미래 성장 기업 지수다",
      "코스닥은 미국의 대기업 중심 지수다",
    ],
    answer: "코스닥은 미국의 대기업 중심 지수다",
    explanation:
      "코스닥은 한국의 기술력·성장성이 높은 중소·중견기업 중심 지수입니다.",
  },
];

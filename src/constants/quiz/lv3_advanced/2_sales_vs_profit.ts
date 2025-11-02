import { QuizItem } from "../types";

export const LV3_SALES_VS_PROFIT: QuizItem[] = [
  {
    id: "lv3-sales-1",
    level: "lv-3",
    topic: "매출 vs 영업이익",
    topicIndex: 1,
    type: "OX",
    question: "매출은 회사가 물건·서비스를 판매한 금액을 말한다.",
    answer: "O",
    explanation: "매출은 기업의 크기를 보여주는 대표 지표예요.",
  },
  {
    id: "lv3-sales-2",
    level: "lv-3",
    topic: "매출 vs 영업이익",
    topicIndex: 1,
    type: "MULTI",
    question: "영업이익은 무엇을 의미할까요?",
    options: [
      "매출에서 비용을 뺀 순이익",
      "세금을 뺀 최종 이익",
      "투자로 얻은 이익",
    ],
    answer: "매출에서 비용을 뺀 순이익",
    explanation: "영업이익은 본업에서 실제로 얼마나 돈을 벌었는지 보여주는 지표예요.",
  },
  {
    id: "lv3-sales-3",
    level: "lv-3",
    topic: "매출 vs 영업이익",
    topicIndex: 1,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["매출", "영업이익"],
    rightItems: ["기업의 크기를 보여주는 지표", "돈 버는 힘을 나타내는 지표"],
    answer: {
      매출: "기업의 크기를 보여주는 지표",
      영업이익: "돈 버는 힘을 나타내는 지표",
    },
    explanation:
      "매출과 영업이익은 서로 다른 의미를 가지며, 함께 봐야 기업의 실적을 제대로 이해할 수 있어요.",
  },
  {
    id: "lv3-sales-4",
    level: "lv-3",
    topic: "매출 vs 영업이익",
    topicIndex: 1,
    type: "OX",
    question: "매출이 크면 반드시 기업이 흑자라고 볼 수 있다.",
    answer: "X",
    explanation: "매출이 커도 비용이 많으면 적자가 날 수 있어요.",
  },
  {
    id: "lv3-sales-5",
    level: "lv-3",
    topic: "매출 vs 영업이익",
    topicIndex: 1,
    type: "MULTI",
    question:
      "투자자가 기업의 실질적인 경쟁력을 파악하기 위해 반드시 봐야 할 지표는 무엇일까요?",
    options: ["매출", "영업이익", "직원 수"],
    answer: "영업이익",
    explanation:
      "영업이익은 본업에서 돈을 버는 힘을 보여주기 때문에 기업의 경쟁력을 파악하는 핵심 지표예요.",
  },
  {
    id: "lv3-sales-6",
    level: "lv-3",
    topic: "매출 vs 영업이익",
    topicIndex: 1,
    type: "OX",
    question:
      "투자자는 매출과 영업이익을 함께 고려해야 기업의 가치를 올바르게 판단할 수 있다.",
    answer: "O",
    explanation:
      "매출만 보면 위험하고, 영업이익만 봐도 부족해요. 두 지표를 함께 보는 것이 올바른 투자 판단의 기본이에요.",
  },
];

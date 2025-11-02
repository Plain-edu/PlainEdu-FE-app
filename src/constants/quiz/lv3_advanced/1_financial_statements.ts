import { QuizItem } from "../types";

export const LV3_FINANCIAL_STATEMENTS: QuizItem[] = [
  {
    id: "lv3-fin-1",
    level: "lv-3",
    topic: "재무제표",
    topicIndex: 0,
    type: "OX",
    question: "재무제표는 기업의 돈 흐름을 보여주는 표로, 재산·부채·수익·비용을 기록한 것이다.",
    answer: "O",
    explanation: "재무제표는 기업의 자산과 부채, 수익과 비용을 종합해 보여주는 자료예요.",
  },
  {
    id: "lv3-fin-2",
    level: "lv-3",
    topic: "재무제표",
    topicIndex: 0,
    type: "MULTI",
    question: "다음 중 재무제표의 종류가 아닌 것은 무엇일까요?",
    options: ["재무상태표", "손익계산서", "영업계획표"],
    answer: "영업계획표",
    explanation:
      "재무제표에는 재무상태표, 손익계산서, 현금흐름표가 대표적이에요. 영업계획표는 경영계획 자료예요.",
  },
  {
    id: "lv3-fin-3",
    level: "lv-3",
    topic: "재무제표",
    topicIndex: 0,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["재무상태표", "손익계산서", "현금흐름표"],
    rightItems: ["자산·부채 확인", "수익·비용 파악", "돈의 이동 추적"],
    answer: {
      재무상태표: "자산·부채 확인",
      손익계산서: "수익·비용 파악",
      현금흐름표: "돈의 이동 추적",
    },
    explanation:
      "각 재무제표는 기업의 다른 측면을 보여주며, 함께 봐야 전체적인 재무 상황을 알 수 있어요.",
  },
  {
    id: "lv3-fin-4",
    level: "lv-3",
    topic: "재무제표",
    topicIndex: 0,
    type: "OX",
    question: "투자자는 기업의 재무제표 없이도 기업의 건강성을 충분히 판단할 수 있다.",
    answer: "X",
    explanation: "재무제표는 기업의 건강 검진표로, 투자 전 반드시 확인해야 하는 핵심 자료예요.",
  },
  {
    id: "lv3-fin-5",
    level: "lv-3",
    topic: "재무제표",
    topicIndex: 0,
    type: "MULTI",
    question: "기업의 현금 흐름을 가장 잘 보여주는 재무제표는 무엇일까요?",
    options: ["재무상태표", "손익계산서", "현금흐름표"],
    answer: "현금흐름표",
    explanation:
      "손익계산서와 달리 현금흐름표는 실제 돈이 들어오고 나간 흐름을 보여줘요.",
  },
  {
    id: "lv3-fin-6",
    level: "lv-3",
    topic: "재무제표",
    topicIndex: 0,
    type: "OX",
    question: "가치투자자는 재무제표를 통해 기업의 내재가치와 장기적 성장 가능성을 분석한다.",
    answer: "O",
    explanation:
      "가치투자의 핵심은 기업의 본질적 가치를 평가하는 것이며, 그 출발점이 바로 재무제표예요.",
  },
];

import { QuizItem } from "../types";

export const LV3_ROE: QuizItem[] = [
  {
    id: "lv3-roe-1",
    level: "lv-3",
    topic: "ROE",
    topicIndex: 7,
    type: "OX",
    question: "ROE는 자기자본 대비 순이익 비율을 의미한다.",
    answer: "O",
    explanation:
      "ROE는 주주의 자본이 얼마나 효율적으로 이익을 창출하는지 보여준다.",
  },
  {
    id: "lv3-roe-2",
    level: "lv-3",
    topic: "ROE",
    topicIndex: 7,
    type: "MULTI",
    question: "ROE를 듀퐁식으로 분해할 때 포함되지 않는 항목은?",
    options: [
      "순이익률(Profit margin)",
      "자산회전율(Asset turnover)",
      "영업현금흐름(Operating cash flow)",
    ],
    answer: "영업현금흐름(Operating cash flow)",
    explanation:
      "듀퐁분해는 순이익률 × 자산회전율 × 재무레버리지(또는 자본배율)를 사용한다.",
  },
  {
    id: "lv3-roe-3",
    level: "lv-3",
    topic: "ROE",
    topicIndex: 7,
    type: "OX",
    question: "높은 ROE는 항상 우수한 기업을 의미한다.",
    answer: "X",
    explanation:
      "높은 ROE가 과도한 레버리지나 일회성 이익에 기인할 수 있어 원인을 파악해야 한다.",
  },
  {
    id: "lv3-roe-4",
    level: "lv-3",
    topic: "ROE",
    topicIndex: 7,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["ROE", "자산회전율", "재무레버리지"],
    rightItems: [
      "자기자본이익률(순이익 ÷ 자기자본)",
      "매출 ÷ 총자산(자산의 효율성)",
      "총자산 ÷ 자기자본(차입도 반영)",
    ],
    answer: {
      ROE: "자기자본이익률(순이익 ÷ 자기자본)",
      자산회전율: "매출 ÷ 총자산(자산의 효율성)",
      재무레버리지: "총자산 ÷ 자기자본(차입도 반영)",
    },
    explanation:
      "각 요소를 보면 ROE의 원인을 파악하기 쉽다.",
  },
  {
    id: "lv3-roe-5",
    level: "lv-3",
    topic: "ROE",
    topicIndex: 7,
    type: "MULTI",
    question: "ROE가 높을 때 투자자가 특히 확인해야 할 사항은?",
    options: ["일시적 이익 요인 여부", "배당성향의 절대값", "종업원 수 변화"],
    answer: "일시적 이익 요인 여부",
    explanation:
      "ROE 상승이 지속 가능한 이익 증가인지, 혹은 일회적 요인인지 확인해야 한다.",
  },
  {
    id: "lv3-roe-6",
    level: "lv-3",
    topic: "ROE",
    topicIndex: 7,
    type: "OX",
    question: "업종 평균보다 ROE가 높은 기업은 무조건 안전한 투자다.",
    answer: "X",
    explanation:
      "업종 평균 대비 높아도 그 원인이 레버리지 증가라면 리스크가 클 수 있다.",
  },
];

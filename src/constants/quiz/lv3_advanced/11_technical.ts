import { QuizItem } from "../types";

export const LV3_TECHNICAL: QuizItem[] = [
  {
    id: "lv3-technical-1",
    level: "lv-3",
    topic: "기술적 분석",
    topicIndex: 10,
    type: "MULTI",
    question: "기술적 분석의 가장 적절한 설명은?",
    options: [
      "기업 재무제표를 분석해 기업가치를 평가",
      "과거 가격·거래량 패턴을 분석해 미래 주가를 예측 시도",
      "주식시장 뉴스를 종합해 투자 타이밍 판단",
    ],
    answer: "과거 가격·거래량 패턴을 분석해 미래 주가를 예측 시도",
    explanation:
      "기술적 분석은 차트를 활용해 시장 참여자의 심리를 읽고 가격 변화를 전망하는 방법이다.",
  },
  {
    id: "lv3-technical-2",
    level: "lv-3",
    topic: "기술적 분석",
    topicIndex: 10,
    type: "OX",
    question:
      "차트에서는 지지선과 저항선을 통해 주가의 상승과 하락 가능성을 파악할 수 있다.",
    answer: "O",
    explanation:
      "지지선과 저항선은 가격이 멈추거나 반전되는 지점을 짐작하게 해주는 핵심 기준이다.",
  },
  {
    id: "lv3-technical-3",
    level: "lv-3",
    topic: "기술적 분석",
    topicIndex: 10,
    type: "MULTI",
    question: "차트로 투자 기회를 포착할 때 가장 필요한 접근은?",
    options: [
      "추세 전환 신호와 거래량·패턴을 함께 확인",
      "단일 지표 하나만 맹신",
      "가격만 보고 감으로 판단",
    ],
    answer: "추세 전환 신호와 거래량·패턴을 함께 확인",
    explanation:
      "기술적 분석은 여러 신호를 종합적으로 확인해야 정확도가 높아진다.",
  },
  {
    id: "lv3-technical-4",
    level: "lv-3",
    topic: "기술적 분석",
    topicIndex: 10,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["기술적 분석", "차트", "추세 전환"],
    rightItems: [
      "과거 가격·거래량 패턴 분석",
      "투자자 심리의 지도",
      "투자 기회 포착의 핵심",
    ],
    answer: {
      기술적분석: "과거 가격·거래량 패턴 분석",
      차트: "투자자 심리의 지도",
      추세전환: "투자 기회 포착의 핵심",
    },
    explanation:
      "차트 분석은 투자자 심리와 시장 변화를 읽는 데 활용된다.",
  },
  {
    id: "lv3-technical-5",
    level: "lv-3",
    topic: "기술적 분석",
    topicIndex: 10,
    type: "OX",
    question:
      "주식 차트는 단순한 가격 그래프일 뿐, 투자자 심리를 읽을 수 있는 도구는 아니다.",
    answer: "X",
    explanation:
      "차트는 매수·매도 심리가 반영된 패턴을 보여주며 시장 참여자 행동을 파악할 수 있다.",
  },
  {
    id: "lv3-technical-6",
    level: "lv-3",
    topic: "기술적 분석",
    topicIndex: 10,
    type: "MULTI",
    question:
      "기술적 분석으로 투자 목표가를 설정할 때 고려해야 할 요소는?",
    options: [
      "단기·중기 목표 가격을 명확히 정함",
      "전혀 계획 없이 직감에 의존",
      "뉴스 헤드라인만 참조",
    ],
    answer: "단기·중기 목표 가격을 명확히 정함",
    explanation:
      "기술적 분석은 목표 가격 설정과 리스크 관리에 특히 유용하다.",
  },
];

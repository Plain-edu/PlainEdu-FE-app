import { QuizItem } from "../types";

export const LV1_HTS_MTS: QuizItem[] = [
  {
    id: "lv1-hts-mts-1",
    level: "lv-1",
    topic: "HTS와 MTS",
    topicIndex: 9,
    type: "OX",
    question:
      "HTS는 ‘Home Trading System’의 약자로, 주로 PC에서 주식 거래를 할 때 사용한다.",
    answer: "O",
    explanation:
      "HTS는 PC 기반 거래 프로그램으로 다양한 분석 기능과 주문 입력이 가능하다.",
  },
  {
    id: "lv1-hts-mts-2",
    level: "lv-1",
    topic: "HTS와 MTS",
    topicIndex: 9,
    type: "OX",
    question: "MTS는 HTS보다 기능은 많지만 이동 중 사용이 불편하다.",
    answer: "X",
    explanation:
      "MTS는 모바일 기반으로 이동 중에도 편리하게 거래할 수 있는 장점이 있다.",
  },
  {
    id: "lv1-hts-mts-3",
    level: "lv-1",
    topic: "HTS와 MTS",
    topicIndex: 9,
    type: "MULTI",
    question: "다음 중 HTS의 장점으로 알맞은 것은?",
    options: ["이동 중 사용 편리", "세밀한 차트 분석 가능", "휴대성 우수"],
    answer: "세밀한 차트 분석 가능",
    explanation:
      "HTS는 PC 환경에서 다양한 분석 도구를 활용할 수 있어 차트 분석 능력이 우수하다.",
  },
  {
    id: "lv1-hts-mts-4",
    level: "lv-1",
    topic: "HTS와 MTS",
    topicIndex: 9,
    type: "MULTI",
    question: "다음 중 MTS의 장점으로 올바른 것은?",
    options: [
      "큰 화면에서 다양한 정보 표시",
      "이동 중 간편한 주문",
      "분석 기능이 가장 많음",
    ],
    answer: "이동 중 간편한 주문",
    explanation:
      "MTS는 모바일 기반이므로 시간과 장소 제약 없이 간편하게 주문할 수 있다.",
  },
  {
    id: "lv1-hts-mts-5",
    level: "lv-1",
    topic: "HTS와 MTS",
    topicIndex: 9,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["HTS", "MTS", "공통점"],
    rightItems: [
      "PC 기반, 분석 기능 다양",
      "모바일 기반, 이동성 뛰어남",
      "주식 매매 및 조회 가능",
    ],
    answer: {
      HTS: "PC 기반, 분석 기능 다양",
      MTS: "모바일 기반, 이동성 뛰어남",
      공통점: "주식 매매 및 조회 가능",
    },
    explanation:
      "HTS와 MTS는 기능 차이는 있지만 모두 주식 거래와 조회가 가능한 프로그램이다.",
  },
  {
    id: "lv1-hts-mts-6",
    level: "lv-1",
    topic: "HTS와 MTS",
    topicIndex: 9,
    type: "COLOR",
    question: "단어와 뜻을 연결해보세요!",
    leftItems: ["HTS", "MTS", "장점"],
    rightItems: [
      "집이나 사무실 등 고정된 장소에서 주로 사용",
      "외부나 이동 중에 자주 사용",
      "각 환경에 최적화된 거래 경험 제공",
    ],
    answer: {
      HTS: "집이나 사무실 등 고정된 장소에서 주로 사용",
      MTS: "외부나 이동 중에 자주 사용",
      장점: "각 환경에 최적화된 거래 경험 제공",
    },
    explanation:
      "HTS와 MTS는 사용 환경이 다르며, 각 환경에 맞는 장점이 존재한다.",
  },
];
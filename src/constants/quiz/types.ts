export type QuizBase = {
  id: string;
  level: "lv-1" | "lv-2" | "lv-3";
  topic: string; // 예: "주식이란?", "지수의 종류 1편"
  topicIndex: number; // 주제 구분을 위한 인덱스 추가
  type: "MULTI" | "OX" | "COLOR";
};

export type QuizMulti = QuizBase & {
  type: "MULTI";
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
};

export type QuizOX = QuizBase & {
  type: "OX";
  question: string;
  answer: "O" | "X";
  explanation?: string;
};

export type QuizColorMatch = QuizBase & {
  type: "COLOR";
  question: string;
  leftItems: string[];
  rightItems: string[];
  answer: Record<string, string>;
  explanation?: string;
};

export type QuizItem = QuizMulti | QuizOX | QuizColorMatch;

export type QuizDataByLevel = {
  "lv-1": QuizItem[];
  "lv-2": QuizItem[];
  "lv-3": QuizItem[];
};

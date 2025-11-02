import { QUIZ_DATA } from "@/src/constants/quiz";
import type { QuizColorMatch, QuizMulti, QuizOX } from "@/src/constants/quiz/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Text, View } from "react-native";
import QuizType1 from "../types/QuizType1";
import QuizType2 from "../types/QuizType2";
import QuizType3 from "../types/QuizType3";

export default function StartQuizScreen() {
  const router = useRouter();
  const { level, index } = useLocalSearchParams<{ level?: string; index?: string }>();
  const safeLevel = (level as "lv-1" | "lv-2" | "lv-3") ?? "lv-1";
  const topicIndex = parseInt(index ?? "0", 10);

  // 주제별 문제 세트 가져오기
  const topicQuizzes = useMemo(() => {
    const all = QUIZ_DATA[safeLevel] || [];
    return all.filter((q) => q.topicIndex === topicIndex);
  }, [safeLevel, topicIndex]);

  // 최초 1회만 3문제 랜덤 고정
  const [selectedQuizzes] = useState(() => {
    const shuffled = [...topicQuizzes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuiz = selectedQuizzes[currentIndex];

  if (!currentQuiz)
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>문제가 없습니다.</Text>
      </View>
    );

  // 진행률 (0 → 1)
  const progress = (currentIndex + 1) / selectedQuizzes.length;

  // 다음 문제로 이동 or 완료화면 이동
  const handleNext = () => {
    setTimeout(() => {
      if (currentIndex < selectedQuizzes.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        router.push("/features/quiz/QuizCompleteScreen");
      }
    }, 200);
  };

  // 공통 props 전달
  const props = { quiz: currentQuiz, onNext: handleNext, progress };

  switch (currentQuiz.type) {
    case "MULTI":
      return <QuizType1 {...(props as { quiz: QuizMulti; onNext: () => void; progress: number })} />;
    case "OX":
      return <QuizType2 {...(props as { quiz: QuizOX; onNext: () => void; progress: number })} />;
    case "COLOR":
      return <QuizType3 {...(props as { quiz: QuizColorMatch; onNext: () => void; progress: number })} />;
    default:
      return null;
  }
}

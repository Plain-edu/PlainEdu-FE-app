import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Modal as PaperModal, Portal } from "react-native-paper";

type BaseQuiz = {
  id: string;
  level: "lv-1" | "lv-2" | "lv-3";
  topic: string;
  explanation?: string;
};
type QuizMulti = BaseQuiz & {
  type: "MULTI";
  question: string;
  options: string[];
  answer: string;
};

type Props = {
  quiz: QuizMulti;
  onNext?: () => void;
  progress: number;
};

export default function QuizType1({ quiz, onNext, progress }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [saved, setSaved] = useState(false);

  const handleNext = () => {
    if (selected === null) return;
    const correct = quiz.options[selected] === quiz.answer;
    setIsCorrect(correct);
    setShowModal(true);
  };

  const handleModalNext = () => {
    setShowModal(false);
    setSelected(null);
    setIsCorrect(null);
    setTimeout(() => onNext?.(), 300);
  };

  return (
    <>
      {isCorrect && (
        <Portal>
          <View
            style={{
              position: "absolute",
              top: "30%",
              left: 0,
              right: 0,
              alignItems: "center",
              zIndex: 999,
            }}
            pointerEvents="none"
          >
            <Image
              source={require("@/assets/images/points-icon.png")}
              style={{
                width: 197,
                height: 288,
                resizeMode: "contain",
                marginBottom: 12,
              }}
            />
            <Text className="text-[rgba(28,69,214,1)] text-3xl font-bold">1,000p 획득!</Text>
          </View>
        </Portal>
      )}

      <View className="flex-1 bg-white px-8 pt-9 relative">
        {/* 상단 닫기 버튼 */}
        <TouchableOpacity className="mb-6">
          <Text className="text-2xl">✕</Text>
        </TouchableOpacity>

        {/* 진행바 */}
        <View className="h-2 w-full bg-gray-200 rounded-full mt-10 mb-6 overflow-hidden">
          <View
            style={{ width: `${progress * 100}%` }}
            className="h-2 bg-[#1C45D6] rounded-full"
          />
        </View>

        {/* 질문 */}
        <Text className="text-lg font-bold mb-5">{quiz.question}</Text>
        <Text className="text-gray-500 mb-7">정답을 선택해주세요!</Text>

        <ScrollView className="flex-1">
          {quiz.options.map((opt, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => setSelected(idx)}
              activeOpacity={0.7}
              className={`flex-row items-center border rounded-xl px-4 py-4 mb-3 
                ${selected === idx ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}
              `}
            >
              <Text className="flex-1 text-base">{opt}</Text>
              <View
                className={`w-5 h-5 rounded-full border-2 
                  ${selected === idx ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white"}
                `}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* 다음 버튼 */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleNext}
          className="bg-blue-500 py-4 rounded-full items-center mb-6"
        >
          <Text className="text-white text-base font-bold">다음</Text>
        </TouchableOpacity>

        <Portal>
          <PaperModal
            visible={showModal}
            onDismiss={() => setShowModal(false)}
            contentContainerStyle={{
              position: "absolute",
              bottom: -42,
              left: 0,
              right: 0,
              width: "100%",
              alignSelf: "center",
              backgroundColor: "white",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingHorizontal: 24,
              paddingVertical: 32,
            }}
          >
            {isCorrect ? (
              <>
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-blue-500 font-bold text-2xl">O 정답입니다!</Text>
                  <TouchableOpacity
                    onPress={() => setSaved(!saved)}
                    activeOpacity={0.7}
                    className="items-center"
                  >
                    <Image
                      source={require("@/assets/images/save-icon.png")}
                      style={[
                        { width: 45, height: 50, resizeMode: "contain" },
                        saved ? { tintColor: "black" } : {},
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-red-500 font-bold text-2xl">X 오답입니다!</Text>
                  <TouchableOpacity
                    onPress={() => setSaved(!saved)}
                    activeOpacity={0.7}
                    className="items-center"
                  >
                    <Image
                      source={require("@/assets/images/save-icon.png")}
                      style={[
                        { width: 45, height: 50, resizeMode: "contain" },
                        saved ? { tintColor: "black" } : {},
                      ]}
                    />
                  </TouchableOpacity>
                </View>
                {quiz.explanation && (
                  <Text className="text-gray-500 text-sm leading-6">
                    {quiz.explanation}
                  </Text>
                )}
              </>
            )}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleModalNext}
              className="bg-blue-500 py-4 rounded-full mt-6 items-center"
            >
              <Text className="text-white text-base font-bold">다음</Text>
            </TouchableOpacity>
          </PaperModal>
        </Portal>
      </View>
    </>
  );
}

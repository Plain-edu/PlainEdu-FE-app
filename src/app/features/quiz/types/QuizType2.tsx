import type { QuizOX } from "@/src/constants/quiz/types";
import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  quiz: QuizOX;
  onNext?: () => void;
  progress: number;
};

export default function QuizType2({ quiz, onNext, progress }: Props) {
  const [selected, setSelected] = useState<"O" | "X" | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [saved, setSaved] = useState(false);

  const handleNext = () => {
    if (!selected) return;
    const correct = selected === quiz.answer;
    setIsCorrect(correct);
    setShowModal(true);
  };

  const handleModalNext = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelected(null);
      setIsCorrect(null);
      onNext?.();
    }, 300);
  };

  return (
    <>
      <View className="flex-1 bg-white px-8 pt-9 relative">
        {/* 상단 닫기 버튼 */}
        <TouchableOpacity className="mb-6">
          <Text className="text-2xl">✕</Text>
        </TouchableOpacity>

        {/* 진행바 */}
        <View className="h-2 w-full bg-gray-200 rounded-full mb-6 overflow-hidden">
          <View
            style={{ width: `${progress * 100}%` }}
            className="h-2 bg-[#1C45D6] rounded-full"
          />
        </View>

        {/* 문제 */}
        <Text className="text-lg font-bold mb-5">{quiz.question}</Text>
        <Text className="text-gray-500 mb-6">정답을 선택해주세요!</Text>

        {/* OX 버튼 */}
        <View className="flex-row justify-center space-x-10 mb-10">
          <TouchableOpacity onPress={() => setSelected("O")} activeOpacity={0.7}>
            <View style={[styles.imageWrapper, selected === "O" && styles.selectedShadow]}>
              <Image
                source={require("@/assets/images/o-button.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("X")} activeOpacity={0.7}>
            <View style={[styles.imageWrapper, selected === "X" && styles.selectedShadow]}>
              <Image
                source={require("@/assets/images/x-button.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* 다음 버튼 */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleNext}
          className="bg-blue-500 py-4 rounded-full items-center mb-6"
        >
          <Text className="text-white text-base font-bold">다음</Text>
        </TouchableOpacity>

        <Modal
          visible={showModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowModal(false)}
        >
          {/* 반투명 배경 */}
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              justifyContent: "flex-end",
            }}
            onPress={() => setShowModal(false)}
          >
            {/* 코인 효과 */}
            {isCorrect && (
              <View
                style={{
                  position: "absolute",
                  top: "30%",
                  left: 0,
                  right: 0,
                  alignItems: "center",
                  zIndex: 3,
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
                <Text className="text-[rgba(28,69,214,1)] text-3xl font-bold">
                  1,000p 획득!
                </Text>
              </View>
            )}

            {/* 하단 모달 카드 */}
            <View
              style={{
                backgroundColor: "white",
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                paddingHorizontal: 24,
                paddingVertical: 32,
              }}
            >
              {isCorrect ? (
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-blue-500 font-bold text-2xl">
                    O 정답입니다!
                  </Text>
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
              ) : (
                <>
                  <View className="flex-row items-center justify-between mb-3">
                    <Text className="text-red-500 font-bold text-2xl">
                      X 오답입니다!
                    </Text>
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
            </View>
          </Pressable>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 160,
  },
  selectedShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 3.5 },
  },
});

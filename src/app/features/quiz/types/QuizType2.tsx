import type { QuizOX } from "@/src/constants/quiz/types";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// ★ 1) Props 타입 확장: level 추가
type Props = {
  quiz: QuizOX;
  onNext?: () => void;
  progress: number;
  level: "lv-1" | "lv-2" | "lv-3"; 
};

export default function QuizType2({ quiz, onNext, progress, level }: Props) {
  const router = useRouter(); // ★ 추가

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
    <View className="flex-1 bg-white px-8 pt-9 relative">

      {/* ★ 3) X 버튼 수정 — 난이도별 퀴즈 선택 목록으로 이동 */}
      <TouchableOpacity
        className="mb-6"
        onPress={() => router.replace(`/features/quiz/${level}`)}
      >
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
      <ScrollView className="flex-1" style={{ backgroundColor: "#fff" }}>
        <View className="flex-row justify-center space-x-2 mb-10">
          {/* O 버튼 */}
          <TouchableOpacity onPress={() => setSelected("O")} activeOpacity={0.7}>
            <View style={styles.imageWrapper}>
              <Image
                source={
                  selected === "O"
                    ? require("@/assets/images/selected-o-button.png")
                    : require("@/assets/images/o-button.png")
                }
                style={selected === "O" ? styles.selectedImage : styles.image}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          {/* X 버튼 */}
          <TouchableOpacity onPress={() => setSelected("X")} activeOpacity={0.7}>
            <View style={styles.imageWrapper}>
              <Image
                source={
                  selected === "X"
                    ? require("@/assets/images/selected-x-button.png")
                    : require("@/assets/images/x-button.png")
                }
                style={selected === "X" ? styles.selectedImage : styles.image}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 다음 버튼 */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleNext}
        className="bg-blue-500 py-4 rounded-full items-center mb-6"
      >
        <Text className="text-white text-base font-bold">다음</Text>
      </TouchableOpacity>

      {/* 정오답 모달 */}
      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
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
                top: "20%",
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
                  width: 180,
                  height: 265,
                  resizeMode: "contain",
                  marginBottom: 12,
                }}
              />
              <Text className="text-[rgba(28,69,214,1)] text-2xl font-bold">
                1,000p 획득!
              </Text>
            </View>
          )}

          {/* 하단 모달 */}
          <View
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingHorizontal: 24,
              paddingVertical: 20,
              width: "100%",
              maxWidth: 480,
              alignSelf: "center",
            }}
          >
            {isCorrect ? (
              <View className="flex-row items-center justify-between mb-2">
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
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 160,
  },
  selectedImage: {
    width: 120,
    height: 117,
    margin: 20,
  },
});

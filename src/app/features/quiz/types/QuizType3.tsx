import type { QuizColorMatch } from "@/src/constants/quiz/types";
import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = { quiz: QuizColorMatch; onNext?: () => void; progress: number };

type BoxSide = "left" | "right";
type Pair = { color: string; left: number | null; right: number | null };

export default function QuizType3({ quiz, onNext, progress }: Props) {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [saved, setSaved] = useState(false);

  const COLORS = [
    "rgba(28, 69, 214, 1)",
    "rgba(59, 144, 255, 1)",
    "rgba(28, 62, 142, 1)",
  ];

  const getColorOfBox = (side: BoxSide, idx: number) =>
    pairs.find((p) => p[side] === idx)?.color;

  const handlePress = (side: BoxSide, idx: number) => {
    const existingPairIndex = pairs.findIndex((p) => p[side] === idx);
    if (existingPairIndex !== -1) {
      setPairs((prev) => {
        const updated = [...prev];
        const pair = updated[existingPairIndex];
        pair[side] = null;
        if (pair.left === null && pair.right === null)
          updated.splice(existingPairIndex, 1);
        return updated;
      });
      return;
    }

    const activePair = pairs.find((p) => p.left === null || p.right === null);
    if (activePair && activePair[side] === null) {
      setPairs((prev) =>
        prev.map((p) => (p === activePair ? { ...p, [side]: idx } : p))
      );
      setCurrentColorIndex((i) => (i + 1) % COLORS.length);
    } else {
      setPairs((prev) => [
        ...prev,
        {
          color: COLORS[currentColorIndex],
          left: side === "left" ? idx : null,
          right: side === "right" ? idx : null,
        },
      ]);
    }
  };

  const handleNext = () => {
    const filled = pairs.filter((p) => p.left !== null && p.right !== null).length;
    const correct = filled === quiz.leftItems.length;
    setIsCorrect(correct);
    setShowModal(true);
  };

  const handleModalNext = () => {
    setShowModal(false);
    setTimeout(() => {
      setPairs([]);
      setIsCorrect(null);
      onNext?.();
    }, 300);
  };

  return (
    <>
      <View className="flex-1 bg-white px-8 pt-9 pb-6 relative">
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

        <Text className="text-lg font-bold mb-2">{quiz.question}</Text>
        <Text className="text-gray-500 mb-4">같은 색으로 정답을 연결해주세요!</Text>

        {/* 문제 박스 리스트 */}
        <View className="flex-grow justify-start space-y-6 mt-2 mb-20">
          {quiz.leftItems.map((left, idx) => {
            const right = quiz.rightItems[idx];
            const leftColor = getColorOfBox("left", idx);
            const rightColor = getColorOfBox("right", idx);

            return (
              <View
                key={idx}
                className="flex-row items-center justify-between mb-5"
              >
                {/* 왼쪽 박스 */}
                <TouchableOpacity
                  onPress={() => handlePress("left", idx)}
                  style={{
                    borderWidth: 4,
                    borderColor: leftColor || "#d1d5db",
                    backgroundColor: "#fff",
                    borderRadius: 12,
                    paddingVertical: 14,
                    paddingHorizontal: 10,
                    width: 130,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text className="text-base font-semibold">{left}</Text>
                </TouchableOpacity>

                {/* 오른쪽 박스 */}
                <TouchableOpacity
                  onPress={() => handlePress("right", idx)}
                  style={{
                    borderWidth: 4,
                    borderColor: rightColor || "#d1d5db",
                    backgroundColor: "#fff",
                    borderRadius: 12,
                    paddingVertical: 14,
                    paddingHorizontal: 10,
                    width: 180,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text className="text-base">{right}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {/* 하단 버튼 */}
        <View className="absolute bottom-6 left-8 right-8">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNext}
            className="bg-blue-500 py-4 rounded-full items-center"
          >
            <Text className="text-white text-base font-bold">다음</Text>
          </TouchableOpacity>
        </View>

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
            {/* 코인 + 포인트 효과 */}
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

            {/* 하단 흰색 모달 카드 */}
            <View
              style={{
                backgroundColor: "white",
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                paddingHorizontal: 24,
                paddingVertical: 32,
                width: "100%",
                maxWidth: 480,
                alignSelf: "center",
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

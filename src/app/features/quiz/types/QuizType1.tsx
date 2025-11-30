import { useState } from "react";
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";

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
    setTimeout(() => {
      setSelected(null);
      setIsCorrect(null);
      onNext?.();
    }, 300);
  };

  return (
    <>
      <View className="flex-1 bg-white px-8 pt-9 relative">
        <TouchableOpacity className="mb-6">
          <Text className="text-2xl">✕</Text>
        </TouchableOpacity>

        <View className="h-2 w-full bg-gray-200 rounded-full mb-6 overflow-hidden">
          <View
            style={{ width: `${progress * 100}%` }}
            className="h-2 bg-[#1C45D6] rounded-full"
          />
        </View>

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
              <Text className="flex-1 text-sm">{opt}</Text>
              <View
                className={`w-5 h-5 rounded-full border-2 
                  ${selected === idx ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white"}
                `}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleNext}
          className="bg-blue-500 py-4 rounded-full items-center mb-6"
        >
          <Text className="text-white text-base font-bold">다음</Text>
        </TouchableOpacity>

        {/* React Native Modal로 교체 */}
        <Modal
          visible={showModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowModal(false)}
        >
          {/* 반투명 배경 */}
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
            {/* 코인 + 포인트 텍스트 (상단 레이어) */}
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
                <Text className="text-[rgba(28,69,214,1)] text-2xl font-bold">1,000p 획득!</Text>
              </View>
            )}

            {/* 하단 흰색 모달 박스 */}
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  paddingHorizontal: 24,
                  paddingVertical: 20,
                  zIndex: 2,
                  width: "100%",
                  maxWidth: 480,
                  alignSelf: "center",
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
                      <Text className="text-gray-500 text-sm leading-6">{quiz.explanation}</Text>
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
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

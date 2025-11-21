import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function QuizCompleteScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-8 pt-12">
      {/* 상단 닫기 버튼 */}
      <TouchableOpacity onPress={() => router.replace("/features/mainpage/App")} className="mb-6">
        <Text className="text-2xl">✕</Text>
      </TouchableOpacity>

      {/* 진행바 */}
      <View className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <View className="h-2 bg-[#1C45D6] rounded-full w-full" />
      </View>

      {/* 메인 문구 */}
      <View className="flex-1 mt-28 items-center">
        <Text className="text-[32px] font-bold mb-3">문제를 모두 풀었어요!</Text>
        <Text className="text-gray-500 text-base">첫 도전 배지를 드릴게요~</Text>
      </View>

      {/* 하단 버튼 */}
      <TouchableOpacity
        onPress={() => router.replace("/features/mainpage/App")}
        activeOpacity={0.8}
        className="bg-blue-500 py-4 rounded-full mb-12 items-center"
        style={{
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 2 },
        }}
      >
        <Text className="text-white text-base font-bold">뱃지 받기</Text>
      </TouchableOpacity>
    </View>
  );
}

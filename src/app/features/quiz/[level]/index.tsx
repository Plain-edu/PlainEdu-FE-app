import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

type Params = {
  level?: string;
};

const QUIZ_DATA: Record<string, { title: string; items: string[] }> = {
  "lv-1": {
    title: "초급 퀴즈 리스트",
    items: ["주식이란?", "시가총액", "지수란 무엇일까?", "지수의 종류 1편", "지수의 종류 2편", "채권이란?", "투자 위험", "증권사 선택"],
  },
  "lv-2": {
    title: "중급 퀴즈 리스트",
    items: ["재무제표 이해", "PER & PBR", "EPS & ROE", "산업 분석", "ETF의 이해"],
  },
  "lv-3": {
    title: "고급 퀴즈 리스트",
    items: ["기업 가치 평가", "DCF 모델", "기술적 분석", "시장 심리", "포트폴리오 최적화"],
  },
};

function GradientNumber({ num }: { num: number }) {
  return (
    <MaskedView
      maskElement={
        <Text
          style={{
            fontFamily: "PretendardSemiBold",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 35,
            color: "#2A5DE8",
            textShadowColor: "rgba(0, 122, 255, 0.25)",
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 4,
          }}
        >
          {num}
        </Text>
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#1C45D6", "#007AFF"]}
      >
        <Text
          style={{
            opacity: 0,
            fontFamily: "PretendardSemiBold",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 35,
          }}
        >
          {num}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

export default function QuizDetailList() {
  const { level } = useLocalSearchParams<Params>();
  const router = useRouter();
  const points = 10000;
  const quiz = QUIZ_DATA[level ?? "lv-1"] ?? { title: "", items: [] };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5 pt-8 mb-12 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Image source={require("@/assets/images/go-back-icon.png")} className="w-[35px] h-[35px]" />
        </TouchableOpacity>
        <View className="flex-row items-center mr-3">
          <Image source={require("@/assets/images/silver-coin.png")} className="w-[26px] h-[26px] mr-2" style={{ width: 26, height: 26 }} />
          <Text className="text-[#3D4D5C] font-semibold text-[15px] leading-6">{points.toLocaleString()} p</Text>
        </View>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 35, paddingBottom: 32 }}>
        {quiz.items.map((q, idx) => (
          <TouchableOpacity
            key={idx}
            className="flex-row items-center py-5 px-[17px] mb-5 rounded-3xl bg-[#F7F9FB]"
            activeOpacity={0.8}
            onPress={() => console.log("퀴즈 선택:", q)}
          >
            {/* 왼쪽 번호 */}
            <View style={{ width: 40, alignItems: "flex-start" }}>
              <GradientNumber num={idx + 1} />
            </View>

            {/* 가운데 텍스트 */}
            <View style={{ position: "absolute", left: "50%", transform: [{ translateX: -100 }] }}>
              <Text className="text-[19px] font-semibold text-[#3D4D5C] text-center w-[200px]">
                {q}
              </Text>
            </View>

            {/* 오른쪽 화살표 */}
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={() =>
                    router.push({
                    pathname: "/features/quiz/[level]/VideoPlay",
                    params: { level: level ?? "lv-1", index: String(idx) },
                    })
                }
                >
                <Image
                  source={require("@/assets/images/blue-next-icon.png")}
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

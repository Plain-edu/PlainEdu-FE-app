import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Course = {
  id: string;
  levelLabel: "초급" | "중급" | "고급";
  subtitle: string;
  tags: string[];
  progress: number; // 0~100
};

const COURSES: Course[] = [
  { id: "lv-1", levelLabel: "초급", subtitle: "주식의 기본 개념 이해", tags: [" 주린이", " 기초", " 초보"], progress: 65 },
  { id: "lv-2", levelLabel: "중급", subtitle: "시장 흐름 이해 및 실전 투자", tags: [" 투자", " 시장", " ETF"], progress: 65 },
  { id: "lv-3", levelLabel: "고급", subtitle: "기업 분석과 고급 투자 기법", tags: [" 재무제표", " 차트", " 실적"], progress: 65 },
];

function ProgressBar({ progress }: { progress: number }) {
  const pct = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={styles.progressTrack} className="w-full mt-3 mb-2 overflow-hidden">
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#1C45D6", "#007AFF"]}
        style={[styles.progressFill, { width: `${pct}%` }]}
      />
    </View>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <View style={styles.tagChip} className="mr-2 mb-2">
      <Text style={styles.tagText}>#{label}</Text>
    </View>
  );
}

function GradientLevelLabel({ text }: { text: string }) {
  return (
    <MaskedView
      maskElement={
        <Text
          style={{
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 27,
            lineHeight: 25,
          }}
        >
          {text}
        </Text>
      }
    >
      <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={["#1C45D6", "#007AFF"]}>
        <Text
          style={{
            opacity: 0,
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 27,
            lineHeight: 25,
          }}
        >
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

function NextArrowButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <Image
        source={require("@/assets/images/blue-next-icon.png")}
        style={{ width: 35, height: 35, borderRadius: 24 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

export default function QuizList() {
  const router = useRouter();
  const points = 10000;
  const MAIN_ROUTE = "/features/mainpage/App";

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5 pt-8 mb-10 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.replace(MAIN_ROUTE)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Image source={require("@/assets/images/go-back-icon.png")} className="w-[30px] h-[30px]" />
        </TouchableOpacity>

        <View className="flex-row items-center">
          <Image source={require("@/assets/images/silver-coin.png")} className="w-[26px] h-[26px] mr-2" />
          <Text className="text-[#3D4D5C] font-semibold text-[15px] leading-6">{points.toLocaleString()} p</Text>
        </View>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}>
        {COURSES.map((c) => (
          <View key={c.id} style={styles.card}>
            {/* 상단 행 */}
            <View className="flex-row items-start justify-between mb-2">
              <View className="flex-1 pr-3">
                <View className="flex-row items-center">
                  <GradientLevelLabel text={c.levelLabel} />
                  <View className="ml-3 flex flex-row justify-center items-center bg-[#F0F2F5] rounded-3xl px-[9px] py-[4px]">
                    <Text className="text-[#3D4D5C] text-[13px] font-semibold ml-2 mr-1">학습율</Text>
                    <Text className="text-[#1C45D6] font-semibold text-[15px]">{c.progress}%</Text>
                  </View>
                </View>
                <Text className="text-[#121217] text-[17px] font-semibold mt-[7px] leading-6">{c.subtitle}</Text>
              </View>
              <NextArrowButton 
                onPress={() => router.push(`/features/quiz/${c.id}`)} 
              />
            </View>

            {/* 진행도 */}
            <ProgressBar progress={c.progress} />

            {/* 태그 */}
            <View style={styles.tagContainer}>
            {c.tags.map((t) => (
                <Tag key={t} label={t} />
            ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0,0,0,0.02)",
    borderRadius: 24,
    padding: 30,
    marginBottom: 20,
  },

  progressTrack: {
    height: 8,
    backgroundColor: "#E9EDF2",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },

  tagChip: {
    backgroundColor: "#F0F2F5",
    borderRadius: 24,
    width: 95,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  tagText: {
    fontFamily: "Pretendard",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 21,
    color: "#3D4D5C",
    textAlign: "center",
  },
});


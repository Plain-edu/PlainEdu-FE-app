// screens/MainScreen.tsx
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AppHeader } from "../../../components/MainpageHeader";
import { ExchangeTab } from "./tabs/ExchangeTab";
import { InvestTab } from "./tabs/InvestTab";
import { QuizTab } from "./tabs/QuizTab";

const QUIZ_CARDS = [
  {
    id: "quiz-1",
    title: "금융 퀴즈",
    description: "주식 투자에 꼭 필요한 금융 개념과 원리를 쉽고 빠르게!",
    buttonText: "퀴즈 풀기",
    onPress: () => console.log("퀴즈 풀기 눌림"),
  },
  // 추후 여기에 새 카드를 추가하면 자동으로 카로셀에 표시됩니다.
  // { id: "quiz-2", title: "...", description: "...", buttonText: "...", onPress: ... },
  // { id: "quiz-3", title: "...", description: "...", buttonText: "...", onPress: ... },
];

export function MainScreen() {
  const [activeTopTab, setActiveTopTab] = useState<"quiz" | "invest" | "exchange">("quiz");

  const renderContent = () => {
    switch (activeTopTab) {
      case "quiz":
        return <View style={{ marginTop: 12 }}><QuizTab /></View>;
      case "invest":
        return <InvestTab />;
      case "exchange":
        return <ExchangeTab />;
    }
  };

  return (
    <View className="flex-1 bg-white">
      <AppHeader points={10000} />

      {/* 상단 탭 */}
      <View className="flex-row items-center justify-start mt-4 py-3 px-4">
        <Pressable onPress={() => setActiveTopTab("quiz")}>
          <Text
            style={[
              styles.tabLabel,
              { color: activeTopTab === "quiz" ? "#121217" : "#E7E7E7" },
              activeTopTab === "quiz" && styles.bold,
            ]}
          >
            퀴즈
          </Text>
        </Pressable>

        <Text style={styles.separator}>|</Text>

        <Pressable onPress={() => setActiveTopTab("invest")}>
          <Text
            style={[
              styles.tabLabel,
              { color: activeTopTab === "invest" ? "#121217" : "#E7E7E7" },
              activeTopTab === "invest" && styles.bold,
            ]}
          >
            투자
          </Text>
        </Pressable>

        <Text style={styles.separator}>|</Text>

        <Pressable onPress={() => setActiveTopTab("exchange")}>
          <Text
            style={[
              styles.tabLabel,
              { color: activeTopTab === "exchange" ? "#121217" : "#E7E7E7" },
              activeTopTab === "exchange" && styles.bold,
            ]}
          >
            교환소
          </Text>
        </Pressable>
      </View>

      {/* 탭별 컨텐츠 */}
      <View style={{ flex: 1 }}>{renderContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    marginHorizontal: 8,
  },
  separator: {
    fontSize: 18,
    color: "#E7E7E7",
  },
  bold: {
    fontWeight: "700",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  placeholderTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#121217",
    marginBottom: 8,
  },
  placeholderDesc: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
  },
});

import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AppHeader } from "../../../components/MainpageHeader";

export function MainScreen() {
  const [activeTopTab, setActiveTopTab] = useState<"quiz" | "invest" | "exchange">("quiz");

  const renderContent = () => {
    switch (activeTopTab) {
      case "quiz":
        return (
          <View className="p-4">
            <Text className="text-xl font-bold text-blue-600">금융 퀴즈</Text>
            <Text className="text-gray-600 mt-2">주식 투자에 꼭 필요한 금융 개념과 원리를 쉽고 빠르게!</Text>
            <Pressable className="mt-4 bg-blue-500 rounded-xl px-6 py-3 items-center">
              <Text className="text-white font-bold">퀴즈 풀기</Text>
            </Pressable>
          </View>
        );
      case "invest":
        return (
          <View className="p-4">
            <Text className="text-xl font-bold text-green-600">투자 화면</Text>
            <Text className="text-gray-600 mt-2">투자 관련 내용이 들어갑니다.</Text>
          </View>
        );
      case "exchange":
        return (
          <View className="p-4">
            <Text className="text-xl font-bold text-purple-600">교환소 화면</Text>
            <Text className="text-gray-600 mt-2">포인트 교환소 화면입니다.</Text>
          </View>
        );
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
      <View className="flex-1">{renderContent()}</View>
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
});

import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppHeader } from "../../../components/MainpageHeader";
import { ExchangeTab } from "./tabs/ExchangeTab";
import { InvestTab } from "./tabs/InvestTab";
import { QuizTab } from "./tabs/QuizTab";

export function MainScreen() {
  const [activeTopTab, setActiveTopTab] =
    useState<"quiz" | "invest" | "exchange">("quiz");

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
      {/* 항상 보여야 하는 헤더 */}
      <AppHeader points={10000} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* 상단 탭 */}
        <View className="flex-row items-center justify-start pt-9 pb-5 px-4">
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

        {/* 아래 스크롤 영역 */}
          {renderContent()}
      </ScrollView>
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

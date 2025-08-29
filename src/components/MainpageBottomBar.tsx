import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Tab = "home" | "ranking" | "community" | "profile";

type MainpageBottomBarProps = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

export function MainpageBottomBar({ activeTab, setActiveTab }: MainpageBottomBarProps) {
  return (
    <View className="flex-row justify-around border-t border-gray-200 py-3 bg-white">
      {/* 홈 */}
      <Pressable onPress={() => setActiveTab("home")} className="items-center">
        <Image source={require("../../assets/images/home-icon.png")} style={styles.icon} resizeMode="contain" />
        <Text style={styles.label}>홈</Text>
      </Pressable>

      {/* 순위 */}
      <Pressable onPress={() => setActiveTab("ranking")} className="items-center">
        <Image source={require("../../assets/images/ranking-icon.png")} style={styles.icon} resizeMode="contain" />
        <Text style={styles.label}>순위</Text>
      </Pressable>

      {/* 커뮤니티 */}
      <Pressable onPress={() => setActiveTab("community")} className="items-center">
        <Image source={require("../../assets/images/community-icon.png")} style={styles.icon} resizeMode="contain" />
        <Text style={styles.label}>커뮤니티</Text>
      </Pressable>

      {/* 프로필 */}
      <Pressable onPress={() => setActiveTab("profile")} className="items-center">
        <Image source={require("../../assets/images/profile-icon.png")} style={styles.icon} resizeMode="contain" />
        <Text style={styles.label}>프로필</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 10,
    lineHeight: 21,
    textAlign: "center",
    color: "#121217",
  },
});

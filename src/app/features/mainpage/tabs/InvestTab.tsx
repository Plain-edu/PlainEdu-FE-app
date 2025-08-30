// screens/tabs/InvestTab.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function InvestTab() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>투자 화면</Text>
      <Text style={styles.desc}>투자 관련 내용이 들어갑니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 24 },
  title: { fontSize: 20, fontWeight: "700", color: "#121217", marginBottom: 8 },
  desc: { fontSize: 14, color: "#8E8E93", textAlign: "center" },
});

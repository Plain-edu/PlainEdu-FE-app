import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  onPress: () => void;
  style?: ViewStyle;
};

export function QuizCard({ title, description, buttonText, onPress, style }: Props) {
  const highlight = "금융 개념과 원리";

  return (
    <View style={[styles.card, style]}>
      <MaskedView maskElement={<Text style={styles.title}>{title}</Text>}>
        <LinearGradient colors={["#1C45D6", "#007AFF"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <Text style={[styles.title, { opacity: 0 }]}>{title}</Text>
        </LinearGradient>
      </MaskedView>

      <View style={styles.descBlock}>
        <Text style={styles.descLine}>주식 투자에 꼭 필요한</Text>

        <View style={styles.descLineRow}>
          <MaskedView maskElement={<Text style={[styles.desc, styles.bold]}>{highlight}</Text>}>
            <LinearGradient colors={["#1C45D6", "#007AFF"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={[styles.desc, styles.bold, { opacity: 0 }]}>{highlight}</Text>
            </LinearGradient>
          </MaskedView>
          <Text style={[styles.desc, { marginLeft: 4 }]}>를 쉽고 빠르게!</Text>
        </View>
      </View>

      {/* 버튼 */}
      <Pressable onPress={onPress}>
        <LinearGradient
          colors={["#1C45D6", "#007AFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Image
            source={require("../../assets/images/quiz-icon.png")}
            style={styles.buttonIcon}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>{buttonText}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 360,
    height: 250,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 20,
    marginBottom: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },

  title: {
    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 27,
    lineHeight: 25,
    paddingTop: 15,
  },

  descBlock: {
    marginTop: 26,
  },
  descLine: {
    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 26,
    color: "#121217",
  },
  descLineRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  desc: {
    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 26,
    color: "#121217",
  },
  bold: {
    fontWeight: "700",
  },

  button: {
    height: 40,
    width: 275,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
    marginTop: 26,
  },
  buttonIcon: {
    width: 24,
    height: 23,
    marginRight: 10,
    tintColor: "#FFFFFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Pretendard",
    fontWeight: "700",
    lineHeight: 25,
    fontSize: 17,
  },
});

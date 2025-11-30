import { LinearGradient } from "expo-linear-gradient";
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
      
      <View style={{ height: 32, justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: "PretendardSemiBold",
            fontWeight: "700",
            fontSize: 24,
            lineHeight: 25,
            color: "#1C45D6",
          }}
        >
          {title}
        </Text>
      </View>

      {/* 설명 영역 */}
      <View style={styles.descBlock}>
        <Text style={styles.descLine}>주식 투자에 꼭 필요한</Text>
        <View style={styles.descLineRow}>
          <Text style={[styles.desc, styles.bold, { color: "#2A5DE8" }]}>
            {highlight}
          </Text>
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
          />
          <Text style={styles.buttonText}>{buttonText}</Text>
        </LinearGradient>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 230,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 18,
    marginBottom: 25,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  title: {
    fontFamily: "PretendardSemiBold",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 25,
  },

  descBlock: { marginTop: 26 },

  descLine: {
    fontFamily: "PretendardSemiBold",
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
    fontFamily: "PretendardSemiBold",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 26,
    color: "#121217",
  },

  bold: { fontWeight: "700" },

  button: {
    height: 40,
    width: 275,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 26,
  },

  buttonIcon: {
    width: 24,
    height: 23,
    marginRight: 10,
    tintColor: "white",
  },

  buttonText: {
    color: "white",
    fontFamily: "PretendardSemiBold",
    fontWeight: "700",
    fontSize: 17,
    lineHeight: 25,
  },
});

import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
  answered: number;          // 정답 개수
  total: number;             // 푼 문제 수
  accuracy: number;          // 정답률 (0~100)
  rankLabel?: string;        // 배지 텍스트 (예: "정답률 상위 10%")
  style?: ViewStyle;         // 외부에서 위치/마진 조절
};

export function TodayStudyCard({
  answered,
  total,
  accuracy,
  rankLabel = "정답률 상위 10%",
  style,
}: Props) {
  return (
    <View style={[styles.wrap, style]}>
        <View style={styles.cardBox}>
      {/* 카드 */}
        <View style={styles.card}>
            {/* 헤더: 타이틀 + 배지 */}
            <View style={styles.header}>
            <Text style={styles.title}>오늘의 학습</Text>

            <View style={styles.badge}>
                <Text style={styles.badgeTextGray}>정답률 </Text>
                <Text style={styles.badgeTextBlue}>{rankLabel}</Text>
            </View>
            </View>

            {/* 본문: 두 칼럼 */}
            <View style={styles.row}>
            <View style={styles.col}>
                <Text style={styles.big}>{answered} / {total}문제</Text>
                <Text style={styles.sub}>정답 / 푼 문제</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.col}>
                <Text style={styles.big}>{Math.round(accuracy)}%</Text>
                <Text style={styles.sub}>정답률</Text>
            </View>
        </View>
      </View>
        {/* 고래 아이콘 - 카드 박스 기준으로 절대배치 */}
        <Image
        source={require("../../assets/images/whale-icon.png")}
        style={styles.whale}
        resizeMode="contain"
        />
        </View>
    </View>
  );
}

const CARD_W = 360;
const WHALE_W = 96;

const styles = StyleSheet.create({
  wrap: { alignItems: "center" },
  // 카드와 고래를 묶는 박스: 카드 너비와 동일 / 상대 위치 기준
  cardBox: {
    width: CARD_W,
    alignSelf: "center",
    position: "relative",
    overflow: "visible",
    marginBottom: 30,
  },
  whale: {
    position: "absolute",
    top: -25,         // 카드 위로 살짝 겹치게
    right: 40,        // 카드 밖으로 조금 나가게
    width: WHALE_W,
    height: WHALE_W,
    zIndex: 2,
    pointerEvents: "none",
  },

  card: {
    width: CARD_W,
    marginTop: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Pretendard",
    fontWeight: "700",
    fontSize: 17,
    color: "#2D3540",
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F7FB",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  badgeTextGray: {
    fontFamily: "Pretendard",
    fontWeight: "700",
    fontSize: 12,
    color: "#3D4D5C",
  },
  badgeTextBlue: {
    fontFamily: "Pretendard",
    fontWeight: "700",
    fontSize: 12,
    color: "#1C6EFF",
  },

  row: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  col: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  divider: {
    width: 1,
    backgroundColor: "#E6EBF0",
    marginVertical: 6,
  },

  big: {
    fontFamily: "Pretendard",
    fontWeight: "700",
    fontSize: 17,
    color: "#3D4D5C",
    marginBottom: 4,
  },
  sub: {
    fontFamily: "Pretendard",
    fontWeight: "600",
    fontSize: 12,
    color: "#3D4D5C",
  },
});

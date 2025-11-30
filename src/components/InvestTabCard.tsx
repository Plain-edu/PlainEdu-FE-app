import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

type MarketItem = {
  id: string;
  title: string;     // 예: "코스피 - KOSPI"
  price: number;     // 예: 2625.58
  changePct: number; // 예: +0.91 → 0.91 / -0.91 → -0.91
};

type Props = {
  data?: MarketItem[];
};

const FALLBACK_DATA: MarketItem[] = [
  { id: "kospi",  title: "코스피 - KOSPI",   price: 2625.58, changePct: 0.91 },
  { id: "kosdaq", title: "코스닥 - KOSDAQ",  price: 723.62,  changePct: 1.13 },
  { id: "sp500",  title: "S&P500",           price: 5940.46, changePct: 1.13 },
  { id: "nasdaq", title: "나스닥 - NASDAQ",  price: 19142.71, changePct: 1.13 },
];

const CARD_W = 164;
const CARD_H = 107;
const GAP = 12;

export function MarketIndexCarousel({ data = FALLBACK_DATA }: Props) {
  const { width: SCREEN_W } = Dimensions.get("window");
  const SNAP_INTERVAL = CARD_W + GAP;
  const SIDE_PAD = (data?.length ?? 0) > 1 ? 20 : Math.max(20, (SCREEN_W - CARD_W) / 2);  // 여러 장이면 왼쪽 여백 20으로 시작, 1장만 있을 땐 중앙 정렬

  return (
    <FlatList
      data={data}
      keyExtractor={(it) => it.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: SIDE_PAD }}
      ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
      snapToInterval={SNAP_INTERVAL}
      decelerationRate="fast"
      snapToAlignment="start"
      renderItem={({ item }) => <MarketCard item={item} />}
    />
  );
}

function MarketCard({ item }: { item: MarketItem }) {
  const color = item.changePct >= 0 ? "#FF3B30" : "#1C6EFF";
  const sign = item.changePct >= 0 ? "+" : "";
  const price = formatNumber(item.price);

  return (
    <View style={styles.card}>
      <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={[styles.change, { color }]}>{`${sign}${item.changePct.toFixed(2)}%`}</Text>
    </View>
  );
}

function formatNumber(n: number) {
  try { return n.toLocaleString(); } catch { return String(n); }
}

const styles = StyleSheet.create({
  card: {
    width: CARD_W,
    height: CARD_H,
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 11,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: "PretendardSemiBold",
    fontWeight: "700",
    fontSize: 15,
    color: "#3D4D5C",
  },
  price: {
    fontFamily: "PretendardSemiBold",
    fontWeight: "700",
    fontSize: 25,
    color: "#3D4D5C",
  },
  change: {
    fontFamily: "PretendardSemiBold",
    fontWeight: "700",
    fontSize: 15,
    marginTop: 2,
    color: '#FF3F3B',
  },
});

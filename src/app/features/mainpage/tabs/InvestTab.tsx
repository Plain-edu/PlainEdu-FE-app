import AssetBottomSheet, { type AssetBottomSheetRef } from "@/src/components/AssetBottomSheet";
import { MOCK_TOP10, TAB_LABELS, type TabKey, type Top10Item } from "@/src/constants/InvestCardMockData";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, Image, Pressable, ScrollView, Text, View } from "react-native";
import { MarketIndexCarousel } from "../../../../components/InvestTabCard";

type MyMarketItem = { changePct: number };
const FALLBACK: MyMarketItem = { changePct: 9.23 };

export function InvestTab() {
  const sign = FALLBACK.changePct >= 0 ? "+" : "";
  const changeColor = FALLBACK.changePct >= 0 ? "#FF3B30" : "#1C6EFF";
  const [active, setActive] = useState<TabKey>("marketcap"); // Default active tab
  const list: Top10Item[] = MOCK_TOP10[active]; // Fetch the data based on active tab

  const assetSheetRef = useRef<AssetBottomSheetRef>(null);
  const openAssetSheet = () => assetSheetRef.current?.open();

  return (
    <>
      <MarketIndexCarousel />
      <ScrollView className="w-full" contentContainerStyle={{ alignItems: "center", paddingBottom: 24 }}>
        {/* 보유 총 자산 라인 */}
        <View className="mt-3 w-11/12 flex-row items-center justify-between px-5">
          <View className="flex-row items-center gap-3">
            <Text
              style={{ fontFamily: "Pretendard" }}
              className="font-bold text-[20px] leading-[25px] text-[#121217]"
            >
              보유 총 자산
            </Text>
            <Text
              style={{ color: changeColor, fontFamily: "Pretendard" }}
              className="font-bold text-[16px] leading-5 mr-2"
            >
              {`${sign}${FALLBACK.changePct.toFixed(2)}%`}
            </Text>
          </View>
          <Pressable onPress={openAssetSheet} hitSlop={8}>
            <Image
              source={require("@/assets/images/go-next-icon.png")}
              className="w-[18px] h-[18px]"
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        {/* 탭바: TOP 10 포함 (Horizontal ScrollView 사용) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 24, width: "100%", paddingLeft: 20 }}>
          {TAB_LABELS.map((t) => {
            const selected = active === t.key;
            return (
              <Pressable key={t.key} onPress={() => setActive(t.key)} className="mr-4">
                <Text
                  style={{ fontFamily: "Pretendard", fontSize: 20 }}
                  className={
                    selected
                      ? "font-extrabold text-[20px] text-[#121217]"  // 선택 탭 강조
                      : "font-bold text-[18px] text-[#E7E7E7]"        // 비선택 탭 흐림
                  }
                >
                  {t.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* 탭별 카드 리스트 */}
        <Top10CardList items={list} className="my-6" />
      </ScrollView>

      <AssetBottomSheet
        ref={assetSheetRef}
        title="보유 총 자산"
        total={10000}
        changePct={9.23}
      />
    </>
  );
}

// Top10 카드 리스트
function Top10CardList({ items, className }: { items: Top10Item[]; className?: string }) {
  return (
    <View
      className={`w-11/12 rounded-3xl bg-white shadow-lg ${className ?? ""}`}
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 8 },
        elevation: 6,
      }}
    >
      <FlatList
        data={items} // Ensure the correct data structure
        renderItem={({ item }) => <Row item={item} />}
        keyExtractor={(item) => item.rank.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function Row({ item }: { item: Top10Item }) {
  const up = item.changePct >= 0;
  const pillBg = up ? "#FF3B30" : "#1C6EFF";
  const sign = up ? "+" : "";
  const price = `${item.price.toLocaleString()}원`;

  return (
    <Pressable
      className="px-7 py-4 flex-row items-center justify-between"
      onPress={() =>
        router.push({
          pathname: "/features/mainpage/InvestDetails",
          params: {
            id: String(item.rank),
            name: item.name,
            price: String(item.price),
            changePct: String(item.changePct),
          },
        })
      }
    >
      <Text style={{ fontFamily: "Pretendard" }} className="w-6 text-[16px] font-extrabold text-[#121217]">
        {item.rank}
      </Text>
      <View className="flex-1 flex-row items-center justify-between">
        <Text style={{ fontFamily: "Pretendard" }} className="flex-1 mr-2 text-[13px] font-bold text-[#121217]" numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={{ fontFamily: "Pretendard" }} className="mr-3 text-[13px] font-semibold text-[#121217]">
          {price}
        </Text>
      </View>
      <View className="px-2 py-1 rounded-full" style={{ backgroundColor: pillBg }}>
        <Text style={{ fontFamily: "Pretendard" }} className="text-white text-[12px] font-extrabold">
          {`${sign}${item.changePct.toFixed(2)}%`}
        </Text>
      </View>
    </Pressable>
  );
}

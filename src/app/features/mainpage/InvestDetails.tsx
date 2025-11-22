import { TradeBottomSheet, TradeBottomSheetRef } from "@/src/components/TradeBottomSheet";
import { router, useLocalSearchParams } from "expo-router";
import { useRef } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function InvestDetail() {
  const { id, name, price, changePct } = useLocalSearchParams<{
    id: string;
    name: string;
    price: string;
    changePct: string;
  }>();

  const pct = Number(changePct);
  const sign = pct >= 0 ? "+" : "";
  const color = pct >= 0 ? "#FF3B30" : "#1C6EFF";
  const priceNum = Number(price);
  const buySheetRef = useRef<TradeBottomSheetRef>(null);
  const sellSheetRef = useRef<TradeBottomSheetRef>(null);

  return (
    <View className="flex-1 bg-white px-6 pt-[61px]">
      {/* 뒤로가기 */}
      <Pressable onPress={() => router.back()} className="z-10">
        <Image
          source={require('@/assets/images/go-back-icon.png')}
          className="w-[35px] h-[30px]"
          style={{ width: 35, height: 30 }}
          resizeMode="contain"
        />
      </Pressable>

      {/* 종목명 */}
      <Text className="text-xl font-bold mt-6 mb-1">{name}</Text>

      {/* 가격 */}
      <View className="flex-row items-center">
        <Text className="text-[27px] font-bold">{priceNum.toLocaleString()}</Text>
        <Text className="text-[15px] font-bold leading-6 ml-1">원</Text>
      </View>

      {/* 변화율 */}
      <Text className="text-[15px] leading-4 font-bold mt-3" style={{ color }}>
        {sign}{pct.toFixed(2)}%
      </Text>

      {/* 차트 자리 (임시) */}
      <View className="mt-6 h-[200px] w-full bg-[#EEF1F5] rounded-lg items-center justify-center">
        <Text className="text-gray-400">[그래프 자리]</Text>
      </View>

      {/* 버튼 */}
      <View className="flex-row justify-center gap-[10px] mt-8">
        <Pressable
          className="bg-[#FF3F3B] py-[16px] px-[69px] rounded-xl items-center justify-center shadow"
          onPress={() => buySheetRef.current?.open()}
        >
          <Text className="text-white text-[15px] font-bold">매수</Text>
        </Pressable>
        <Pressable
          className="bg-[#007AFF] py-[16px] px-[69px] rounded-xl items-center justify-center shadow"
          onPress={() => sellSheetRef.current?.open()}
        >
          <Text className="text-white text-[15px] font-bold">매도</Text>
        </Pressable>
      </View>

      {/* 매수 바텀시트 */}
      <TradeBottomSheet
        ref={buySheetRef}
        mode="buy"
        name={String(name)}
        price={priceNum}
        changePct={pct}
      />

      {/* 매도 바텀시트 */}
      <TradeBottomSheet
        ref={sellSheetRef}
        mode="sell"
        name={String(name)}
        price={priceNum}
        changePct={pct}
      />
    </View>
  );
}

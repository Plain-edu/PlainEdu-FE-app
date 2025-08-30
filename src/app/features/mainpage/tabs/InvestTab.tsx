// screens/tabs/InvestTab.tsx
import React from "react";
import { Image, Text, View } from "react-native";
import { MarketIndexCarousel } from "../../../../components/InvestTabCard";

type MyMarketItem = { changePct: number };
const FALLBACK: MyMarketItem = { changePct: 9.23 };

export function InvestTab() {
  const sign = FALLBACK.changePct >= 0 ? "+" : "";
  const changeColor = FALLBACK.changePct >= 0 ? "#FF3B30" : "#1C6EFF";

  return (
    <View className="items-center">
      <MarketIndexCarousel />

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
          <Image
            source={require("@/assets/images/go-next-icon.png")}
            className="w-[18px] h-[18px] mr-1"
            resizeMode="contain"
          />
      </View>
    </View>
  );
}

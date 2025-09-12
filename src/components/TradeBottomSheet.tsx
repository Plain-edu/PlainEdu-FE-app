import React, { forwardRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Modalize } from "react-native-modalize";

export type TradeBottomSheetRef = Modalize;

type Props = {
  mode: "buy" | "sell"; // 매수 or 매도
  name: string;
  price: number;
  changePct: number;
};

const SHEET_MAX = 600;

export const TradeBottomSheet = forwardRef<TradeBottomSheetRef, Props>(
  ({ mode, name, price, changePct }, ref) => {
    const sign = changePct >= 0 ? "+" : "";
    const color = changePct >= 0 ? "#FF3B30" : "#1C6EFF";

    return (
      <Modalize
        ref={ref}
        modalHeight={SHEET_MAX}
        handlePosition="inside"
        handleStyle={{ backgroundColor: "#F0F2F5", width: 92 }}
        modalStyle={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
      >
        <View className="px-6 mt-[55px] pb-4">
          {/* 종목명 */}
          <Text className="text-xl font-bold mb-1">{name}</Text>

          {/* 가격 */}
          <View className="flex-row items-center">
            <Text className="text-[27px] font-bold">
              {price.toLocaleString()}
            </Text>
            <Text className="text-[15px] font-bold leading-6 ml-1">원</Text>
          </View>

          {/* 변화율 */}
          <Text className="text-[15px] leading-4 font-bold mt-3" style={{ color }}>
            {sign}
            {changePct.toFixed(2)}%
          </Text>

          {/* 입력창 */}
          <TextInput
            placeholder="0 원"
            keyboardType="number-pad"
            className="w-full h-[48px] mt-6 rounded-xl border-2 border-[#E7E7E7] px-4"
          />

          {/* 퍼센트 버튼들 */}
          <View className="flex-row justify-between mt-4 px-2">
            {["5%", "20%", "25%", "50%", "100%"].map((p) => (
              <Pressable
                key={p}
                className="px-2 py-1"
              >
                <Text className="text-sm font-bold">{p}</Text>
              </Pressable>
            ))}
          </View>

          {/* 키패드 자리 */}
          <View className="mt-5 h-[240px] items-center justify-center bg-[#F9FAFB] rounded-lg">
            <Text className="text-gray-400">[키패드 자리]</Text>
          </View>

          {/* 하단 버튼 */}
          <Pressable
            className={`mt-6 py-4 rounded-xl items-center justify-center ${
              mode === "buy" ? "bg-[#FF3F3B]" : "bg-[#007AFF]"
            }`}
          >
            <Text className="text-white text-[18px] font-bold">
              {mode === "buy" ? "매수" : "매도"}
            </Text>
          </Pressable>
        </View>
      </Modalize>
    );
  }
);

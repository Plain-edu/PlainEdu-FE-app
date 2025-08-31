import React, { forwardRef } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
import DonutChart from "../components/DonutChart";
import { STOCKS } from "../constants/MyStocksMockData";

type Props = {
  title?: string;
  total?: number;
  changePct?: number;
};

const SHEET_MAX = Math.min(Dimensions.get("window").height * 0.8, 680);
const SCREEN_WIDTH = Dimensions.get("window").width;

export type AssetBottomSheetRef = Modalize;

const AssetBottomSheet = forwardRef<AssetBottomSheetRef, Props>(
  ({ title = "보유 총 자산", total = 10000, changePct = 9.23 }, ref) => {
    const sign = changePct >= 0 ? "+" : "";
    const color = changePct >= 0 ? "#FF3B30" : "#1C6EFF";

    return (
      <Modalize
        ref={ref}
        modalHeight={SHEET_MAX}
        snapPoint={SHEET_MAX * 0.7}
        withHandle
        handlePosition="inside"
        panGestureEnabled
        handleStyle={{ backgroundColor: "#F0F2F5", width: 92 }}
        modalStyle={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
        overlayStyle={{ backgroundColor: "rgba(0,0,0,0.05)" }}
        flatListProps={{
          data: STOCKS,
          keyExtractor: (item) => item.id.toString(),
          // 상단 고정 영역 (요약 + 도넛차트 + 테이블 헤더)
          ListHeaderComponent: (
            <View className="px-9 py-9">
              <Text
                style={{ fontFamily: "Pretendard" }}
                className="text-[20px] font-bold text-[#121217]"
              >
                {title}
              </Text>

              <View className="mt-2 flex-row items-center">
                <Text
                  style={{ fontFamily: "Pretendard" }}
                  className="text-[27px] font-extrabold text-[#121217]"
                >
                  {total.toLocaleString()}
                </Text>
                <Text
                  style={{ fontFamily: "Pretendard" }}
                  className="ml-1 text-[15px] font-bold text-[#121217]"
                >
                  원
                </Text>
              </View>

              <Text
                style={{ fontFamily: "Pretendard", color }}
                className="mt-2 text-[15px] font-extrabold"
              >
                {`${sign}${changePct.toFixed(2)}%`}
              </Text>

              {/* 도넛차트 */}
              <View className="mt-6 mb-6 items-center">
                <DonutChart cash={80} etc={20} />
              </View>

              {/* 테이블 헤더 */}
              <View className="flex-row justify-center items-center border-b border-gray-200 mt-4 -mb-6 pb-2 text-[15px] font-semibold">
                <Text className="flex-1" />
                <Text className="w-20">종목명</Text>
                <Text className="w-16 text-center">보유량</Text>
                <Text className="w-28 text-center">평가금액</Text>
                <Text className="w-28 text-center text-[12px]">평가손익{"\n"}(수익률)</Text>
              </View>
            </View>
          ),
          // 데이터 렌더링
          renderItem: ({ item }) => (
            <View className="flex-row items-center justify-center text-center px-9 py-2">
              {/* 로고 */}
              <View className="w-8 items-center pr-7">
                <Image
                  source={item.logo}
                  className="w-7 h-7"
                  resizeMode="contain"
                />
              </View>

              {/* 종목명 */}
              <Text className="flex-1 text-center text-[13px]">{item.name}</Text>

              {/* 보유량 */}
              <Text className="w-16 text-center text-[13px]">
                {item.quantity}
              </Text>

              {/* 평가금액 */}
              <Text className="w-28 text-center text-[10px]">{item.value}</Text>

              {/* 평가손익 */}
              <Text className="w-28 text-center text-[10px]">
                {/* profit → 항상 검정 */}
                <Text className="text-black">{item.profit}</Text>
                {"\n"}
                {/* profitRate → 조건부 색상 */}
                <Text className={item.profitRate > 0 ? "text-red-500" : "text-blue-500"}>
                  {item.profitRate > 0 ? `+${item.profitRate}%` : `${item.profitRate}%`}
                </Text>
              </Text>
            </View>
          ),
        }}
      />
    );
  }
);

export default AssetBottomSheet;

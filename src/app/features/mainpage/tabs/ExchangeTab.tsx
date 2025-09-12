import React from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { STORE_ITEMS } from "../../../../constants/StoreItems";

export function ExchangeTab() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={STORE_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // 2열 그리드
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.8}
          className="w-[48%] mb-6 items-center"
        >
          <View className="w-[146px]">
            {/* 상품 이미지 */}
            <Image
              source={item.image}
              className="w-[146px] h-[123px]"
              resizeMode="cover"
            />

            {/* 브랜드 */}
            <Text className="mt-2 text-[13px] font-semibold text-[#3D4D5C] leading-5">
              {item.brand}
            </Text>

            {/* 상품명 */}
            <Text className="mt-1 text-[13px] font-semibold leading-5 text-black">
              {item.title}
            </Text>

            {/* 가격 */}
            <Text className="mt-1 text-[13px] font-semibold leading-5 text-black">
              {item.price}
            </Text>
          </View>
        </TouchableOpacity>

        )}
      />
    </SafeAreaView>
  );
}

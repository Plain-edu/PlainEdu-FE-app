import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type AppHeaderProps = {
  points?: number;
  onPressNotification?: () => void;
};

export function AppHeader({ points = 0, onPressNotification }: AppHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-4">
      {/* 로고 */}
      <Image
        source={require("@/assets/images/logo-text-blue.png")}
        className="h-[34px] w-[130px]"
        resizeMode="contain"
      />

      {/* 오른쪽 영역 */}
      <View className="flex-row items-center ml-[70px]">
        {/* 코인 */}
        <Image
          source={require("@/assets/images/silver-coin.png")}
          className="w-5 h-5 mr-2"
        />

        {/* 포인트 */}
        <Text className="text-gray-700">{points.toLocaleString()} p</Text>

        {/* 알림 버튼 */}
        <Pressable onPress={onPressNotification} className="ml-4">
          <Image
            source={require("@/assets/images/notification-icon.png")}
            className="w-6 h-6"
          />
        </Pressable>
      </View>
    </View>
  );
}

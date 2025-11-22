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
        style={{ width: 130, height: 34 }}
        resizeMode="contain"
      />

      {/* 오른쪽 영역 */}
      <View className="flex-row items-center ml-[70px]">
        {/* 코인 */}
        <Image
          source={require("@/assets/images/silver-coin.png")}
          className="mr-2"
          style={{ width: 20, height: 20 }}
        />

        {/* 포인트 */}
        <Text className="text-gray-700">{points.toLocaleString()} p</Text>

        {/* 알림 버튼 */}
        <Pressable onPress={onPressNotification} className="ml-4">
          <Image
            source={require("@/assets/images/notification-icon.png")}
            style={{ width: 24, height: 24 }}
          />
        </Pressable>
      </View>
    </View>
  );
}

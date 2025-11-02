import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommunityScreen } from "../../app/features/mainpage/CommunityScreen";
import { MainScreen } from "../../app/features/mainpage/MainScreen";
import { ProfileScreen } from "../../app/features/mainpage/ProfileScreen";
import { RankingScreen } from "../../app/features/mainpage/RankingScreen";
import { MainpageBottomBar } from "../../components/MainpageBottomBar";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "ranking" | "community" | "profile">("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <MainScreen />;
      case "ranking":
        return <RankingScreen />;
      case "community":
        return <CommunityScreen />;
      case "profile":
        return <ProfileScreen />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* 화면 컨텐츠 */}
      <View className="flex-1">{renderScreen()}</View>

      {/* 하단 네비게이션 */}
      <MainpageBottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
}

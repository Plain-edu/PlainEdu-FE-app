import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { RankingList } from "../../../components/RankingList";
import { ALL_RANKING, FRIEND_LIST, FRIEND_RANKING } from "../../../constants/RankingsMockData";

export function RankingScreen() {
  const [activeTab, setActiveTab] = useState<"all" | "friendRanking" | "friendList">("all");

  const renderContent = () => {
    switch (activeTab) {
      case "all":
        return <RankingList data={ALL_RANKING} />;
      case "friendRanking":
        return <RankingList data={FRIEND_RANKING} />;
      case "friendList":
        return <RankingList data={FRIEND_LIST} showRank={false} showScore={false} />;
    }
  };

  return (
    <View className="flex-1 bg-white mt-8">
      {/* 검색 아이콘 */}
      <View className="flex-row justify-end mr-3">
        <Image
          source={require("@/assets/images/search-icon.png")}
          className="w-6 h-6 mr-6"
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </View>

      {/* 상단 탭 */}
      <View className="flex-row justify-center gap-8 pt-9 pb-5 px-4">
        {[
          { key: "all", label: "전체 랭킹" },
          { key: "friendRanking", label: "친구 랭킹" },
          { key: "friendList", label: "친구목록" },
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <Pressable
              key={tab.key}
              onPress={() => setActiveTab(tab.key as any)}
              className="items-center"
            >
              <Text
                className={`text-[14px], font-bold ${
                  isActive ? "text-[#121217]" : "text-[#8E8E93]"
                } mb-1`}
              >
                {tab.label}
              </Text>

              {/* 언더라인 */}
              {isActive ? (
                <LinearGradient
                  colors={["#1C45D6", "#007AFF"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ width: 55, height: 3, borderRadius: 3 }}
                />
              ) : (
                <View className="w-[55px] h-[3px] rounded bg-[#E7E7E7]" />
              )}
            </Pressable>
          );
        })}
      </View>

      {/* 콘텐츠 */}
      <View className="flex-1">{renderContent()}</View>
    </View>
  );
}

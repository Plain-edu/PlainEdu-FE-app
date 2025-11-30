import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Tab = "home" | "ranking" | "community" | "profile";

type MainpageBottomBarProps = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

// 파일 상단에 이미지 매핑
const icons = {
  home: {
    before: require("../../assets/images/home-before.png"),
    after: require("../../assets/images/home-after.png"),
  },
  ranking: {
    before: require("../../assets/images/ranking-before.png"),
    after: require("../../assets/images/ranking-after.png"),
  },
  community: {
    before: require("../../assets/images/community-before.png"),
    after: require("../../assets/images/community-after.png"),
  },
  profile: {
    before: require("../../assets/images/profile-before.png"),
    after: require("../../assets/images/profile-after.png"),
  },
};

export function MainpageBottomBar({ activeTab, setActiveTab }: MainpageBottomBarProps) {
  return (
    <View className="flex-row justify-around border-t border-gray-200 pt-3 bg-white">
    {/* 홈 */}
    <Pressable onPress={() => setActiveTab("home")} className="items-center">
      <Image
        source={activeTab === "home" ? icons.home.after : icons.home.before}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.label}>홈</Text>
    </Pressable>

    {/* 순위 */}
    <Pressable onPress={() => setActiveTab("ranking")} className="items-center">
      <Image
        source={activeTab === "ranking" ? icons.ranking.after : icons.ranking.before}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.label}>순위</Text>
    </Pressable>

    {/* 커뮤니티 */}
    <Pressable onPress={() => setActiveTab("community")} className="items-center">
      <Image
        source={activeTab === "community" ? icons.community.after : icons.community.before}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.label}>커뮤니티</Text>
    </Pressable>

    {/* 프로필 */}
    <Pressable onPress={() => setActiveTab("profile")} className="items-center">
      <Image
        source={activeTab === "profile" ? icons.profile.after : icons.profile.before}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.label}>프로필</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontFamily: "PretendardSemiBold",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 10,
    lineHeight: 21,
    textAlign: "center",
    color: "#121217",
  },
});

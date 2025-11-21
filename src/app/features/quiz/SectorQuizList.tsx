import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Course = {
  id: string;
  title: string;
  tags: string[];
  locked?: boolean;
};

const COURSES: Course[] = [
  { id: "sector-1", title: "조선", tags: ["조선소", "한화오션", "LNG"], locked: true },
  { id: "sector-2", title: "통신서비스", tags: ["경기방어주", "KT", "통신사"], locked: true },
  { id: "sector-3", title: "태양광", tags: ["모듈", "한화솔루션", "EPC"], locked: true },
  { id: "sector-4", title: "항공", tags: ["FSC", "대한항공", "LCC"], locked: true },
  { id: "sector-5", title: "전자장비와 부품", tags: ["반도체", "디스플레이", "부품"], locked: true },
];

function GradientLevelLabel({ text }: { text: string }) {
  return (
    <MaskedView
      maskElement={
        <Text
          style={{
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 27,
          }}
        >
          {text}
        </Text>
      }
    >
      <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={["#1C45D6", "#007AFF"]}>
        <Text
          style={{
            opacity: 0,
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 27,
          }}
        >
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

export default function SectorQuizList() {
  const router = useRouter();
  const points = 10000;
  const MAIN_ROUTE = "/features/mainpage/App";

  return (
    <View className="flex-1 bg-white">
      <View className="px-5 pt-12 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.replace(MAIN_ROUTE)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Image
            source={require("@/assets/images/go-back-icon.png")}
            className="w-[30px] h-[30px]"
          />
        </TouchableOpacity>

        <View className="flex-row items-center">
          <Image
            source={require("@/assets/images/silver-coin.png")}
            className="w-[26px] h-[26px] mr-2"
            style={{ width: 26, height: 26 }}
          />
          <Text className="text-[#3D4D5C] font-semibold text-[15px] leading-6">
            {points.toLocaleString()} p
          </Text>
        </View>
      </View>

      {/* 검색창 */}
      <View className="px-8 mb-[74px] mt-6">
        <View className="flex-row items-center bg-[#F0F2F5] rounded-2xl px-4 py-3">
          <Image
            source={require("@/assets/images/search-icon.png")}
            className="w-5 h-5 mr-2"
          />
          <TextInput
            placeholder="원하는 섹터를 검색해 보세요!"
            placeholderTextColor="#3D4D5C"
            className="flex-1 text-[15px]"
          />
        </View>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}>
        {COURSES.map((c) => (
          <View key={c.id} style={styles.card}>
            <View className="flex-row items-center justify-between">
              {/* 텍스트 */}
                <GradientLevelLabel text={c.title} />
                {/* 화살표 */}
                <TouchableOpacity>
                  <Image
                    source={require("@/assets/images/blue-next-icon.png")}
                    className="w-[35px] h-[35px]"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
            </View>
                <View className="flex-row flex-wrap justify-between mt-4">
                  {c.tags.map((t, idx) => (
                    <View key={idx} className="bg-[#F0F2F5] rounded-3xl w-[95px] py-2 items-center">
                      <Text className="text-[#3D4D5C] text-[12px] font-semibold"># {t}</Text>
                    </View>
                  ))}
                </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F6F7F9",
    borderRadius: 24,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 20,
    marginHorizontal: 10,
  },
});

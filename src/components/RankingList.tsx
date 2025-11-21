import { FlatList, Image, Text, View } from "react-native";

export type RankingItem = {
  id: string;
  name: string;
  role: string;
  avatar: any; // require() 또는 uri
  score?: string;
};

type Props = {
  data: RankingItem[];
  showRank?: boolean;
  showScore?: boolean;
};

export function RankingList({ data, showRank = true, showScore = true }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View className="flex-row items-center py-3 px-7">
          {/* 순위 */}
          {showRank && (
            <Text className="w-10 text-[16px] leading-6 font-medium color-[#121217]">{index + 1}위</Text>
          )}

          {/* 아바타 */}
          <Image
            source={item.avatar}
            className="w-14 h-14 rounded-full ml-2 mr-4"
            style={{ width: 56, height: 56 }}
          />

          {/* 이름 + 역할 */}
          <View className="flex-1">
            <Text className="text-[16px] leading-6 font-medium color-[#121217]">{item.name}</Text>
            <Text className="text-[14px] leading-5 font-normal text-gray-500">{item.role}</Text>
          </View>

          {/* 점수 */}
          {showScore && (
            <Text className="text-[14px] leading-5 font-normal color-[#3D4D5C] mr-2">{item.score}</Text>
          )}
        </View>
      )}
    />
  );
}

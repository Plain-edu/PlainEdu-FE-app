import { TodayStudyCard } from "@/src/components/TodayStudyCard";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { AttendanceCheck } from "../../../../components/AttendanceCheck";
import { QuizCard } from "../../../../components/QuizTabCard";

export function QuizTab() {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const CARD_WIDTH = 360;
  const GAP = 16;
  const SNAP_INTERVAL = CARD_WIDTH + GAP;
  const SIDE_PAD = Math.max(20, (SCREEN_WIDTH - CARD_WIDTH) / 2);
  const router = useRouter();

  const listRef = useRef<FlatList>(null);

  const QUIZ_CARDS = [
    {
      id: "quiz-1",
      title: "금융 퀴즈",
      description: "주식 투자에 꼭 필요한 금융 개념과 원리를 쉽고 빠르게!",
      buttonText: "퀴즈 풀기",
      onPress: () => router.push("/features/quiz/FinanceQuizList"),
    },
    {
      id: "quiz-2",
      title: "섹터 퀴즈",
      description: "섹터 퀴즈 설명란",
      buttonText: "퀴즈 풀기",
      onPress: () => router.push("/features/quiz/SectorQuizList"),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      listRef.current?.scrollToOffset({
        offset: SIDE_PAD,
        animated: false,
      });
    }, 10);
  }, []);

  return (
    <>
      <FlatList
        ref={listRef}
        data={QUIZ_CARDS}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: SIDE_PAD,
          alignItems: "center",
        }}
        ListHeaderComponent={<View style={{ width: SIDE_PAD }} />}
        ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        snapToAlignment="start"
        pagingEnabled={false}
        renderItem={({ item }) => (
          <QuizCard
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
            onPress={item.onPress}
          />
        )}
      />

      <View style={{ alignItems: "center" }}>
        <AttendanceCheck
          style={{ marginTop: 10, marginBottom: 12, alignSelf: "center" }}
        />
      </View>

      <TodayStudyCard
        answered={0}
        total={0}
        accuracy={75}
        rankLabel="상위 10%"
        style={{ marginTop: 12 }}
      />
    </>
  );
}

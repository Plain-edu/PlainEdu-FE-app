import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import { AttendanceCheck } from "../../../../components/AttendanceCheck";
import { QuizCard } from "../../../../components/MainpageCard";

const QUIZ_CARDS = [
  {
    id: "quiz-1",
    title: "금융 퀴즈",
    description: "주식 투자에 꼭 필요한 금융 개념과 원리를 쉽고 빠르게!",
    buttonText: "퀴즈 풀기",
    onPress: () => console.log("퀴즈 풀기 눌림"),
  },
  // 추후 카드 추가 시 여기에 계속 push
];

export function QuizTab() {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    const CARD_WIDTH = 360;
    const GAP = 16;
    const SNAP_INTERVAL = CARD_WIDTH + GAP;
    const SIDE_PAD = Math.max(20, (SCREEN_WIDTH - CARD_WIDTH) / 2);

  return (
    <>
    <FlatList
      data={QUIZ_CARDS}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: SIDE_PAD, alignItems: "center" }}
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
          style={{}} // 필요 시 외부 스타일
        />
      )}
    />
    <View style={{ alignItems: 'center' }}>
      <AttendanceCheck style={{ marginTop: 16, marginBottom: 12, alignSelf: 'center' }} />
    </View>
    </>
  );
}

import { ResizeMode, Video } from "expo-av";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function VideoScreen() {
  const { level, index } = useLocalSearchParams<{ level?: string; index?: string }>();
  const router = useRouter();

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSkip = () => {
    router.push(`/features/quiz/play?level=${level}&index=${index}`);
  };

  return (
    <View className="flex-1 bg-white justify-center items-center relative">
      {/* 영상 */}
      <Video
        source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // 가라 데이터
        rate={1.0}
        volume={1.0}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        style={{ width: "100%", height: 300 }}
        onPlaybackStatusUpdate={(status) => {
          if (status.isLoaded && status.didJustFinish) {
            handleSkip(); // 영상 끝나면 자동 이동
          }
        }}
      />

      {/* 오른쪽 버튼 영역 */}
      <View className="absolute right-5 top-1/3 items-center justify-center">
        {/* 건너뛰기 */}
        <TouchableOpacity onPress={handleSkip} activeOpacity={0.7} className="items-center mb-1">
          <Image
            source={require("@/assets/images/skip-icon.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text className="text-[8px] font-extrabold text-black -mt-2">건너뛰기</Text>
        </TouchableOpacity>

        {/* 좋아요 */}
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          activeOpacity={0.7}
          className="items-center"
        >
          <Image
            source={
              liked
                ? require("@/assets/images/like-after-icon.png")
                : require("@/assets/images/like-before-icon.png")
            }
            style={{ width: 45, height: 45 }}
          />
          <Text className="text-[8px] font-extrabold text-black -mt-2">15</Text>
        </TouchableOpacity>

        {/* 저장하기 */}
        <TouchableOpacity
          onPress={() => setSaved(!saved)}
          activeOpacity={0.7}
          className="items-center"
        >
          <Image
            source={require("@/assets/images/save-icon.png")}
            style={[
              { width: 45, height: 45 },
              saved ? { tintColor: "black" } : {},
            ]}
          />
          <Text className="text-[8px] font-extrabold text-black -mt-2">저장하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

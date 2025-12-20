import { ResizeMode, Video } from "expo-av";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function VideoScreen() {
  const { level, index } = useLocalSearchParams<{ level?: string; index?: string }>();
  const router = useRouter();
  const videoRef = useRef<Video>(null);

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const stopVideo = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.stopAsync();
        await videoRef.current.unloadAsync();
      }
    } catch (e) {
      console.log("영상 정지 실패:", e);
    }
  };

  const handleSkip = async () => {
    await stopVideo(); // 이동 전에 영상 재생 완전히 종료
    router.push(`/features/quiz/${level}/StartQuiz?index=${index}`);
  };

  return (
    <View className="flex-1 bg-black relative">
      {/* Video Wrapper */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }}>
        <Video
          ref={videoRef}
          source={require("@/assets/videos/reels.mp4")}
          rate={1.0}
          volume={1.0}
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay
          style={{
            width: "100%",
            height: "100%",
          }}
          onPlaybackStatusUpdate={async (status) => {
            if (status.isLoaded && status.didJustFinish) {
              await handleSkip(); // 영상 끝나면 자동 이동
            }
          }}
        />
      </View>

      {/* 오른쪽 버튼 영역 */}
      <View className="absolute right-3 top-1/3 pb-3 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
        <TouchableOpacity onPress={handleSkip} activeOpacity={0.7} className="items-center mb-1">
          <Image source={require("@/assets/images/skip-icon.png")} style={{ width: 45, height: 45 }} />
          <Text className="text-[8px] font-extrabold text-black -mt-2">건너뛰기</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLiked(!liked)} activeOpacity={0.7} className="items-center">
          <Image
            source={
              liked ? require("@/assets/images/like-after-icon.png") : require("@/assets/images/like-before-icon.png")
            }
            style={{ width: 45, height: 45 }}
          />
          <Text className="text-[8px] font-extrabold text-black -mt-2">15</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSaved(!saved)} activeOpacity={0.7} className="items-center">
        <Image
          source={
            saved ? require("@/assets/images/save-after-icon.png") : require("@/assets/images/save-icon.png")
          }
          style={{ width: 18, height: 18, marginTop: 12, marginBottom: 13, marginLeft: 2 }}
        />
          <Text className="text-[8px] font-extrabold text-black -mt-2">저장하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

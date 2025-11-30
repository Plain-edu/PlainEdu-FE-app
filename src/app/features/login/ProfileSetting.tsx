import ProfileImagePicker from "@/src/components/ProfileImagePicker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function ProfileSettingScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState<"남성" | "여성" | "">("");

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
    <View className="flex-1 bg-white px-[32px] pt-[61px]">
      {/* 뒤로가기
      <Pressable
        onPress={() => router.back()}
        className="absolute z-10"
      >
        <Image
          source={require("@/assets/images/go-back-icon.png")}
          style={{ width: 35, height: 30 }}
          resizeMode="contain"
        />
      </Pressable>*/}

      {/* 타이틀 */}
      <Text className="text-[30px] leading-[28px] font-bold text-[#121217] pt-[20px]">
        프로필 설정
      </Text>
      <Text className="text-[16px] leading-[23px] font-normal text-[#3D4D5C] mt-[8px] mb-[10px]">
        나만의 프로필을 설정해주세요
      </Text>

      {/* 프로필 이미지 업로드 */}
      <View className="self-center mb-[24px]">
        <ProfileImagePicker />
      </View>

    {/* 닉네임 */}
    <View className="flex-row items-center mb-2">
    <Image
        source={
        name.trim()
            ? require("@/assets/images/check-after-icon.png")
            : require("@/assets/images/check-before-icon.png")
        }
        style={{ width: 18, height: 18, marginRight: 8 }}
        resizeMode="contain"
    />
    <Text className="text-[14px] font-bold text-[#121217]">닉네임</Text>
    </View>
    <TextInput
      placeholder="닉네임"
      placeholderTextColor="#3D4D5C"
      className="w-full h-[48px] rounded-[12px] border-[2.5px] border-[#F0F2F5] px-4 mb-[16px]"
      value={name}
      onChangeText={setName}
    />

    {/* 성별 */}
    <View className="flex-row items-center mb-2">
        <Image
            source={
            gender
                ? require("@/assets/images/check-after-icon.png")
                : require("@/assets/images/check-before-icon.png")
            }
            style={{ width: 18, height: 18, marginRight: 8 }}
            resizeMode="contain"
        />
        <Text className="text-[14px] font-bold text-[#121217]">성별</Text>
    </View>
        <View className="flex-row mb-[16px]">
            <Pressable
                onPress={() => setGender("남성")}
                className={`flex-1 h-[48px] rounded-[12px] border-[2px] mr-2 items-center justify-center ${
                    gender === "남성" ? "border-[#007AFF]" : "border-[#F0F2F5]"
                }`}
                >
            <Text
                className={`font-semibold ${
                gender === "남성" ? "text-[#007AFF]" : "text-[#3D4D5C]"
                }`}
            >
                남성
            </Text>
            </Pressable>
        <Pressable
          onPress={() => setGender("여성")}
          className={`flex-1 h-[48px] rounded-[12px] border-[2px] items-center justify-center ${
            gender === "여성" ? "border-[#007AFF]" : "border-[#F0F2F5]"
          }`}
        >
          <Text
            className={`font-semibold ${
              gender === "여성" ? "text-[#007AFF]" : "text-[#3D4D5C]"
            }`}
          >
            여성
          </Text>
        </Pressable>
      </View>

    {/* 생년월일 */}
    <View className="flex-row items-center mb-2">
    <Image
        source={
        birthDate.trim()
            ? require("@/assets/images/check-after-icon.png")
            : require("@/assets/images/check-before-icon.png")
        }
        style={{ width: 18, height: 18, marginRight: 8 }}
        resizeMode="contain"
    />
    <Text className="text-[14px] font-bold text-[#121217]">생년월일</Text>
    </View>
    <TextInput
    placeholder="생년월일"
    placeholderTextColor="#3D4D5C"
    className="w-full h-[48px] rounded-[12px] border-[2.5px] border-[#F0F2F5] px-4 mb-[24px]"
    keyboardType="number-pad"
    maxLength={8}
    value={birthDate}
    onChangeText={setBirthDate}
    />

      {/* 완료 버튼 */}
      <Pressable
        onPress={() => {
          router.push("/features/mainpage/App");
        }}
        style={{
          borderRadius: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        <LinearGradient
          colors={["#1C45D6", "#007AFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: 24,
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-white font-bold text-lg">완료</Text>
        </LinearGradient>
      </Pressable>
    </View>
    </ScrollView>
  );
}

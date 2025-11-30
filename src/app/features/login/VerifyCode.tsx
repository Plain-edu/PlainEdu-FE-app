import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function VerifyCodeScreen() {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(["", "", "", ""]); // 4자리
  const [timer, setTimer] = useState(180); // 3분 타이머
  const inputs = useRef<Array<TextInput | null>>([]);

  // 타이머 카운트다운
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      // 다음 input으로 이동
      if (index < 3 && text) {  // 3 대신 마지막 index = 4자리니까 3
      inputs.current[index + 1]?.focus();
      }
    } else if (text === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <View className="flex-1 bg-white px-[32px] pt-[61px]">
      {/* 뒤로가기 */}
      <Pressable onPress={() => router.back()} className="absolute z-10">
        <Image
          source={require("@/assets/images/go-back-icon.png")}
          style={{ width: 35, height: 30 }}
          resizeMode="contain"
        />
      </Pressable>

      {/* 타이틀 */}
      <Text className="text-[30px] leading-7 font-bold text-black mb-4 pt-28">
        인증번호
      </Text>

      {/* 안내 문구 */}
      <Text className="text-[16px] leading-6 text-gray-500 mb-4">
        인증번호를 입력해주세요
      </Text>

      <View className="flex-row items-center mt-4 mb-8">
        {/* 타이머 */}
        <Text
          className="text-xs font-bold text-gray-800 mr-5"
          style={{ width: 40, textAlign: "center" }}
        >
          {formatTime(timer)}
        </Text>

        {/* 인증번호 입력칸 (4자리) */}
        <View className="flex-row">
            {code.map((digit, idx) => (
            <View key={idx} style={{ width: 60, height: 60, marginRight: idx !== code.length - 1 ? 10 : 0 }}>
                {digit ? (
                // 입력된 경우 Gradient Border
                <LinearGradient
                    colors={["#1C45D6", "#007AFF"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientBorder}
                >
                    <TextInput
                    ref={(ref) => {
                        inputs.current[idx] = ref;
                    }}
                    value={digit}
                    onChangeText={(text) => handleChange(text, idx)}
                    keyboardType="numeric"
                    maxLength={1}
                    style={[
                      styles.inputFilled,
                      { textAlign: "center" }
                    ]}
                    textAlign="center"
                    />
                </LinearGradient>
                ) : (
                // 기본 상태
                <TextInput
                    ref={(ref) => {
                        inputs.current[idx] = ref;
                    }}
                    value={digit}
                    onChangeText={(text) => handleChange(text, idx)}
                    keyboardType="numeric"
                    maxLength={1}
                    style={[
                      styles.inputEmpty,
                      { textAlign: "center" }
                    ]}
                    textAlign="center"
                />
                )}
            </View>
            ))}
        </View>
      </View>

        {/* 재요청 버튼 */}
       <Pressable
        className="bg-white rounded-[24px] items-center justify-center shadow-lg self-center mb-9"
        style={{ width: 93, height: 26 }}
        >
            <Text className="text-[12px] font-bold text-[#3D4D5C]">
                재요청
            </Text>
        </Pressable>

        {/* 다음 버튼 */}
        <Pressable
            onPress={() => {
            router.push("/features/login/ProfileSetting");
            const inputCode = code.join("");
            console.log("입력된 코드:", inputCode);
            // TODO: 인증번호 검증 로직 추가
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
          <Text className="text-white font-bold text-lg">다음</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 12,
    padding: 2,
    flex: 1,
  },
  inputFilled: {
    fontFamily: "PretendardSemiBold",
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#F8F8F8",
    fontSize: 20,
    fontWeight: "600",
    color: "#121217",
  },
  inputEmpty: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "#F8F8F8",
    borderWidth: 2,
    borderColor: "#F0F2F5",
    fontSize: 20,
    fontFamily: "PretendardSemiBold",
    fontWeight: "600",
    color: "#121217",
  },
});

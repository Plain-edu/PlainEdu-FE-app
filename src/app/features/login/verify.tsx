import { CarrierBottomSheet } from "@/src/components/CarrierBottomSheet";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useRef, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { Modalize } from "react-native-modalize";

export default function VerifyScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [carrier, setCarrier] = useState('');

  const modalizeRef = useRef<Modalize>(null);

  const handleOpenCarrierSheet = () => {
    modalizeRef.current?.open();
  };

  const handleSelectCarrier = (selected: string) => {
    setCarrier(selected);
    modalizeRef.current?.close();
  };

  return (
    <View className="flex-1 bg-white px-[32px] pt-[61px]">
      {/* 뒤로가기 */}
      <Pressable onPress={() => router.back()} className="absolute z-10">
        <Image
          source={require('@/assets/images/go-back-icon.png')}
          style={{ width: 35, height: 30 }}
          resizeMode="contain"
        />
      </Pressable>

      {/* 타이틀 */}
      <Text className="text-[30px] leading-[28px] font-bold text-[#121217] mt-[119px]">본인인증</Text>
      <Text className="text-[16px] leading-[23px] font-normal text-[#3D4D5C] mt-[8px] mb-[14px]">본인인증을 진행해주세요</Text>

      {/* 이름 입력 */}
      <TextInput
        placeholder="이름"
        placeholderTextColor="#3D4D5C"
        className="w-full h-[48px] rounded-[12px] border-[2.5px] border-[#F0F2F5] px-4 mb-[10px]"
        value={name}
        onChangeText={setName}
      />

      {/* 생년월일 + 성별 */}
      <View className="flex-row items-center mb-[12px]">
        <TextInput
          placeholder="생년월일"
          placeholderTextColor="#3D4D5C"
          className="w-[160px] h-[48px] rounded-[12px] border-[2.5px] border-[#F0F2F5] px-4"
          keyboardType="number-pad"
          maxLength={6}
          value={birthDate}
          onChangeText={setBirthDate}
        />
        <Text className="mx-[6px]">
            <Image
                source={require('@/assets/images/hyphen-icon.png')}
                className="w-[24px] h-[24px]"
                resizeMode="contain"/>
        </Text>
        <TextInput
          className="w-[40px] h-[48px] rounded-[12px] border-[2.5px] border-[#F0F2F5] px-2 text-center"
          keyboardType="number-pad"
          maxLength={1}
          value={gender}
          onChangeText={setGender}
        />
        <View className="flex-row items-center ml-[6px]">
            <Image
                source={require('@/assets/images/threedots-icon.png')}
                className="w-[24px] h-[24px] mr-[10px]"
                resizeMode="contain"
            />
            <Image
                source={require('@/assets/images/threedots-icon.png')}
                className="w-[24px] h-[24px]"
                resizeMode="contain"
            />
        </View>
      </View>

      {/* 휴대폰 번호 */}
      <TextInput
        placeholder="휴대폰 번호"
        placeholderTextColor="#3D4D5C"
        className="w-full h-[48px] rounded-[12px] border-[2.5px] border-[#F0F2F5] px-4 mb-[12px]"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* 통신사 선택 (BottomSheet 연결) */}
      <Pressable
        onPress={handleOpenCarrierSheet}
        className="w-full h-[48px] rounded-[12px] border-[2.5px] border-[#F0F2F5] px-4 justify-center mb-[12px]"
      >
        <Text
          className={`text-base ${
            carrier ? "text-black" : "text-[#3D4D5C]"
          }`}
        >
          {carrier || "통신사 선택"}
        </Text>
      </Pressable>

      {/* 인증번호 전송 버튼 */}
        <Pressable
            onPress={() => {
              router.push("/features/login/VerifyCode");
            }}
            style={{
                borderRadius: 24,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 8,
                elevation: 5,
                marginTop: 23,
            }}
            >
            <LinearGradient
                colors={['#1C45D6', '#007AFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                borderRadius: 24,
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <Text
                style={{
                    fontFamily: 'PretendardSemiBold',
                    fontWeight: '700',
                    fontSize: 17,
                    lineHeight: 21,
                    textAlign: 'center',
                    color: '#FFFFFF',
                }}
                numberOfLines={1}
                ellipsizeMode="clip"
                >
                인증번호 전송
                </Text>
            </LinearGradient>
        </Pressable>
        <CarrierBottomSheet ref={modalizeRef} onSelect={handleSelectCarrier} />
    </View>
  );
}
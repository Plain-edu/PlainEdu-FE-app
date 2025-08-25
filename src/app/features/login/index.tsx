import { useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = (provider: string) => {
    // 여기에 소셜 로그인 로직 추가
    router.push({ pathname: '/features/login/terms' }); // 예시: 다음 단계로 이동
  };

  return (
    <View className="flex-1 bg-white pt-[205px]">
      <View className="items-start ml-[32px]">
        <Text className="text-[#121217] font-bold text-[24px] leading-[35px]">
          금융을 쉽고 재미있게!
        </Text>
        <Text className="text-[#121217] font-bold text-[24px] leading-[35px] mb-[5px]">
          금융 교육 플랫폼
        </Text>
        <Image
          source={require('@/assets/images/logo-text-blue.png')}
          className="w-[194px] h-[45px] mb-[85px]"
          resizeMode="contain"
        />
      </View>

      <View className="items-center">
        <Pressable 
        className="bg-white rounded-full px-5 py-2 mb-6" 
        style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 5, // Android용
        }}>
          <Text className="text-[#121217] font-bold text-[12px]">3초만에 시작하기🚀</Text>
        </Pressable>

        <View className="flex-row items-center mb-[8px]">
            <Pressable onPress={() => handleLogin('kakao')}>
                <Image source={require('@/assets/images/kakao-logo.png')} className="w-[70px] h-[70px] rounded-full" />
            </Pressable>
            <Pressable onPress={() => handleLogin('naver')} className="ml-[11px]">
                <Image source={require('@/assets/images/naver-logo.png')} className="w-[70px] h-[70px] rounded-full" />
            </Pressable>
            <Pressable onPress={() => handleLogin('apple')} className="ml-[11px]">
                <Image source={require('@/assets/images/apple-logo.png')} className="w-[70px] h-[70px] rounded-full" />
            </Pressable>
            <Pressable onPress={() => handleLogin('google')} className="ml-[11px]">
                <Image source={require('@/assets/images/google-logo.png')} className="w-[70px] h-[70px] rounded-full" />
            </Pressable>
        </View>

        <View className="flex-row justify-center items-center space-x-2 mt-2">
          <Pressable onPress={() => router.push({ pathname: '/features/login/find-id' })}>
            <Text className="font-normal text-[12px] leading-[23px] text-[#3D4D5C] text-center">
              아이디 찾기
            </Text>
          </Pressable>
          <Text className="text-[#3D4D5C] text-[12px] leading-[23px] mx-[4px]">|</Text>
          <Pressable onPress={() => router.push({ pathname: '/features/login/find-password' })}>
            <Text className="font-normal text-[12px] leading-[23px] text-[#3D4D5C] text-center">
              비밀번호 찾기
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

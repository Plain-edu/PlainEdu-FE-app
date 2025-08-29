import { Feather } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function TermsScreen() {
  const router = useRouter();

  const [agreeAll, setAgreeAll] = useState(false);
  const [agreements, setAgreements] = useState({
    service: false,
    privacy: false,
    marketing: false,
  });

  const toggleAll = () => {
    const next = !agreeAll;
    setAgreeAll(next);
    setAgreements({ service: next, privacy: next, marketing: next });
  };

  type AgreementKey = 'service' | 'privacy' | 'marketing';

  const toggleAgreement = (key: AgreementKey) => {
    const next = !agreements[key];
    const updated = { ...agreements, [key]: next };
    setAgreements(updated);
    setAgreeAll(Object.values(updated).every(Boolean));
  };

  const handleNext = () => {
    if (agreements.service && agreements.privacy) {
      router.push({ pathname: '/features/login/verify' });
    } else {
      alert('필수 약관에 동의해주세요.');
    }
  };

  const renderAgreementItem = (
    label: string,
    required: boolean,
    key: AgreementKey
  ) => {
    const isChecked = agreements[key];
    return (
      <Pressable
        onPress={() => toggleAgreement(key)}
        className="flex-row justify-between items-center px-4 py-3"
      >
        <View className="flex-row items-center">
          <Image
            source={
              isChecked
                ? require('@/assets/images/check-after-icon.png')
                : require('@/assets/images/check-before-icon.png')
            }
            style={{ width: 18, height: 18, marginRight: 15 }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: 'Pretendard',
              fontWeight: '600',
              fontSize: 15,
              lineHeight: 21,
              color: '#3D4D5C',
            }}
          >
            {label} {required ? '(필수)' : '(선택)'}
          </Text>
        </View>
        <Feather name="chevron-right" size={20} color="#999" />
      </Pressable>
    );
  };

  return (
    <View className="flex-1 bg-white px-[32px] pt-[61px]">
      {/* 뒤로가기 */}
      <Pressable onPress={() => router.back()} className="absolute ml-[16px] z-10">
        <Image
          source={require('@/assets/images/go-back-icon.png')}
          className="w-[35px] h-[30px]"
          resizeMode="contain"
        />
      </Pressable>

      {/* 로고 */}
      <Image
        source={require('@/assets/images/logo-text-blue.png')}
        className="w-[194px] h-[45px] mb-[5px] mt-[106px]"
        resizeMode="contain"
      />

      {/* 제목 텍스트 */}
      <View className="flex-row items-end mb-[58px]">
        <MaskedView
          maskElement={<Text className="text-[32px] font-bold">약관 동의</Text>}
        >
          <LinearGradient
            colors={['#1C45D6', '#007AFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text className="text-[32px] font-bold opacity-0">약관 동의</Text>
          </LinearGradient>
        </MaskedView>
        <Text className="text-[32px] font-bold text-[#121217]">가 필요해요</Text>
      </View>

      {/* 전체 동의 */}
      <Pressable
        onPress={toggleAll}
        className="flex-row items-center justify-center rounded-[12px]"
        style={{
          paddingVertical: 17,
          paddingHorizontal: 60,
          gap: 5,
          borderWidth: 2.5,
          borderColor: agreeAll ? '#007AFF' : '#F0F2F5',
        }}
      >
        <Image
          source={
            agreeAll
              ? require('@/assets/images/check-after-icon.png')
              : require('@/assets/images/check-before-icon.png')
          }
          style={{ width: 24, height: 24, marginRight: 1.5 }}
          resizeMode="contain"
        />

        {agreeAll ? (
          <MaskedView
            maskElement={
              <Text className="text-[18px] font-extrabold leading-[21px]">
                서비스 이용약관 전체동의
              </Text>
            }
          >
            <LinearGradient
              colors={['#1C45D6', '#007AFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text className="text-[18px] font-extrabold leading-[21px] opacity-0">
                서비스 이용약관 전체동의
              </Text>
            </LinearGradient>
          </MaskedView>
        ) : (
          <Text className="text-[#3D4D5C] text-[18px] font-extrabold leading-[21px]">
            서비스 이용약관 전체동의
          </Text>
        )}
      </Pressable>

      {/* 개별 약관 */}
      <View className="mt-[22px] mb-[28px]">
        {renderAgreementItem('Plain edu 서비스 이용약관', true, 'service')}
        {renderAgreementItem('개인정보 처리방침', true, 'privacy')}
        {renderAgreementItem('마케팅 정보 수신 동의', false, 'marketing')}
      </View>

      {/* 다음 버튼 */}
      <Pressable
        onPress={handleNext}
        style={{
            borderRadius: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 5,
        }}
        >
        <LinearGradient
            colors={['#1C45D6', '#007AFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
            borderRadius: 24,
            paddingVertical: 10,
            paddingHorizontal: 135,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <Text
            style={{
                fontFamily: 'Pretendard',
                fontWeight: '700',
                fontSize: 17,
                lineHeight: 21,
                textAlign: 'center',
                color: '#FFFFFF',
            }}
            >
            다음
            </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

import { useRootNavigationState, useRouter } from 'expo-router';
import { MotiImage } from 'moti';
import { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();
  const navState = useRootNavigationState();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!navState?.key) return;

    const sequence = [1000, 1000, 1000, 1200, 1500]; // 각 step별 딜레이(ms)
    let total = 0;

    const timers = sequence.map((delay, index) => {
      total += delay;
      return setTimeout(() => {
        setStep(index + 1);
      }, total);
    });

    // 마지막에 로그인 화면으로 전환
    const final = setTimeout(() => {
      router.replace({ pathname: '/features/login' });
    }, total + 300);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(final);
    };
  }, [navState?.key]);

  return (
    <View style={styles.container}>
      {/* Step 1: Plain edu 파란 텍스트 */}
      {step >= 1 && step < 3 && (
        <MotiImage
          source={require('@/assets/images/logo-text-blue.png')}
          style={[styles.textOnly, styles.topOffset]}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 500 } as any}
        />
      )}

      {/* Step 2: 고래 로고 + 텍스트 */}
      {step === 3 && (
        <View style={[styles.stackRow, styles.topOffset]}>
          <MotiImage
            source={require('@/assets/images/logo-icon.png')}
            style={styles.logoIcon}
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 400 } as any}
          />
          <MotiImage
            source={require('@/assets/images/logo-text-blue.png')}
            style={styles.logoText}
            from={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 400, delay: 100 } as any}
          />
        </View>
      )}

      {/* Step 3: 고래 확대 */}
      {step === 4 && (
        <MotiImage
          source={require('@/assets/images/logo-icon.png')}
          style={[styles.iconZoom, styles.topOffset]}
          from={{ opacity: 1, scale: 1 }}
          animate={{ scale: 4 }}
          transition={{ type: 'timing', duration: 800 } as any}
        />
      )}

      {/* Step 4: 최종 배경 + 흰 텍스트 */}
      {step >= 5 && (
        <ImageBackground
          source={require('@/assets/images/splash-bg.png')}
          style={styles.fullscreenBg}
          resizeMode="cover"
        >
          <MotiImage
            source={require('@/assets/images/logo-text-white.png')}
            style={[styles.textWhite, styles.topOffset]}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 600 } as any}
          />
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topOffset: {
    marginTop: 186,
  },
  textOnly: {
    width: 160,
    height: 30,
    resizeMode: 'contain',
  },
  stackRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 79,
    height: 38,
    resizeMode: 'contain',
    marginRight: 8,
  },
  logoText: {
    width: 158,
    height: 41,
    resizeMode: 'contain',
  },
  iconZoom: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  fullscreenBg: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textWhite: {
    width: 158,
    height: 41,
    resizeMode: 'contain',
  },
});

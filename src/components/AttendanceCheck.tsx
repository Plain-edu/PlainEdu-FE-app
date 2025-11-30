import { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  label?: string;                     // 기본값: "출석 체크"
  initialChecked?: boolean[];         // 길이 7 (월~일)
  onChange?: (next: boolean[], index: number) => void;
  style?: ViewStyle;                  // 외부 컨테이너 스타일
};

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];

export function AttendanceCheck({
  label = "출석 체크",
  initialChecked,
  onChange,
  style,
}: Props) {
  const init = useMemo(
    () => (initialChecked && initialChecked.length === 7 ? initialChecked : Array(7).fill(false)),
    [initialChecked]
  );
  const [checked, setChecked] = useState<boolean[]>(init);

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = [...prev];
      next[i] = !next[i];
      onChange?.(next, i);
      return next;
    });
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.row}>
        {DAYS.map((d, i) => {
          const isOn = checked[i];
          return (
            <Pressable
            key={d}
            onPress={() => toggle(i)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={[
                styles.dayWrap,
                i > 0 && { marginLeft: -8 },     // ← 살짝 겹치기
                { zIndex: i + 1 },
            ]}
              accessibilityRole="button"
              accessibilityLabel={`${d} 출석`}
              accessibilityState={{ checked: isOn }}
            >
              {isOn ? (
                <Image
                  source={require("../../assets/images/attendance-check-icon.png")}
                  style={styles.checkedIcon}
                  resizeMode="contain"
                />
              ) : (
                <View style={styles.dayCircle}>
                  <Text style={styles.dayText}>{d}</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const CIRCLE = 40;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontFamily: "PretendardSemiBold",
    fontWeight: "600",
    fontSize: 17,
    color: "#3D4D5C",
    marginRight: 22,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "visible",
  },
  dayWrap: {
    position: "relative",
    },
    dayCircle: {
    width: CIRCLE,
    height: CIRCLE,
    borderRadius: CIRCLE / 2,
    backgroundColor: "#EEF1F5",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  dayText: {
    fontFamily: "PretendardSemiBold",
    fontWeight: "600",
    fontSize: 15,
    color: "#3D4D5C",
  },
  checkedIcon: {
    width: CIRCLE,
    height: CIRCLE,
  },
});

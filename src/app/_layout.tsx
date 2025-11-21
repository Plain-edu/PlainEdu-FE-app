import { Stack } from "expo-router";
import { Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider, Portal } from "react-native-paper";
import "./global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <Portal.Host>

          <View style={styles.root}>
            {/* ⭐ 웹에서만 maxWidth 적용 */}
            <View
              style={
                Platform.OS === "web"
                  ? styles.webContainer
                  : styles.nativeContainer
              }
            >
              <Stack
                screenOptions={{
                  animation: "none",
                }}
              />
            </View>
          </View>

        </Portal.Host>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  // ⭐ 앱에서는 전체 화면 사용
  nativeContainer: {
    flex: 1,
    width: "100%",
  },

  // ⭐ 웹에서는 480px 고정 + 중앙 정렬
  webContainer: {
    flex: 1,
    width: 480,
    maxWidth: 480,
  },
});

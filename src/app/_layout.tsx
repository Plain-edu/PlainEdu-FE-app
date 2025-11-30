import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider, Portal } from "react-native-paper";
import "./global.css";

export default function RootLayout() {
  // 웹 환경에서 디버그바 강제 제거
  useEffect(() => {
    if (Platform.OS === "web") {
      const style = document.createElement("style");
      style.innerHTML = `
        #expo-router-debug-tools,
        [data-expo-router-debug],
        .expo-router-debug-bar {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          height: 0 !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <Portal.Host>

          <View style={styles.root}>
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

  nativeContainer: {
    flex: 1,
    width: "100%",
  },

  webContainer: {
    flex: 1,
    width: "100%",
    maxWidth: 480,
  },
});

import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider, Portal } from "react-native-paper";
import "./global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <Portal.Host>
          <Stack
            screenOptions={{
              animation: "none",
            }}
          />
        </Portal.Host>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
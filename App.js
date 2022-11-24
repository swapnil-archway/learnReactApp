import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Reactotron from "reactotron-react-native";
import { BottomSheetProvider, ThemeContextProvider } from "./src/context";
import {
  RootNavigator,
  setRootNavigation,
  useNavigationPersistence,
} from "./src/navigation";
import { useRef } from "react";
import { NAVIGATION_PERSISTENCE_KEY } from "./src/constants";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

if (__DEV__) {
  // At this point, Reactotron is hooked up.
  import("./src/services/reactotron").then(() => {
    Reactotron.clear();
    console.log("Reactotron Configured!");
  });
}
export default function App() {
  const navigationRef = useRef();
  setRootNavigation(navigationRef);

  // const { initialNavigationState, onNavigationStateChange } =
  //   useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeContextProvider>
        <BottomSheetProvider>
          <RootNavigator
            ref={navigationRef}
            // initialState={initialNavigationState}
            // onStateChange={onNavigationStateChange}
          />
        </BottomSheetProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BottomTabsStack } from "./src/navigation/bottom-tabs";
import Reactotron from "reactotron-react-native";

if (__DEV__) {
  // At this point, Reactotron is hooked up.
  import("./src/services/reactotron").then(() => {
    Reactotron.clear();
    console.log("Reactotron Configured!");
  });
}
export default function App() {
  return <BottomTabsStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

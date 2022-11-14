import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const Topic = () => {
  return (
    <View style={styles.container}>
      <Text>Topic Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

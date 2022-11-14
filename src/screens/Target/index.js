import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Target = () => {
  return (
    <View style={styles.container}>
      <Text>Target Screen</Text>
    </View>
  );
};

export default Target;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

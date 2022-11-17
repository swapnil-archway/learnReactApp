import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("screen");

export const Card = ({ card }) => {
  return (
    <View activeOpacity={1} style={styles.card}>
      <Text style={styles.header}>{card?.attributes?.title ?? ""}</Text>
      <Text style={styles.abstract}>{card?.attributes?.abstract ?? ""}</Text>
      <Text style={styles.text}>
        {`${card?.attributes?.details?.slice(0, 45)}...`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    /* Setting the height according to the screen height, it also could be fixed value or based on percentage. */
    height: height - 120,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: "100%",
  },
  descriptionContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexDirection: "column",
    height: "100%",
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  header: {
    margin: 10,
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  abstract: {
    margin: 10,
    color: "black",
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    margin: 10,
    color: "black",
  },
});

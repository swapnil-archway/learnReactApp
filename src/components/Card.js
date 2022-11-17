import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
const { height } = Dimensions.get("screen");
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from "../theme";
export const Card = ({ card }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    // <View activeOpacity={1} style={styles.card}>
    //   <Text style={styles.header}>{card?.attributes?.title ?? ""}</Text>
    //   <Text style={styles.abstract}>{card?.attributes?.abstract ?? ""}</Text>
    //   <Text style={styles.text}>
    //     {`${card?.attributes?.details?.slice(0, 45)}...`}
    //   </Text>
    // </View>
    <View activeOpacity={1} style={styles.card}>
      <Image style={styles.image} source={card.photo} resizeMode="cover" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onShare}>
          <Ionicons name="md-share-social" color={color.primary} size={26} />
        </TouchableOpacity>
        <View style={styles.button}>
          <Ionicons name="md-add-sharp" color={color.primary} size={26} />
        </View>
        <View>
          <Ionicons name="ellipsis-vertical" color={color.primary} size={26} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    /* Setting the height according to the screen height, it also could be fixed value or based on percentage. */
    height: height - 130,
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
    // borderRadius: 5,
    flex: 1,
    width: "100%",
  },
  descriptionContainer: {
    // justifyContent: "flex-end",
    // alignItems: "flex-start",
    // flexDirection: "column",
    // height: "100%",
    // position: "absolute",
    // left: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "flex-end",
    alignItems: "center",
    // bottom: 10,
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
  bottomView: {
    width: "100%",
    height: 50,
    backgroundColor: "#EE5407",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
  },
  container: {
    // flex: 1,
    alignItems: "center",
    margin: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
  button: {
    width: "15%",
    // height: 40,
  },
});

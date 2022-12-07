import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
const { height, width } = Dimensions.get("window");
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SheetOptions, useBottomSheet } from "../context";
import { color } from "../theme";

const screenHeight = Math.round((width * 9) / 16);
const screenWidth = width;
export const Card = ({ news, lastNews }) => {
  const { openBottomSheet } = useBottomSheet();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
        url: news.link,
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
    <View
      activeOpacity={1}
      style={[styles.card, { height: screenHeight, width: screenWidth }]}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>{news?.attributes?.title ?? ""}</Text>
        {news?.photo && (
          <Image style={styles.image} source={news?.photo} resizeMode="cover" />
        )}
        <Text style={styles.abstract}>{news?.attributes?.abstract ?? ""}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={onShare}>
            <Ionicons name="md-share-social" color={color.primary} size={26} />
          </TouchableOpacity>
          <View style={styles.button}>
            <Ionicons name="md-add-sharp" color={color.primary} size={26} />
          </View>
          <TouchableOpacity
            onPress={() => {
              // RootNavigation.navigate(Routes.INSIDE_MODAL_STACK, {
              //   screen: Routes.BACKDROP,
              //   params: {
              //     backdropHeight: "20%",
              //   },
              // });
              openBottomSheet({
                type: SheetOptions.CUSTOM_LIST,
                selectOptions: [
                  { label: "Like", icon: "like1" },
                  { label: "Unlike", icon: "dislike1" },
                  { label: "Report", icon: "questioncircle" },
                ],
                onPressItem: (option) => {
                  console.log("optionn", option);
                },
                value: "Take Image",
                snaps: ["20%", height / 4],
                itemLayout: ({
                  item: { label, icon },
                  index,
                  callback,
                  closeBottomSheet,
                }) => {
                  return (
                    <TouchableOpacity
                      style={styles.customListItem(index % 2)}
                      key={index.toString()}
                      onPress={() => {
                        callback.current(label);
                        closeBottomSheet();
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          // justifyContent: "center",
                          // marginVertical: 0,
                          // marginHorizontal: "auto",
                          alignItems: "center",
                        }}
                      >
                        <AntDesign
                          name={icon}
                          color={color.primary}
                          size={24}
                        />
                        <Text style={styles.title}>{label}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                },
              });
            }}
          >
            <Ionicons
              name="ellipsis-vertical"
              color={color.primary}
              size={26}
            />
          </TouchableOpacity>
        </View>
        {lastNews == true ? (
          <View style={styles.flashMessage}>
            <Text style={{ color: "#000" }}>
              You have read through all currently available cards
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    /* Setting the height according to the screen height, it also could be fixed value or based on percentage. */
    // height: height - tabBarHeight,
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
    flex: 1,
  },
  image: {
    // borderRadius: 5,
    flex: 1,
    width: "100%",
  },
  header: {
    margin: 10,
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    textTransform: "capitalize",
  },
  abstract: {
    margin: 10,
    color: "black",
    fontSize: 16,
  },
  container: {
    flexDirection: "column",
  },
  button: {
    width: "15%",
  },
  customListItem: (isEven) => ({
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  }),
  title: {
    fontSize: 16,
    color: color.palette.navyTwo,
    marginLeft: 10,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  flashMessage: {
    // position: "absolute",
    backgroundColor: color.palette.warmGrey3,
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    // top: 0,
  },
  btnContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingTop: 15,
    paddingBottom: 15,
    marginRight: 15,
  },
});

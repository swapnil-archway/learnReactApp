import React from "react";
import { StyleSheet, BackHandler } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Topic } from "../../../screens/Topic";
import Target from "../../../screens/Target";
import Settings from "../../../screens/Settings";
import { color } from "../../../theme";
import Home from "../../../screens/Home";
import Routes from "../../routes";
import { DashboardStack } from "./dashboard-stack";
import { TopicStack } from "./topic-stack";
import { AccountStack } from "./account-stack";
import { TargetStack } from "./target-stack";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsStack = () => {
  React.useEffect(() => {
    const handleBackButton = () => {
      // console.log('>> back handler called');
      return false;
    };
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }, []);
  return (
    // <NavigationContainer>
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarStyle: {
          minHeight: 58,
        },
        headerShown: false,
      }}
      backBehavior={"none"}
    >
      {/* <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-home"
                color={focused ? color.primary : "#8F8F8F"}
                size={26}
              />
            );
          },
        }}
      /> */}
      <BottomTabs.Screen
        name={Routes.DASHBOARD_STACK}
        component={DashboardStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-home"
                color={focused ? color.primary : "#8F8F8F"}
                size={26}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name={Routes.TOPIC_STACK}
        component={TopicStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="md-apps-outline"
                color={focused ? color.primary : "#8F8F8F"}
                size={26}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name={Routes.TARGET_STACK}
        component={TargetStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="bookmark-outline"
                color={focused ? color.primary : "#8F8F8F"}
                size={26}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name={Routes.ACCOUNT_STACK}
        component={AccountStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="settings-outline"
                color={focused ? color.primary : "#8F8F8F"}
                size={26}
              />
            );
          },
        }}
      />
    </BottomTabs.Navigator>
    // </NavigationContainer>
  );
};

export const styles = StyleSheet.create({
  tabContainer: {
    width: 24,
    height: 24,
    position: "relative",
  },
  tabBadge: {
    position: "absolute",
    top: 0,
    right: -1,
    backgroundColor: "#000",
    borderRadius: 16,
    zIndex: 2,
    width: 10,
    height: 10,
  },
  tabBadgeText: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
  },
});

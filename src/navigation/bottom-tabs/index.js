import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Topic } from "../../screens/Topic";
import Target from "../../screens/Target";
import Settings from "../../screens/Settings";
import { color } from "../../theme";
import Home from "../../screens/Home";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsStack = () => {
  return (
    <NavigationContainer>
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
        <BottomTabs.Screen
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
        />
        <BottomTabs.Screen
          name="Topic"
          component={Topic}
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
          name="Target"
          component={Target}
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
          name="Settings"
          component={Settings}
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
    </NavigationContainer>
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

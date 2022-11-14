import React from "react";
import { Image, BackHandler, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Routes from "../../routes";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Home } from "../../screens/Home";
import { Topic } from "../../screens/Topic";
import Target from "../../screens/Target";
import Settings from "../../screens/Settings";

import { color } from "../../../theme";
// import {TransactionHistoryStack} from './transaction-history-stack';
// import {NotificationsStack} from './notifications-stack';
// import {ProfitLossStack} from './profit-loss-stack';
// import {useDispatch, useSelector} from 'react-redux';
// import {exitAppOnBackHandle} from '../../../redux/slices';

// import {Text} from '../../../ui-components';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsStack = () => {
  //   const dispatch = useDispatch();
  //   const {badge} = useSelector((state) => state.fcmNotification);

  //   React.useEffect(() => {
  //     const handleBackButton = () => {
  //       dispatch(exitAppOnBackHandle());
  //       // console.log('>> back handler called');
  //       return false;
  //     };
  //     BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
  //   }, [dispatch]);

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

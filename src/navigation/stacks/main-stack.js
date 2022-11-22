import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../routes";
import { BottomTabsStack } from "./bottom-tabs";

import { color } from "../../theme";

const Stack = createStackNavigator();

export function MainStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: color.palette.azure,
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name={Routes.BOTTOM_TAB_STACK}
        component={BottomTabsStack}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

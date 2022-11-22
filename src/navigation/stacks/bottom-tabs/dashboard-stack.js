import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../../routes";
import { Home } from "../../../screens";

const Stack = createStackNavigator();

export function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.DASHBOARD_SCREEN}
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

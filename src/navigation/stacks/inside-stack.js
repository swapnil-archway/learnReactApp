import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Routes from "../routes";
import { MainStack } from "./main-stack";

// import * as Sentry from '@sentry/react-native';

const Stack = createStackNavigator();

export function InnerStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name={Routes.MAIN_STACK} component={MainStack} /> */}
      <Stack.Screen name={Routes.MAIN_STACK} component={MainStack} />
    </Stack.Navigator>
  );
}

export function InsideStack() {
  return <InnerStack />;
}

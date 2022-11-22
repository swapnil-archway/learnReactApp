import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../../routes";
import { Topic } from "../../../screens";

const Stack = createStackNavigator();

export function TopicStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.TOPIC_SCREEN}
        component={Topic}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

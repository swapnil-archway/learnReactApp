// App container / Root navigator
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { color } from "../theme";
import Routes from "./routes";
import { MainStack } from "./stacks/main-stack";
import { dialogOptions } from "./navigation-utils";
import { Backdrop } from "../screens";
import { InsideStack } from "./stacks/inside-stack";
const Stack = createStackNavigator();
const InsideModalStack = () => (
  <Stack.Navigator screenOptions={dialogOptions}>
    <Stack.Screen
      name={Routes.BACKDROP}
      component={Backdrop}
      options={{ gestureEnabled: false }}
    />
  </Stack.Navigator>
);
export const RootNavigator = React.forwardRef((props, ref) => {
  return (
    <>
      <NavigationContainer {...props} ref={ref}>
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor={color.palette.pinkishGrey}
          />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              presentation: "modal",
            }}
          >
            <>
              <Stack.Screen
                name={Routes.INSIDE_STACK}
                component={InsideStack}
              />
              <Stack.Screen
                name={Routes.INSIDE_MODAL_STACK}
                component={InsideModalStack}
                options={dialogOptions}
              />
            </>
          </Stack.Navigator>
        </>
      </NavigationContainer>
    </>
  );
});

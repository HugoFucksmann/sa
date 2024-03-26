import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VerificationScreen from "../../screens/verification";
const Stack = createStackNavigator();

const VerificationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{
          title: "Verificarse",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default VerificationStack;

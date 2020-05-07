import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Product from "../Product";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};
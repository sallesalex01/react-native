import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import RootProduct from "./RootProduct";

const Stack = createNativeStackNavigator();

const RootHome = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RootProduct" component={RootProduct} />
    </Stack.Navigator>
  );
};

export default RootHome;

const styles = StyleSheet.create({});

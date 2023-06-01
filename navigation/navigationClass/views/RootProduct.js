import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import InfoProduto from "../components/InfoProduto";

const BottomTab = createBottomTabNavigator();

const RootProduct = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Product"
        component={InfoProduto}
        options={{ headerShown: true }}
      />
    </BottomTab.Navigator>
  );
};

export default RootProduct;

const styles = StyleSheet.create({});

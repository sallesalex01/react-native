import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import InfoProduto from "../components/InfoProduto";

const BottomTab = createBottomTabNavigator();

const RootProduct = ({ route }) => {
  const [estado, setEstado] = useState();
  let dados = route.params;

  useEffect(() => {
    setEstado(dados);
  }, [dados]);

  console.log(dados.id);

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Product"
        initialParams={estado}
        component={InfoProduto}
        options={{ headerShown: true }}
      />
    </BottomTab.Navigator>
  );
};

export default RootProduct;

const styles = StyleSheet.create({});

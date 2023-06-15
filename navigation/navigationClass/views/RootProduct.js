import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import InfoProduto from "../components/InfoProduto";
import InfoDetalhadaProduto from "../components/InfoDetalhadaProduto";

const BottomTab = createBottomTabNavigator();

const RootProduct = ({ navigation, route }) => {
  let dados = route.params;

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Produto">
        {() => <InfoProduto navigation={navigation} data={dados} />}
      </BottomTab.Screen>
      <BottomTab.Screen name="Informações">
        {() => <InfoDetalhadaProduto navigation={navigation} data={dados} />}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default RootProduct;

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import InfoProduto from "../components/InfoProduto";
import InfoDetalhadaProduto from "../components/InfoDetalhadaProduto";
import InfoVendedor from "../components/InfoVendedor";
import Icon from "react-native-vector-icons/FontAwesome";
import ComentariosProduto from "../components/ComentariosProduto";
import DuvidasProduto from "../components/DuvidasProduto";

const BottomTab = createBottomTabNavigator();

const RootProduct = ({ navigation, route }) => {
  let dados = route.params;

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Produto"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
      >
        {() => <InfoProduto navigation={navigation} data={dados} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Informações"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="info-circle" size={size} color={color} />
          ),
        }}
      >
        {() => <InfoDetalhadaProduto navigation={navigation} data={dados} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Vendedor"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      >
        {() => <InfoVendedor navigation={navigation} data={dados} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Comentários"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="comments" size={size} color={color} />
          ),
        }}
      >
        {() => <ComentariosProduto data={dados} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Duvidas"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="question-circle" size={size} color={color} />
          ),
        }}
      >
        {() => <DuvidasProduto data={dados} />}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default RootProduct;

const styles = StyleSheet.create({});

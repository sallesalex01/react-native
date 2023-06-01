import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import CardProduto from "../components/CardProduto";
import GenerateCardProduct from "../components/generateCardProduct";

const Home = ({ navigation, route }) => {
  const data = [
    {
      id: 1,
      nome: "Geladeira eletrolux",
      preco: 1000,
      imagem:
        "https://electrolux.vtexassets.com/arquivos/ids/218791/Refrigerator_IB45_Perspective_Electrolux_Portuguese-detalhe1.jpg?v=637836507941100000",
    },
  ];

  return (
    <View style={styles.container}>
      <GenerateCardProduct navigation={navigation} DATA={data} />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AF69EE",
    alignItems: "center",
    height: "100%",
  },
});

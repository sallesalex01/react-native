import { View, Text, StyleSheet, Button } from "react-native";
import { useState, useEffect } from "react";
import dadosLoja from "../utils/dadosLoja";
import React from "react";
import GenerateCardProduct from "../components/GenerateCardProduct";

const Home = ({ navigation, route }) => {
  const [dados, setDados] = useState(dadosLoja);

  const seila = (produto) => {
    navigation.navigate("RootProduct", produto);
    console.log(produto.id);
  };

  return (
    <View style={styles.container}>
      <GenerateCardProduct
        navigation={navigation}
        dados={dados}
        funcaoAleatoria={seila}
      />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "#AF69EE",
    alignItems: "center",
  },
});

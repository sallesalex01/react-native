import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import dadosLoja from "../utils/dadosLoja";
import React from "react";
import GenerateCardProduct from "../components/GenerateCardProduct";

const Home = ({ navigation, route }) => {
  const [dados, setDados] = useState(dadosLoja);

  const NavigateToProduct = (produto) => {
    navigation.navigate("RootProduct", produto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textAnuncio}>Produtos mais vendidos</Text>
      <GenerateCardProduct
        navigation={navigation}
        dados={dados}
        onCardClick={NavigateToProduct}
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
  textAnuncio: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});

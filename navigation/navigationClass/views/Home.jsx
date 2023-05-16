import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import CardProduto from "../components/CardProduto";

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <CardProduto navigation={navigation} />
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

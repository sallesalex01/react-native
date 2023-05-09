import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Home = ({ navigation, route }) => {
  let nome;
  try {
    nome = route.params.nome;
  } catch (err) {
    console.log(err);
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{nome}</Text>
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AF69EE",
    alignItems: "center",
    justifyContent: "center",
  },
});

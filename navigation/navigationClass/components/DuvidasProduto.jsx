import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DuvidaCard from "./DuvidaCard";

const DuvidaProduto = ({ data }) => {
  const { duvidas } = data;

  return (
    <View style={styles.container}>
      {duvidas.map((duvida, index) => (
        <DuvidaCard key={index} Question={duvida} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCDCD",
    padding: 20,
  },
});

export default DuvidaProduto;

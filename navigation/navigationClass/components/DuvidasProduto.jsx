import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DuvidaCard from "./DuvidaCard";
import Icon from "react-native-vector-icons/FontAwesome";

const DuvidaProduto = ({ data, navigation }) => {
  const { duvidas } = data;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      {duvidas.map((duvida, index) => (
        <DuvidaCard key={index} Question={duvida} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AF69EE",
    padding: 20,
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default DuvidaProduto;

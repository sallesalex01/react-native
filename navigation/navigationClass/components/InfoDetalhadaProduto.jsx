import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const InfoDetalhadaProduto = ({ navigation, data }) => {
  const { especificacoesDetalhadas } = data;

  const spec = especificacoesDetalhadas.split(",");
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.card}>
        {spec.map((item, index) => (
          <Text key={index} style={styles.specText}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AF69EE",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  specText: {
    fontSize: 18,
    fontWeight: "normal",
    marginBottom: 10,
  },
});

export default InfoDetalhadaProduto;

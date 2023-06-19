import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const InfoProduto = ({ navigation, data }) => {
  const { nome, imagem, descricao } = data;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.nome}>{nome}</Text>
        <Image style={styles.imagem} source={{ uri: imagem }} />
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCDCD",
    padding: 20,
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  nome: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imagem: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
  },
});

export default InfoProduto;

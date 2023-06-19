import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const InfoVendedor = ({ navigation, data }) => {
  const { informacoesDoVendedor } = data;
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.nome}>{informacoesDoVendedor.nome}</Text>
          <Text style={styles.nota}>{informacoesDoVendedor.nota} estrelas</Text>
        </View>
        <Image
          style={styles.imagem}
          source={{ uri: informacoesDoVendedor.imagem }}
        />
        <View style={styles.contato}>
          <Text style={styles.titulo}>Informações de Contato:</Text>
          <Text style={styles.info}>
            Telefone: {informacoesDoVendedor.telefone}
          </Text>
          <Text style={styles.info}>Email: {informacoesDoVendedor.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCDCD",
    padding: 16,
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  nota: {
    fontSize: 22,
    color: "#333",
  },
  imagem: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
    borderRadius: 8,
  },
  contato: {
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  info: {
    fontSize: 18,
    color: "#333",
  },
});

export default InfoVendedor;

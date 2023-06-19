import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DuvidaCard = ({ Question }) => {
  const { usuario, dataDuvida, duvida, resposta } = Question;

  return (
    <View style={styles.container}>
      <View style={styles.duvidaContainer}>
        <Text style={styles.usuario}>{usuario}</Text>
        <Text style={styles.dataDuvida}>{dataDuvida}</Text>
        <Text style={styles.duvida}>{duvida}</Text>
      </View>
      {resposta && (
        <View style={styles.respostaContainer}>
          <Text style={styles.respostaTitle}>Resposta do Vendedor:</Text>
          <Text style={styles.resposta}>{resposta}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
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
  duvidaContainer: {
    marginBottom: 8,
  },
  usuario: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dataDuvida: {
    fontSize: 14,
    color: "#666",
  },
  duvida: {
    fontSize: 16,
    marginBottom: 8,
  },
  respostaContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 12,
  },
  respostaTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  resposta: {
    fontSize: 16,
  },
});

export default DuvidaCard;

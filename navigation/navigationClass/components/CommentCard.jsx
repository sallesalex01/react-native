import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CommentCard = ({ comment }) => {
  const { autor, dataComentario, nota, comentario, resposta } = comment;

  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <Text style={styles.autor}>{autor}</Text>
        <Text style={styles.data}>{dataComentario}</Text>
        <Text style={styles.nota}>Nota: {nota}</Text>
        <Text style={styles.comentario}>{comentario}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  commentContainer: {
    marginBottom: 8,
  },
  autor: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dataComentario: {
    fontSize: 14,
    color: "#666",
  },
  nota: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  comentario: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default CommentCard;

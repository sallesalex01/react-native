import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommentCard from "./CommentCard";

const ComentariosProduto = ({ data }) => {
  const { comentarios } = data;

  return (
    <View style={styles.container}>
      {comentarios.map((comentario, index) => (
        <CommentCard key={index} comment={comentario} />
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

export default ComentariosProduto;

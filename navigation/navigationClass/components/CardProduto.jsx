import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const CardProduto = ({ navigation, data, onPressableClick }) => {
  const { imagem, nome, preco } = data;

  return (
    <Pressable
      style={styles.pressableContainer}
      data
      onPress={onPressableClick}
    >
      <View style={styles.containerProduto}>
        <Image
          style={styles.imageProduto}
          source={{
            uri: imagem,
          }}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTextInfo}>{nome}</Text>
          <Text>R${preco}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardProduto;

const styles = StyleSheet.create({
  containerProduto: {
    width: "100%",
    height: 125,
    flexDirection: "row",
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  imageProduto: {
    width: "50%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  productInfo: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100%",
  },
  productTextInfo: {
    // fontFamily: "sans-serif",
    fontSize: 20,
  },
  pressableContainer: {
    width: "100%",
    height: 125,
    marginBottom: 10,
  },
});

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const CardProduto = ({ navigation }) => {
  return (
    <Pressable
      style={styles.pressableContainer}
      onPress={() => navigation.navigate("RootProduct")}
    >
      <View style={styles.containerProduto}>
        <Image
          style={styles.imageProduto}
          source={{
            uri: "https://electrolux.vtexassets.com/arquivos/ids/218791/Refrigerator_IB45_Perspective_Electrolux_Portuguese-detalhe1.jpg?v=637836507941100000",
          }}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTextInfo}>1000RS</Text>
          <Text>1000RS</Text>
          <Text>1000RS</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardProduto;

const styles = StyleSheet.create({
  containerProduto: {
    width: 300,
    height: 125,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    width: 300,
    height: 125,
  },
});

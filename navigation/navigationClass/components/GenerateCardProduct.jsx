import { StyleSheet, SafeAreaView, FlatList, View, Text } from "react-native";
import React from "react";
import CardProduto from "./CardProduto";

const GenerateCardProduct = ({ navigation, dados, onCardClick }) => {
  return (
    <FlatList
      style={{ flex: 1, width: "100%", marginTop: 20 }}
      data={dados}
      renderItem={({ item }) => (
        <CardProduto
          navigation={navigation}
          data={item}
          onPressableClick={() => onCardClick(item)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default GenerateCardProduct;

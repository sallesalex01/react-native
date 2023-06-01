import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import React from "react";
import CardProduto from "./CardProduto";

const GenerateCardProduct = ({ navigation, DATA }) => {
  console.log(DATA);
  return (
    <View style={{ flex: 1, width: "100" }}>
      <FlatList
        style={{ flex: 1, backgroundColor: "blue" }}
        data={DATA}
        renderItem={({ item }) => (
          <CardProduto navigation={navigation} data={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default GenerateCardProduct;

const styles = StyleSheet.create({});

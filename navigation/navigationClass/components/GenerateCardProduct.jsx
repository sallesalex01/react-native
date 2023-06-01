import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardProduto from "./CardProduto";

const GenerateCardProduct = ({ navigation, DATA }) => {
  console.log(DATA);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <CardProduto navigation={navigation} data={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default GenerateCardProduct;

const styles = StyleSheet.create({});

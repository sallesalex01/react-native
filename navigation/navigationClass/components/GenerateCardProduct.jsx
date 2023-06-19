import { StyleSheet, SafeAreaView, FlatList, View, Text } from "react-native";
import React from "react";
import CardProduto from "./CardProduto";

const GenerateCardProduct = ({ navigation, dados, onCardClick }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CardProduto
        navigation={navigation}
        data={item}
        onPressableClick={() => onCardClick(item)}
      />
      <View style={styles.separator} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemContainer: {
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
    width: "100%",
  },
});

export default GenerateCardProduct;

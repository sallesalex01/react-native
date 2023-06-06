import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const InfoProduto = ({ navigation, route }) => {
  let qualquerCoisa = route.params;

  return (
    <View>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>Data: {qualquerCoisa.id}</Text>
    </View>
  );
};

export default InfoProduto;

const styles = StyleSheet.create({});

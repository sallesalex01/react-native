import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const InfoDetalhadaProduto = ({ navigation, data }) => {
  return (
    <View>
      <Text>{data.especificações_detalhadas}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default InfoDetalhadaProduto;

const styles = StyleSheet.create({});

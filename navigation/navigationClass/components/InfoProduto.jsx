import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InfoProduto = ({ route }) => {
  let qualquerCoisa = route.params;
  return (
    <View>
      <Text>ID: {qualquerCoisa}</Text>
    </View>
  );
};

export default InfoProduto;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";

const InfoProduto = ({ navigation, route }) => {
  const [piroca, setPiroca] = useState();

  let qualquerCoisa = route.params;

  useEffect(() => {
    setPiroca(qualquerCoisa);
  }, [qualquerCoisa]);
  console.log("InfoProduto dados:", piroca);

  return (
    <View>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>Data: {qualquerCoisa.id}</Text>
    </View>
  );
};

export default InfoProduto;

const styles = StyleSheet.create({});

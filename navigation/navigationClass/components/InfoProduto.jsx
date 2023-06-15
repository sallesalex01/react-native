import { StyleSheet, Text, View, Button, Image } from "react-native";

const InfoProduto = ({ navigation, data }) => {
  const { nome, imagem, descricao } = data;

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#CDCDCD" }}>
      <View
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: "#fff",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{nome}</Text>
        <Image
          style={{ width: "100%", height: "50%", resizeMode: "center" }}
          source={{
            uri: imagem,
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "normal" }}>{descricao}</Text>
      </View>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default InfoProduto;

const styles = StyleSheet.create({});

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [randomNumber, setRandomNumber] = useState(() => randomIntNumber());
  const [value, setValue] = useState(10);

  const randomIntNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 6) + 1);
  };

  const handleOnPress = (buttonValue) => {
    let numeroAleatorio = randomIntNumber();

    if (value > 0) {
      if (buttonValue == numeroAleatorio) {
        setValue(value * 2);
      } else {
        setValue(value / 2);
      }
    } else {
      setValue("Não pode mais apostar");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.textRandomNumber}>{randomNumber}</Text>
      </View>
      <Text>Valor total: {value} R$</Text>

      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Button onPress={() => handleOnPress(1)} title="1" />
          <Button onPress={() => handleOnPress(2)} title="2" />
          <Button onPress={() => handleOnPress(3)} title="3" />
        </View>
        <View style={styles.item}>
          <Button onPress={() => handleOnPress(4)} title="4" />
          <Button onPress={() => handleOnPress(5)} title="5" />
          <Button onPress={() => handleOnPress(6)} title="6" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  valueContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
  },
  itemContainer: {
    width: "100%",
    height: "auto ",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  textRandomNumber: {
    fontSize: 80,
  },
  item: {
    flexDirection: "row",
    margin: 12,
    gap: 12,
  },
});

import { View, Text, StyleSheet, Button } from "react-native";

import React from "react";

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home", { nome: "Nikola Tesla" })}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AF69EE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default About;

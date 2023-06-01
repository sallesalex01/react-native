import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import InfoProduto from "./components/InfoProduto";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/Home";
import RootProduct from "./views/RootProduct";
import RootHome from "./views/RootHome";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={RootHome} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /* <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer> */
}

{
  /* <NavigationContainer>
  <StatusBar style="auto" />
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="InfoProduto" component={InfoProduto} />
  </Stack.Navigator>
</NavigationContainer>; */
}

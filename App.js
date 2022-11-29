import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Component from "./src/titlelogo.js";
import Component2 from "./src/rooms.js";
import Component3 from "./src/devices.js";

export default function App() {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <Component styles={{ flex: 1 }}></Component>
      <Component2 style={{ flex: 2 }}></Component2>
      <Component3 style={{ flex: 3 }}></Component3>
      <Text style={{ flex: 2 }}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

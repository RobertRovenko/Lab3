import React from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";

export default function Component() {
  return (
    <View style={styles.top}>
      <Image
        style={[styles.top, styles.image, {}]}
        source={require("../image/house.png")}
      ></Image>
      <Text style={[styles.top, styles.textsize]}>SMART Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    position: "relative",
    left: -30,
  },
  image: {
    height: 72,
    width: 74,
    padding: 10,
  },
  textsize: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 25,
  },
});

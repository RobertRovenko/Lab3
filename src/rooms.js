import React from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";

export default function Component2() {
  return (
    <View style={{}}>
      <Text style={[styles.textsize]}>ROOMS</Text>
      <View style={styles.top}>
        <Image
          style={[styles.top, styles.image, {}]}
          source={require("../image/bed.png")}
        ></Image>

        <Image
          style={[styles.top, styles.image, {}]}
          source={require("../image/kitchen.png")}
        ></Image>
        <Image
          style={[styles.top, styles.image, {}]}
          source={require("../image/living-room.png")}
        ></Image>
      </View>

      <View style={[styles.top]}>
        <Text style={styles.roomtext}>Bedroom</Text>
        <Text style={styles.roomtext}>Kitchen</Text>
        <Text style={styles.roomtext}>Livingroom</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    position: "relative",
    backgroundColor: "white",
  },
  textsize: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  image: {
    width: 110,
    height: 110,
    alignContent: "center",
    paddingTop: 100,
    margin: 10,
  },
  roomtext: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 45,
    paddingLeft: 20,
    paddingBottom: 20,
  },
});

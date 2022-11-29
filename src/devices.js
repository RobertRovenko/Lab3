import React, { useState } from "react";
import { StyleSheet, View, Text, StatusBar, Button } from "react-native";

export default function Component3() {
  const [Status, setStatus] = useState("green");
  const [Status1, setStatus1] = useState("green");
  const [Status2, setStatus2] = useState("green");
  const [devicesON, setdevicesON] = useState(3);
  //const [deviceItems, setDevicesItems] = useState({
  // Heater: Status,
  // Lamp: Status1,
  // TV: Status2,
  //});

  return (
    <View style={{}}>
      <Text style={[styles.top, styles.textsize]}>Devices</Text>
      <View style={styles.top}>
        <View style={styles.devices}>
          <Devices
            deviceItems={"Heater"}
            Status={Status}
            setStatus={setStatus}
            devicesON={devicesON}
            setdevicesON={setdevicesON}
          ></Devices>
        </View>
        <View style={styles.devices}>
          <Devices
            deviceItems={"Lamp"}
            Status={Status1}
            setStatus={setStatus1}
            devicesON={devicesON}
            setdevicesON={setdevicesON}
          ></Devices>
        </View>
        <View style={styles.devices}>
          <Devices
            deviceItems={"TV    "}
            Status={Status2}
            setStatus={setStatus2}
            devicesON={devicesON}
            setdevicesON={setdevicesON}
          ></Devices>
        </View>
      </View>
      <Text style={{ fontSize: 20 }}>You have {devicesON} device:s on</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Devices = ({
  deviceItems,
  Status,
  setStatus,
  devicesON,
  setdevicesON,
}) => {
  return (
    <View style={styles.devices}>
      <View style={{ ...styles.square, backgroundColor: Status }}></View>
      <Text style={[styles.spacing, { fontSize: 20 }]}>{deviceItems}</Text>
      <Button
        title="ON"
        color={"black"}
        onPress={() => {
          setStatus("green");
          setdevicesON((prevCounter) => {
            if (prevCounter >= 3) {
              return (prevCounter = 3);
            }
            return prevCounter + 1;
          });
        }}
      ></Button>
      <Button
        color={"black"}
        title="OFF"
        onPress={() => {
          setStatus("red");
          setdevicesON((prevCounter) => {
            if (prevCounter <= 0) {
              return (prevCounter = 0);
            }
            return prevCounter - 1;
          });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: "column",
    position: "relative",
    backgroundColor: "white",
  },
  devices: {
    flexDirection: "row",
    position: "relative",
    margin: 0,
    padding: 20,
  },
  textsize: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  square: {
    alignContent: "center",
    height: 30,
    width: 30,
    backgroundColor: "green",
  },
  spacing: {
    alignSelf: "flex-end",
    margin: 80,
    marginTop: 2,
    marginBottom: 2,
  },
});

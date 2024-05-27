import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
export default function MapScreen() {
  return (
    <View style={styles.container}>
        <Header />
      <Image source={require("../assets/images/logo.png")} style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5aa",
  },
  map: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  }
});

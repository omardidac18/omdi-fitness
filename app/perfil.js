import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
        <Header />
      <Text style={styles.text}>Perfil</Text>
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
  text: {
    fontSize: 24,
    color: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  }
});

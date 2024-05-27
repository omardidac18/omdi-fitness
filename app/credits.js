import React from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
export default function CreditsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Crèdits</Text>
        <View style={styles.creditsContainer}>
          <Text style={styles.creditsText}>Didac</Text>
          <Text style={styles.creditsText}>Omar</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
    title: {
      fontSize: 24,
      color: "#fff",
      marginBottom: 20,
      textAlign: "center",
    },
 
  creditsContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  creditsText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  }
});
import React from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Rating } from 'react-native-ratings';
import Header from "../components/Header";
export default function RateAppScreen({ navigation }) {
  const handleRatingCompleted = (rating) => {
    Alert.alert("Gràcies per la teva valoració", `Has valorat l'app amb ${rating} estrelles.`);
  };
  return (
    <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Valora l'App</Text>
        <View style={styles.ratingContainer}>
          <Rating
            type='star'
            ratingCount={5}
            imageSize={40}
            showRating
            onFinishRating={handleRatingCompleted}
            style={{ paddingVertical: 10 }}
          />
        </View>
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
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  ratingContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
});

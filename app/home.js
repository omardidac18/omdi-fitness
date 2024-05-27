import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground source={require("../assets/images/gym2.jpg")} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../assets/images/logo.png")} style={styles.mainImage} />
        <Text style={styles.sectionTitle}>Les meves reserves:</Text>
        <View style={styles.reservesContainer}>
          <Image source={require("../assets/images/logo.png")} style={styles.smallImage} />
          <View style={styles.textContainer}>
            <Text>Reserva 1</Text>
            <Image source={require("../assets/images/logo.png")} style={styles.backgroundImage} />
          </View>
        </View>
        <Text style={styles.sectionTitle}>Suggerències de classes:</Text>
        <View style={styles.suggestionsContainer}>
          <View style={styles.suggestion}>
            <Image source={require("../assets/images/logo.png")} style={styles.smallImage} />
            <View style={styles.textContainer}>
              <Text>Classe 1</Text>
              <Text>Hora: </Text>
              <Text>Monitor: </Text>
              <Text>Sala: </Text>
            </View>
          </View>
          <View style={styles.suggestion}>
            <Image source={require("../assets/images/logo.png")} style={styles.smallImage} />
            <View style={styles.textContainer}>
              <Text>Classe 2</Text>
              <Text>Hora: </Text>
              <Text>Monitor: </Text>
              <Text>Sala: </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  mainImage: {
    width: 350,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "flex-start",
    color: "#fff",
  },
  reservesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  smallImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  suggestionsContainer: {
    width: "100%",
  },
  suggestion: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  backgroundImage: {
    width: 50,
    height: 50,
    opacity: 0.5,
    resizeMode: "contain",
  },
});

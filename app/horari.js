import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground } from "react-native";

export default function HorariScreen() {
  return (
    <ImageBackground source={require("../assets/images/gym2.jpg")} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Horari de Classes</Text>
      <Image source={require("../assets/images/logo.png")} style={styles.mainImage} />
      <Text style={styles.sectionTitle}>Classes:</Text>
      <View style={styles.classesContainer}>
        <View style={styles.classItem}>
          <Image source={require("../assets/images/logo.png")} style={styles.smallImage} />
          <View style={styles.textContainer}>
          <Text>Classe 2</Text>
            <Text>Hora: </Text>
            <Text>Monitor: </Text>
            <Text>Sala: </Text>
          </View>
        </View>
        <View style={styles.classItem}>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 20,
  },
  mainImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  classesContainer: {
    width: "100%",
  },
  classItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  smallImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
});

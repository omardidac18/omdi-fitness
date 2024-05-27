import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground } from "react-native";
export default function ReservesScreen() {
  return (
    <ImageBackground source={require("../assets/images/gym2.jpg")} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Les meves reserves</Text>
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
  classContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
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
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  classText: {
    fontSize: 16,
  },
});

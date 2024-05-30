import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground } from "react-native";
import { ref, get } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { db } from "./firebase"; 

export default function HomeScreen() {
  const [reservation, setReservation] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const auth = getAuth();

  const fetchReservations = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userUid = user.uid;
        const dbRef = ref(db, 'classes');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const userReservations = [];
          const availableClasses = [];
          Object.keys(data).forEach((key) => {
            if (data[key].reservations && data[key].reservations[userUid]) {
              userReservations.push({
                id: key,
                ...data[key]
              });
            } else {
              availableClasses.push({
                id: key,
                ...data[key]
              });
            }
          });

          if (userReservations.length > 0) {
            setReservation(userReservations[Math.floor(Math.random() * userReservations.length)]);
          }

          if (availableClasses.length > 0) {
            const shuffled = availableClasses.sort(() => 0.5 - Math.random());
            setSuggestions(shuffled.slice(0, 2));
          }
        } else {
          console.log("No hi han dades disponibles");
        }
      } else {
        console.error("Usuari no autentificat");
      }
    } catch (error) {
      console.error("Error al rebre les reserves:", error);
    }
  };

  useEffect(() => {
    fetchReservations();
    const interval = setInterval(() => {
      fetchReservations();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground source={require("../assets/images/gym2.png")} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../assets/images/logo.png")} style={styles.mainImage} />
        <Text style={styles.sectionTitle}>Les meves reserves:</Text>
        {reservation && (
          <View style={styles.reservesContainer}>
            <Image source={require("../assets/images/reserva.jpg")} style={styles.smallImage} />
            <View style={styles.textContainer}>
              <Text style={styles.classTitle}>{reservation.NomClase}</Text>
              <Text style={styles.classInfo}>Sala: {reservation.Sala}</Text>
              <Text style={styles.classInfo}>Data: {reservation.Data}</Text>
              <Text style={styles.classInfo}>Hora: {reservation.Hora}</Text>
              <Text style={styles.classInfo}>Monitor: {reservation.Entrenador}</Text>
            </View>
          </View>
        )}
        <Text style={styles.sectionTitle}>Suggerències de classes:</Text>
        <View style={styles.suggestionsContainer}>
          {suggestions.map((classe) => (
            <View key={classe.id} style={styles.suggestion}>
              <Image source={require("../assets/images/idea.png")} style={styles.smallImage} />
              <View style={styles.textContainer}>
                <Text style={styles.classTitle}>{classe.NomClase}</Text>
                <Text style={styles.classInfo}>Data: {classe.Data}</Text>
                <Text style={styles.classInfo}>Hora: {classe.Hora}</Text>
                <Text style={styles.classInfo}>Monitor: {classe.Entrenador}</Text>
                <Text style={styles.classInfo}>Sala: {classe.Sala}</Text>
              </View>
            </View>
          ))}
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
  classTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  classInfo: {
    fontSize: 16,
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
});

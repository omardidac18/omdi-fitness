import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { ref, get, set } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { db } from "./firebase";
import { Ionicons } from '@expo/vector-icons'; 

export default function ReservesScreen() {
  const [reservations, setReservations] = useState([]);
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
          Object.keys(data).forEach((key) => {
            if (data[key].reservations && data[key].reservations[userUid]) {
              userReservations.push({
                id: key,
                ...data[key]
              });
            }
          });
          setReservations(userReservations);
        } else {
          console.log("No data available");
        }
      } else {
        console.error("No user authenticated");
      }
    } catch (error) {
      console.error("Error getting reservations:", error);
    }
  };

  const cancelReservation = async (classId) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userUid = user.uid;
        const classRef = ref(db, `classes/${classId}/reservations/${userUid}`);
        await set(classRef, null);
        console.log("Reservation cancelled successfully.");
        
        setReservations(prevReservations => prevReservations.filter(reservation => reservation.id !== classId));
      } else {
        console.error("No user authenticated");
      }
    } catch (error) {
      console.error("Error cancelling reservation:", error);
    }
  };
  
  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <ImageBackground source={require("../assets/images/gym2.png")} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.refreshButtonContainer}>
          <TouchableOpacity onPress={fetchReservations}>
            <Ionicons name="refresh" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Les meves reserves</Text>
        {reservations.map((reservation) => (
          <View key={reservation.id} style={styles.classItem}>
            <Image source={require("../assets/images/reserva.jpg")} style={styles.smallImage} />
            <View style={styles.textContainer}>
              <Text style={styles.classTitle}>{reservation.NomClase}</Text>
              <Text style={styles.classInfo}>Sala: {reservation.Sala}</Text>
              <Text style={styles.classInfo}>Data: {reservation.Data}</Text>
              <Text style={styles.classInfo}>Hora: {reservation.Hora}</Text>
              <Text style={styles.classInfo}>Monitor: {reservation.Entrenador}</Text>
              <TouchableOpacity style={styles.cancelButton} onPress={() => {
                console.log("S'ha premut el botó de cancel·lar reserva amb classId:", reservation.id);
                cancelReservation(reservation.id);
              }}>
                <Text style={styles.cancelButtonText}>Cancelar Reserva</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  refreshButtonContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  classItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  smallImage: {
    width: 60,
    height: 60,
    marginRight: 20,
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
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

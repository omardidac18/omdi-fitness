import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { ref, get, update } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { db } from "./firebase"; 
import { Ionicons } from '@expo/vector-icons'; 

export default function HorariScreen() {
  const [classes, setClasses] = useState([]);
  const auth = getAuth();

  const handleRefresh = async () => {
    fetchData();
  };

  const fetchData = async () => {
    const dbRef = ref(db, 'classes'); 
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedClasses = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setClasses(formattedClasses);
      } else {
        console.log("No hi han dades disponibles");
      }
    } catch (error) {
      console.error("Error al rebre les dades:", error);
    }
  };

  const reserveClass = async (classId) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userUid = user.uid;
        const classRef = ref(db, 'classes/' + classId + '/reservations');
        await update(classRef, { [userUid]: true });
      } else {
        console.error("Usuari no autentificat");
      }
    } catch (error) {
      console.error("Error al reservar la classe:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleRefresh}>
        <Ionicons name="refresh" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>CLASSES PER RESERVAR</Text>
      <View style={styles.classesContainer}>
        {classes.map((classe) => (
          <View key={classe.id} style={styles.classItem}>
            <Image source={require("../assets/images/classesfoto.png")} style={styles.smallImage} />
            <View style={styles.textContainer}>
              <Text style={styles.classTitle}>{classe.NomClase}</Text>
              <Text style={styles.classInfo}>Sala: {classe.Sala}</Text>
              <Text style={styles.classInfo}>Data: {classe.Data}</Text>
              <Text style={styles.classInfo}>Hora: {classe.Hora}</Text>
              <Text style={styles.classInfo}>Monitor: {classe.Entrenador}</Text>
              <TouchableOpacity style={styles.reserveButton} onPress={() => reserveClass(classe.id)}>
                <Text style={styles.reserveButtonText}>Reservar Clase</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#5aa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "flex-start",
    color: "#fff",
  },
  classesContainer: {
    width: "100%",
  },
  classItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  smallImage: {
    width: 60,
    height: 60,
    marginRight: 10,
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
  reserveButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  reserveButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
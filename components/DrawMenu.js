import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function DrawerMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Map')}>
        <Ionicons name="map-outline" size={24} style={styles.icon} />
        <Text style={styles.menuText}>Mapa gimnàs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PrivacyPolicy')}>
        <Ionicons name="document-text-outline" size={24} style={styles.icon} />
        <Text style={styles.menuText}>Política de Privacitat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RateApp')}>
        <Ionicons name="star-outline" size={24} style={styles.icon} />
        <Text style={styles.menuText}>Valora la APP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
        <Ionicons name="notifications-outline" size={24} style={styles.icon} />
        <Text style={styles.menuText}>Notificacions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Credits')}>
        <Ionicons name="information-circle-outline" size={24} style={styles.icon} />
        <Text style={styles.menuText}>Crèdits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={24} style={styles.icon} />
        <Text style={styles.menuText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={24} style={styles.icon} />
        <Text style={styles.menuText}>Configuració</Text>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
        <Ionicons name="log-out-outline" size={24} style={styles.icon} />
        <Text style={styles.menuText}>Sortir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5aa",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "5aa"
  },
  icon: {
    marginRight: 10,
    color: "#000",
  },
  menuText: {
    fontSize: 16,
  },
  spacer: {
    flex: 1,
  },
});

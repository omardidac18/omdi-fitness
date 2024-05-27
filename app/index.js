import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import IniciScreen from "./inici";
import HomeScreen from "./home";
import HorariScreen from "./horari";
import LoginScreen from "./login";
import RegisterScreen from "./register";
import ReservesScreen from "./reserves";
import DrawerMenu from '../components/DrawMenu';
import MapScreen from "./map";
import PrivacyPolicyScreen from "./policy";
import RateAppScreen from "./rateapp";
import NotificationsScreen from "./notifications";
import CreditsScreen from "./credits";
import ProfileScreen from "./perfil";
import SettingsScreen from "./configuracio";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Reserves") {
            iconName = "clipboard-outline";
          } else if (route.name === "Horari") {
            iconName = "calendar-outline";
          } else if (route.name === "More") {
            iconName = "ellipsis-horizontal-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reserves" component={ReservesScreen} />
      <Tab.Screen name="Horari" component={HorariScreen} />
      <Tab.Screen name="More" component={DrawerMenu} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    
      <Stack.Navigator initialRouteName="Inici">
        <Stack.Screen
          name="Inici"
          component={IniciScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Map" 
          component={MapScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="PrivacyPolicy" 
          component={PrivacyPolicyScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RateApp" 
          component={RateAppScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Credits" 
          component={CreditsScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    
  );
}

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { getDatabase, ref, onValue, update } from '@firebase/database';
import { launchImageLibrary } from 'react-native-image-picker';

export default function Perfil() {
  const [user, setUser] = useState(null);
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const database = getDatabase();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userRef = ref(database, 'users/' + currentUser.uid);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
            setUser(userData);
            setBirthdate(userData.birthdate ? new Date(userData.birthdate) : new Date());
            setProfileImage(userData.profileImage || null);
          } else {
            Alert.alert("Error", "No se encontraron datos del usuario.");
          }
        }, (error) => {
          Alert.alert("Error", error.message);
        });
      }
    });

    return unsubscribe;
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(Platform.OS === 'ios');
    setBirthdate(currentDate);

    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      const database = getDatabase();
      const userRef = ref(database, 'users/' + currentUser.uid);
      update(userRef, { birthdate: currentDate.toISOString() });
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const source = response.assets[0].uri;
        setProfileImage(source);

        const auth = getAuth();
        const currentUser = auth.currentUser;
        if (currentUser) {
          const database = getDatabase();
          const userRef = ref(database, 'users/' + currentUser.uid);
          update(userRef, { profileImage: source });
        }
      }
    });
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage}>
        <Image source={profileImage ? { uri: profileImage } : require('../assets/images/logo.png')} style={styles.profileImage} />
      </TouchableOpacity>
      <Text style={styles.username}>{user.firstName + ' ' + user.lastName}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} value={user.firstName} editable={false} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Apellido</Text>
        <TextInput style={styles.input} value={user.lastName} editable={false} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha de Nacimiento</Text>
        <View style={styles.datePickerContainer}>
          <Button onPress={showDatepicker} title="Selecciona la fecha" />
          <Text style={styles.dateText}>{birthdate.toDateString()}</Text>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={birthdate}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={user.email} editable={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
});

import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA7RlFoaX-QuErKoXdKFFtdmyDK3o4ToS0",
  authDomain: "omdifitness.firebaseapp.com",
  projectId: "omdifitness",
  storageBucket: "omdifitness.appspot.com",
  messagingSenderId: "330661922274",
  appId: "1:330661922274:web:0de932f84badb78c53e5bb",
  measurementId: "G-FHBL7BJH07",
  databaseURL: "https://omdifitness-default-rtdb.europe-west1.firebasedatabase.app" // Asegúrate de que esto esté correcto
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
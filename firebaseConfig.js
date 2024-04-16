// Import only the necessary parts from the Firebase modular SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVnua4Gn_xBXqjvA0EddDy8jihrIi_jSo",
  authDomain: "staffdraft.firebaseapp.com",
  projectId: "staffdraft",
  storageBucket: "staffdraft.appspot.com",
  messagingSenderId: "363200078121",
  appId: "1:363200078121:web:52ee21722d258be8de5738",
  measurementId: "G-EBD2KWXXZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);

// Manually set up AsyncStorage for Firebase Auth persistence
auth.useDeviceLanguage(); // Optional: sets the language to the device's preferred language

const persistAuthState = async () => {
  try {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  } catch (error) {
    console.error("Failed to persist authentication state:", error);
  }
};


persistAuthState();

const db = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);

// Export the initialized services
export { auth, db, database, storage, app };

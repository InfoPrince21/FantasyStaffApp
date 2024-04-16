// Import only the necessary parts from the Firebase modular SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
// If you need React Native specific persistence, you might use AsyncStorage with your custom setup,
// but typically, Firebase manages persistence internally in React Native apps without needing AsyncStorage.

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
// Set persistence to LOCAL by default for web and React Native applications (adjust if necessary)
setPersistence(auth, browserSessionPersistence).catch((error) => {
  console.error("Firebase Auth persistence setting failed:", error);
});

const db = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);

// Export the initialized services
export { auth, db, database, storage, app };

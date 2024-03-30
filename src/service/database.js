// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importez la fonction getFirestore pour accéder à Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMd9zmmf75FFC9gPw5pI2YM6-EMvcM7z4",
  authDomain: "streetiarte.firebaseapp.com",
  projectId: "streetiarte",
  storageBucket: "streetiarte.appspot.com",
  messagingSenderId: "1055588216670",
  appId: "1:1055588216670:web:bda2b3dae084b9fd01e9cf",
  measurementId: "G-DSYRTNMRWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Pour avoir instancié Firestore, vous pouvez maintenant exporter la constante db pour être utilisée dans d'autres fichiers.
const db = getFirestore(app); // Exportez la constante db pour accéder à Firestore
export default db;
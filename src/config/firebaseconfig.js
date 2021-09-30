import firebase from 'firebase';
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAXbvQ2_5odTOhuLNzGZKyxODDfBvUI6EA",
  authDomain: "myapp-a740f.firebaseapp.com",
  databaseURL: "https://myapp-a740f-default-rtdb.firebaseio.com",
  projectId: "myapp-a740f",
  storageBucket: "myapp-a740f.appspot.com",
  messagingSenderId: "707634580249",
  appId: "1:707634580249:web:db2bebb0c80203b76c1388",
  measurementId: "G-HV0CSMQCRF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebase = {
  apiKey: "AIzaSyAu7m6RLhHbVT5CQrpRMEucEYmQkYLM01k",
  authDomain: "cookapp-9dc15.firebaseapp.com",
  projectId: "cookapp-9dc15",
  storageBucket: "cookapp-9dc15.appspot.com",
  messagingSenderId: "880085018167",
  appId: "1:880085018167:web:c285620b3797227a03c1b2",
  measurementId: "G-XNPJNYCBTY"
};

const app = initializeApp(firebase);
const db = getFirestore(app);

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKgMyw9G8IRV2dRcb_HxaUIYXc5aqyzTo",
  authDomain: "ecommerce-82e9c.firebaseapp.com",
  projectId: "ecommerce-82e9c",
  storageBucket: "ecommerce-82e9c.appspot.com",
  messagingSenderId: "575856123923",
  appId: "1:575856123923:web:bc057b3c458cbb9ac81fe6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
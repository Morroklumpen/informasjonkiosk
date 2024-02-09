// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg1xA2S0iIaLutzXkKNMS_j2wo7W0eXpg",
  authDomain: "infoskjerm-75b13.firebaseapp.com",
  projectId: "infoskjerm-75b13",
  storageBucket: "infoskjerm-75b13.appspot.com",
  messagingSenderId: "1002370475502",
  appId: "1:1002370475502:web:b2762217348a99ad301aff",
  measurementId: "G-CQ4GZHM869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
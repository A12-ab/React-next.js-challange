
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAlscJmrEJk0P4aGO2Q-ctgYOLjni4dT7w",
  authDomain: "nizam-furniture.firebaseapp.com",
  projectId: "nizam-furniture",
  storageBucket: "nizam-furniture.appspot.com",
  messagingSenderId: "352997704982",
  appId: "1:352997704982:web:06c47fb1fc0bdbf789bc37",
  measurementId: "G-MEJLSZWQ21"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig;
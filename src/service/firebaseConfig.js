import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyACGreoFyG7XzpttbmhxfdhN0X51QSPJo0",
    authDomain: "kim-binh-minh.firebaseapp.com",
    projectId: "kim-binh-minh",
    storageBucket: "kim-binh-minh.appspot.com",
    messagingSenderId: "463829927618",
    appId: "1:463829927618:web:c603e94ccab9835d0d9d5b",
    measurementId: "G-ZXZN88TJEJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
export {db,storage}
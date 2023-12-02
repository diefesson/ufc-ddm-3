import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk8eDLjE3FRFba6Ua5c3uNOQYqYaJk8DE",
  authDomain: "ufc-ddm-3.firebaseapp.com",
  projectId: "ufc-ddm-3",
  storageBucket: "ufc-ddm-3.appspot.com",
  messagingSenderId: "975253601575",
  appId: "1:975253601575:web:a9eaa2a300fd94e6b27d02"
};

export const fbApp = initializeApp(firebaseConfig);
export const fbFirestore = getFirestore(fbApp);
export const fbAuth = getAuth(fbApp);

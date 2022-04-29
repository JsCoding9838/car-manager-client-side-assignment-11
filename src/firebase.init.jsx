import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBfSqiFqZP2LPYmaJGIPZDAgN5QAUIyi4",
  authDomain: "warehouse-with-node.firebaseapp.com",
  projectId: "warehouse-with-node",
  storageBucket: "warehouse-with-node.appspot.com",
  messagingSenderId: "473107111968",
  appId: "1:473107111968:web:cf8419855e799ba3e41c45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

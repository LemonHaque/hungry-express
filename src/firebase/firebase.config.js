// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrAPXz5nGgrLXtY6Qi2dXicu_ri4lkomU",
  authDomain: "hungry-express.firebaseapp.com",
  projectId: "hungry-express",
  storageBucket: "hungry-express.appspot.com",
  messagingSenderId: "134791129699",
  appId: "1:134791129699:web:0fde4d3fff4e64ff682656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
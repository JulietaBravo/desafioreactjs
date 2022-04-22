
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAUpI9Zrzco_iBZLjZY5Q-z3ItYajeKPQ",
  authDomain: "reactjs-npx.firebaseapp.com",
  projectId: "reactjs-npx",
  storageBucket: "reactjs-npx.appspot.com",
  messagingSenderId: "466926327795",
  appId: "1:466926327795:web:f2589a233349e8933e2486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}
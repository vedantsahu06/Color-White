 // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAYbvOl08-Oey_8OfDar2wD2sUbHWK_NZA",
   authDomain: "safety-watch-eb0d0.firebaseapp.com",
   projectId: "safety-watch-eb0d0",
   storageBucket: "safety-watch-eb0d0.firebasestorage.app",
   messagingSenderId: "947369649187",
   appId: "1:947369649187:web:dfb112fdc3f23496d67d96",
   measurementId: "G-FPYPPHZ8HV"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
  const auth = getAuth(app);

  export { app, auth };
 
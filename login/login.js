import { auth } from "./firebase-config.js";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log("User created:", userCredential.user);
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
  }

  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log("User logged in:", userCredential.user);
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
  }
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBJfQ8GEyfoYRBKa9YX4d1NYJWKKlN-0ps",
    authDomain: "e-voting-22bc8.firebaseapp.com",
    projectId: "e-voting-22bc8",
    storageBucket: "e-voting-22bc8.appspot.com",
    messagingSenderId: "364064730500",
    appId: "1:364064730500:web:4b19739176583e8e2381d1",
    measurementId: "G-S5W92JKT58"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-pBT_HHfp5JIegti0s4nRJx1tu6Ug158",
    authDomain: "budgetsnob-c19c9.firebaseapp.com",
    databaseURL: "https://budgetsnob-c19c9.firebaseio.com",
    projectId: "budgetsnob-c19c9",
    storageBucket: "budgetsnob-c19c9.appspot.com",
    messagingSenderId: "98072429702",
    appId: "1:98072429702:web:dd772ca5884971e132bd07",
    measurementId: "G-990SJHCLV1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
      name: "web dev journey"
  });
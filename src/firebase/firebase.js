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

const database = firebase.database();

const sub = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
})

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

// database.ref('expenses').push({
//   description: "rental truck",
//   note: "",
//   amount: 450,
//   createdAt: "03/10/2020"
// })

// database.ref('expenses').push({
//   description: "House payment",
//   note: "",
//   amount: 1700,
//   createdAt: "03/10/2020"
// })

database.ref('expenses').push({
  description: "Gas Bill",
  note: "",
  amount: 160,
  createdAt: "03/10/2020"
})
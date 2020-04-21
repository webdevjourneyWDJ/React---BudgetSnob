import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// const sub = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// })

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // database.ref('expenses').push({
// //   description: "rental truck",
// //   note: "",
// //   amount: 450,
// //   createdAt: "03/10/2020"
// // })

// // database.ref('expenses').push({
// //   description: "House payment",
// //   note: "",
// //   amount: 1700,
// //   createdAt: "03/10/2020"
// // })

// database.ref('expenses').push({
//   description: "Gas Bill",
//   note: "",
//   amount: 160,
//   createdAt: "03/10/2020"
// })
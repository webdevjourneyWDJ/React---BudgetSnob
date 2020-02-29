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

  setTimeout(()=>{
   database.ref('emplyees/0').update({
          employee: "WDJJ",
          'location/state': "brazil"
        })
  }, 3000)

  setTimeout(()=>{
   database.ref().off('value', sub);
  }, 5000)

  setTimeout(()=>{
   database.ref('emplyees/0').update({
          employee: "WDJJ",
          'location/state': "florida"
        })
  }, 7000)

//   database.ref().set({
//      salary: [{
//         employee: "WDJ",
//         salary: 1,
//         id: "456sdg1xfdg564fg"
//      },
//      {
//         employee: "Wonka",
//         salary: 1000,
//         id: "sdf6547sfd2g16sd541g"
//      }],
//      department: [{
//         employee: "WDJ",
//         department: "programming",
//         id: "456sdg1xfdg564fg"
//      }]
//   }).then(() => {
//      console.log("Data was saved!");
//   }).catch((e) => {
//      console.log("you failed:", e);
//   })

//   database.ref('salary/0/salary').set(2)
//   database.ref('salary/1/salary').set(2000)

//   database.ref('emplyees').set([{
//     employee: "WDJ",
//     id: "456sdg1xfdg564fg",
//     location: {
//        state: "New York",
//        country: "US"
//     }
//   }])

//   database.ref('salary/1').update({
//      employee: "Willy",
//      salary: null,
//      id: "sdfg657324s6r8gf7"
//   })

//   database.ref('emplyees/0').update({
//     employee: "WDJJ",
//     'location/state': "Texas"
//   })
  


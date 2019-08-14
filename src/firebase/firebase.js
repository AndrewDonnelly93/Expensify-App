import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBcmjsxifXJjbhp2W-sNzjuPP9Ft4_j5xM',
  authDomain: 'expensify-4b014.firebaseapp.com',
  databaseURL: 'https://expensify-4b014.firebaseio.com',
  projectId: 'expensify-4b014',
  storageBucket: 'expensify-4b014.appspot.com',
  messagingSenderId: '490473036170',
  appId: '1:490473036170:web:680f52b6c8f1f439'
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref().set({
  name: 'Andrew Dubovtsev',
  age: 26,
  isSingle: true,
  location: {
    country: 'Ireland',
    city: 'Dublin'
  }
});

database.ref().set('This is my data');

// db.collection('users').add({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815
// })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });

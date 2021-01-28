import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBkvVjMQ0zs_QdpS1ACxb3-ePa69xqhXik',
  authDomain: 'crudfirebase-74cc4.firebaseapp.com',
  databaseURL: 'https://crudfirebase-74cc4.firebaseio.com',
  projectId: 'crudfirebase-74cc4',
  storageBucket: 'crudfirebase-74cc4.appspot.com',
  messagingSenderId: '759202711157',
  appId: '1:759202711157:web:675199b167dbfb8a1c5a3c',
  measurementId: 'G-MLMPNW3P99',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
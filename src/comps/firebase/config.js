import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGNRAK4zdzFNWvw1OZ8Lenw9rUFODVrE8",
  authDomain: "firegram-b94e3.firebaseapp.com",
  projectId: "firegram-b94e3",
  storageBucket: "firegram-b94e3.appspot.com",
  messagingSenderId: "377476136389",
  appId: "1:377476136389:web:545780e35ace86182adfac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};
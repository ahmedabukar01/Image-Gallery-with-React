import firebase from 'firebase/compat/app'
import "firebase/compat/storage"
import 'firebase/compat/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH9sf7oj6xGY7p7RuYt1CQzKsMUjk-GHk",
  authDomain: "newfiregram-957a4.firebaseapp.com",
  projectId: "newfiregram-957a4",
  storageBucket: "newfiregram-957a4.appspot.com",
  messagingSenderId: "349353355265",
  appId: "1:349353355265:web:cbf8c444e61d5644533800"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage() ;
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};
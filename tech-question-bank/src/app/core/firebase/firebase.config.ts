import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyBTi6tdHCV6SA8MSkOxeRM7aRsxZat8uu8",
  authDomain: "techquestionbank.firebaseapp.com",
  projectId: "techquestionbank",
  storageBucket: "techquestionbank.firebasestorage.app",
  messagingSenderId: "1088058033997",
  appId: "1:1088058033997:web:61f8127ef2ca98f2835904"
};

export const firebaseApp = initializeApp(firebaseConfig);
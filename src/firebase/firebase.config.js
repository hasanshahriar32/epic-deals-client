// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3g4pRAFr2Zp5l2LDzVz05pV228NKmEOk',
  authDomain: 'epic-deals-ecommerce.firebaseapp.com',
  projectId:'epic-deals-ecommerce',
  storageBucket: 'epic-deals-ecommerce.appspot.com',
  messagingSenderId: '690396021584',
  appId: '1:690396021584:web:e9719a4894122813a8a255'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
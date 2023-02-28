// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBFwwKXGRGT_vMvyEMVOBsZ3_zY_lkJ8B4',
  authDomain: 'club-ecommerce-77d1c.firebaseapp.com',
  projectId: 'club-ecommerce-77d1c',
  storageBucket: 'club-ecommerce-77d1c.appspot.com',
  messagingSenderId: '680493241290',
  appId: '1:680493241290:web:8af554f27ef7dd04f47533'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

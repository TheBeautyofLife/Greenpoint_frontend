import * as firebase from 'firebase/app'
import store from './store'
import 'firebase/auth'
import 'firebase/firestore'
import'firebase/database'




const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
  const firebaseApp = firebase.initializeApp(config)
  const db = firebaseApp.database()
  const auth = firebase.auth()
  const currentUser = auth.currentUser


//test

       


export default {
    dataB,
    auth,
    currentUser,
}
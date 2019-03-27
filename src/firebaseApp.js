import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

const FirebaseApp = firebase.initializeApp(config);
const dataB = firebase.firestore();
const auth = firebase.auth();
const currUser = auth.currUser;

/* Fixing the defulat time stamp issues */
const timeSettings ={
    timestampsInSnapshots: true
}
dataB.settings(timeSettings)

/* firebase Collections*/
const userCol = dataB.collection('users')
const postCol = dataB.collection('posts')

export default {
    FirebaseApp: FirebaseApp,
    dataB,
    auth,
    currUser,
    userCol
}
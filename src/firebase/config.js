import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDFAmYUAUGqwx0uVqLylNr4BA-Dyq_LaBk",
    authDomain: "mymoney-3c818.firebaseapp.com",
    projectId: "mymoney-3c818",
    storageBucket: "mymoney-3c818.appspot.com",
    messagingSenderId: "712082967850",
    appId: "1:712082967850:web:37bfb0974035e7b2c86253"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
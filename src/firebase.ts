import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyDOb8vPYkAJHpojjEcKIUqPEbwwczno_iU",
    authDomain: "outmaneuver-cc274.firebaseapp.com",
    databaseURL: "https://outmaneuver-cc274.firebaseio.com",
    projectId: "outmaneuver-cc274",
    storageBucket: "outmaneuver-cc274.appspot.com",
    messagingSenderId: "465123376416",
    appId: "1:465123376416:web:441a14a50ac10349216b45",
    measurementId: "G-CJD3M3VCY8"
};

export const initFirebase = () => {
    firebase.initializeApp(firebaseConfig)
    const getAuth = firebase.auth
    const getFirestore = firebase.firestore
    return { getAuth, getFirestore }
}
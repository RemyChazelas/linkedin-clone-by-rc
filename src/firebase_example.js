import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBhk9mv9Rgpyy5OL3cweXWP2-YYM9BE7yg",
    authDomain: "linkedin-clone-by-rc.firebaseapp.com",
    projectId: "linkedin-clone-by-rc",
    storageBucket: "linkedin-clone-by-rc.appspot.com",
    messagingSenderId: "334176868227",
    appId: "1:334176868227:web:0c6cc7a62b4b3dc02108b6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
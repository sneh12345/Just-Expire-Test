import * as firebase from 'firebase'
require('@firebase/auth')

var firebaseConfig = {
  apiKey: "AIzaSyBV7aU94axVV4PjkO8HzFMLb3QT_JIjSAs",
  authDomain: "just-expire.firebaseapp.com",
  projectId: "just-expire",
  storageBucket: "just-expire.appspot.com",
  messagingSenderId: "837221661774",
  appId: "1:837221661774:web:d80bbb6ccf7838de9a171f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase.firestore();
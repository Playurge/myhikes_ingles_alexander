//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAFEolJSaITTJH2AVU - DxbGSapXdOl1icg",
    authDomain: "bcitprojectalex.firebaseapp.com",
    projectId: "bcitprojectalex",
    storageBucket: "bcitprojectalex.firebasestorage.app",
    messagingSenderId: "520119185958",
    appId: "1:520119185958:web:cad88862c2ebfa1fc7ace7"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


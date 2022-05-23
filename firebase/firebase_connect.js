const firebase = require('firebase');
const app = firebase.initializeApp({
    apiKey: "AIzaSyAJklAgwDGfkD398BVw2MsBa36ltKWFLPc",
    authDomain: "cillyfox-3f6b6.firebaseapp.com",
    databaseURL: "https://cillyfox-3f6b6-default-rtdb.firebaseio.com",
    projectId: "cillyfox-3f6b6",
    storageBucket: "cillyfox-3f6b6.appspot.com",
    messagingSenderId: "162658625806",
    appId: "1:162658625806:web:48bee6da7ef64d059c4f5f",
    measurementId: "G-H13FCF07LP"
})

module.exports = app;
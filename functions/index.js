const firebase = require("firebase");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("firebase/firestore");
firebase.initializeApp({
	apiKey: "AIzaSyDA1QNOD2yAnxxNnh9FFNr0O7zZYgF7RaI",
	authDomain: "eternal-sealed-analysis.firebaseapp.com",
	projectId: "eternal-sealed-analysis",
});
var db = firebase.firestore();
admin.initializeApp();

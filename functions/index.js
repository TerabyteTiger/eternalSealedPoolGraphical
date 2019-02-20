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

exports.initUser = functions.auth.user().onCreate(user => {
	// ...
	const email = user.email;
	db.collection("users")
		.doc(email)
		.set({
			user: email,
			mono: {
				playables: {
					fire: 0,
					time: 0,
					justice: 0,
					primal: 0,
					shadow: 0,
				},
				removal: {
					fire: 0,
					time: 0,
					justice: 0,
					primal: 0,
					shadow: 0,
				},
			},
			dual: {
				playables: {
					praxis: 0,
					rakano: 0,
					combrei: 0,
					elysian: 0,
					hooru: 0,
					argenport: 0,
					skycrag: 0,
					feln: 0,
					stonescar: 0,
					xenan: 0,
				},
				removal: {
					praxis: 0,
					rakano: 0,
					combrei: 0,
					elysian: 0,
					hooru: 0,
					argenport: 0,
					skycrag: 0,
					feln: 0,
					stonescar: 0,
					xenan: 0,
				},
				fixing: {
					praxis: 0,
					rakano: 0,
					combrei: 0,
					elysian: 0,
					hooru: 0,
					argenport: 0,
					skycrag: 0,
					feln: 0,
					stonescar: 0,
					xenan: 0,
				},
			},
			tri: {
				playables: {
					jennev: 0,
					ixtun: 0,
					winchest: 0,
					kerendon: 0,
					auralian: 0,
				},
			},
		})
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
});

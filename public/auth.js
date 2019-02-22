var loginModal = document.getElementById("loginModal");
var openLoginModalTrigger = document.getElementById("login");
var closeLoginModal = document.getElementsByClassName("close")[0];
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
	callbacks: {
		signInSuccessWithAuthResult: function(authResult, redirectUrl) {
			return true;
		},
		uiShown: function() {
			document.getElementById("loader").style.display = "none";
		},
	},
	signInFlow: "popup",
	signInSuccessUrl: "signedIn",
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
};

openLoginModalTrigger.onclick = function() {
	loginModal.style.display = "block";
};

closeLoginModal.onclick = function() {
	loginModal.style.display = "none";
};

window.onclick = function(event) {
	if (event.target == loginModal) {
		loginModal.style.display = "none";
	}
};

ui.start("#firebaseui-auth-container", uiConfig);

var loginModal = document.getElementById("loginModal");
var openLoginModalTrigger = document.getElementById("login");
var closeLoginModal = document.getElementsByClassName("close")[0];

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

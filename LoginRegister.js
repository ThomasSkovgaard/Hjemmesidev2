
// Setting a variable and getting the HTML "RegisterButton"
var registerButton = document.getElementById("RegisterButton");


// Making a function for the pressing of button "Register"
registerButton.onclick = function (e) {
    e.preventDefault();
    registerUser();

    // Alerting new user created, and redirecting the register-page to the login-Page
    alert("Ny bruger oprettet! Sender dig til Login");
    location.href = 'SLogin.html';

};
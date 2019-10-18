
// Setting a variable from the HTML "RegisterButton"

var registerButton = document.getElementById("RegisterButton");


// Making a function for the pressing of button "Register"
registerButton.onclick = function (e) {
    e.preventDefault();
    registerUser();

    // Alerting new user created, and redirecting the register-page to the login-Page
    alert("New user created! Redirecting to Login");
    location.href = 'login.html';

};
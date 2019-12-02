//Making a variable for currentUser, and using the local storage to retrieve the array "userList" containing "user"
var currentUser = JSON.parse(localStorage.getItem('userList'));
console.log(currentUser);

// Making a function for the login button
var login = document.getElementById("loginButton");
login.onclick = function(e){
    e.preventDefault();

    // Making variable of registered username and password and getting the value from the ID in html
    var registeredUsername = document.getElementById("registeredUsername").value;
    var registeredPassword = document.getElementById("registeredPassword").value;


    // Loop array with currentUser registered with username and with equal registered password
    for (let i = 0; i < currentUser.length; i++) {

        // Making an if-statement to check the username and password matches what is registered
        if (registeredUsername == currentUser[i].username && registeredPassword == currentUser[i].password) {

            // Login succes and sending to user profile
            location.href = 'S5.html';
            alert("Du er logget ind!");
            return true

            // Else login wrong. Alert and send to login page to try login again
        }
    }
    // Alerting wrong password and sending user to try again
    alert("Forkert brugernavn eller adgangskode. Prøv igen!");
    location.href = 'SLogin.html';
}

// Making a function to show/hide password when registering in
function hidePassword() {
    var a = document.getElementById("registeredPassword");
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}


// Making a variable for currentUser, and using the local storage to retrieve the "userList" info
/*
var currentUser = JSON.parse(localStorage.getItem("userList"));

console.log(currentUser);

var currentLogin = [];

//Making function for login button
function login() {
    var registeredUsername = document.getElementById("username");
    var registeredPassword = document.getElementById("password");

    //Getting array with registered users from allUsers
    JSON.parse(localStorage.getItem("allUsers"));

//loop array with currentUser registered with username and with equal registered password
    for (i = 0; i < currentUser.length; i++) {

        // Making an if-statement to check the username and password matches what is registered
        if (registeredUsername == currentUser[i].username && registeredPassword == currentUser[i].password) {
            currentLogin.push(userName);

            alert("Login successfully!");
            break;
        } else {
            alert("Wrong credentials");
        }
    }

}*/
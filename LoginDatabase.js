
// Making a function to register user
function registerUser() {
    //Making a variable for the array "userList"
    var userList = [];

    if (localStorage.getItem('userList') == null) {
        userList = [];
    } else {
        userList = JSON.parse(localStorage.getItem('userList'))
    }

    //Making a variable for "userInfo" and getting the "username" and "password" from the html
    var userInfo = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    console.log(userList);
    //Pushing the variable "userInfo" into the array "userList"
    userList.push(userInfo);

    //Saving the array "userList in local storage by making it a string with JSON
    localStorage.setItem('userList', JSON.stringify(userList));

    //* Making a variable for currentUser, and using the local storage to retrieve the array "userList" containing "userInfo"
    var currentUser = JSON.parse(localStorage.getItem("userList"));
    console.log(currentUser);

// Making a login function, checking registered login info
function login() {

    // Making variable of registered username and password
    var registeredUsername = document.getElementById("username");
    var registeredPassword = document.getElementById("password");

    // Loop array with currentUser registered with username and with equal registered password
    for (i = 0; i < currentUser.length; i++) {

        // Making an if-statement to check the username and password matches what is registered
        if (registeredUsername == currentUser[i].username && registeredPassword == currentUser[i].password) {
            // Login succes (and sending to user profile??)
            alert("Login successfully!");
            location.href = 'SLogin.html';
            break;
            // Else login wrong. Alert and send to login page to try login again
        } else {
            alert("Wrong credentials");
            location.href = 'SLogin.html';
            break;
        }
    }
}

}


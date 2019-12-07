
// Setting a variable and getting the HTML "RegisterButton"
var registerButton = document.getElementById("RegisterButton");

// Making a variable for 'userList' and asigning it an empty array
var userList = [];

/*Making an if-statement to check the userList data stored in localstorage and if the data is null make it an empty
array, else get data from localstorage */
if (localStorage.getItem('userList') == null) {
    userList = [];
} else {
    userList = JSON.parse(localStorage.getItem('userList'))
}

// Making a function for the pressing of button "Register"
registerButton.onclick = function (e) {
    e.preventDefault();
    registerUser();

    // Alerting new user created, and redirecting the register-page to the login-Page
    alert("Ny bruger oprettet! Sender dig til Login");
    location.href = 'SLogin.html';

};

// Making a function for registering user
function registerUser() {

    //Making a variable for username and password and getting the value of the ID in html
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Making a variable for user and making a new userInfo constructed by the variables username and password from above
    var user = new userInfo(username, password);


//Pushing the data in the variable "user" into the array "userList"
    userList.push(user);
    // Consoling the data stored in the array userList
    console.log(userList);


    //Saving the array "userList" in local storage by making it a string with JSON
    localStorage.setItem('userList', JSON.stringify(userList));
}


// Making a function to show/hide password when registering
function hidePasswordRegister() {
    var a = document.getElementById("password");
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}
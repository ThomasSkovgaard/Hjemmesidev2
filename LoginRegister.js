
// Setting a variable and getting the HTML "RegisterButton"
var registerButton = document.getElementById("RegisterButton");

// Making a var 'userList' and asigning it an empty array
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

// Making a function to show/hide password when logging in
function hidePassword() {
    var a = document.getElementById("registeredPassword");
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}
function registerUser() {
    //Making a variable for the array "userList", and making it an empty array


    /*Making an if-statement to check the userList data stored in localstorage and if the data is null make it an empty
    array, else get data from localstorage */



    //Making a variable for "userInfo" and getting the "username" and "password" from the html
    /*var userInfo = {
         username: document.getElementById("username").value,
         password: document.getElementById("password").value,

     };      */

    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    var user = new userInfo(username, password)

    /* VI MANGLER AT LAVE USER SOM EN KLASSE ISTEDET FOR VAR - Get element by ID i en constructor???
    class userInfo {

        constructor(username, password) {
            this.username = username;
            this.password = password;

        }
         get = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,

        }
    }
*/
//Pushing the data in the variable "userInfo" into the array "userList"
    userList.push(user);
    // Consoling the data stored in the array userList
    console.log(userList);



    //Saving the array "userList" in local storage by making it a string with JSON
    localStorage.setItem('userList', JSON.stringify(userList));

    //* Making a variable for currentUser, and using the local storage to retrieve the array "userList" containing "userInfo"
    var currentUser = JSON.parse(localStorage.getItem("userList"));
    console.log(currentUser);
}
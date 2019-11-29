
var currentUser = JSON.parse(localStorage.getItem('userList'));
console.log(currentUser);
// Making a function to register user
/*var userList = [];
if (localStorage.getItem('userList') == null) {
    userList = [];
} else {
    userList = JSON.parse(localStorage.getItem('userList'))
}*/

/*class userInfo{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}*/

/*function registerUser() {
    //Making a variable for the array "userList", and making it an empty array


    /*Making an if-statement to check the userList data stored in localstorage and if the data is null make it an empty
    array, else get data from localstorage */



   //Making a variable for "userInfo" and getting the "username" and "password" from the html
   /*var userInfo = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,

    };      */

   /* var username= document.getElementById("registeredUsername").value;
    var password= document.getElementById("registeredPassword").value;
    //var user = new userInfo(username, password)*/

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
 /*   userList.push(user);
    // Consoling the data stored in the array userList
    console.log(userList);



    //Saving the array "userList" in local storage by making it a string with JSON
    localStorage.setItem('userList', JSON.stringify(userList));

    //* Making a variable for currentUser, and using the local storage to retrieve the array "userList" containing "userInfo"
    var currentUser = JSON.parse(localStorage.getItem("userList"));
    console.log(currentUser);
}*/

// Making a login function, checking registered login info
var login = document.getElementById("loginButton");
login.onclick = function(e){
    e.preventDefault();


        // Making variable of registered username and password
    var registeredUsername = document.getElementById("registeredUsername").value;
    var registeredPassword = document.getElementById("registeredPassword").value;


    // Loop array with currentUser registered with username and with equal registered password
    for (let i = 0; i < currentUser.length; i++) {

        // Making an if-statement to check the username and password matches what is registered
        if (registeredUsername == currentUser[i].username && registeredPassword == currentUser[i].password) {

            // Login succes (and sending to user profile??)
            location.href = 'S5.html';
            alert("Du er logget ind!");
            return true

            // Else login wrong. Alert and send to login page to try login again
        }
    }
    alert("Forkert brugernavn eller adgangskode. Prøv igen!");
    location.href = 'SLogin.html';


}

// Making a function to show/hide password when logging in
function hidePasswordRegister() {
    var a = document.getElementById("password");
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}



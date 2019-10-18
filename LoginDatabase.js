
// Making a function to register user and a variable for the array "userList"
function registerUser() {
    var userList = [];
    //Making a variable for "userInfo" and getting the "username" and "password" from the html
    var userInfo = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    //Saving the array "userList in local storage by making it a string with JSON
    localStorage.setItem('userList',JSON.stringify(userInfo));

// Making a variable "test" that the system saves the array "userList" in locals storage by consoling the array
    var test = localStorage.getItem('userList');
    console.log(test);


    userList.push(userInfo);

    var userListString = JSON.stringify(userList);

    localStorage.setItem("User", userListString)}

var userInfo = JSON.parse(localStorage.getItem("userList")) || [];
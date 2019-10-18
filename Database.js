var userInfo = JSON.parse(localStorage.getItem("userList")) || [];

// Making a function to register user and a variable for userList
function registerUser() {
    var userList = [];

    /* Making an if-statement to retrieve the register-form from local storage array
    if (localStorage.getItem("User") == null) {
        userList = []

    } else {
        userList = JSON.parse(localStorage.getItem("User"))
    }
    */
    var userInfo = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    localStorage.setItem('userList',JSON.stringify(userInfo));
    let test = localStorage.getItem('userList');
    console.log(test);


    userList.push(userInfo);

    var userListString = JSON.stringify(userList);

    localStorage.setItem("User", userListString)}
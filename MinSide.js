// Making a function to check if users are registered in the array "userList" in LocalStorage, before accessing "Min side"

window.onload = function checkIfLoggedIn() {
    if (localStorage.getItem('userList') == null) {
        window.location = 'SLogin.html';
        alert ("Log ind først!");
    }
    if(localStorage.getItem('userList') !== null) {
        return;
        window.location = 'S5.html';
    }
}

// OBS HVORFOR LOADER DEN FØRST HURTIGT MIN SIDE INDEN REDIRECT???


// Setting a variable and getting the HTML "clearUser"
var clearUser = document.getElementById("clearUser");

// Making a function for the pressing of button Clear User
clearUser.onclick = function (e) {
    e.preventDefault();
    clearUser();

// Function to delete user from localStorage system
    function clearUser() {
        localStorage.clear();
        alert('Bruger er blevet slettet fra systemet!');
    }

}
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
};


// Function to delete user from localStorage system
    function clearUserStored() {
        localStorage.clear();
        alert('Bruger er blevet slettet fra systemet!');
    }
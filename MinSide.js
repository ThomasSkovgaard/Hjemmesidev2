// Making a function to check if user is logged in before accessing "Min side"

window.onload = function checkIfLoggedIn() {
    if (localStorage.getItem('userList') == null) {
        window.location = 'SLogin.html';
    }
};

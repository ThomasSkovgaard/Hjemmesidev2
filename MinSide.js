// Making a function to check if users are registered in the array "userList" in LocalStorage, before accessing "Min side"

window.onload = function checkIfLoggedIn() {
    if (localStorage.getItem('userList') == null) {
        window.location = 'SLogin.html'
    } else {
        window.location = 'S5.html'
    }
    return;
}

// OBS HVORFOR LOADER DEN FØRST HURTIGT MIN SIDE
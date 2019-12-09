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


// Making a function to animate progress bar of padel tennis court
function move() {
        var baneBar = document.getElementById('baneBar');
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                baneBar.style.width = width + '%';
                baneBar.innerHTML= width * 1 + '%';
            }
        }
    }

// Function to delete user from localStorage system
    function clearUserStored() {
        localStorage.clear();
        alert('Bruger er blevet slettet fra systemet!');
    }
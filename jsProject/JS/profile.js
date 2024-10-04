let usernameSpan = document.getElementById('username');
let emailSpan = document.getElementById('email');
let phoneSpan = document.getElementById('phone');
let logoutButton = document.getElementById('logout');

// Get users data from localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Get the logged-in user from localStorage (if any)
let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Populate profile info if user is logged in
if (loggedInUser) {
    usernameSpan.textContent = loggedInUser.username;
    emailSpan.textContent = loggedInUser.email;
    phoneSpan.textContent = loggedInUser.phone;
} else {
    // Redirect to login if no user is logged in
    window.location.href = './login.html';
}


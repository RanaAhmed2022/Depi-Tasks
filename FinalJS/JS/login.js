let form = document.querySelector('form');
let lsData = JSON.parse(localStorage.getItem('users')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');

    let user = lsData.find(user => user.email === email && user.password === password);

    if (user) {
        window.location.href = './../products.html'; 
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});

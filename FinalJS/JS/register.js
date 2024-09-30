
let form = document.querySelector('form')
let lsData = JSON.parse(localStorage.getItem('users')) || []

let users = [...lsData]

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let formData = new FormData(e.target)
    let dataObject = Object.fromEntries(formData) 
    users.push(dataObject)

    localStorage.setItem('users', JSON.stringify(users))
    window.location.href = './../products.html';
})
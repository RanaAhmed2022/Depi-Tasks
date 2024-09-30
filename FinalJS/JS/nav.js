let body = document.querySelector('body')
let changeModeBtn = document.querySelector('.changeMode')

//3l4an lma 2ft7 2l2y 25r mode kan 2t3mlha save:
let localsMode = localStorage.getItem('mode')
body.setAttribute('mode', localsMode) || 'light'


changeModeBtn.addEventListener('click', ()=>{
    
    let getMode = body.getAttribute('mode')

    if(getMode === 'light'){
        body.setAttribute('mode', 'dark')
        localStorage.setItem('mode', 'dark')
    }else{
        body.setAttribute('mode', 'light')
        localStorage.setItem('mode','light')
    }
})
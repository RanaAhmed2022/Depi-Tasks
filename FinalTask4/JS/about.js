var remove = document.querySelector('.remove');
var sora1 = document.querySelector('.no-1');
var sora2 = document.querySelector('.no-2');
var sora3 = document.querySelector('.no-3');
var about = document.querySelector('.about-us');
var comp = document.querySelector('.aboutComp');
var cont = document.querySelector('.howCont');
sora1.addEventListener('click',function(){
    about.classList.remove('remove');
    comp.classList.add('remove');
    cont.classList.add('remove')
})
sora2.addEventListener('click',function(){
    about.classList.add('remove');
    comp.classList.remove('remove');
    cont.classList.add('remove')
})
sora3.addEventListener('click',function(){
    about.classList.add('remove');
    comp.classList.add('remove');
    cont.classList.remove('remove')
})
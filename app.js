const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav_links');
ham.addEventListener('click',()=>{
    ham.classList.toggle('transform');
    nav.classList.toggle('show');
});
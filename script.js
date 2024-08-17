// Toggle Active

const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hamburger-menu di click
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};

// menghilangkan side bar dengan menekan di luar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})

// scroll

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
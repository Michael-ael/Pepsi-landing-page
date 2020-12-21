const imgslider = document.querySelector('.pepsi');
const sec = document.querySelector('.sec');

function imgSlider(anything){
    imgslider.src = anything;
}

function changeBgColor(color){
    sec.style.background = color;
}

//hamburger
const menu = document.querySelector('.toggleMenu');
const navMenu = document.querySelector('.nav');

menu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    navMenu.classList.toggle('active')
});

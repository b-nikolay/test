var modalSign = document.getElementById("signUp");
var modalLogin = document.getElementById("logIn");
let body = document.querySelector('body')
let mainBlur = document.querySelector('.main')

var btnSign = document.getElementById("signup");
var btnLogin = document.getElementById("login");

var span = document.getElementsByClassName("close")[0];

btnSign.onclick = function() {
  modalSign.style.display = "block";
  body.classList.add('active-modal');
  mainBlur.classList.add('blur')
}
btnLogin.onclick = function() {
  modalLogin.style.display = "block";
  body.classList.add('active-modal');
  
  mainBlur.classList.add('blur')
}

span.onclick = function() {
  modalSign.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalSign || event.target ==  modalLogin) {
    modalSign.style.display = "none";
    modalLogin.style.display = "none";
    mainBlur.classList.remove('blur')
  body.classList.remove('active-modal')
  }
} 


const swiperMusic = new Swiper('.swiper-music', {
  speed: 400,
  spaceBetween: 100,  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


let menuBtn = document.querySelector('.header__menu');
let menu = document.querySelector('.menu-mobile');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  body.classList.toggle('active-modal');
})
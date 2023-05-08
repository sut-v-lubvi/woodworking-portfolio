let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let headerShadow = document.getElementById('header');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	headerShadow.classList.toggle('header__shadow')
})
'use strict';

let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.burger-menu');
let body = document.querySelector('.body');

menuBtn.addEventListener('click', (e) => {
	e.preventDefault();

	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active');
})
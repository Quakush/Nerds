'use strict';

var formClose = document.querySelector('.form-feedback__close');
var writeBtn = document.querySelector('.contacts__link');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');

writeBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.classList.add('modal__show');
  modal.classList.add('modal__show');
});

formClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal__show');
  overlay.classList.remove('modal__show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal__show')) {
      modal.classList.remove('modal__show');
      overlay.classList.remove('modal__show');
    }
  }
});


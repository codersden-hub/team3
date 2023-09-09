'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const buttonFour = document.querySelector('.btn-four')


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};


const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  window.location.href = "../index.html"
};

openModal()
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
  // console.log(e.key);


  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


buttonFour.addEventListener('click', function(){
    window.location.href = "./history.html";
  })
  
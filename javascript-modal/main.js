var $openModalBtn = document.querySelector('.open-modal-btn');
var $modal = document.querySelector('.modal');
var $no = document.querySelector('.no-btn');

function modalOn(event) {
  $modal.className = 'modal';
}

function modalOff(event) {
  $modal.className = 'modal display-none';
}

$openModalBtn.addEventListener('click', modalOn);

$no.addEventListener('click', modalOff);

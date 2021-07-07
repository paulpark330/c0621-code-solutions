var $openModalBtn = document.querySelector('.open-modal-btn');
var $modal = document.querySelector('.modal');
var $no = document.querySelector('.no-btn');

function modalOn(event) {
  $modal.style.display = 'block';
}

function modalOff(event) {
  $modal.style.display = 'none';
}

$openModalBtn.addEventListener('click', modalOn);

$no.addEventListener('click', modalOff);

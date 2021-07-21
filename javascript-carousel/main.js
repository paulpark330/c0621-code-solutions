var $image = document.querySelectorAll('img');
var $angleLeft = document.querySelector('.fa-angle-left');
var $angleRight = document.querySelector('.fa-angle-right');
var $progressDot = document.querySelector('.progress-dot');
var $dot = document.querySelectorAll('.far');
var intervalId = setInterval(nextImage, 3 * 1000);

var counter = 0;

function angleClick(event) {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 3 * 1000);
  if (event.target && event.target.matches('.fa-angle-left')) {
    counter--;
  }
  if (event.target && event.target.matches('.fa-angle-right')) {
    counter++;
  }
  if (counter === $image.length) {
    counter = 0;
  }
  if (counter === -1) {
    counter = $image.length - 1;
  }
  sync();
}

function progressDotClick(event) {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 3 * 1000);
  if (event.target && event.target.matches('.far')) {
    counter = parseInt(event.target.getAttribute('data-view'));
    sync();
  }
}

function sync() {
  for (let i = 0; i < $image.length; i++) {
    if (i === counter) {
      $image[i].className = '';
      $dot[i].className = 'far fa-circle selected';
    } else {
      $image[i].className = 'hidden';
      $dot[i].className = 'far fa-circle';
    }
  }
}

function nextImage() {
  counter++;
  if (counter === $image.length) {
    counter = 0;
  }
  sync();
}

$angleLeft.addEventListener('click', angleClick);
$angleRight.addEventListener('click', angleClick);
$progressDot.addEventListener('click', progressDotClick);

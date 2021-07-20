var $h1 = document.querySelector('h1');

function countdown() {
  $h1.textContent--;
  if ($h1.textContent === '0') {
    clearInterval(countdownInterval);
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}

var countdownInterval = setInterval(countdown, 1 * 1000);

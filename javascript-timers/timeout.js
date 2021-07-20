var $h1 = document.querySelector('h1');

function update() {
  $h1.textContent = 'Hello There';
}

setTimeout(update, 2 * 1000);

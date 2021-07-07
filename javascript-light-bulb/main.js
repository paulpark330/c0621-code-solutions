var $lightBulb = document.querySelector('.lightbulb');
var $container = document.querySelector('.container');
var clickCount = 0;

function click(event) {
  clickCount++;
  if (clickCount % 2 === 0) {
    $lightBulb.className = 'lightbulb on';
    $container.className = 'container on';
  } else {
    $lightBulb.className = 'lightbulb off';
    $container.className = 'container off';
  }
}

$container.addEventListener('click', click);

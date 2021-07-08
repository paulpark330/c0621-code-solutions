var $char = document.querySelectorAll('span');
var $accuracy = document.querySelector('.accuracy-percentage');
var wordPlace = 0;
var wrong = 0;
var accuracy = 0;

function logKey(event) {

  if (event.key === $char[wordPlace].textContent && wordPlace < $char.length) {
    $char[wordPlace].style.color = 'chartreuse';
    $char[wordPlace].className = '';
    $char[wordPlace + 1].className = 'underline-black';
    wordPlace++;
    accuracy = Math.floor((($char.length - wrong) / $char.length) * 100);
  } else {
    wrong++;
    $char[wordPlace].style.color = 'red';
    $char[wordPlace].className = 'underline-red';
    accuracy = Math.floor((($char.length - wrong) / $char.length) * 100);

  }
  if (wordPlace === $char.length - 1) {
    $accuracy.parentElement.className = 'accuracy-display-block';
    $accuracy.textContent += accuracy + '%';
  }

}

document.addEventListener('keydown', logKey);

//  black underline the current key
//  I want to go through every character
//  when I press the right key
//    character changes to green
//    underline moves to next character
//  when I press the wrong key
//    character changes to red
//    underlien changes to red
